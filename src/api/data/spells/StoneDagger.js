import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class StoneDagger extends Spell {
  constructor(level) {
    super({
      name: 'Stone Dagger',
      code: 'stoneDagger',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Earth,
      damage: 11,
      speed: C.Fast,
      count: 3,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena1 },
        { hero: C.Ray, level: C.Arena1 },
      ]
    });
  }
}

export default StoneDagger;
