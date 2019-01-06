import Spell from '../../models/Spell';
import C from '../../models/Constants';

class FirePhoenix extends Spell {
  constructor(level) {
    super({
      name: 'Fire Phoenix',
      code: 'firePhoenix',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 9,
      fixedDamage: 14,
      speed: C.Normal,
      onHit: "You get an Elite Fire Phoenix with power %dmg% on your playfield.",
      unlockAt: [
        { hero: C.Jane, level: C.Arena5}
      ]
    });
  }
}

export default FirePhoenix;