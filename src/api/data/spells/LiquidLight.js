import Spell from '../../models/Spell';
import C from '../../models/Constants';

class LiquidLight extends Spell {
  constructor(level) {
    super({
      name: 'Liquid Light',
      code: 'liquidLight',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Light,
      resistance: 14,
      overTime: "Removes 5 non-light elements from your playfield and you get an elite or ultimate light spell with level %lvl% from your spell deck.",
      unlockAt: [
        { hero: C.Tierra, level: C.Arena7}
      ]
    });
  }
}

export default LiquidLight;