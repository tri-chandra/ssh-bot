import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Dawn extends Spell {
  constructor(level) {
    super({
      name: 'Dawn',
      code: 'dawn',
      type: C.HealSpell,
      tier: C.Advanced,
      element: C.Light,
      heal: 12,
      onCast: 'You get a light mana on your playfield.',
      unlockAt: [
        { hero: C.Tierra, level: C.Arena1 },
        { hero: C.Ray, level: C.Arena1 },
        { hero: C.Lua, level: C.Arena8 },
      ]
    });
  }
}

export default Dawn;