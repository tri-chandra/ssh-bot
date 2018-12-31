import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Vaporize extends Spell {
  constructor(level) {
    super({
      name: 'Vaporize',
      code: 'vaporize',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 13,
      speed: C.Slow,
      count: 2,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena6}
      ]
    });
  }
}

export default Vaporize;