import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Hydrogel extends Spell {
  constructor(level) {
    super({
      name: 'Hydrogel',
      code: 'hydrogel',
      type: C.Damagespell,
      tier: C.Basic,
      element: C.Water,
      damage: 22,
      speed: C.Normal,
      onHit: 'The player hit by the attack gets a water token on the playfield.',
      onBlock: 'The attack is reflected.',
      tokens: [Token.Water],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena5 },
      ]
    });
  }
}

export default Hydrogel;