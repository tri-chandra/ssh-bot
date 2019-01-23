import Hero from './Hero';
import SpellSet from './SpellSet';
import C from './Constants';

class RaJu extends Hero {
  constructor() {
    super(
      'raju', 'Ra\'Ju', 'The Aquarian',
      [C.Earth, C.Water], 
      new SpellSet(
        Hero.spellMapper(C.RaJu, C.Basic),
        Hero.spellMapper(C.RaJu, C.Advanced),
        Hero.spellMapper(C.RaJu, C.Elite),
        Hero.spellMapper(C.RaJu, C.Ultimate)
      ));
  }
}

export default RaJu;
