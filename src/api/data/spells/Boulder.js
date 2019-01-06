import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Boulder extends Spell {
  constructor(level) {
    super({
      name: 'Boulder',
      code: 'boulder',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Earth,
      damage: 38,
      speed: C.Slow,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena1 },
      ]
    });
  }
}

export default Boulder;
