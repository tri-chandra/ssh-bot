import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Absorbtion extends Spell {
  constructor(level) {
    super({
      name: 'Absorbtion',
      code: 'absorbtion',
      type: C.HealSpell,
      tier: C.Advanced,
      element: C.Nature,
      heal: 19,
      resistance: 19,
      count: 3,
      overTime: "Converts 3 nature elements to energy.",
      unlockAt: [
        { hero: C.Thoben, level: C.Arena3 },
        { hero: C.Myris, level: C.Arena9 },
      ]
    });
  }
}

export default Absorbtion;
