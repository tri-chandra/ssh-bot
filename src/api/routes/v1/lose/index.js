import StatController from '../../../controllers/stat.controller';

function route(discord, tokens) {
  if (!tokens) return;

  let [command] = tokens;

  if (command) {
    StatController.lose(discord, command);
  }
}

export default {
  route
}
