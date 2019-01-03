import Spell from '../../models/Spell';
import C from '../../models/Constants';

class GlowingSparkles extends Spell {
  constructor(level) {
    super({
      name: 'Glowing Sparkles',
      code: 'glowingSparkles',
      type: C.Damagespell,
      tier: C.Basic,
      element: C.Fire,
      damage: 6,
      speed: C.Fast,
      count: 4,
      unlockAt: [
        { hero: C.Jane, level: C.Arena1}
      ]
    });
  }
}

export default GlowingSparkles;