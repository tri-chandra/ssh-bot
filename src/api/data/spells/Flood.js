import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Flood extends Spell {
  constructor(level) {
    super({
      name: 'Flood',
      code: 'flood',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Water,
      resistance: 19,
      OvertimeSpell: 'Replaces 4 non-water mana with water mana on your playfield.',
      unlockAt: [
        { hero: C.RaJu, level: C.Arena5 },
      ]
    });
  }
}

export default Flood;