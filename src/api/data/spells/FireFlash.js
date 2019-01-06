import Spell from '../../models/Spell';
import C from '../../models/Constants';

class FireFlash extends Spell {
  constructor(level) {
    super({
      name: 'Fire Flash',
      code: 'fireFlash',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 13,
      speed: C.Normal,
      onHit: "If it breaks a spell another Fire Flash spell is fired.",
      unlockAt: [
        { hero: C.Jane, level: C.Arena7},
        { hero: C.Myris, level: C.Arena5},
      ]
    });
  }
}

export default FireFlash;
