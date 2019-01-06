import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SunFlood extends Spell {
  constructor(level) {
    super({
      name: 'Sun Flood',
      code: 'sunFlood',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Light,
      damage: 37,
      speed: C.Fast,
      onHit: 'You get another Sun Flood spell on your playfield.',
      unlockAt: [
        { hero: C.Tierra, level: C.Arena4 }
      ]
    });
  }
}

export default SunFlood;