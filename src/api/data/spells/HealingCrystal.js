import Spell from '../../models/Spell';
import C from '../../models/Constants';

class HealingCrystal extends Spell {
  constructor(level) {
    super({
      name: 'Healing Crystal',
      code: 'healingCrystal',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Earth,
      resistance: 35,
      onCast: 'You get a weakness token on your playfield',
      ontimeout: 'Restore 50% of your already lost energy, but no more than 350',
      unlockAt: [
        { hero: C.Ray, level: C.Arena1},
      ]
    });
  }
}

export default HealingCrystal;