import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class Relaxation extends Spell {
  constructor(level) {
    super({
      name: 'Relaxation',
      code: 'relaxation',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Nature,
      heal: 8,
      onCast: 'Replaces a light or nature mana with a Chi token.',
      tokens: [Token.Chi],
      unlockAt: [
        { hero: C.Thoben, level: C.Arena7}
      ]
    });
  }
}

export default Relaxation;