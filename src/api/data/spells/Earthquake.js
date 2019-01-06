import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Earthquake extends Spell {
  constructor(level) {
    super({
      name: 'Earthquake',
      code: 'earthquake',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Earth,
      resistance: 47,
      target: C.AllPlayers,
      onCast: 'You get a weakness token on your playfield.',
      onTimeout: 'Destrroys 10 non-earth elements on BOTH playfields.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena7 },
      ]
    });
  }
}

export default Earthquake;
