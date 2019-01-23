import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class DevastationTide extends Spell {
  constructor(level) {
    super({
      name: 'Devastation Tide',
      code: 'devastationTide',
      type: C.Damagespell,
      tier: C.Ultimate,
      element: C.Water,
      damage: 67,
      speed: C.Normal,
      onHit: 'Your opponent gets a water token.',
      tokens: [Token.Water],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena1 },
      ]
    });
  }
}

export default DevastationTide;