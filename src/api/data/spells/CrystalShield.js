import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class CrystalShield extends Spell {
  constructor(level) {
    super({
      name: 'Crystal Shield',
      code: 'crystalShield',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Earth,
      shield: 68,
      onCast: 'You get a weakness token on your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena6 },
        { hero: C.RaJu, level: C.Arena1 },
        { hero: C.VanRaven, level: C.Arena1 },
        { hero: C.Ray, level: C.Arena6 },
      ]
    });
  }
}

export default CrystalShield;
