import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SunStrike extends Spell {
  constructor(level) {
    super({
      name: 'Sun Strike',
      code: 'sunStrike',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Light,
      damage: 36,
      speed: C.Fast,
      onHit: 'You get a light mana on your playfield.',
      unlockAt: [
        { hero: C.Ray, level: C.Arena1 },
        { hero: C.Thoben, level: C.Arena1 }
      ]
    });
  }
}

export default SunStrike;
