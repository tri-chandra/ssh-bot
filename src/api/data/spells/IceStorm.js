import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class IceStorm extends Spell {
  constructor(level) {
    super({
      name: 'Ice Storm',
      code: 'iceStorm',
      type: C.OvertimeSpell,
      tier: C.Ultimate,
      element: C.Water,
      breakPower: 37,
      fixedDamage: 200,
      target: C.AllPlayers,
      overTime: 'Deals %dmg% to each player for each ice token on their own playfield.',
      tokens: [Token.Ice],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena8 },
      ]
    });
  }
}

export default IceStorm;