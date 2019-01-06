import Hero from './Hero';
import SpellSet from './SpellSet';
import C from './Constants';

class Ray extends Hero {
  constructor() {
    super(
      'ray', 'Ray', 'The Paladin',
      [C.Light, C.Earth], 
      new SpellSet(
        Hero.spellMapper(C.Ray, C.Basic),
        Hero.spellMapper(C.Ray, C.Advanced),
        Hero.spellMapper(C.Ray, C.Elite),
        Hero.spellMapper(C.Ray, C.Ultimate)
      ));
  }
}

export default Ray;
