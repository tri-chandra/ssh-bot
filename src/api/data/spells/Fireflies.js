import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Fireflies extends Spell {
  constructor(level) {
    super({
      name: 'Fireflies',
      code: 'fireflies',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Fire,
      damage: 3,
      speed: C.Fast,
      count: 20,
      unlockAt: [
        { hero: C.Jane, level: C.Arena7}
      ]
    });
  }
}

export default Fireflies;