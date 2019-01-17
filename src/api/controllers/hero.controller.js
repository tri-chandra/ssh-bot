import Discord from 'discord.js';
import Jimp from 'jimp';
import Hero from '../models/Hero';
import C from '../models/Constants';
import { prefix } from '../../config/vars';

export default {
  async getSpellList(discord, hero) {
    const basicSpells = Hero.spellMapper(hero, C.Basic).map(item => item.name).join(', ');
    const advancedSpells = Hero.spellMapper(hero, C.Advanced).map(item => item.name).join(', ');
    const eliteSpells = Hero.spellMapper(hero, C.Elite).map(item => item.name).join(', ');
    const ultimateSpells = Hero.spellMapper(hero, C.Ultimate).map(item => item.name).join(', ');

    if (!basicSpells) {
      discord.reply(`the hero ${hero} is unknown. Type \`${prefix}help spells\` for more information.`);
      return;
    }

    const imgIcon = await Jimp.read(`./src/renderer/output/images/heroes/portrait/${hero}.png`);
    const bufferIcon = await imgIcon.getBufferAsync(Jimp.MIME_PNG);
    const imgThumb = await Jimp.read(`./src/renderer/data/images/heroes/${hero}/${hero}_classic.png`);
    const bufferThumb = await imgThumb.getBufferAsync(Jimp.MIME_PNG);

    const embededObj = new Discord.RichEmbed({
      thumbnail: { url: 'attachment://thumb.jpg' },
      author: { name: hero, icon_url: 'attachment://icon.jpg' },
      fields: [
        { name: 'Basic Spells:', value: basicSpells },
        { name: 'Advanced Spells:', value: advancedSpells },
        { name: 'Elite Spells:', value: eliteSpells },
        { name: 'Ultimate Spells:', value: ultimateSpells },
      ],
    });
    embededObj.attachFiles([
      { attachment: bufferIcon, name: 'icon.jpg' },
      { attachment: bufferThumb, name: 'thumb.jpg' },
    ]);

    discord.channel.send(embededObj);
  }
};
