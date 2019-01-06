import Spell from '../../models/Spell';
import C from '../../models/Constants';

class FireArrowX8 extends Spell {
  constructor(level) {
    super({
      name: 'FireArrowX8',
      code: 'fireArrowX8',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Fire,
      damage: 12,
      fixedDamage: 50,
      speed: C.Fast,
      count: 8,
      onHit: "Your opponent gets a bleed token that deals %dmg% damage over time.",
      unlockAt: [
        { hero: C.Jane, level: C.Arena5}
      ]
    });
  }
}

export default FireArrowX8;