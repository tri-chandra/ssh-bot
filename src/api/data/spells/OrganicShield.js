import Spell from '../../models/Spell';
import C from '../../models/Constants';

class OrganicShield extends Spell {
  constructor(level) {
    super({
      name: 'Organic Shield',
      code: 'organicShield',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Nature,
      shield: 15,
      onTimeout: 'You get another Organic Shield spell on your playfield.',
      unlockAt: [
        { hero: C.Myris, level: C.Arena5},
      ]
    });
  }
}

export default OrganicShield;
