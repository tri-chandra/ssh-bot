import assembleDeckSnap from '../../../../renderer/functions/assembleDeckSnap';

import Jimp from 'jimp';
import Zenron from '../../../models/Zenron';
import Ray from '../../../models/Ray';

async function route(discord, tokens) {
  if (!tokens) return;

  const [command, ...rest] = tokens;

  let hero;
  if (['Zenron', 'zenron'].includes(command)) {
    hero = new Zenron();
  } else if (['Ray', 'ray'].includes(command)) {
    hero = new Ray();
  }

  if (hero) {
    const img = await (await assembleDeckSnap(hero, '', rest.join(' '))).getBufferAsync(Jimp.MIME_PNG);
    discord.channel.send('', {
      files: [img],
    });
  } else {
    discord.reply('the hero is unknown. Type `!help deck` for more information.');
  }
}

export default {
  route
}
