import Hero from './Hero';
import SpellSet from './SpellSet';
import C from './Constants';

class Myris extends Hero {
  constructor() {
    super(
      'Myris', 'The Mage',
      [C.Fire, C.Nature], 
      new SpellSet(
        Hero.spellMapper(C.Myris, C.Basic),
        Hero.spellMapper(C.Myris, C.Advanced),
        Hero.spellMapper(C.Myris, C.Elite),
        Hero.spellMapper(C.Myris, C.Ultimate)
      ));
  }
}

export default Myris;