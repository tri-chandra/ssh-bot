import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Stoning extends Spell {
  constructor(level) {
    super({
      name: 'Stoning',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Earth,
      damage: 23,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'You opponent gets a stunned token.',
      tokens: [Token.Weakness, Token.Stunned],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena4 },
      ]
    });
  }
}

export default Stoning;
