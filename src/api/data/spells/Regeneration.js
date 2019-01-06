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
      overTime: 'Destroys 5 negative tokens on your playfield.',
      unlockAt: [
        { hero: C.Jane, level: C.Arena3 },
        { hero: C.Thoben, level: C.Arena4 },
        { hero: C.Myris, level: C.Arena7 },
        { hero: C.Asgard, level: C.Arena5 },
        { hero: C.Lua, level: C.Arena8 },
      ]
    });
  }
}

export default Regeneration;
