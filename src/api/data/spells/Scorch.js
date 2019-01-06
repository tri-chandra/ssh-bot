import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Scorch extends Spell {
  constructor(level) {
    super({
      name: 'Scorch',
      code: 'scorch',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Fire,
      damage: 39,
      speed: C.Fast,
      unlockAt: [
        { hero: C.Jane, level: C.Arena1}
      ]
    });
  }
}

export default Scorch;