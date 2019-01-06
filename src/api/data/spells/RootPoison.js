import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class RootPoison extends Spell {
  constructor(level) {
    super({
      name: 'Root Poison',
      code: 'rootPoison',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Nature,
      breakPower: 13,
      speed: C.Normal,
      onHit: 'Your opponent gets an instability token.',
      tokens: [Token.Instability],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena8 },
      ]
    });
  }
}

export default RootPoison;
