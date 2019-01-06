import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class StoneShield extends Spell {
  constructor(level) {
    super({
      name: 'Stone Shield',
      code: 'stoneShield',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Earth,
      shield: 32,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena1 },
        { hero: C.Ray, level: C.Arena1 },
      ]
    });
  }
}

export default StoneShield;
