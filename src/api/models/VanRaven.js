import Hero from './Hero';
import SpellSet from './SpellSet';
import C from './Constants';

class VanRaven extends Hero {
  constructor() {
    super(
      'vanraven', 'Van Raven', 'The Witch Hunter',
      [C.Fire, C.Earth], 
      new SpellSet(
        Hero.spellMapper(C.VanRaven, C.Basic),
        Hero.spellMapper(C.VanRaven, C.Advanced),
        Hero.spellMapper(C.VanRaven, C.Elite),
        Hero.spellMapper(C.VanRaven, C.Ultimate)
      ));
  }
}

export default VanRaven;
