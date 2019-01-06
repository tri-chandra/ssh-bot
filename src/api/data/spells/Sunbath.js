import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Sunbath extends Spell {
  constructor(level) {
    super({
      name: 'Sunbath',
      code: 'sunbath',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Light,
      resistance: 21,
      overTime: 'Replaces 3 non-light spells with random light spells with level %lvl% on your playfield.',
      unlockAt: [
        { hero: C.Thoben, level: C.Arena5}
      ]
    });
  }
}

export default Sunbath;