import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SoulLink extends Spell {
  constructor(level) {
    super({
      name: 'Soul Link',
      code: 'soulLink',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Light,
      resistance: 25,
      overTime: 'All damage you take while the Soul Link spell is active is dealt twice to your opponent.',
      unlockAt: [
        { hero: C.Thoben, level: C.Arena3}
      ]
    });
  }
}

export default SoulLink;