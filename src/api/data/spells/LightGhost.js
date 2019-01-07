import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class LightGhost extends Spell {
  constructor(level) {
    super({
      name: 'Light Ghost',
      code: 'lightGhost',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Light,
      breakPower: 30,
      fixedDamage: 100,
      speed: C.Normal,
      onHit: 'Deals %dmg% damage for each ghost token on the opponent\'s playfield and your opponent gets a ghost token.',
      tokens: [Token.Ghost],
      unlockAt: [
        { hero: C.Lua, level: C.Arena7 }
      ]
    });
  }
}

export default LightGhost;