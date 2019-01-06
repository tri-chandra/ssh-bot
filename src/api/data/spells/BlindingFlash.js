import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class BlindingFlash extends Spell {
  constructor(level) {
    super({
      name: 'Blinding Flash',
      code: 'blindingFlash',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Light,
      damage: 12,
      speed: C.Fast,
      onHit: 'Your opponent gets a Blinding token.',
      tokens: [Token.Blindness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena6 },
      ]
    });
  }
}

export default BlindingFlash;