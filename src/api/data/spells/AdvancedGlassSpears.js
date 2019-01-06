import Spell from '../../models/Spell';
import C from '../../models/Constants';

class AdvancedGlassSpears extends Spell {
  constructor(level) {
    super({
      name: 'Advanced Glass Spears',
      code: 'advancedGlassSpears',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Light,
      damage: 12,
      speed: C.Fast,
      count: 2,
      onHit: "You get a light mana on your playfield.",
      unlockAt: [
        { hero: C.Tierra, level: C.Arena5}
      ]
    });
  }
}

export default AdvancedGlassSpears;