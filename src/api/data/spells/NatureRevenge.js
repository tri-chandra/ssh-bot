import Spell from '../../models/Spell';
import C from '../../models/Constants';

class NatureRevenge extends Spell {
  constructor(level) {
    super({
      name: 'Nature\'s Revenge',
      code: 'naturesRevenge',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Nature,
      breakPower: 43,
      fixedDamage: 700,
      speed: C.Fast,
      onHit: 'Deals as much damage as you have lost from the last hit, but no more than %dmg%',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena4 }
      ]
    });
  }
}

export default NatureRevenge;
