import Spell from '../../models/Spell';
import C from '../../models/Constants';

class SpectralGhost extends Spell {
  constructor(level) {
    super({
      name: 'Spectral Ghost',
      code: 'spectralGhost',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Light,
      damage: 11,
      speed: C.Fast,
      onHit: "You get the Spectral Ghost spell back on your playfield.",
      unlockAt: [
        { hero: C.Tierra, level: C.Arena4}
      ]
    });
  }
}

export default SpectralGhost;