import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Riptide extends Spell {
  constructor(level) {
    super({
      name: 'Riptide',
      code: 'riptide',
      type: C.Damagespell,
      tier: C.Elite,
      element: C.Water,
      damage: 14,
      count: 3,
      speed: C.Normal,
      onHit: 'Your opponent gets a water token.',
      tokens: [Token.Water],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena5 },
      ]
    });
  }
}

export default Riptide;