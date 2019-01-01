import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class FireRage extends Spell {
  constructor(level) {
    super({
      name: 'Fire Rage',
      code: 'fireRage',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Fire,
      resistance: 19,
      onTimeout: 'You get a rage token on your playfield.',
      tokens: [Token.Rage],
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1 }
      ]
    });
  }
}

export default FireRage;
