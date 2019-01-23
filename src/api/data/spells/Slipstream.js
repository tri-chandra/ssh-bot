import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Slipstream extends Spell {
  constructor(level) {
    super({
      name: 'Slipstream',
      code: 'slipstream',
      type: C.Damagespell,
      tier: C.Basic,
      element: C.Earth,
      breakPower: 32,
      fixedDamage: 60,
      speed: C.Fast,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Moves a token from the opponents\'s playfield to your playfield, then deals %dmg% damage to your opponent.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena6 },
      ]
    });
  }
}

export default Slipstream;