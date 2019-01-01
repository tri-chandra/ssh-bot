import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Enlightment extends Spell {
  constructor(level) {
    super({
      name: 'Enlightment',
      code: 'enlightment',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Light,
      heal: 6,
      unlockAt: [
        { hero: C.Ray, level: C.Arena6 },
      ]
    });
  }
}

export default Enlightment;
