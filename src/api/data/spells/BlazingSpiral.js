import Spell from '../../models/Spell';
import C from '../../models/Constants';

class BlazingSpiral extends Spell {
  constructor(level) {
    super({
      name: 'Blazing Spiral',
      code: 'none',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Fire,
      damage: 12,
      speed: C.Fast,
      onCast: "You get another Blazing Spiral spell on your playfield that is one level higher.",
      unlockAt: [
        { hero: C.Jane, level: C.Arena3}
      ]
    });
  }
}

export default BlazingSpiral;