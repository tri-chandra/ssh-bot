import Discord from 'discord.js';

const routes = {
  
};

function route(discord, tokens) {
  if (!tokens) return;

  const [command, ...rest] = tokens;

  const embededObj = new Discord.RichEmbed({
    fields: [
      { name: 'Spell information', value: '!spell [spell_name] l [00]'},
      { name: 'Hero spell information', value: '!spells [hero_name]'},
      { name: 'Deck suggestion', value: '!deck [hero_name] [@mention]'},
      { name: 'Win/lose record', value: '**TBD*** ~~ !win [hero_name] [@mention] OR !lose [hero_name] [@mention]'},
      { name: 'Pack opening', value: '**TBD**'},
    ]
  });

  discord.channel.send(embededObj);
}

export default {
  route
}