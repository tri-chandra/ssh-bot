import Discord from 'discord.js';

const routes = {
  
};

function route(discord, tokens) {
  if (!tokens) return;

  const [command, ...rest] = tokens;

  const embededObj = new Discord.RichEmbed({
    fields: [
      { name: 'Spell Information', value: '!spell [spell_name] l [00]'},
      { name: 'Hero Spell Information', value: '!spells [hero_name]'},
      { name: 'Deck Suggestion', value: '**TBD**'},
      { name: 'Pack Opening', value: '**TBD**'},
    ]
  });

  discord.channel.send(embededObj);
}

export default {
  route
}