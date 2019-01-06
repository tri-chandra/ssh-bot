import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class TerraRavage extends Spell {
  constructor(level) {
    super({
      name: 'Terra Ravage',
      code: 'terraRavage',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Earth,
      damage: 65,
      speed: C.Slow,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena1 },
      ]
    });
  }
}

export default TerraRavage;
