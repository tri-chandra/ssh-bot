import Spell from '../../models/Spell';
import C from '../../models/Constants';

class EliteSnipe extends Spell {
  constructor(level) {
    super({
      name: 'Elite Snipe',
      code: 'eliteSnipe',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Fire,
      breakPower: 10,
      fixedDamage: 275,
      speed: C.Fast,
      onHit: 'Destroys an elite spell on the opponent\'s playfield and then deals %dmg% damage.',
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena8 },
      ]
    });
  }
}

export default EliteSnipe;
