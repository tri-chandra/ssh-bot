import Spell from '../../models/Spell';
import C from '../../models/Constants';

class AncestralStrike extends Spell {
  constructor(level) {
    super({
      name: 'Ancestral Strike',
      code: 'ancestralStrike',
      type: C.damageSpell,
      tier: C.Advanced,
      element: C.Light,
      damage: 20,
      speed: C.Fast,
      onHit: "Removes a mana from the opponent's playfield and you get a light mana on your playfield.",
      unlockAt: [
        { hero: C.Lua, level: C.Arena1 }
      ]
    });
  }
}

export default AncestralStrike;