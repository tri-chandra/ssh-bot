import Spell from '../../models/Spell';
import C from '../../models/Constants';

class BigShield extends Spell {
  constructor(level) {
    super({
      name: 'Big Shield',
      code: 'bigShield',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Nature,
      damage: 36,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1}
      ]
    });
  }
}

export default BigShield;
