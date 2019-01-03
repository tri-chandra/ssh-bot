import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class IronClaw extends Spell {
  constructor(level) {
    super({
      name: 'Iron Claw',
      code: 'ironClaw',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Earth,
      damage: 57,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena6 },
      ]
    });
  }
}

export default IronClaw;
