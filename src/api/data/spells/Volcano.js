import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Volcano extends Spell {
  constructor(level) {
    super({
      name: 'Volcano',
      code: 'volcano',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Fire,
      resistance: 23,
      overTime: 'You get 12 fire mana at random positions on your playfield. Existing elements are replaced.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena3 }
      ]
    });
  }
}

export default Volcano;
