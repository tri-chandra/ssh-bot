import Spell from '../../models/Spell';
import C from '../../models/Constants';

class BurningWisdom extends Spell {
  constructor(level) {
    super({
      name: 'Burning Wisdom',
      code: 'burningWisdom',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Fire,
      resistance: 14,
      onTimeout: 'Chance to get a fire spell with level %lvl% from your spell deck on your playfield. Chance is 25% for each connected fire element.',
      unlockAt: [
        { hero: C.Tierra, level: C.Arena8}
      ]
    });
  }
}

export default BurningWisdom;