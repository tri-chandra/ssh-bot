import Spell from '../../models/Spell';
import C from '../../models/Constants';

class CircleOfProtection extends Spell {
  constructor(level) {
    super({
      name: 'Circle Of Protection',
      code: 'circleOfProtection',
      type: C.OvertimeSpell,
      tier: C.Elite,
      element: C.Nature,
      shield: 40,
      onTimeout: "You get another Circle of Protection spell on your playfield.",
      unlockAt: [
        { hero: C.Lua, level: C.Arena7 }
      ]
    });
  }
}

export default CircleOfProtection;