import Spell from '../../models/Spell';
import C from '../../models/Constants';

class AncestralOmen extends Spell {
  constructor(level) {
    super({
      name: 'Ancestral Omen',
      code: 'ancestralOmen',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Light,
      damage: 25,
      speed: C.Fast,
      count: 3,
      onHit: "Removes a mana from the opponent's playfield and you get a light mana on your playfield.",
      unlockAt: [
        { hero: C.Lua, level: C.Arena1 }
      ]
    });
  }
}

export default AncestralOmen;