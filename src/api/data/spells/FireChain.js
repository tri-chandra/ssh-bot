import Spell from '../../models/Spell';
import C from '../../models/Constants';

class FireChain extends Spell {
  constructor(level) {
    super({
      name: 'Fire Chain',
      code: 'fireChain',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Fire,
      damage: 32,
      speed: C.Normal,
      onHit: "Destroys one column on the opponent's playfield.",
      unlockAt: [
        { hero: C.Jane, level: C.Arena5 },
        { hero: C.Myris, level: C.Arena1 },
        { hero: C.VanRaven, level: C.Arena9 },
      ]
    });
  }
}

export default FireChain;
