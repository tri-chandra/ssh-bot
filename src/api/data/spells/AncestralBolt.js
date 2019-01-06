import Spell from '../../models/Spell';
import C from '../../models/Constants';

class AncestralBolt extends Spell {
  constructor(level) {
    super({
      name: 'Ancestral Bolt',
      code: 'ancestralBolt',
      type: C.damageSpell,
      tier: C.Basic,
      element: C.Light,
      damage: 10,
      speed: C.Fast,
      onHit: "Removes a mana from the opponent's playfield and you get a light mana on your playfield.",
      unlockAt: [
        { hero: C.Lua, level: C.Arena1 }
      ]
    });
  }
}

export default AncestralBolt;