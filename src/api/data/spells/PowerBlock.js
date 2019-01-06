import Spell from '../../models/Spell';
import C from '../../models/Constants';

class PowerBlock extends Spell {
  constructor(level) {
    super({
      name: 'Power Block',
      code: 'powerBlock',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Nature,
      shield: 25,
      onCast: 'Shield power is x3 if you have more energy than your opponent.',
      unlockAt: [
        { hero: C.Thoben, level: C.Arena6}
      ]
    });
  }
}

export default PowerBlock;