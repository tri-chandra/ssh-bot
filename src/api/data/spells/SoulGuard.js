import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SoulGuard extends Spell {
  constructor(level) {
    super({
      name: 'Soul Guard',
      code: 'soulGuard',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Light,
      shield: 23,
      onBlock: 'You get a random attack spell with level %lvl% from your spell deck on your playfield.',
      unlockAt: [
        { hero: C.Thoben, level: C.Arena4}
      ]
    });
  }
}

export default SoulGuard;