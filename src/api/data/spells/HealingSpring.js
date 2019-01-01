import Spell from '../../models/Spell';
import C from '../../models/Constants';

class HealingSpring extends Spell {
  constructor(level) {
    super({
      name: 'Healing Spring',
      code: 'healingSpring',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Nature,
      heal: 8,
      resistance: 8,
      count: 10,
      overTime: 'Restores some of your energy.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena5 }
      ]
    });
  }
}

export default HealingSpring;
