import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class IronShield extends Spell {
  constructor(level) {
    super({
      name: 'Iron Shield',
      code: 'ironShield',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Earth,
      shield: 51,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena1 },
        { hero: C.Ray, level: C.Arena6 },
      ]
    });
  }
}

export default IronShield;
