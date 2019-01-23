import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class FrozenOrb extends Spell {
  constructor(level) {
    super({
      name: 'Frozen Orb',
      code: 'frozenOrb',
      type: C.Damagespell,
      tier: C.Advanced,
      element: C.Water,
      damage: 16,
      speed: C.Fast,
      onHit: 'Replaces a water token with an ice token on the opponent\'s playfield.',
      tokens: [Token.Water, Token.Ice],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena8 },
      ]
    });
  }
}

export default FrozenOrb;