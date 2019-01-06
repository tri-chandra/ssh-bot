import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class FieryFlare extends Spell {
  constructor(level) {
    super({
      name: 'Fiery Flare',
      code: 'fieryFlare',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Fire,
      damage: 28,
      fixedDamage: 50,
      speed: C.Fast,
      onHit: "Your opponent gets 2 fire mark tokens. Each has a 25% chance to deal %dmg% damage if your opponent takes a hit.",
      tokens: [Token.FireMark],
      unlockAt: [
        { hero: C.Tierra, level: C.Arena8 }
      ]
    });
  }
}

export default FieryFlare;