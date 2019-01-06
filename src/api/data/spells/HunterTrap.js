import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class HunterTrap extends Spell {
  constructor(level) {
    super({
      name: 'Hunter\'s Trap',
      code: 'huntersTrap',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Earth,
      breakPower: 12,
      fixedDamage: 200,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Your opponent gets a trap token that deals %dmg% damage if it reaches the bottom row.',
      tokens: [Token.Weakness, Token.Trap],
      unlockAt: [
        { hero: C.VanRaven, level: C.Arena5 },
      ]
    });
  }
}

export default HunterTrap;
