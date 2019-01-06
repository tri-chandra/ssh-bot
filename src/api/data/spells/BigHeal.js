import Spell from '../../models/Spell';
import C from '../../models/Constants';

class BigHeal extends Spell {
  constructor(level) {
    super({
      name: 'Big Heal',
      code: 'bigHeal',
      type: C.HealSpell,
      tier: C.Advanced,
      element: C.Nature,
      heal: 15,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1 },
        { hero: C.Jane, level: C.Arena1 },
        { hero: C.Thoben, level: C.Arena1 },
        { hero: C.Myris, level: C.Arena1 },
        { hero: C.Asgard, level: C.Arena1 },
        { hero: C.Lua, level: C.Arena1 },
      ]
    });
  }
}

export default BigHeal;
