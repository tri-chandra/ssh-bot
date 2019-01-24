import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class FrostBolts extends Spell {
  constructor(level) {
    super({
      name: 'Frost Bolts',
      code: 'frostBolts',
      type: C.Damagespell,
      tier: C.Advanced,
      element: C.Water,
      damage: 16,
      count: 2,
      speed: C.Fast,
      onHit: 'Replaces a water token with an ice token on the opponent\'s playfield.',
      tokens: [Token.Water, Token.Ice],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena7 },
      ]
    });
  }
}

export default FrostBolts;