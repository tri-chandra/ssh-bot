import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class Meditation extends Spell {
  constructor(level) {
    super({
      name: 'Meditation',
      code: 'meditation',
      type: C.HealSpell,
      tier: C.Advanced,
      element: C.Nature,
      heal: 13,
      onCast: 'Replaces 2 light or nature mana with chi tokens.',
      tokens: [Token.Chi],
      unlockAt: [
        { hero: C.Thoben, level: C.Arena8}
      ]
    });
  }
}

export default Meditation;