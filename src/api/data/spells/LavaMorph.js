import Spell from '../../models/Spell';
import C from '../../models/Constants';

class LavaMorph extends Spell {
  constructor(level) {
    super({
      name: 'Lava Morph',
      code: 'lavaMorph',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Fire,
      resistance: 21,
      onTimeout: 'Replaces one element on your playfield with a random fire spell with level %lvl%.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena8 },
        { hero: C.Tierra, level: C.Arena8 }
      ]
    });
  }
}

export default LavaMorph;
