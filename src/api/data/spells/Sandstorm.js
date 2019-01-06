import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Sandstorm extends Spell {
  constructor(level) {
    super({
      name: 'Sandstorm',
      code: 'sandstorm',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Earth,
      resistance: 23,
      onCast: 'You get a weakness token on your playfield.',
      overTime: 'Replaces 5 non-earth mana with 5 earth mana on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena4 },
        { hero: C.Ray, level: C.Arena6 },
      ]
    });
  }
}

export default Sandstorm;
