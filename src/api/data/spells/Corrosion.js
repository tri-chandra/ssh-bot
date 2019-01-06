import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Corrosion extends Spell {
  constructor(level) {
    super({
      name: 'Corrosion',
      code: 'corrosion',
      type: C.OvertimeSpell,
      tier: C.Ultimate,
      element: C.Nature,
      resistance: 74,
      fixedDamage: 40,
      target: C.AllPlayers,
      overTime: 'Destroys 15 non-nature elements on both playfields. Each destroyed elements deals %dmg% damage.',
      unlockAt: [
        { hero: C.Asgard, level: C.Arena5 },
      ]
    });
  }
}

export default Corrosion;
