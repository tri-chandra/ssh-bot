import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class KineticShield extends Spell {
  constructor(level) {
    super({
      name: 'Kinetic Shield',
      code: 'kineticShield',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Earth,
      shield: 40,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      onBlock: 'Your opponent gets a stunned token.',
      tokens: [Token.Weakness, Token.Stunned],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena6 },
      ]
    });
  }
}

export default KineticShield;
