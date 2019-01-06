import Spell from '../../models/Spell';
import C from '../../models/Constants';

class HealSnipe extends Spell {
  constructor(level) {
    super({
      name: 'Heal Snipe',
      code: 'healSnipe',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      breakPower: 20,
      fixedDamage: 50,
      speed: C.Fast,
      onHit: 'Destroys a healing spell on the opponent\'s playfield and then deals %dmg% damage.',
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena8 },
      ]
    });
  }
}

export default HealSnipe;
