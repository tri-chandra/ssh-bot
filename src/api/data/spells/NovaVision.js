import Spell from '../../models/Spell';
import C from '../../models/Constants';

class NovaVision extends Spell {
  constructor(level) {
    super({
      name: 'Nova Vision',
      code: 'novaVision',
      type: C.OvertimeSpell,
      tier: C.Basic,
      element: C.Fire,
      resistance: 13,
      damage: 1000,
      onTimeout: 'You get 2 basic or advanced fire spells with level %lvl% from your spell deck on your playfield.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena8},
        { hero: C.Tierra, level: C.Arena7}
      ]
    });
  }
}

export default NovaVision;