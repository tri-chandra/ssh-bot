import Spell from '../../models/Spell';
import C from '../../models/Constants';

class LightRapier extends Spell {
  constructor(level) {
    super({
      name: 'Light Rapier',
      code: 'lightRapier',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Light,
      damage: 24,
      speed: C.Fast,
      onHit: 'You get another Light Rapier spell on your playfield.',
      unlockAt: [
        { hero: C.Tierra, level: C.Arena4 }
      ]
    });
  }
}

export default LightRapier;