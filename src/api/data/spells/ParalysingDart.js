import Spell from '../../models/Spell';
import C from '../../models/Constants';

class ParalysingDart extends Spell {
  constructor(level) {
    super({
      name: 'Paralysing Dart',
      code: 'paralysingDart',
      type: C.Damagespell,
      tier: C.Basic,
      element: C.Nature,
      breakPower: 17,
      speed: C.Fast,
      onHit: "Destorys a basic or advanced attack spell on the opponent's playfield.",
      unlockAt:[
       { hero: C.Jane, level: C.Arena1 },
       { hero: C.Asgard, level: C.Arena8 }
      ]
    });
  }
}

export default ParalysingDart;
