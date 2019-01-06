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
      target: C.RandomPlayer,
      unlockAt: [
        { hero: C.Thoben, level: C.Arena4 },
        { hero: C.Myris, level: C.Arena7 },
      ]
    });
  }
}

export default NeutralFairy;
