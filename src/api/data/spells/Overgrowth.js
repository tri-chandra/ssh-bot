import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Overgrowth extends Spell {
  constructor(level) {
    super({
      name: 'Overgrowth',
      code: 'overgrowth',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Nature,
      resistance: 15,
      onTimeout: 'Replaces 2 tokens on your playfield with nature mana.',
      unlockAt: [
        { hero: C.Asgard, level: C.Arena6 },
      ]
    });
  }
}

export default Overgrowth;
