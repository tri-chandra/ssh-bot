import Spell from '../../models/Spell';
import C from '../../models/Constants';

class BurningScroll extends Spell {
  constructor(level) {
    super({
      name: 'Burning Scroll',
      code: 'burningScroll',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Fire,
      resistance: 13,
      overTime: 'Clones 2 fire spells from your playfield. Cloned spells have level %lvl%.',
      unlockAt: [
        { hero: C.Tierra, level: C.Arena9}
      ]
    });
  }
}

export default BurningScroll;