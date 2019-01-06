import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SnakeSummon extends Spell {
  constructor(level) {
    super({
      name: 'Snake Summon',
      code: 'snakeSummon',
      type: C.OvertimeSpell,
      tier: C.Ultimate,
      element: C.Nature,
      resistance: 30,
      breakPower: 29,
      fixedDamage: 1000,
      onTimeout: 'Summons a snake that attacks your opponent and deals %dmg%.',
      unlockAt: [
        { hero: C.Myris, level: C.Arena5 },
      ]
    });
  }
}

export default SnakeSummon;
