import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SunGuard extends Spell {
  constructor(level) {
    super({
      name: 'Sun Guard',
      code: 'sunGuard',
      type: C.OvertimeSpell,
      tier: C.Ultimate,
      element: C.Light,
      shield: 75,
      onBlock: "You get a random ultimate spell with level %lvl% on your playfield. returns the first blocked spell to the opponent's playfield.",
      unlockAt: [
        { hero: C.Thoben, level: C.Arena4}
      ]
    });
  }
}

export default SunGuard;