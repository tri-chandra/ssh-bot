import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class StoneSkin extends Spell {
  constructor(level) {
    super({
      name: 'Stone Skin',
      code: 'stoneSkin',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Earth,
      heal: 14,
      onCast: 'You get a weakness token on your playfield. Removes a token from your playfield.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena1 },
        { hero: C.Ray, level: C.Arena7 },
      ]
    });
  }
}

export default StoneSkin;
