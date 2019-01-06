import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class FireRush extends Spell {
  constructor(level) {
    super({
      name: 'Fire Rush',
      code: 'fireRush',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Fire,
      resistance: 24,
      onTimeout: 'You get a fury token on your playfield.',
      tokens: [Token.Fury],
      unlockAt: [
        { hero: C.Jane, level: C.Arena4}
      ]
    });
  }
}

export default FireRush;