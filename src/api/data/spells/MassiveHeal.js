import Spell from '../../models/Spell';
import C from '../../models/Constants';

class MassiveHeal extends Spell {
  constructor(level) {
    super({
      name: 'Massive Heal',
      code: 'massiveHeal',
      type: C.HealSpell,
      tier: C.Elite,
      element: C.Nature,
      heal: 22,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1 },
        { hero: C.Jane, level: C.Arena1 }
      ]
    });
  }
}

export default MassiveHeal;
