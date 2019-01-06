import Spell from '../../models/Spell';
import C from '../../models/Constants';

class ToxicShield extends Spell {
  constructor(level) {
    super({
      name: 'Toxic Shield',
      code: 'toxicShield',
      type: C.OvertimeSpell,
      tier: C.Ultimate,
      element: C.Nature,
      shield: 60,
      onBlock: 'Fires a damage projectile at your opponent that deals damage in the amount you have blocked.',
      unlockAt: [
        { hero: C.Myris, level: C.Arena1 },
      ]
    });
  }
}

export default ToxicShield;
