import Spell from '../../models/Spell';
import C from '../../models/Constants';

class UltimateGlassSpears extends Spell {
  constructor(level) {
    super({
      name: 'Ultimate Glass Spears',
      code: 'ultimateGlassSpears',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Light,
      damage: 12,
      speed: C.Fast,
      count: 6,
      onHit: "You get a light mana on your playfield.",
      unlockAt: [
        { hero: C.Tierra, level: C.Arena6 }
      ]
    });
  }
}

export default UltimateGlassSpears;