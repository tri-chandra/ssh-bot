import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class IceLance extends Spell {
  constructor(level) {
    super({
      name: 'Ice Lance',
      code: 'iceLance',
      type: C.Damagespell,
      tier: C.Elite,
      element: C.Water,
      breakPower: 45,
      fixedDamage: 125,
      speed: C.Normal,
      onHit: 'Deals %dmg% for each ice token on the opponent\'s playfield.',
      tokens: [Token.Ice],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena8 },
      ]
    });
  }
}

export default IceLance;