import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Splash extends Spell {
  constructor(level) {
    super({
      name: 'Splash',
      code: 'splash',
      type: C.Damagespell,
      tier: C.Basic,
      element: C.Water,
      damage: 18,
      speed: C.Normal,
      onHit: 'Your opponent gets a water token.',
      tokens: [Token.Water],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena1 },
      ]
    });
  }
}

export default Splash;