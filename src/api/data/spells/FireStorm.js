import Spell from '../../models/Spell';
import C from '../../models/Constants';

class FireStorm extends Spell {
  constructor(level) {
    super({
      name: 'Fire Storm',
      code: 'fireStorm',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 27,
      speed: C.Instant,
      target: C.AllPlayers,
      onHit: 'Destroys 2 tokens on BOTH playfields.',
      unlockAt: [
        { hero: C.Myris, level: C.Arena6 },
        { hero: C.VanRaven, level: C.Arena7 },
      ]
    });
  }
}

export default FireStorm;
