import Spell from '../../models/Spell';
import C from '../../models/Constants';
import Token from '../tokens';

class FireMarkShot extends Spell {
  constructor(level) {
    super({
      name: 'Fire Mark Shot',
      code: 'fireMarkShot',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Fire,
      damage: 32,
      speed: C.Fast,
      onCast: 'Damage power is x5 if your opponent has more than 2 fire mark tokens on the playfield.',
      tokens: [Token.FireMark],
      unlockAt: [
        { hero: C.Tierra, level: C.Arena9 }
      ]
    });
  }
}

export default FireMarkShot;