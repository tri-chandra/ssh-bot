import Spell from '../../models/Spell';
import C from '../../models/Constants';

class AngelicGuard extends Spell {
  constructor(level) {
    super({
      name: 'Angelic Guard',
      code: 'angelicGuard',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Light,
      shield: 48,
      onBlock: 'You get a light mana on your playfield.',
      unlockAt: [
        { hero: C.Ray, level: C.Arena1 },
        { hero: C.Thoben, level: C.Arena3 },
      ]
    });
  }
}

export default AngelicGuard;
