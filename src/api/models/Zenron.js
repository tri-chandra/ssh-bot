import Hero from './Hero';
import SpellSet from './SpellSet';
import C from './Constants';

class Zenron extends Hero {
  constructor() {
    super(
      'Zenron', 'The Sorcerer',
      [C.Fire, C.Nature], 
      new SpellSet(
        Hero.spellMapper(C.Zenron, C.Basic),
        Hero.spellMapper(C.Zenron, C.Advanced),
        Hero.spellMapper(C.Zenron, C.Elite),
        Hero.spellMapper(C.Zenron, C.Ultimate)
      ));
  }
}

export default Zenron;