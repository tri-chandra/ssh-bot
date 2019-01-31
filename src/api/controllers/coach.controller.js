import { set } from '../services/redisProvider';
import { owner } from '../../config/vars';

export default {
  async setCoach(discord, command, coach1, coach2) {
    if (owner === discord.author.id)
      await set(`coach:${command}`, JSON.stringify([coach1, coach2]));
  }
}