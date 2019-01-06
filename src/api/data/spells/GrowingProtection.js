import Spell from '../../models/Spell';
import C from '../../models/Constants';

class GrowingProtection extends Spell {
  constructor(level) {
    super({
      name: 'Growing Protection',
      code: 'growingProtection',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Nature,
      shield: 9,
      overTime: "Shield power increases by x10 over time.",
      unlockAt: [
        { hero: C.Lua, level: C.Arena8 }
      ]
    });
  }
}

export default GrowingProtection;