import Spell from '../../models/Spell';
import C from '../../models/Constants';

class FirePhoenix extends Spell {
  constructor(level) {
    super({
      name: 'Fire Phoenix',
      code: 'firePhoenix',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 9,
      speed: C.Normal,
      onHit: "You get an Elite Fire Phoenix on your playfield.\n(On Hit Elite Fire Phoenix) You get an Ultimate Fire Phoenix on your playfield.",
      unlockAt: [
        { hero: C.Jane, level: C.Arena5}
      ]
    });
  }
}

export default FirePhoenix;