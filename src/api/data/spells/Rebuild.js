import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Rebuild extends Spell {
  constructor(level) {
    super({
      name: 'Rebuild',
      code: 'rebuild',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Earth,
      heal: 17,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena1 },
      ]
    });
  }
}

export default Rebuild;
