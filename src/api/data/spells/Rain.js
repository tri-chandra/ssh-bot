import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Rain extends Spell {
  constructor(level) {
    super({
      name: 'Rain',
      code: 'rain',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Water,
      resistance: 23,
      overTime: 'Adds 6 water tokens randomly either to you or the opponent\'s playfield.',
      tokens: [Token.Water],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena6 },
      ]
    });
  }
}

export default Rain;