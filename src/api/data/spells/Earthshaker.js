import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Earthshaker extends Spell {
  constructor(level) {
    super({
      name: 'Earthshaker',
      code: 'earthshaker',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Earth,
      damage: 20,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Destroys 2 non-earth elements on your opponent\'s playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena9 },
      ]
    });
  }
}

export default Earthshaker;
