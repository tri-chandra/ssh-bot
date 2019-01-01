import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Cloning extends Spell {
  constructor(level) {
    super({
      name: 'Cloning',
      code: 'cloning',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Nature,
      resistance: 19,
      onTimeout: 'Clones the spell with the highest category on your playfield. The spell has level %lvl%.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena4 }
      ]
    });
  }
}

export default Cloning;
