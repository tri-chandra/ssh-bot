import Spell from '../../models/Spell';
import C from '../../models/Constants';

class HealingShield extends Spell {
  constructor(level) {
    super({
      name: 'Healing Shield',
      code: 'healingShield',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Nature,
      shield: 46,
      onBlock: 'Restores your energy in the amount you have blocked.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena9 },
        { hero: C.Myris, level: C.Arena4 },
        { hero: C.Lua, level: C.Arena9 },
      ]
    });
  }
}

export default HealingShield;
