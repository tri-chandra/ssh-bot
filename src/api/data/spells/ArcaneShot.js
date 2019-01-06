import Spell from '../../models/Spell';
import C from '../../models/Constants';

class ArcaneShot extends Spell {
  constructor(level) {
    super({
      name: 'Arcane Shot',
      code: 'arcaneShot',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 9,
      speed: C.Fast,
      onCast: "Charges your spell charge bar twice as much.",
      unlockAt: [
        { hero: C.Tierra, level: C.Arena3}
      ]
    });
  }
}

export default ArcaneShot;