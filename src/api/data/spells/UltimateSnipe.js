import Spell from '../../models/Spell';
import C from '../../models/Constants';

class UltimateSnipe extends Spell {
  constructor(level) {
    super({
      name: 'Ultimate Snipe',
      code: 'ultimateSnipe',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Fire,
      breakPower: 15,
      fixedDamage: 500,
      speed: C.Fast,
      onHit: 'Destroys an ultimate spell on the opponent\'s playfield and then deals %dmg% damage.',
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena8 },
      ]
    });
  }
}

export default UltimateSnipe;
