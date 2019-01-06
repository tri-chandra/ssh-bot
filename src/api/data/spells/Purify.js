import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Purify extends Spell {
  constructor(level) {
    super({
      name: 'Purify',
      code: 'purify',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Light,
      resistance: 19,
      overTime: "Replaces 4 non-light mana with light mana on your playfield.",
      unlockAt: [
        { hero: C.Tierra, level: C.Arena6}
      ]
    });
  }
}

export default Purify;