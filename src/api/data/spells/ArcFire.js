import Spell from '../../models/Spell';
import C from '../../models/Constants';

class ArcFire extends Spell {
  constructor(level) {
    super({
      name: 'Arc Fire',
      code: 'arcFire',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 17,
      speed: C.Fast,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1},
        { hero: C.Jane, level: C.Arena1},
        { hero: C.VanRaven, level: C.Arena1},
      ]
    });
  }
}

export default ArcFire;