import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Rockslide extends Spell {
  constructor(level) {
    super({
      name: 'Rockslide',
      code: 'rockslide',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Earth,
      damage: 49,
      speed: C.Slow,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena1 },
      ]
    });
  }
}

export default Rockslide;
