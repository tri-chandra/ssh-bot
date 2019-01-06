import Spell from '../../models/Spell';
import C from '../../models/Constants';

class EliteFireRifle extends Spell {
  constructor(level) {
    super({
      name: 'Elite Fire Rifle',
      code: 'eliteFireRifle',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Fire,
      breakPower: 15,
      fixedDamage: 425,
      speed: C.Fast,
      count: 1,
      onHit: 'Chance to deal %dmg%. Chance is 10% for each connected fire element',
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena7 },
      ]
    });
  }
}

export default EliteFireRifle;
