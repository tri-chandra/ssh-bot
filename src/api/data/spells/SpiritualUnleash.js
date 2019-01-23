import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SpiritualUnleash extends Spell {
  constructor(level) {
    super({
      name: 'Spiritual Unleash',
      code: 'spiritualUnleash',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Light,
      damage: 1,
      speed: C.Fast,
      onHit: 'Fires an additional attack for each token on your playfield and removes the token. Each successive attack doubles the damage.',
      unlockAt: [
        { hero: C.Lua, level: C.Arena9 }
      ]
    });
  }
}

export default SpiritualUnleash;