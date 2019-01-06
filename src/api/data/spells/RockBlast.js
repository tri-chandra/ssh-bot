import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class RockBlast extends Spell {
  constructor(level) {
    super({
      name: 'Rock Blast',
      code: 'rockBlast',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Earth,
      damage: 33,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena6 },
        { hero: C.VanRaven, level: C.Arena6 },
      ]
    });
  }
}

export default RockBlast;
