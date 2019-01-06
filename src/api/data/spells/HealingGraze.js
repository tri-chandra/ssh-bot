import Spell from '../../models/Spell';
import C from '../../models/Constants';

class HealingGraze extends Spell {
  constructor(level) {
    super({
      name: 'Healing Graze',
      code: 'healingGraze',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Nature,
      heal: 7,
      onCast: "Heal power is x10 if your energy is below 100.",
      unlockAt: [
        { hero: C.Lua, level: C.Arena8 }
      ]
    });
  }
}

export default HealingGraze;