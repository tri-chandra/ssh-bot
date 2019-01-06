import Spell from '../../models/Spell';
import C from '../../models/Constants';

class EntanglingVines extends Spell {
  constructor(level) {
    super({
      name: 'Entangling Vines',
      code: 'entanglingVines',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Nature,
      breakPower: 10,
      speed: C.Slow,
      onHit: 'Depletes your opponent\'s spell charge bar.',
      unlockAt: [
        { hero: C.Asgard, level: C.Arena5 },
      ]
    });
  }
}

export default EntanglingVines;
