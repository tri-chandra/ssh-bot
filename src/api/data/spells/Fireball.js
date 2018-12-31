import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Fireball extends Spell {
  constructor(level) {
    super({
      name: 'Fireball',
      code: 'fireball',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 20,
      speed: C.Normal,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1},
        { hero: C.Jane, level: C.Arena1},
        { hero: C.Tierra, level: C.Arena1},
        { hero: C.Myris, level: C.Arena1},
      ]
    });
  }
}

export default Fireball;