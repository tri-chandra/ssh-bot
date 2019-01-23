import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class WaterBomb extends Spell {
  constructor(level) {
    super({
      name: 'Water Bomb',
      code: 'waterBomb',
      type: C.Damagespell,
      tier: C.Basic,
      element: C.Water,
      damage: 1,
      fixedDamage: 55,
      speed: C.Normal,
      onCast: 'Total damage power increases by %dmg% for each water token on your playfield.',
      onHit: 'Your opponent gets a water token.',
      tokens: [Token.Water],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena6 },
      ]
    });
  }
}

export default WaterBomb;