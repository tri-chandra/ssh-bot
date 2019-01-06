import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SkyGuard extends Spell {
  constructor(level) {
    super({
      name: 'Sky Guard',
      code: 'skyGuard',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Light,
      shield: 44,
      onBlock: "You get a random attack spell with level %lvl% from your spell deck on your playfield.",
      unlockAt: [
        { hero: C.Thoben, level: C.Arena5},
        { hero: C.Tierra, level: C.Arena6}
      ]
    });
  }
}

export default SkyGuard;