import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SpiderWeb extends Spell {
  constructor(level) {
    super({
      name: 'Spider Web',
      code: 'spiderWeb',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Nature,
      shield: 81,
      onBlock: 'Only blocks one attack.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1 }
      ]
    });
  }
}

export default SpiderWeb;
