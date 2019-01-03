import Spell from '../../models/Spell';
import Token from '../tokens';
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
      onTimeout: 'Restore 50% of your already lost energy, but no more than 350',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena9},
      ]
    });
  }
}

export default HealingCrystal;
