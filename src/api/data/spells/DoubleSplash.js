import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class DoubleSplash extends Spell {
  constructor(level) {
    super({
      name: 'Double Splash',
      code: 'doubleSplash',
      type: C.Damagespell,
      tier: C.Advanced,
      element: C.Water,
      damage: 17,
      count: 2,
      speed: C.Normal,
      onHit: 'Your opponent gets a water token.',
      tokens: [Token.Water],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena1 },
      ]
    });
  }
}

export default DoubleSplash;