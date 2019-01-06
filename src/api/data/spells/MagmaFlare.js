import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class MagmaFlare extends Spell {
  constructor(level) {
    super({
      name: 'Magma Flare',
      code: 'magmaFlare',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 8,
      fixedDamage: 50,
      speed: C.Fast,
      onHit: 'Your opponent gets a fire mark token. It has a 25% chance to deal %dmg% if your opponent takes a hit.',
      tokens: [Token.FireMark],
      unlockAt: [
        { hero: C.Tierra, level: C.Arena8}
      ]
    });
  }
}

export default MagmaFlare;