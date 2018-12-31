import HeroController from '../../../controllers/hero.controller';

function route(discord, tokens) {
  if (!tokens) return;

  let command = tokens.join('');
  if (command === 'vanraven') command = 'vanRaven'
  
  if (command) {
    HeroController.getSpellList(discord, command);
  }
}

export default {
  route
}