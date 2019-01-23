import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class FrostArrows extends Spell {
  constructor(level) {
    super({
      name: 'Frost Arrows',
      code: 'frostArrows',
      type: C.Damagespell,
      tier: C.Elite,
      element: C.Water,
      damage: 13,
      count: 4,
      speed: C.Fast,
      onHit: 'Replaces a water token with an ice token on the opponent\'s playfield.',
      tokens: [Token.Water, Token.Ice],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena7 },
      ]
    });
  }
}

export default FrostArrows;