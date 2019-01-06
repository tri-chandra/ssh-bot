import Spell from '../../models/Spell';
import C from '../../models/Constants';

class UltimateScorch extends Spell {
  constructor(level) {
    super({
      name: 'Ultimate Scorch',
      code: 'ultimateScorch',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Fire,
      damage: 59,
      speed: C.Fast,
      unlockAt: [
        { hero: C.Jane, level: C.Arena1}
      ]
    });
  }
}

export default UltimateScorch;