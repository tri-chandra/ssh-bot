import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class HunterNet extends Spell {
  constructor(level) {
    super({
      name: 'Hunter\'s Net',
      code: 'huntersNet',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Earth,
      breakPower: 16,
      speed: C.Slow,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Your opponent gets a cystal net token.',
      tokens: [Token.Weakness, Token.CrystalNet],
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena6 },
      ]
    });
  }
}

export default HunterNet;
