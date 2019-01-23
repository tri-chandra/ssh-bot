import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Spray extends Spell {
  constructor(level) {
    super({
      name: 'Spray',
      code: 'spray',
      type: C.Damagespell,
      tier: C.Advanced,
      element: C.Water,
      damage: 18,
      speed: C.Normal,
      onCast: 'Fires an additional attack for each water token on your playfield.',
      onHit: 'Your opponent gets a water token.',
      tokens: [Token.Water],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena6 },
      ]
    });
  }
}

export default Spray;