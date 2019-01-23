import Spell from '../../models/Spell';
import C from '../../models/Constants';

class Coalescence extends Spell {
  constructor(level) {
    super({
      name: 'Coalescence',
      code: 'coalescence',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Nature,
      resistance: 31,
      fixedDamage: 700,
      target: C.AllPlayers,
      ontimeout: 'Sets the energy of BOTH players to 25%, but by no more than %dmg%.',
      unlockAt: [
        { hero: C.Myris, level: C.Arena9},
      ]
    });
  }
}

export default Coalescence;
