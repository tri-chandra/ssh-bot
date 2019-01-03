import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SunBeam extends Spell {
  constructor(level) {
    super({
      name: 'Sun Beam',
      code: 'sunBeam',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Light,
      damage: 4,
      resistance: 3,
      count: 5,
      onHit: '50% chance to get a light mana on your playfield.',
      unlockAt: [
        { hero: C.Ray, level: C.Arena9 },
      ]
    });
  }
}

export default SunBeam;