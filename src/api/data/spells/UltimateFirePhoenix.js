import Spell from '../../models/Spell';
import C from '../../models/Constants';

class UltimateFirePhoenix extends Spell {
  constructor(level) {
    super({
      name: 'Ultimate Fire Phoenix',
      code: 'ultimateFirePhoenix',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 68,
      speed: C.Normal,
      unlockAt: [
        { hero: C.Jane, level: C.Arena5 }
      ]
    });
  }
}

export default UltimateFirePhoenix;
