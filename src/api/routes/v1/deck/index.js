import DeckController from '../../../controllers/deck.controller';

async function route(discord, tokens) {
  if (!tokens) return;

  const [command, hashcode, ...rest] = tokens;

  DeckController.getDeck(discord, command, hashcode)
}

export default {
  route
}
