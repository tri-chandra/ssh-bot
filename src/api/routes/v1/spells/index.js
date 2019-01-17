import HeroController from '../../../controllers/hero.controller';

function route(discord, tokens) {
  if (!tokens) return;

  let command = tokens.join('');
  if (['vanraven', 'van', 'raven'].includes(command)) command = 'vanraven';
  
  if (command) {
    HeroController.getSpellList(discord, command);
  }
}

export default {
  route
}
