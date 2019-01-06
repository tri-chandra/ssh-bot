import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class MineField extends Spell {
  constructor(level) {
    super({
      name: 'Mine Field',
      code: 'mineField',
      type: C.OvertimeSpell,
      tier: C.Ultimate,
      element: C.Earth,
      resistance: 62,
      fixedDamage: 200,
      onCast: 'You get a weakness token on your playfield.',
      overTime: 'Fills the opponents playfoeld with trap tokens. Each deals %dmg% damage if it reaches the bottom row.',
      tokens: [Token.Weakness, Token.Trap],
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena6 },
      ]
    });
  }
}

export default MineField;
