import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Magmabomb extends Spell {
  constructor(level) {
    super({
      name: 'Magmabomb',
      code: 'magmabomb',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Fire,
      damage: 52,
      speed: C.Slow,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1 },
        { hero: C.Jane, level: C.Arena1 },
        { hero: C.Tierra, level: C.Arena1 },
      ]
    });
  }
}

export default Magmabomb;
