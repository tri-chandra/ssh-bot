import Spell from '../../models/Spell';
import C from '../../models/Constants';

class OverheatedFireball extends Spell {
  constructor(level) {
    super({
      name: 'Overheated Fireball',
      code: 'overheatedFireball',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 30,
      speed: C.Normal,
      onCast: 'Does NOT charge your spell charge bar.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena4}
      ]
    });
  }
}

export default OverheatedFireball;