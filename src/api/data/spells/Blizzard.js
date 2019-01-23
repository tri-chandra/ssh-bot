import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Blizzard extends Spell {
  constructor(level) {
    super({
      name: 'Blizzard',
      code: 'blizzard',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Water,
      resistance: 33,
      target: C.AllPlayers,
      overTime: 'Replaces 4 water tokens with ice tokens on both playfields.',
      tokens: [Token.Water, Token.Ice],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena8 },
      ]
    });
  }
}

export default Blizzard;