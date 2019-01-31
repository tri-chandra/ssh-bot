import { set } from '../services/redisProvider';
import { prefix } from '../../config/vars';

export default {
  async setCoach(command, coach1, coach2) {
    await set(`coach:${command}`, JSON.stringify([coach1, coach2]));
  }
}