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

export default {
  async getDeck(discord, command, deckHash) {
    let hero;
    if (['zenron'].includes(command)) {
      hero = new Zenron();
    } else if (['jane'].includes(command)) {
      hero = new Jane();
    } else if (['thoben'].includes(command)) {
      hero = new Thoben();
    } else if (['tierra'].includes(command)) {
      hero = new Tierra();
    } else if (['vanraven', 'van', 'raven'].includes(command)) {
      hero = new VanRaven();
    } else if (['asgard'].includes(command)) {
      hero = new Asgard();
    } else if (['myris'].includes(command)) {
      hero = new Myris();
    } else if (['ray'].includes(command)) {
      hero = new Ray();
    } else if (['lua'].includes(command)) {
      hero = new Lua();
    }

    const author = discord.author.id;
    const target = discord.mentions.members.first() ? discord.mentions.members.first().id : undefined;
    if (target) {
      // redis get
      const hashcode = await get(`${target}:${hero.code}`);
      const img = await (await renderDeck(hero, hashcode)).getBufferAsync(Jimp.MIME_PNG);
      discord.channel.send('', {
        files: [img],
      });
    } else if (hero && deckHash.length === 9) {
      // redis set to author
      set(`${author}:${hero.code}`, deckHash);

      const img = await (await renderDeck(hero, deckHash)).getBufferAsync(Jimp.MIME_PNG);
      discord.channel.send('', {
        files: [img],
      });
    } else {
      discord.reply('the hero is unknown. Type `!help deck` for more information.');
    }
  },
};
