import Spell from '../../models/Spell';
import C from '../../models/Constants';

class ZenPulse extends Spell {
  constructor(level) {
    super({
      name: 'Zen Pulse',
      code: 'zenPulse',
      type: C.OvertimeSpell,
      tier: C.Ultimate,
      element: C.Nature,
      resistance: 29,
      fixedDamage: 1000,
      overTime: 'Sets the energy of your opponent to 1 but reduces it no more than by %dmg%.',
      unlockAt: [
        { hero: C.Thoben, level: C.Arena9}
      ]
    });
  }
}

export default ZenPulse;