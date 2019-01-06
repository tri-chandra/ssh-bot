import Spell from '../../models/Spell';
import C from '../../models/Constants';

class NaturePrism extends Spell {
  constructor(level) {
    super({
      name: 'Nature Prism',
      code: 'naturePrism',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Light,
      resistance: 18,
      overTime: 'You get 3 nature mana on your playfield.',
      unlockAt: [
        { hero: C.Thoben, level: C.Arena6}
      ]
    });
  }
}

export default NaturePrism;