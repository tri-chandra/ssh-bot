import Spell from '../../models/Spell';
import C from '../../models/Constants';

class OverheatedDoubleFireball extends Spell {
  constructor(level) {
    super({
      name: 'Overheated Double Fireball',
      code: 'overheatedDoubleFireball',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 24,
      speed: C.Normal,
      count: 2,
      onCast: 'Does NOT charge your spell charge bar.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena6 }
      ]
    });
  }
}

export default OverheatedDoubleFireball;
