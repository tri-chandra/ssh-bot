import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Immortality extends Spell {
  constructor(level) {
    super({
      name: 'Immortality',
      code: 'immortality',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Nature,
      resistance: 10,
      onTimeout: 'You get an immortality token on your playfield.',
      tokens: [Token.Immortality],
      unlockAt: [
        { hero: C.Myris, level: C.Arena4},
      ]
    });
  }
}

export default Immortality;
