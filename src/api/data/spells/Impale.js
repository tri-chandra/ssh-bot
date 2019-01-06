import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Impale extends Spell {
  constructor(level) {
    super({
      name: 'Impale',
      code: 'impale',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Earth,
      damage: 39,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Destroys the bottom row on the opponent\'s playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena5 },
      ]
    });
  }
}

export default Impale;
