import Spell from '../../models/Spell';
import C from '../../models/Constants';

class LightUp extends Spell {
  constructor(level) {
    super({
      name: 'Light Up',
      code: 'lightUp',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Light,
      resistance: 9,
      onBreak: "Depletes your spell charge bar.",
      onTimeout: "Fills your spell charge bar and unlocks the next spell category.",
      unlockAt: [
        { hero: C.Thoben, level: C.Arena5}
      ]
    });
  }
}

export default LightUp;