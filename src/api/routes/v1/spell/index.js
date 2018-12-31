import SpellController from '../../../controllers/spell.controller';

async function route(discord, tokens) {
  if (!tokens) return;

  let command = tokens.join('').split('\'s').join('');
  let level = 1;
  if (new RegExp(/l[0-1][0-9]$/).test(command)) {
    level = command.substring(command.length - 2);
    command = command.substring(0, command.length - 3);
  }

  if (command) {
    SpellController.getSpellStats(discord, command, Number(level));
  }
}

export default {
  route
}