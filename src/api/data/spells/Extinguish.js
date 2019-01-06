import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Extinguish extends Spell {
  constructor(level) {
    super({
      name: 'Extinguish',
      code: 'extinguish',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Nature,
      heal: 8,
      onCast: "Destorys a token on your playfield if extinguish is connected to at least 2 elements.",
      unlockAt: [
        { hero: C.Jane, level: C.Arena6 },
        { hero: C.Thoben, level: C.Arena4 },
        { hero: C.Myris, level: C.Arena9 },
        { hero: C.Asgard, level: C.Arena4 },
        { hero: C.Lua, level: C.Arena7 },
      ]
    });
  }
}

export default Extinguish;
