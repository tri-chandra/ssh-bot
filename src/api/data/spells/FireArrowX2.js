import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class FireArrowX2 extends Spell {
  constructor(level) {
    super({
      name: 'Fire Arrow X2',
      code: 'fireArrowX2',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 12,
      fixedDamage: 50,
      speed: C.Fast,
      count: 2,
      onHit: "Your opponents gets a bleed token that deals %dmg% damage over time.",
      tokens: [Token.Bleed],
      unlockAt: [
        { hero: C.Jane, level: C.Arena3}
      ]
    });
  }
}

export default FireArrowX2;