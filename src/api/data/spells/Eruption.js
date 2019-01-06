import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Eruption extends Spell {
  constructor(level) {
    super({
      name: 'Eruption',
      code: 'eruption',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Earth,
      damage: 33,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Your opponent gets a stunned token.',
      tokens: [Token.Weakness, Token.Stunned],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena7 },
      ]
    });
  }
}

export default Eruption;
