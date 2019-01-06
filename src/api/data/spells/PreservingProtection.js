import Spell from '../../models/Spell';
import C from '../../models/Constants';

class PreservingProtection extends Spell {
  constructor(level) {
    super({
      name: 'Preserving Protection',
      code: 'preservingProtection',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Nature,
      shield: 20,
      onBlock: 'Restores your energy in the amount you have blocked.',
      unlockAt: [
        { hero: C.Lua, level: C.Arena7 }
      ]
    });
  }
}

export default PreservingProtection;