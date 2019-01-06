import Spell from '../../models/Spell';
import C from '../../models/Constants';

class BurningBoomerang extends Spell {
  constructor(level) {
    super({
      name: 'Burning Boomerang',
      code: 'burningBoomerang',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 12,
      speed: C.Normal,
      onBlock: 'You get the Burning Boomerang spell back on your playfield.',
      unlockAt: [
        { hero: C.Tierra, level: C.Arena6},
        { hero: C.Myris, level: C.Arena4},
      ]
    });
  }
}

export default BurningBoomerang;
