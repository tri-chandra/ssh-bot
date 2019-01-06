import Spell from '../../models/Spell';
import C from '../../models/Constants';

class ProtectionRitual extends Spell {
  constructor(level) {
    super({
      name: 'Protection Ritual',
      code: 'protectionRitual',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Nature,
      shield: 96,
      onCast: "You lose 50% of your remaining engergy.",
      unlockAt: [
        { hero: C.Lua, level: C.Arena9 }
      ]
    });
  }
}

export default ProtectionRitual;