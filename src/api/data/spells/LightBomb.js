import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class LightBomb extends Spell {
  constructor(level) {
    super({
      name: 'Light Bomb',
      code: 'lightBomb',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Light,
      breakPower: 48,
      speed: C.Instant,
      target: C.AllPlayers,
      onHit: 'Both players get a blindness token.',
      tokens: [Token.Blindness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena7 },
      ]
    });
  }
}

export default LightBomb;