import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class RockBlade extends Spell {
  constructor(level) {
    super({
      name: 'Rock Blade',
      code: 'rockBlade',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Earth,
      damage: 37,
      speed: C.Fast,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena9 },
      ]
    });
  }
}

export default RockBlade;
