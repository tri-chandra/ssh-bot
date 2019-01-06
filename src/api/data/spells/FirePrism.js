import Spell from '../../models/Spell';
import C from '../../models/Constants';

class FirePrism extends Spell {
  constructor(level) {
    super({
      name: 'Fire Prism',
      code: 'firePrism',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Light,
      resistance: 18,
      overTime: "You get 3 fire mana on your playfield.",
      unlockAt: [
        { hero: C.Tierra, level: C.Arena5}
      ]
    });
  }
}

export default FirePrism;