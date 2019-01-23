import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Drizzle extends Spell {
  constructor(level) {
    super({
      name: 'Drizzle',
      code: 'drizzle',
      type: C.Damagespell,
      tier: C.Basic,
      element: C.Water,
      damage: 3,
      count: 6,
      speed: C.Normal,
      onHit: '25% chance that your opponent gets a water token on the playfield.',
      tokens: [Token.Water],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena5 },
      ]
    });
  }
}

export default Drizzle;