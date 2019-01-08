import StatController from '../../../controllers/stat.controller';

function route(discord, tokens) {
  if (!tokens) return;

  let [command] = tokens;

  if (command) {
    StatController.win(discord, command);
  }
}

export default {
  route
}
