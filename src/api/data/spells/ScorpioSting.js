import Spell from '../../models/Spell';
import C from '../../models/Constants';

class ScorpioSting extends Spell {
  constructor(level) {
    super({
      name: 'Scorpio Sting',
      code: 'scorpioSting',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Nature,
      breakPower: 43,
      speed: C.Fast,
      onHit: "Destroys an element and all connected elements of the same color on the opponent's playfield.",
      unlockAt: [
        { hero: C.Jane, level: C.Arena9 },
        { hero: C.Asgard, level: C.Arena9 },
        { hero: C.Lua, level: C.Arena9 },
      ]
    });
  }
}

export default ScorpioSting;
