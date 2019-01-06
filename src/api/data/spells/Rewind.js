import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Rewind extends Spell {
  constructor(level) {
    super({
      name: 'Rewind',
      code: 'rewind',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Nature,
      resistance: 17,
      overTime: 'Stops the timer of all tokens on your playfield.',
      onTimeout: 'Resets the timer of all tokens on your playfield.',
      unlockAt: [
        { hero: C.Myris, level: C.Arena8 },
      ]
    });
  }
}

export default Rewind;
