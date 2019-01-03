import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Stonefall extends Spell {
  constructor(level) {
    super({
      name: 'Stonefall',
      code: 'stonefall',
      type: C.OvertimeSpell,
      tier: C.Ultimate,
      element: C.Earth,
      damage: 13,
      fixedDamage: 350,
      resistance: 13,
      speed: C.Normal,
      count: 10,
      target: C.AllPlayers,
      onCast: 'You get a weakness token on your playfield.',
      onBlock: 'Breaks the opponent shield and then deals %dmg% damage.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena6 },
      ]
    });
  }
}

export default Stonefall;
