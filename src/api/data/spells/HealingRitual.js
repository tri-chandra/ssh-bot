import Spell from '../../models/Spell';
import C from '../../models/Constants';

class HealingRitual extends Spell {
  constructor(level) {
    super({
      name: 'Healing Ritual',
      code: 'healingRitual',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Nature,
      resistance: 18,
      fixedDamage: 500,
      onTimeout: 'Restores as much of your energy as you have lost from the last hit, but no more than %dmg%.',
      unlockAt: [
        { hero: C.Asgard, level: C.Arena1 },
      ]
    });
  }
}

export default HealingRitual;
