import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Overcharge extends Spell {
  constructor(level) {
    super({
      name: 'Overcharge',
      code: 'overcharge',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Light,
      resistance: 21,
      onTimeout: '50% chance to get a random ultimate spell with level %lvl% on your playfield. Otherwise you get a blindness token.',
      tokens: [Token.Blindness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena8 },
      ]
    });
  }
}

export default Overcharge;