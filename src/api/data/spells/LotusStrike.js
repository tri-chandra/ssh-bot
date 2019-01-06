import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class LotusStrike extends Spell {
  constructor(level) {
    super({
      name: 'Lotus Strike',
      code: 'lotusStrike',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Nature,
      breakPower: 15,
      speed: C.Fast,
      onHit: 'Your opponent gets a sickness token.',
      tokens: [Token.Sickness],
      unlockAt: [
        { hero: C.Myris, level: C.Arena7},
      ]
    });
  }
}

export default LotusStrike;
