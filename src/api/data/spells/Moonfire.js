import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Moonfire extends Spell {
  constructor(level) {
    super({
      name: 'Moonfire',
      code: 'moonfire',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Light,
      damage: 5,
      speed: C.Fast,
      count: 2,
      onHit: 'You get a light mana on your playfield.',
      unlockAt: [
        { hero: C.Thoben, level: C.Arena1 },
        { hero: C.Tierra, level: C.Arena1 },
        { hero: C.Ray, level: C.Arena1 },
        { hero: C.Lua, level: C.Arena9 },
      ]
    });
  }
}

export default Moonfire;
