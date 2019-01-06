import Spell from '../../models/Spell';
import C from '../../models/Constants';

class AdvancedFireRifle extends Spell {
  constructor(level) {
    super({
      name: 'Advanced Fire Rifle',
      code: 'advancedFireRifle',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      breakPower: 15,
      fixedDamage: 275,
      speed: C.Fast,
      count: 1,
      onHit: 'Chance to deal %dmg%. Chance is 10% for each connected fire element',
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena6 },
      ]
    });
  }
}

export default AdvancedFireRifle;
