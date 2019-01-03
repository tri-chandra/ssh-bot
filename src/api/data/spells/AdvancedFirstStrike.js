import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class AdvancedFirstStrike extends Spell {
  constructor(level) {
    super({
      name: 'Advanced First Strike',
      code: 'advancedFirstStrike',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Earth,
      damage: 15,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      onCast: 'Damage power is x10 if no player took damage yet.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena6 },
      ]
    });
  }
}

export default AdvancedFirstStrike;