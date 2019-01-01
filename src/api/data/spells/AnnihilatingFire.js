import Spell from '../../models/Spell';
import C from '../../models/Constants';

class AnnihilatingFire extends Spell {
  constructor(level) {
    super({
      name: 'Annihilating Fire',
      code: 'annihilatingFire',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 55,
      speed: C.Normal,
      onCast: 'Sets you back to basic spells.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena4 }
      ]
    });
  }
}

export default AnnihilatingFire;
