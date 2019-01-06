import Spell from '../../models/Spell';
import C from '../../models/Constants';

class FireRam extends Spell {
  constructor(level) {
    super({
      name: 'FireRam',
      code: 'fireRam',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 15,
      speed: C.Normal,
      onHit: "Destroys shield spell on the opponent's playfield.",
      unlockAt: [
        { hero: C.Jane, level: C.Arena1 },
        { hero: C.Myris, level: C.Arena4 },
        { hero: C.VanRaven, level: C.Arena5 },
      ]
    });
  }
}

export default FireRam;
