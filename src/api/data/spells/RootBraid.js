import Spell from '../../models/Spell';
import C from '../../models/Constants';

class RootBraid extends Spell {
  constructor(level) {
    super({
      name: 'Root Braid',
      code: 'rootBraid',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Nature,
      shield: 36,
      onblock: 'Only blocks one attack.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena3}
      ]
    });
  }
}

export default RootBraid;