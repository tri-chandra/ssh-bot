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
      onHit: "Fires a damage projectile for each token on your playfield. Each successive attack doubles the damange.",
      unlockAt: [
        { hero: C.Lua, level: C.Arena9 }
      ]
    });
  }
}

export default SpiritualUnleash;