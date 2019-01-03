import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class StoneHeart extends Spell {
  constructor(level) {
    super({
      name: 'Stone Heart',
      name: 'stoneHeart',
      type: C.HealSpell,
      tier: C.Advanced,
      element: C.Earth,
      heal: 27,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena7 },
      ]
    });
  }
}

export default StoneHeart;