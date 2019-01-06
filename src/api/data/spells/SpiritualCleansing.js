import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SpiritualCleansing extends Spell {
  constructor(level) {
    super({
      name: 'Spiritual Cleansing',
      code: 'spiritualCleansing',
      type: C.HealSpell,
      tier: C.Advanced,
      element: C.Light,
      heal: 14,
      resistance: 14,
      overTime: "Converts 3 tokens to engergy.",
      unlockAt: [
        { hero: C.Lua, level: C.Arena9 }
      ]
    });
  }
}

export default SpiritualCleansing;