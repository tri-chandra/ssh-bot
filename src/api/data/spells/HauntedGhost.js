import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class HauntedGhost extends Spell {
  constructor(level) {
    super({
      name: 'Haunted Ghost',
      code: 'hauntedGhost',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Light,
      breakPower: 68,
      fixedDamage: 350,
      speed: C.Normal,
      onHit: "Deals %dmg% damage for each ghost token on the opponent's playfield and your opponent gets a ghost token.",
      tokens: [Token.Spirit],
      unlockAt: [
        { hero: C.Lua, level: C.Arena7 }
      ]
    });
  }
}

export default HauntedGhost;