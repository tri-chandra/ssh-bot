import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Shield extends Spell {
  constructor(level) {
    super({
      name: 'Shield',
      code: 'shield',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Nature,
      shield: 24,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1},
        { hero: C.Jane, level: C.Arena1},
        { hero: C.Thoben, level: C.Arena1},
        { hero: C.Myris, level: C.Arena1},
        { hero: C.Asgard, level: C.Arena1},
        { hero: C.Lua, level: C.Arena1},
      ]
    });
  }
}

export default Shield;