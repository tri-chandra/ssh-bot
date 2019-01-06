import { renderDeck } from '../../api/models/deck/ImageProcessor';

export default {
  async getDeck(hero, deckHash) {
    return renderDeck(hero, deckHash);
  },
};
