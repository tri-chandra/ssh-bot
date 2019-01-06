import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class GhostWhisper extends Spell {
  constructor(level) {
    super({
      name: 'Ghost Whisper',
      code: 'ghostWhisper',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Light,
      fixedDamage: 45,
      breakPower: 20,
      speed: C.Normal,
      onHit: "Deals %dmg% damage for each ghost token on the opponent's playfield and your opponent gets a ghost token.",
      tokens: [Token.Ghost],
      unlockAt: [
        { hero: C.Lua, level: C.Arena7 }
      ]
    });
  }
}

export default GhostWhisper;