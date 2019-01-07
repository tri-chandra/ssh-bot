import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class SpiritualTouch extends Spell {
  constructor(level) {
    super({
      name: 'Spiritual Touch',
      code: 'spiritualtouch',
      type: C.Damagespell,
      tier: C.Basic,
      element: C.Light,
      breakPower: 15,
      fixedDamage: 3,
      speed: C.Normal,
      onHit: 'Removes a mana from the opponent\'s playfield and you get a spirit token with a strength of %dmg% on your playfield.',
      tokens: [Token.Spirit],
      unlockAt: [
        { hero: C.Lua, level: C.Arena9 }
      ]
    });
  }
}

export default SpiritualTouch;