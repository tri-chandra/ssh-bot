import Spell from '../../models/Spell';
import C from '../../models/Constants';

class InnerFocus extends Spell {
  constructor(level) {
    super({
      name: 'Inner Focus',
      code: 'innerFocus',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Nature,
      resistance: 41,
      onTimeout: "Replaces all light or nature mana with chi tokens.",
      unlockAt: [
        { hero: C.Thoben, level: C.Arena9}
      ]
    });
  }
}

export default InnerFocus;