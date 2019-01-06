import Spell from '../../models/Spell';
import C from '../../models/Constants';

class AngelicWrath extends Spell {
  constructor(level) {
    super({
      name: 'Angelic Wrath',
      code: 'angelicWrath',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Light,
      damage: 56,
      speed: C.Fast,
      onHit: "You get a light mana on your playfield.",
      unlockAt: [
        { hero: C.Thoben, level: C.Arena1}
      ]
    });
  }
}

export default AngelicWrath;