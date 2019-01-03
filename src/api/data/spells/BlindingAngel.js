import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class BlindingAngel extends Spell {
  constructor(level) {
    super({
      name: 'Blinding Angel',
      code: 'blindingAngel',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Light,
      damage: 24,
      speed: C.Fast,
      onHit: 'Your opponent gets a Blindness token.',
      tokens: [Token.Blindness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena7 },
      ]
    });
  }
}

export default BlindingAngel;
