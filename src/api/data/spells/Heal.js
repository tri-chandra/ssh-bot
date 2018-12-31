import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Heal extends Spell {
  constructor(level) {
    super({
      name: 'Heal',
      code: 'heal',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Nature,
      heal: 10,
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

export default Heal;