import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class PoisonedPotion extends Spell {
  constructor(level) {
    super({
      name: 'Poisoned Potion',
      code: 'poisonedPotion',
      type: C.HealSpell,
      tier: C.Elite,
      element: C.Nature,
      heal: 62,
      fixedDamage: 1000,
      onCast: 'You get a poison token on your playfield that deals %dmg damage.',
      tokens: [Token.Poison],
      unlockAt: [
        { hero: C.Myris, level: C.Arena8},
      ]
    });
  }
}

export default PoisonedPotion;
