import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class CrackingGround extends Spell {
  constructor(level) {
    super({
      name: 'Cracking Ground',
      code: 'crackingGround',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Earth,
      breakingPower: 29,
      speed: C.Fast,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'You opponent gets a stunned token.',
      tokens: [Token.Weakness, Token.Stunned],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena7 },
      ]
    });
  }
}

export default CrackingGround;
