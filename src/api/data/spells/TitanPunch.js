import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class TitanPunch extends Spell {
  constructor(level) {
    super({
      name: 'Titan Punch',
      code: 'titanPunch',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Earth,
      damage: 29,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Destroys 2 elements on the opponent\'s playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena4 },
        { hero: C.VanRaven, level: C.Arena8 },
      ]
    });
  }
}

export default TitanPunch;
