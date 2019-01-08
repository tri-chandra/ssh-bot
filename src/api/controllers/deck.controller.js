import Jimp from 'jimp';
import { renderDeck } from '../models/deck/ImageProcessor';
import { get, set } from '../services/redisProvider';

import Zenron from '../models/Zenron';
import Jane from '../models/Jane';
import Thoben from '../models/Thoben';
import Tierra from '../models/Tierra';
import Myris from '../models/Myris';
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
    const authorTag = `${discord.author.username}#${discord.author.discriminator}`;
    const target = discord.mentions.members.first() ? discord.mentions.members.first().id : undefined;

    if (target) {
      const hashcode = await get(`${target}:${hero.code}`);

      if (!hashcode) {
        discord.reply('You have not set a deck for the hero. Type `!deck [hero] [deck_code]` to set a deck.');
        return;
      }

      const winrateString = await getWinrate(target, hero.code, hashcode);
      const jimpImg = await renderDeck(hero, hashcode, authorTag, winrateString);
      const img = await jimpImg.getBufferAsync(Jimp.MIME_PNG);

      discord.channel.send('', {
        files: [img],
      });
    } else if (hero && deckHash.length === 9) {
      // redis set to author
      await set(`${author}:${hero.code}`, deckHash);

      const hashcode = await get(`${author}:${hero.code}`);
      const winrateString = await getWinrate(author, hero.code, hashcode);
      const jimpImg = await renderDeck(hero, deckHash, authorTag, winrateString);
      const img = await jimpImg.getBufferAsync(Jimp.MIME_PNG);
      
      discord.channel.send('', {
        files: [img],
      });
    } else {
      discord.reply('the hero is unknown. Type `!help deck` for more information.');
    }
  },
};
