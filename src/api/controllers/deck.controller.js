import { renderDeck } from '../models/deck/ImageProcessor';
import { get, set } from '../services/redisProvider';

export default {
  async getDeck(hero, deckHash) {
    return renderDeck(hero, deckHash);
  },
};
