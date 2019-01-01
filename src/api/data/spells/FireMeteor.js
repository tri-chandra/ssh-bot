import Spell from '../../models/Spell';
import C from '../../models/Constants';

class FireMeteor extends Spell {
  constructor(level) {
    super({
      name: 'Fire Meteor',
      code: 'fireMeteor',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Fire,
      damage: 78,
      speed: C.Slow,
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1 }
      ]
    });
  }
}

export default FireMeteor;
