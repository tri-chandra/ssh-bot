import Spell from '../../models/Spell';
import C from '../../models/Constants';

class MassiveShield extends Spell {
  constructor(level) {
    super({
      name: 'Massive Shield',
      code: 'massiveShield',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Nature,
      shield: 54,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1 },
        { hero: C.Jane, level: C.Arena1 },
        { hero: C.Thoben, level: C.Arena1 },
        { hero: C.Myris, level: C.Arena1 },
        { hero: C.Asgard, level: C.Arena1 },
      ]
    });
  }
}

export default MassiveShield;
