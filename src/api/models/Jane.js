import Hero from './Hero';
import SpellSet from './SpellSet';
import C from './Constants';

class Jane extends Hero {
  constructor() {
    super(
      'jane', 'Jane', 'The Witch',
      [C.Fire, C.Nature], 
      new SpellSet(
        Hero.spellMapper(C.Jane, C.Basic),
        Hero.spellMapper(C.Jane, C.Advanced),
        Hero.spellMapper(C.Jane, C.Elite),
        Hero.spellMapper(C.Jane, C.Ultimate)
      ));
  }
}

export default Jane;
