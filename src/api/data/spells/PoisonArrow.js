import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class PoisonArrow extends Spell {
  constructor(level) {
    super({
      name: 'Poison Arrow',
      code: 'poisonArrow',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Nature,
      breakPower: 13,
      fixedDamage: 250,
      speed: C.Fast,
      onHit: 'Deals %dmg% damage for each bleed token on the opponent\'s playfield.',
      tokens: [Token.Bleed],
      unlockAt: [
        { hero: C.Jane, level: C.Arena9}
      ]
    });
  }
}

export default PoisonArrow;