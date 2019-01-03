import Spell from '../../models/Spell';
import C from '../../models/Constants';

class EternalFlares extends Spell {
  constructor(level) {
    super({
      name: 'Eternal Flares',
      code: 'eternalFlares',
      type: C.OvertimeSpell,
      tier: C.Ultimate,
      element: C.Light,
      damage: 3,
      speed: C.Fast,
      count: 20,
      onHit: 'You get a light mana on your playfield.',
      unlockAt: [
        { hero: C.Ray, level: C.Arena8 },
      ]
    });
  }
}

export default EternalFlares;
