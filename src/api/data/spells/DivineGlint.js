import Spell from '../../models/Spell';
import C from '../../models/Constants';

class DivineGlint extends Spell {
  constructor(level) {
    super({
      name: 'Divine Glint',
      code: 'divineGlint',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Light,
      damage: 5,
      speed: C.Fast,
      count: 3,
      onHit: "Charges your spell charge bar by 1.",
      unlockAt: [
        { hero: C.Tierra, level: C.Arena5}
      ]
    });
  }
}

export default DivineGlint;