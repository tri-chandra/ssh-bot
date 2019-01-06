import Spell from '../../models/Spell';
import C from '../../models/Constants';

class NobleGuard extends Spell {
  constructor(level) {
    super({
      name: 'Noble Guard',
      code: 'nobleGuard',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Light,
      shield: 13,
      onBlock: 'You get a light mana on your playfield',
      unlockAt: [
        { hero: C.Ray, level: C.Arena8 },
        { hero: C.Thoben, level: C.Arena8 }
      ]
    });
  }
}

export default NobleGuard;