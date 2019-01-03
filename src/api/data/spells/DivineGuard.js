import Spell from '../../models/Spell';
import C from '../../models/Constants';

class DivineGuard extends Spell {
  constructor(level) {
    super({
      name: 'Divine Guard',
      code: 'divineGuard',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Light,
      shield: 18,
      onBlock: 'Charges your spell charge bar by 2.',
      unlockAt: [
        { hero: C.Ray, level: C.Arena8 },
      ]
    });
  }
}

export default DivineGuard;