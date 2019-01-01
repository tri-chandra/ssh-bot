import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class BasicFirstStrike extends Spell {
  constructor(level) {
    super({
      name: 'Basic First Strike',
      code: 'basicFirstStrike',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Earth,
      damage: 15,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield. Damage power is x4 if no player took damage yet.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena7 },
      ]
    });
  }
}

export default BasicFirstStrike;
