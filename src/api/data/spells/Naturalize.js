import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Naturalize extends Spell {
  constructor(level) {
    super({
      name: 'Naturalize',
      code: 'naturalize',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Nature,
      resistance: 19,
      overTime: 'Replaces 4 non-nature mana with 4 nature mana on your playfields.',
      unlockAt: [
        { hero: C.Myris, level: C.Arena6 },
      ]
    });
  }
}

export default Naturalize;
