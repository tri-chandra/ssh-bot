import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Explosion extends Spell {
  constructor(level) {
    super({
      name: 'Explosion',
      code: 'explosion',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Fire,
      damage: 85,
      speed: C.Instant,
      target: C.AllPlayers,
      onHit: 'Fills BOTH playfields with bleed tokens.',
      tokens: [Token.Bleed],
      unlockAt: [
        { hero: C.Myris, level: C.Arena7},
      ]
    });
  }
}

export default Explosion;
