import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Godhammer extends Spell {
  constructor(level) {
    super({
      name: 'Godhammer',
      code: 'godhammer',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Light,
      breakPower: 23,
      speed: C.Fast,
      target: C.AllPlayers,
      onHit: "Clears everything on BOTH playfields. Your spell charge bar gets filled for each cleared element.",
      unlockAt: [
        { hero: C.Tierra, level: C.Arena9 }
      ]
    });
  }
}

export default Godhammer;