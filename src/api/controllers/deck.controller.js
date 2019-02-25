import Jimp from 'jimp';
import { renderDeck } from '../models/deck/ImageProcessor';
import { get, set } from '../services/redisProvider';
import { prefix } from '../../config/vars';

import Zenron from '../models/Zenron';
import Jane from '../models/Jane';
import Thoben from '../models/Thoben';
import Tierra from '../models/Tierra';
import Myris from '../models/Myris';
import RaJu from '../models/RaJu';
import VanRaven from '../models/VanRaven';
import Ray from '../models/Ray';
import Lua from '../models/Lua';
import Asgard from '../models/Asgard';

function getHero(command) {
  if (['zenron'].includes(command)) {
    return new Zenron();
  } else if (['jane'].includes(command)) {
    return new Jane();
  } else if (['thoben'].includes(command)) {
    return new Thoben();
  } else if (['tierra'].includes(command)) {
    return new Tierra();
  } else if (['raju', 'ra', 'ra\'ju'].includes(command)) {
    return new RaJu();
  } else if (['vanraven', 'van', 'raven'].includes(command)) {
    return new VanRaven();
  } else if (['asgard'].includes(command)) {
    return new Asgard();
  } else if (['myris'].includes(command)) {
    return new Myris();
  } else if (['ray'].includes(command)) {
    return new Ray();
  } else if (['lua'].includes(command)) {
    return new Lua();
  } else return null;
}

async function getWinrate(user, hero, hashcode) {
  let winrate = await get(`${user}:${hero}:${hashcode}`);
  let winrateString = 0;
  if (winrate) {
    winrate = JSON.parse(winrate);
    winrateString = Math.round(100.0 * winrate.win / (winrate.win + winrate.lost));
  }

  return winrateString;
}

export default {
  async getDeck(discord, command, deckHash = '') {
    let hero = getHero(command);

    const author = discord.author.id;
    const target = discord.mentions.members.first() ? discord.mentions.members.first().id : undefined;

    // with mention
    if (target) {
      let hashcode = await get(`${target}:${hero.code}`);

      if (!hashcode) {
        if (target === author) {
          let basics = hero.spells.basic.map((x, i) => `[${String.fromCharCode(i+97)}] ${x.name}`);
          let advanceds = hero.spells.advanced.map((x, i) => `[${String.fromCharCode(i+97)}] ${x.name}`);
          let elites = hero.spells.elite.map((x, i) => `[${String.fromCharCode(i+97)}] ${x.name}`);
          let ultimates = hero.spells.ultimate.map((x, i) => `[${String.fromCharCode(i+97)}] ${x.name}`);
  
          discord.reply(
`Set your deck with the following code:
${prefix}deck [hero] [BBBAAAEEU]

First 3 digits:
  ${basics.join('\n  ')}

Second 3 digits:
  ${advanceds.join('\n  ')}

Third 2 digits:
  ${elites.join('\n  ')}

Last digit:
  ${ultimates.join('\n  ')}`
          );
  
          return;
        } else {
          hashcode = 'abcabcaba';
        }        
      }

      const authorTag = `${discord.mentions.members.first().user.tag}`;
      const winrateString = await getWinrate(target, hero.code, hashcode);
      const jimpImg = await renderDeck(hero, hashcode, authorTag, winrateString);
      const img = await jimpImg.getBufferAsync(Jimp.MIME_PNG);

      discord.channel.send('', {
        files: [img],
      });
    } else if (hero && deckHash.length === 9) { // set deck with deck code
      const authorTag = `${discord.author.username}#${discord.author.discriminator}`;
      const hashcode = await get(`${author}:${hero.code}`);
      const winrateString = await getWinrate(author, hero.code, hashcode);
      const jimpImg = await renderDeck(hero, deckHash, authorTag, winrateString);
      const img = await jimpImg.getBufferAsync(Jimp.MIME_PNG);
      
      discord.channel.send('', {
        files: [img],
      });

      // redis set to author
      await set(`${author}:${hero.code}`, deckHash);
    } else if (hero) { // invalid deck code
      let coaches = JSON.parse(await get(`coach:${hero.code}`));

      if (coaches) {
        discord.channel.send(`${prefix}deck ${hero.code} ${coaches[0]}`);
        discord.channel.send(`${prefix}deck ${hero.code} ${coaches[1]}`);
      } else {
        const authorTag = `${discord.author.username}#${discord.author.discriminator}`;
        const hashcode = 'abcabcaba';
        const jimpImg = await renderDeck(hero, hashcode, authorTag, '0');
        const img = await jimpImg.getBufferAsync(Jimp.MIME_PNG);
        
        discord.channel.send('', {
          files: [img],
        });
      }
      
      
    } else {
      discord.reply('the hero is unknown. Type `'+prefix+'help deck` for more information.');
    }
  },
};
