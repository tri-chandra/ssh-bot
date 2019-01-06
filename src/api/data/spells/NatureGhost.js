import Spell from '../../models/Spell';
import C from '../../models/Constants';

class NatureGhost extends Spell {
  constructor(level) {
    super({
      name: 'Nature Ghost',
      code: 'natureGhost',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Nature,
      heal: 6,
      onCast: "You get a nature mana on your playfield.",
      unlockAt: [
        { hero: C.Thoben, level: C.Arena8}
      ]
    });
  }
}

export default NatureGhost;