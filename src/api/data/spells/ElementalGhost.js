import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class ElementalGhost extends Spell {
  constructor(level) {
    super({
      name: 'Elemental Ghost',
      code: 'elementalGhost',
      type: C.Damagespell,
      tier: C.Elite,
      element: C.Light,
      breakPower: 44,
      fixedDamage: 200,
      speed: C.Normal,
      onHit: 'Deals %dmg% damage for each ghost token on the opponent\'s playfield and your opponent gets a ghost token.',
      tokens: [Token.Ghost],
      unlockAt: [
        { hero: C.Lua, level: C.Arena7 }
      ]
    });
  }
}

export default ElementalGhost;