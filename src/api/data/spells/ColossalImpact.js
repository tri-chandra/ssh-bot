import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class ColossalImpact extends Spell {
  constructor(level) {
    super({
      name: 'Colossal Impact',
      code: 'colossalImpact',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Earth,
      breakPower: 44,
      fixedDamage: 100,
      speed: C.Fast,
      target: C.AllPlayers,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Delas %dmg% to each player for each token on their own playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena8 },
      ]
    });
  }
}

export default ColossalImpact;