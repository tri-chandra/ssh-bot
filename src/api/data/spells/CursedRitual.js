import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class CursedRitual extends Spell {
  constructor(level) {
    super({
      name: 'Cursed Ritual',
      code: 'cursedRitual',
      type: C.OvertimeSpell,
      tier: C.Ultimate,
      element: C.Nature,
      resistance: 65,
      fixedDamage: 500,
      onCast: 'Both players get an immortallity token.',
      overTime: 'Both players lose %dmg% energy.',
      tokens: [Token.Immortality],
      unlockAt: [
        { hero: C.Lua, level: C.Arena8 }
      ]
    });
  }
}

export default CursedRitual;