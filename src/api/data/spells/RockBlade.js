import Spell from '../../models/Spell';
import C from '../../models/Constants';

class RockBlade extends Spell {
  constructor(level) {
    super({
      name: 'RockBlade',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 20,
      speed: C.Normal,
      count: 1,
      target: C.Enemy,
      unlockAt: C.Arena1
    });
  }
}

export default RockBlade;