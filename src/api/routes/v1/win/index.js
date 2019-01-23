import StatController from '../../../controllers/stat.controller';

function route(discord, tokens) {
  if (!tokens) return;

  let [command] = tokens;

  if (command) {
    if (['vanraven', 'van', 'raven'].includes(command)) command = 'vanraven';
    else if (['raju', 'ra', 'ra\'ju'].includes(command)) command = 'raju';
    
    StatController.win(discord, command);
  }
}

export default {
  route
}
