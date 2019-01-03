import Spell from '../../models/Spell';
import C from '../../models/Constants';

class BlessedAura extends Spell {
  constructor(level) {
    super({
      name: 'Blessed Aura',
      code: 'blessedAura',
      type: C.HealSpell,
      tier: C.Basic,
      element: C.Light,
      heal: 30,
      target: C.AllPlayers,
      onCast: 'Both players get a light mana.',
      unlockAt: [
        { hero: C.Ray, level: C.Arena9 },
      ]
    });
  }
}

export default BlessedAura;
