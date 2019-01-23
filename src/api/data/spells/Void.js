import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Void extends Spell {
  constructor(level) {
    super({
      name: 'Void',
      code: 'void',
      type: C.Damagespell,
      tier: C.Basic,
      element: C.Earth,
      breakPower: 41,
      speed: C.Instant,
      target: C.AllPlayers,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Destroys the spell with the highest category on both playfields.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena9 },
      ]
    });
  }
}

export default Void;