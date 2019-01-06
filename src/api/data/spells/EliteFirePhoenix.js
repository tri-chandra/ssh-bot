import Spell from '../../models/Spell';
import C from '../../models/Constants';

class EliteFirePhoenix extends Spell {
  constructor(level) {
    super({
      name: 'Elite Fire Phoenix',
      code: 'eliteFirePhoenix',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 14,
      fixedDamage: 68,
      speed: C.Normal,
      onHit: 'You get an Ultimate Fire Phoenix with power %dmg% on your playfield.',
      unlockAt: [
        { hero: C.Jane, level: C.Arena5}
      ]
    });
  }
}

export default EliteFirePhoenix;
