import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Oxidation extends Spell {
  constructor(level) {
    super({
      name: 'Oxidation',
      code: 'oxidation',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Fire,
      resistance: 19,
      overTime: 'Replaces 4 non-fire mana with 4 fire mana on your playfield.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1}
      ]
    });
  }
}

export default Oxidation;
