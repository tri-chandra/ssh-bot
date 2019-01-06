import Spell from '../../models/Spell';
import C from '../../models/Constants';

class OrbOfLight extends Spell {
  constructor(level) {
    super({
      name: 'Orb of Light',
      code: 'orbOfLight',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Light,
      damage: 22,
      speed: C.Fast,
      onHit: 'You get a light mana on your playfield.',
      unlockAt: [
        { hero: C.Thoben, level: C.Arena1 },
        { hero: C.Tierra, level: C.Arena3 },
        { hero: C.Ray, level: C.Arena1 },
      ]
    });
  }
}

export default OrbOfLight;