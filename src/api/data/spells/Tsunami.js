import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Tsunami extends Spell {
  constructor(level) {
    super({
      name: 'Tsunami',
      code: 'tsunami',
      type: C.Damagespell,
      tier: C.Ultimate,
      element: C.Water,
      damage: 62,
      speed: C.Normal,
      onHit: 'Your opponent\'s playfield gets filled with water token.',
      tokens: [Token.Water],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena6 },
      ]
    });
  }
}

export default Tsunami;