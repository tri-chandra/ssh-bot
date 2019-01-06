import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class TerraSlam extends Spell {
  constructor(level) {
    super({
      name: 'Terra Slam',
      code: 'terraSlam',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Earth,
      breakPower: 56,
      fixedDamage: 50,
      speed: C.Instant,
      onCast: 'You get a weakness token on your playfield.',
      onBreak: 'If Terra Slam breaks a spell it deals %dmg% damage to your opponent.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Asgard, level: C.Arena1 },
      ]
    });
  }
}

export default TerraSlam;
