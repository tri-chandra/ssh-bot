import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class Meltdown extends Spell {
  constructor(level) {
    super({
      name: 'Meltdown',
      code: 'meltdown',
      type: C.Damagespell,
      tier: C.Advanced,
      element: C.Earth,
      breakPower: 25,
      fixedDamage: 25,
      speed: C.Fast,
      onCast: 'You get a weakness token on your playfield.',
      onHit: 'Removes elements of the dominant color from opponent\'s playfield until both colors are even numbered. The opponent takes %dmg% damage for each removed element.',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.RaJu, level: C.Arena7 },
      ]
    });
  }
}

export default Meltdown;