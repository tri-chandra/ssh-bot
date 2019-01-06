import Spell from '../../models/Spell';
import C from '../../models/Constants';

class DoubleFireball extends Spell {
  constructor(level) {
    super({
      name: 'Double Fireball',
      code: 'doubleFireball',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 20,
      speed: C.Normal,
      count: 2,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1},
        { hero: C.Tierra, level: C.Arena1}
      ]
    });
  }
}

export default DoubleFireball;
