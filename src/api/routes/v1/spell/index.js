import SpellController from '../../../controllers/spell.controller';

async function route(discord, tokens) {
  if (!tokens) return;

  let command = tokens.join('').split('\'s').join('').split('\'').join('');
  let level = 1;
  if (new RegExp(/l\d{1,2}$/).test(command)) {
    level = command.match(/l(\d{1,2})$/)[1];
    command = command.substring(0, command.length - 3);
  }

  if (command) {
    SpellController.getSpellStats(discord, command, Number(level));
  }
}

export default {
  route
}
