import Spell from '../../models/Spell';
import C from '../../models/Constants';

class DragonBreath extends Spell {
  constructor(level) {
    super({
      name: 'Dragon\'s Breath',
      code: 'dragonsBreath',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Fire,
      damage: 43,
      speed: C.Normal,
      onHit: 'Destroys all elements on the opponent\'s playfield.',
      unlockAt: [
        { hero: C.Jane, level: C.Arena1}
      ]
    });
  }
}

export default DragonBreath;