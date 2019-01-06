import Spell from '../../models/Spell';
import C from '../../models/Constants';

class LifeCocoon extends Spell {
  constructor(level) {
    super({
      name: 'Life Cocoon',
      code: 'lifeCocoon',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Nature,
      heal: 9,
      onCast: "Increases your max energy if you are fully healed.",
      unlockAt: [
        { hero: C.Thoben, level: C.Arena3}
      ]
    });
  }
}

export default LifeCocoon;