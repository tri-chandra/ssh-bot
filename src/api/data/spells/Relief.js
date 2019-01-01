import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Relief extends Spell {
  constructor(level) {
    super({
      name: 'Relief',
      code: 'relief',
      type: C.HealSpell,
      tier: C.Advanced,
      element: C.Nature,
      heal: 11,
      onCast: 'Destroys a negative token on your playfield.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena3 }
      ]
    });
  }
}

export default Relief;
