import Spell from '../../models/Spell';
import C from '../../models/Constants';

class OblivionCloud extends Spell {
  constructor(level) {
    super({
      name: 'Oblivion Cloud',
      code: 'oblivionCloud',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Nature,
      breakPower: 42,
      speed: C.Slow,
      onHit: 'Sets your opponent bacck to basic spells.',
      unlockAt: [
        { hero: C.Asgard, level: C.Arena9 },
      ]
    });
  }
}

export default OblivionCloud;
