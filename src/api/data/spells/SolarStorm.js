import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SolarStorm extends Spell {
  constructor(level) {
    super({
      name: 'Solar Storm',
      code: 'solarStorm',
      type: C.OvertimeSpell,
      tier: C.Ultimate,
      element: C.Light,
      damage: 20,
      resistance: 20,
      count: 5,
      onHit: 'You get a light mana on your playfield.',
      unlockAt: [
        { hero: C.Ray, level: C.Arena1 },
      ]
    });
  }
}

export default SolarStorm;
