import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Enlightment extends Spell {
  constructor(level) {
    super({
      name: 'Enlightment',
      code: 'enlightment',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Light,
      heal: 6,
      onCast: "You get a light mana on your playfield.",
      unlockAt: [        
        { hero: C.Thoben, level: C.Arena7 },
        { hero: C.Tierra, level: C.Arena5 },
        { hero: C.Ray, level: C.Arena6 },
        { hero: C.Lua, level: C.Arena8 },
      ]
    });
  }
}

export default Enlightment;
