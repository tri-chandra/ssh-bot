import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Riftbreaker extends Spell {
  constructor(level) {
    super({
      name: 'Riftbreaker',
      code: 'riftbreaker',
      type: C.Damagespell,
      tier: C.Basic,
      element: C.Earth,
      breakPower: 40,
      speed: C.Fast,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Removes a token from the opponent\'s playfield and then you get a random spell with level 1 from your spell deck on your playdield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena8 },
      ]
    });
  }
}

export default Riftbreaker;