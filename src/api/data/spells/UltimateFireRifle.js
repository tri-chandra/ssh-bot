import Spell from '../../models/Spell';
import C from '../../models/Constants';

class UltimateFireRifle extends Spell {
  constructor(level) {
    super({
      name: 'Ultimate Fire Rifle',
      code: 'ultimateFireRifle',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Fire,
      breakPower: 15,
      fixedDamage: 625,
      speed: C.Fast,
      count: 1,
      onHit: 'Chance to deal %dmg%. Chance is 10% for each connected fire element',
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena7 },
      ]
    });
  }
}

export default UltimateFireRifle;
