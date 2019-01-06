import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class CrystalStriking extends Spell {
  constructor(level) {
    super({
      name: 'Crystal Striking',
      code: 'crystalStriking',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Earth,
      damage: 20,
      count: 3,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Destroys one of the topmost elements on the opponent\'s playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena4 },
      ]
    });
  }
}

export default CrystalStriking;
