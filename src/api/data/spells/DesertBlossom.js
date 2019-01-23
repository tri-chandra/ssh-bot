import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class DesertBlossom extends Spell {
  constructor(level) {
    super({
      name: 'Desert Blossom',
      code: 'desertBlossom',
      type: C.Damagespell,
      tier: C.Ultimate,
      element: C.Earth,
      damage: 1,
      fixedDamage: 185,
      speed: C.Slow,
      onCast: 'You get a weakness token on your playfield. Total damage power is increased by %dmg% for each token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena7 },
      ]
    });
  }
}

export default DesertBlossom;