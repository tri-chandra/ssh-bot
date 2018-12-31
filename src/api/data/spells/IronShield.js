import Spell from '../../models/Spell';
import C from '../../models/Constants';

class IronShield extends Spell {
  constructor(level) {
    super({
      name: 'Iron Shield',
      code: 'ironShield',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Earth,
      shield: 51,
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena1},
      ]
    });
  }
}

export default IronShield;