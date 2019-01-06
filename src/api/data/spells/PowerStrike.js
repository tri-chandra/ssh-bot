import Spell from '../../models/Spell';
import C from '../../models/Constants';

class PowerStrike extends Spell {
  constructor(level) {
    super({
      name: 'Power Strike',
      code: 'powerStrike',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Light,
      damage: 32,
      speed: C.Fast,
      onCast: 'Damage power is x3 if you have more energy than your opponent.',
      unlockAt: [
        { hero: C.Thoben, level: C.Arena6}
      ]
    });
  }
}

export default PowerStrike;