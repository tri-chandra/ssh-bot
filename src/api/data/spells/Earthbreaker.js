import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Earthbreaker extends Spell {
  constructor(level) {
    super({
      name: 'Earthbreaker',
      code: 'earthbreaker',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Earth,
      damage: 90,
      speed: C.Slow,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena1 },
      ]
    });
  }
}

export default Earthbreaker;
