import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SuperNovaVision extends Spell {
  constructor(level) {
    super({
      name: 'Super Nova Vision',
      code: 'superNovaVision',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Fire,
      resistance: 28,
      onTimeout: 'You get the ultimate spell from your spell deck with level %lvl% on your playfield.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena7 }
      ]
    });
  }
}

export default SuperNovaVision;
