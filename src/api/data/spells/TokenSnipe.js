import Spell from '../../models/Spell';
import C from '../../models/Constants';

class TokenSnipe extends Spell {
  constructor(level) {
    super({
      name: 'Token Snipe',
      code: 'tokenSnipe',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      breakPower: 5,
      fixedDamage: 100,
      speed: C.Fast,
      onHit: 'Destroys a healing spell on the opponent\'s playfield and then deals %dmg% damage.',
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena9 },
      ]
    });
  }
}

export default TokenSnipe;
