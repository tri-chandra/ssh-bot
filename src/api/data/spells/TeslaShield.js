import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class TeslaShield extends Spell {
  constructor(level) {
    super({
      name: 'Tesla Shield',
      code: 'teslaShield',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Earth,
      shield: 77,
      onCast: 'You get a weakness token on your playfield.',
      onBreak: 'You get a stunned token on your playfield.',
      tokens: [Token.Weakness, Token.Stunned],
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena5 },
      ]
    });
  }
}

export default TeslaShield;
