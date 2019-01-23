import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Wither extends Spell {
  constructor(level) {
    super({
      name: 'Wither',
      code: 'wither',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Earth,
      resistance: 20,
      onCast: 'You get a weakness token on your playfield.',
      overTime: 'Removes 5 non-earth tokens from your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena7 },
      ]
    });
  }
}

export default Wither;