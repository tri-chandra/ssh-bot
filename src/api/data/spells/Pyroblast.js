import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Pyroblast extends Spell {
  constructor(level) {
    super({
      name: 'Pyroblast',
      code: 'pyroblast',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 26,
      speed: C.Fast,
      unlockAt: [
        { hero: C.Jane, level: C.Arena1},
        { hero: C.Tierra, level: C.Arena3}, 
      ]
    });
  }
}

export default Pyroblast;