import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class SeaShot extends Spell {
  constructor(level) {
    super({
      name: 'Sea Shot',
      code: 'seaShot',
      type: C.Damagespell,
      tier: C.Advanced,
      element: C.Water,
      damage: 28,
      speed: C.Normal,
      onHit: 'Your opponent gets a water token.',
      tokens: [Token.Water],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena1 },
      ]
    });
  }
}

export default SeaShot;