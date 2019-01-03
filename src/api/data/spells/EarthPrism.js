import Spell from '../../models/Spell';
import C from '../../models/Constants';

class EarthPrism extends Spell {
  constructor(level) {
    super({
      name: 'Earth Prism',
      code: 'earthPrism',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Light,
      resistance: 18,
      overTime: 'You get 3 earth mana on your playfield.',
      unlockAt: [
        { hero: C.Ray, level: C.Arena8 },
      ]
    });
  }
}

export default EarthPrism;