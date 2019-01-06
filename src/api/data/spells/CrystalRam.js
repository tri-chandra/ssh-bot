import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class CrystalRam extends Spell {
  constructor(level) {
    super({
      name: 'Crystal Ram',
      code: 'crystalRam',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Earth,
      damage: 38,
      speed: C.Slow,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Destroys ALL shield spells on the opponent\'s playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena8 },
      ]
    });
  }
}

export default CrystalRam;
