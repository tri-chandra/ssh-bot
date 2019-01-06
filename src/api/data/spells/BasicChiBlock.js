import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class BasicChiBlock extends Spell {
  constructor(level) {
    super({
      name: 'Basic Chi Block',
      code: 'basicChiBlock',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Nature,
      shield: 21,
      onBlock: "Replaces a light or nature mana with a chi token.",
      tokens: [Token.Chi],
      unlockAt: [
        { hero: C.Thoben, level: C.Arena5}
      ]
    });
  }
}

export default BasicChiBlock;