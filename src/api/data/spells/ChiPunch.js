import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class ChiPunch extends Spell {
  constructor(level) {
    super({
      name: 'Chi Punch',
      code: 'chiPunch',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Light,
      damage: 24,
      speed: C.Fast,
      onHit: "Replaces a light or nature mana with a chi token.",
      tokens: [Token.Chi],
      unlockAt: [
        { hero: C.Thoben, level: C.Arena6}
      ]
    });
  }
}

export default ChiPunch;