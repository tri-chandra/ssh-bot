import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class MagneticShield extends Spell {
  constructor(level) {
    super({
      name: 'Magnetic Shield',
      code: 'magneticShield',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Earth,
      shield: 44,
      onCast: 'You get a weakness token on your playfield.',
      onBreak: 'You get a stunned token on your playfield.',
      tokens: [Token.Weakness, Token.Stunned],
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena7 },
        { hero: C.Ray, level: C.Arena7 },
      ]
    });
  }
}

export default MagneticShield;
