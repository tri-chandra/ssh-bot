import Spell from '../../models/Spell';
import C from '../../models/Constants';

class HeatUp extends Spell {
  constructor(level) {
    super({
      name: 'Heat Up',
      code: 'heatUp',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Fire,
      resistance: 14,
      fixedDamage: 15,
      onTimeout: "You get a heat token on your playfield that increases the power of a fire spell by %dmg%.",
      unlockAt: [
        { hero: C.Jane, level: C.Arena6}
      ]
    });
  }
}

export default HeatUp;