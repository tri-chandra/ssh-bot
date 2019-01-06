import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Firelance extends Spell {
  constructor(level) {
    super({
      name: 'Firelance',
      code: 'firelance',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 30,
      speed: C.Normal,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1 },
        { hero: C.Myris, level: C.Arena1 },
      ]
    });
  }
}

export default Firelance;
