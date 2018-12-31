import Spell from '../../models/Spell';
import C from '../../models/Constants';

class FlameCannon extends Spell {
  constructor(level) {
    super({
      name: 'Flame Cannon',
      code: 'flameCannon',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Fire,
      damage: 10,
      speed: C.Normal,
      onCast: 'Doubles the power for each additional Flame Cannon spell that is matched into this spell.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena1},
      ]
    });
  }
}

export default FlameCannon;