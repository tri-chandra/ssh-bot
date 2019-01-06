import Hero from './Hero';
import SpellSet from './SpellSet';
import C from './Constants';

class Thoben extends Hero {
  constructor() {
    super(
      'thoben', 'Thoben', 'The Monk',
      [C.Nature, C.Light], 
      new SpellSet(
        Hero.spellMapper(C.Thoben, C.Basic),
        Hero.spellMapper(C.Thoben, C.Advanced),
        Hero.spellMapper(C.Thoben, C.Elite),
        Hero.spellMapper(C.Thoben, C.Ultimate)
      ));
  }
}

export default Thoben;
