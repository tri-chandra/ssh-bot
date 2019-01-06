import Spell from '../../models/Spell';
import C from '../../models/Constants';

class FireBeam extends Spell {
  constructor(level) {
    super({
      name: 'Fire Beam',
      code: 'fireBeam',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Fire,
      resistance: 9,
      damage: 9,
      count: 5,
      unlockAt: [
        { hero: C.Jane, level: C.Arena1}
      ]
    });
  }
}

export default FireBeam;