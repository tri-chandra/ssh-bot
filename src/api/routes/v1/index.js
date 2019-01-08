import open from './open';
import spell from './spell';
import spells from './spells';
import deck from './deck';
import help from './help';
import win from './win';
import lose from './lose';

const routes = {
  open: open.route,
  spell: spell.route,
  spells: spells.route,
  deck: deck.route,
  help: help.route,
  win: win.route,
  lose: lose.route,
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