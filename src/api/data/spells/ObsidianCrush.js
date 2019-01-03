import Spell from '../../models/Spell';
import Token from '../tokens';
import C from '../../models/Constants';

class ObsidianCrush extends Spell {
  constructor(level) {
    super({
      name: 'Obsidian Crush',
      code: 'obsidianCrush',
      type: C.damageSpell,
      tier: C.Ultimate,
      element: C.Earth,
      damage: 98,
      speed: C.Normal,
      onCast: 'You get a weakness token on your playfield. Damage can\'t be higher than your energy',
      tokens: [Token.Weakness],
      unlockAt: [
        { hero: C.Ray, level: C.Arena9 },
      ]
    });
  }
}

export default ObsidianCrush;
