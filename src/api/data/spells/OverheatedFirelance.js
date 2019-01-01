import Spell from '../../models/Spell';
import C from '../../models/Constants';

class OverheatedFirelance extends Spell {
  constructor(level) {
    super({
      name: 'Overheated Firelance',
      code: 'overheatedFirelance',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Fire,
      damage: 40,
      speed: C.Normal,
      onCast: 'Does NOT charge your spell charge bar.',
      unlockAt: [
        { hero: C.Zenron, level: C.Arena5 }
      ]
    });
  }
}

export default OverheatedFirelance;
