import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class MagneticAura extends Spell {
  constructor(level) {
    super({
      name: 'Magnetic Aura',
      code: 'magneticAura',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Earth,
      heal: 14,
      onCast: 'You get a weakness token on your playfield.',
      onCast: 'Healing power is x2 for each Elite or Ultimate spell on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena9 },
      ]
    });
  }
}

export default MagneticAura;
