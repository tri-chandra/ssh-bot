import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class EarthForce extends Spell {
  constructor(level) {
    super({
      name: 'Earth Force',
      code: 'earthForce',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Earth,
      resistance: 18,
      fixedDamage: 350,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      onTimeout: 'You get a strength token on your playfield. It increases the power of an earth spell by up to %dmg%.',
      tokens: [Token.Weakness, Token.Strength],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena1 },
      ]
    });
  }
}

export default EarthForce;
