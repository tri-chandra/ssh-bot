import Spell from '../../models/Spell';
import C from '../../models/Constants';

class DoubleMagmabomb extends Spell {
  constructor(level) {
    super({
      name: 'Double Magmabomb',
      code: 'doubleMagmabomb',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Fire,
      damage: 49,
      speed: C.Slow,
      count: 2,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1 },
        { hero: C.Tierra, level: C.Arena1 },
      ]
    });
  }
}

export default DoubleMagmabomb;
