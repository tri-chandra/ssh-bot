import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class FireArrow extends Spell {
  constructor(level) {
    super({
      name: 'Fire Arrow',
      code: 'fireArrow',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 12,
      speed: C.Fast,
      onHit: 'Your opponent gets a bleed token that deals %dmg% damage over time.',
      tokens: [Token.Bleed],
      unlockAt: [
        { hero: C.Jane, level: C.Arena3}
      ]
    });
  }
}

export default FireArrow;