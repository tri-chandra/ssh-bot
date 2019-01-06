import Spell from '../../models/Spell';
import C from '../../models/Constants';

class PowerSwipe extends Spell {
  constructor(level) {
    super({
      name: 'Power Swipe',
      code: 'powerSwipe',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Light,
      damage: 21,
      speed: C.Fast,
      onCast: "Damage power is x3 if you have more energy than your opponent.",
      unlockAt: [
        { hero: C.Thoben, level: C.Arena8}
      ]
    });
  }
}

export default PowerSwipe;