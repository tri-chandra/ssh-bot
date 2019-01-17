import Discord from 'discord.js';
import { prefix } from '../../../../config/vars';

const routes = {
  spell(discord) {
    const embededObj = new Discord.RichEmbed({
      fields: [
        { name: 'Example 1', value: prefix+'spell fireball'},
        { name: 'Example 2', value: prefix+'spell arc fire'},
        { name: 'Example 3', value: prefix+'spell fireball L 03'},
        { name: 'Example 4', value: prefix+'spell fireball L 15'},
      ]
    });

    discord.channel.send(embededObj);
  },
  spells(discord) {
    const embededObj = new Discord.RichEmbed({
      fields: [
        { name: 'Example 1', value: prefix+'spells zenron'},
        { name: 'Example 2', value: prefix+'spells van raven'},
        { name: 'Example 3', value: prefix+'spells raven'},
      ]
    });

    discord.channel.send(embededObj);
  },
  deck(discord) {
    const embededObj = new Discord.RichEmbed({
      fields: [
        { name: 'Example 1', value: prefix+'deck tierra @Tierra_master'},
        { name: 'Example 2', value: prefix+'deck zenron ABCABCABA'},
      ]
    });

    discord.channel.send(embededObj);
  },
  win(discord) {
    const embededObj = new Discord.RichEmbed({
      fields: [
        { name: 'Example 1', value: prefix+'win tierra'},
        { name: 'Example 2', value: prefix+'win raven'},
      ]
    });

    discord.channel.send(embededObj);
  },
  lose(discord) {
    const embededObj = new Discord.RichEmbed({
      fields: [
        { name: 'Example 1', value: prefix+'lose tierra'},
        { name: 'Example 2', value: prefix+'lose raven'},
      ]
    });

    discord.channel.send(embededObj);
  }
};

function route(discord, tokens) {
  if (!tokens) return;

  const [command, ...rest] = tokens;

  if (command) {
    if (routes[command]) routes[command](discord);
  } else {
    const embededObj = new Discord.RichEmbed({
      fields: [
        { name: 'Spell information', value: prefix+'spell [spell_name] L [00]'},
        { name: 'Hero spell information', value: prefix+'spells [hero_name]'},
        { name: 'Deck suggestion', value: prefix+'deck [hero_name] [@mention] OR '+prefix+'deck [hero_name] [deck_code]'},
        { name: 'Win/lose record', value: prefix+'win [hero_name] OR '+prefix+'lose [hero_name]'},
      ]
    });

    discord.channel.send(embededObj);
  }
  
}

export default {
  route
}