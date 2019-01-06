import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class EnergizingShield extends Spell {
  constructor(level) {
    super({
      name: 'Energizing Shield',
      code: 'energizingShield',
      type: C.OvertimeSpell,
      tier: C.Basic,
      fixedDamage: 30,
      element: C.Nature,
      shield: 15,
      onBlock: "You get an energize token on your playfield that increases the power of healing spells by %dmg%.",
      tokens: [Token.Energize],
      unlockAt: [
        { hero: C.Thoben, level: C.Arena4}
      ]
    });
  }
}

export default EnergizingShield;