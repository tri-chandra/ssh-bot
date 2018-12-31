import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Spellbreaker extends Spell {
  constructor(level) {
    super({
      name: 'Spellbreaker',
      code: 'spellbreaker',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 7,
      speed: C.Fast,
      onCast: 'Damage power is x4 if your opponent has an overtime spell active',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena6}
      ]
    });
  }
}

export default Spellbreaker;