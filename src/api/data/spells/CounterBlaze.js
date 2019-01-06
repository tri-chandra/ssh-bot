import Spell from '../../models/Spell';
import C from '../../models/Constants';

class CounterBlaze extends Spell {
  constructor(level) {
    super({
      name: 'Counter Blaze',
      code: 'counterBlaze',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 16,
      onHit: 'Destroys the most recent dropped spell on the opponent\'s playfield.',
      unlockAt: [
        { hero: C.Myris, level: C.Arena4 },
        { hero: C.VanRaven, level: C.Arena7 },
      ]
    });
  }
}

export default CounterBlaze;
