import Spell from '../../models/Spell';
import C from '../../models/Constants';

class NeutralFairy extends Spell {
  constructor(level) {
    super({
      name: 'Neutral Fairy',
      code: 'neutralFairy',
      type: C.HealSpell,
      tier: C.Elite,
      element: C.Nature,
      heal: 45,
      target: C.Random,
      unlockAt: [
        { hero: C.Thoben, level: C.Arena4}
      ]
    });
  }
}

export default NeutralFairy;