import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class HealingSands extends Spell {
  constructor(level) {
    super({
      name: 'Healing Sands',
      code: 'healingSands',
      type: C.HealSpell,
      tier: C.Elite,
      element: C.Earth,
      heal: 28,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena8 },
      ]
    });
  }
}

export default HealingSands;
