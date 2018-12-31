import open from './open';
import spell from './spell';
import spells from './spells';
import deck from './deck';
import help from './help';

const routes = {
  open: open.route,
  spell: spell.route,
  spells: spells.route,
  deck: deck.route,
  help: help.route
  //who has [spell]
};

function route(discord, tokens) {
  if (!tokens) return;
  
  const [command, ...rest] = tokens;

  if (routes[command]) {
    routes[command](discord, rest);
  }
  // discord.reply(tokens.join('-'));
  // discord.channel.send(tokens.join('x'));
}

export default {
  route
}