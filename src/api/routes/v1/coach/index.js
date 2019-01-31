import CoachController from '../../../controllers/coach.controller';

async function route(discord, tokens) {
  if (!tokens) return;

  const [command, coach1, coach2] = tokens;

  CoachController.setCoach(discord, command, coach1, coach2);
}

export default {
  route
}
