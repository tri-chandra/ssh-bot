import Spell from '../../models/Spell';
import C from '../../models/Constants';

class HeroicGuard extends Spell {
  constructor(level) {
    super({
      name: 'Heroic Guard',
      code: 'heroicGuard',
      type: C.OvertimeSpell,
      tier: C.Advanced,
      element: C.Light,
      shield: 28,
      onblock: 'You get a light mana on your playfield.',
      unlockAt: [
        { hero: C.Tierra, level: C.Arena1},
        { hero: C.Ray, level: C.Arena8 },
      ]
    });
  }
}

export default HeroicGuard;