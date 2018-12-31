import Spell from '../../models/Spell';
import C from '../../models/Constants';

class FireBomb extends Spell {
  constructor(level) {
    super({
      name: 'Fire Bomb',
      code: 'fireBomb',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 27,
      speed: C.Normal,
      onBlock: 'If the fire bomb is blocked, you take the damage instead',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena3}
      ]
    });
  }
}

export default FireBomb;