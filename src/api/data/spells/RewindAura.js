import Spell from '../../models/Spell';
import C from '../../models/Constants';

class RewindAura extends Spell {
  constructor(level) {
    super({
      name: 'Rewind Aura',
      code: 'rewindAura',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Nature,
      resistance: 17,
      overTime: 'Stops the timer of all tokens on BOTH playfields.',
      onTimeout: 'Resets the timer of all tokens on BOTH playfields.',
      unlockAt: [
        { hero: C.Jane, level: C.Arena8 },
        { hero: C.Asgard, level: C.Arena9 },
        { hero: C.Lua, level: C.Arena7 },
      ]
    });
  }
}

export default RewindAura;
