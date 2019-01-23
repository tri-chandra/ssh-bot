import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class IceShot extends Spell {
  constructor(level) {
    super({
      name: 'Ice Shot',
      code: 'iceShot',
      type: C.Damagespell,
      tier: C.Advanced,
      element: C.Water,
      breakPower: 28,
      fixedDamage: 65,
      speed: C.Normal,
      onHit: 'Deals %dmg% for each ice token on the opponent\'s playfield.',
      tokens: [Token.Ice],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena9 },
      ]
    });
  }
}

export default IceShot;