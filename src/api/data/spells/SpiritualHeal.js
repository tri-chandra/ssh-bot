import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class SpiritualHeal extends Spell {
  constructor(level) {
    super({
      name: 'Spiritual Heal',
      code: 'spiritualHeal',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Light,
      heal: 5,
      fixedDamage: 3,
      onCast: 'You get a spirit token with a strength of %dmg% on your playfield.',
      tokens: [Token.Spirit],
      unlockAt: [
        { hero: C.Lua, level: C.Arena9 }
      ]
    });
  }
}

export default SpiritualHeal;