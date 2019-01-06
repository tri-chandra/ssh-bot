import Spell from '../../models/Spell';
import C from '../../models/Constants';

class LightPrism extends Spell {
  constructor(level) {
    super({
      name: 'Light Prism',
      code: 'lightPrism',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Light,
      resistance: 18,
      overTime: 'You get 3 light mana on your playfield.',
      unlockAt: [
        { hero: C.Tierra, level: C.Arena7}
      ]
    });
  }
}

export default LightPrism;