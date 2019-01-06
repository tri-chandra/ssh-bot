import Spell from '../../models/Spell';
import C from '../../models/Constants';

class GlassSpear extends Spell {
  constructor(level) {
    super({
      name: 'Glass Spear',
      code: 'glassSpear',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Light,
      damage: 12,
      speed: C.Fast,
      onHit: "You get a light mana on your playfield.",
      unlockAt: [
        { hero: C.Tierra, level: C.Arena5}
      ]
    });
  }
}

export default GlassSpear;