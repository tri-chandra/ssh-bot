import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class TidalCrush extends Spell {
  constructor(level) {
    super({
      name: 'Tidal Crush',
      code: 'tidalCrush',
      type: C.Damagespell,
      tier: C.Elite,
      element: C.Water,
      damage: 44,
      speed: C.Normal,
      onHit: 'Your opponent gets a water token.',
      tokens: [Token.Water],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena1 },
      ]
    });
  }
}

export default TidalCrush;