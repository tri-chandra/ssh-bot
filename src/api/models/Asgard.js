import Hero from './Hero';
import SpellSet from './SpellSet';
import C from './Constants';

class Asgard extends Hero {
  constructor() {
    super(
      'Asgard', 'the Golem',
      [C.Nature, C.Earth], 
      new SpellSet(
        Hero.spellMapper(C.Asgard, C.Basic),
        Hero.spellMapper(C.Asgard, C.Advanced),
        Hero.spellMapper(C.Asgard, C.Elite),
        Hero.spellMapper(C.Asgard, C.Ultimate)
      ));
  }
}

export default Asgard;