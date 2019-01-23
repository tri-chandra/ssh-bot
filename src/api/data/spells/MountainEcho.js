import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class MountainEcho extends Spell {
  constructor(level) {
    super({
      name: 'Mountain Echo',
      code: 'mountainEcho',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Earth,
      breakPower: 10,
      fixedDamage: 700,
      speed: C.Fast,
      onCast: 'You get a weakness token on your playfield.',
      onBreak: 'Instantly reflects the break power as damage to your opponent before you take the damage, but no more than %dmg%.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena9 },
      ]
    });
  }
}

export default MountainEcho;