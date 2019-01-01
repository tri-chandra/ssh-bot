import Spell from '../../models/Spell';
import C from '../../models/Constants';

class BurningSlam extends Spell {
  constructor(level) {
    super({
      name: 'Burning Slam',
      code: 'burningSlam',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Fire,
      breakPower: 34,
      speed: C.Fast,
      onHit: 'Deals as much damage to your opponent as you have energy.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena9 }
      ]
    });
  }
}

export default BurningSlam;
