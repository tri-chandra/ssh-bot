import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class StoneStrike extends Spell {
  constructor(level) {
    super({
      name: 'Stone Strike',
      code: 'stoneStrike',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Earth,
      damage: 42,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena7 },
      ]
    });
  }
}

export default StoneStrike;