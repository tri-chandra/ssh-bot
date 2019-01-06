import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class PoisonedRain extends Spell {
  constructor(level) {
    super({
      name: 'Poisoned Rain',
      code: 'poisonedRain',
      type: C.OvertimeSpell,
      tier: C.Ultimate,
      element: C.Nature,
      resistance: 58,
      fixedDamage: 1000,
      onTimeout: 'BOTH players get a poison token that deals %dmg% damage.',
      target: C.AllPlayers,
      tokens: [Token.Poison],
      unlockAt: [
        { hero: C.Myris, level: C.Arena9 },
      ]
    });
  }
}

export default PoisonedRain;
