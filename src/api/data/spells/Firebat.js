import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Firebat extends Spell {
  constructor(level) {
    super({
      name: 'Firebat',
      code: 'firebat',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 14,
      speed: C.Normal,
      onHit: 'Destroys a random element on the opponent\'s playfield.',
      unlockAt: [
        { hero: C.Jane, level: C.Arena6 },
        { hero: C.Myris, level: C.Arena4 },
        { hero: C.VanRaven, level: C.Arena6 }
      ]
    });
  }
}

export default Firebat;
