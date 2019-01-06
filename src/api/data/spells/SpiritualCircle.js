import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class SpiritualCircle extends Spell {
  constructor(level) {
    super({
      name: 'Spiritual Circle',
      code: 'spiritualCircle',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Light,
      resistance: 12,
      overTime: "You get 2 spirit tokens with a strenght of %dmg% on your playfield.",
      tokens: [Token.Spirit],
      unlockAt: [
        { hero: C.Lua, level: C.Arena9 }
      ]
    });
  }
}

export default SpiritualCircle;