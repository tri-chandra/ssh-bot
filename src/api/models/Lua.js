import Hero from './Hero';
import SpellSet from './SpellSet';
import C from './Constants';

class Lua extends Hero {
  constructor() {
    super(
      'lua', 'Lua', 'The Shaman',
      [C.Nature, C.Light], 
      new SpellSet(
        Hero.spellMapper(C.Lua, C.Basic),
        Hero.spellMapper(C.Lua, C.Advanced),
        Hero.spellMapper(C.Lua, C.Elite),
        Hero.spellMapper(C.Lua, C.Ultimate)
      ));
  }
}

export default Lua;
