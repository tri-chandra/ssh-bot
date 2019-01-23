import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class AirBlast extends Spell {
  constructor(level) {
    super({
      name: 'Air Blast',
      code: 'none',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Earth,
      resistance: 16,
      onCast: 'You get a weakness token on your playfield.',
      overTime: 'Moves 2 negative tokens from your playfield to the opponent\'s playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena5 },
      ]
    });
  }
}

export default AirBlast;