import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Inferno extends Spell {
  constructor(level) {
    super({
      name: 'Inferno',
      code: 'inferno',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Fire,
      damage: 52,
      speed: C.Instant,
      onCast: 'Doubles the power for each additional inferno spell that is matched into this spell.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena5 }
      ]
    });
  }
}

export default Inferno;
