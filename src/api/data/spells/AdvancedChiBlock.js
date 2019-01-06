import Spell from '../../models/Spell';
import C from '../../models/Constants';

class AdvancedChiBlock extends Spell {
  constructor(level) {
    super({
      name: 'Advanced ChiBlock',
      code: 'advancedChiBlock',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Nature,
      shield: 34,
      onBlock: "Replaces a light or nature mana with a chi token.",
      unlockAt: [
        { hero: C.Thoben, level: C.Arena7}
      ]
    });
  }
}

export default AdvancedChiBlock;