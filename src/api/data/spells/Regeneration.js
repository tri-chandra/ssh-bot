import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Regeneration extends Spell {
  constructor(level) {
    super({
      name: 'Regeneration',
      code: 'regeneration',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Nature,
      resistance: 16,
      overTime: "Destroys 5 negative tokens on your playfield.",
      unlockAt: [
        { hero: C.Jane, level: C.Arena3}
      ]
    });
  }
}

export default Regeneration;