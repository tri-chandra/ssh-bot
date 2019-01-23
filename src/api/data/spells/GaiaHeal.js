import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class GaiaHeal extends Spell {
  constructor(level) {
    super({
      name: 'Gaia Heal',
      code: 'gaiaHeal',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Earth,
      resistance: 41,
      speed: C.Slow,
      onCast: 'You get a weakness token on your playfield',
      onTimeout: 'If the spell resistance is greater than your energy, your energy is fully restored.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena9 },
      ]
    });
  }
}

export default GaiaHeal;