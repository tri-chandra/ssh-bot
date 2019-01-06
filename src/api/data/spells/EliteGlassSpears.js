import Spell from '../../models/Spell';
import C from '../../models/Constants';

class EliteGlassSpears extends Spell {
  constructor(level) {
    super({
      name: 'Elite Glass Spears',
      code: 'eliteGlassSpears',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Light,
      damage: 12,
      speed: C.Fast,
      count: 4,
      onHit: "You get a light mana on your playfield.",
      unlockAt: [
        { hero: C.Tierra, level: C.Arena7 }
      ]
    });
  }
}

export default EliteGlassSpears;