import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class FireArrowX4 extends Spell {
  constructor(level) {
    super({
      name: 'Fire Arrow X4',
      code: 'fireArrowX4',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Fire,
      damage: 11,
      fixedDamage: 50,
      speed: C.Fast,
      count: 4,
      onHit: "Your opponent gets a bleed token that deals %dmg% damage over time.",
      tokens: [Token.Bleed],
      unlockAt: [
        { hero: C.Jane, level: C.Arena4}
      ]
    });
  }
}

export default FireArrowX4;