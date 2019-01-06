import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Pierce extends Spell {
  constructor(level) {
    super({
      name: 'Pierce',
      code: 'pierce',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 7,
      speed: C.Normal,
      count: 2,
      fixedDamage: 100,
      onHit: '10% chance of deal %dmg% damage to your opponent.',
      unlockAt: [
        { hero: C.Jane, level: C.Arena3}
      ]
    });
  }
}

export default Pierce;