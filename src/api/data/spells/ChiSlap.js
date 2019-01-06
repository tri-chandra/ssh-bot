import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class ChiSlap extends Spell {
  constructor(level) {
    super({
      name: 'Chi Slap',
      code: 'chiSlap',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Light,
      damage: 14,
      onHit: "Replaces a light or nature mana with a chi token.",
      tokens: [Token.Chi],
      unlockAt: [
        { hero: C.Thoben, level: C.Arena9}
      ]
    });
  }
}

export default ChiSlap;