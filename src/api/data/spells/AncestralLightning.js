import Spell from '../../models/Spell';
import C from '../../models/Constants';

class AncestralLightning extends Spell {
  constructor(level) {
    super({
      name: 'Ancestral Lightning',
      code: 'ancestralLightning',
      type: C.damageSpell,
      tier: C.Elite,
      element: C.Light,
      damage: 22,
      speed: C.Fast,
      count: 2,
      onHit: "Removes a mana from the opponent's playfield and you get a light mana on your playfield.",
      unlockAt: [
        { hero: C.Lua, level: C.Arena1 }
      ]
    });
  }
}

export default AncestralLightning;