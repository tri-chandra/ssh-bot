import Hero from './Hero';
import SpellSet from './SpellSet';
import C from './Constants';

class Tierra extends Hero {
  constructor() {
    super(
      'Tierra', 'The Huntress',
      [C.Fire, C.Light], 
      new SpellSet(
        Hero.spellMapper(C.Tierra, C.Basic),
        Hero.spellMapper(C.Tierra, C.Advanced),
        Hero.spellMapper(C.Tierra, C.Elite),
        Hero.spellMapper(C.Tierra, C.Ultimate)
      ));
  }
}

export default Tierra;