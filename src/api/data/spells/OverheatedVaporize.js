import Spell from '../../models/Spell';
import C from '../../models/Constants';

class OverheatedVaporize extends Spell {
  constructor(level) {
    super({
      name: 'Overheated Vaporize',
      code: 'overheatedVaporize',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 19,
      speed: C.Slow,
      count: 2,
      onCast: 'Does NOT charge your spell charge bar.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena7}
      ]
    });
  }
}

export default OverheatedVaporize;