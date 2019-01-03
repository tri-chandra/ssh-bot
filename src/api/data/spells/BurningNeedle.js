import Spell from '../../models/Spell';
import C from '../../models/Constants';

class BurningNeedle extends Spell {
  constructor(level) {
    super({
      name: 'Burning Needle',
      code: 'burningNeedle',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 12,
      speed: C.Fast,
      onHit: "Breaks the opponent's shield.",
      unlockAt: [
        { hero: C.Jane, level: C.Arena8},
      ]
    });
  }
}

export default BurningNeedle;