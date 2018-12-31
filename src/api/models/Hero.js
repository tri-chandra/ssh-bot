import Spells from '../data/spells';

class Hero {
  constructor(name, title, elements, spells) {
    this.name = name;
    this.title = title;
    this.elements = elements;
    this.spells = spells;
  }

  static spellMapper(hero, tier) {
    return Object.keys(Spells)
      .filter(
        key => key.includes(`${hero}:${tier}:`)
      ).map(
        key => Spells[key]
      );
  }

  getEnergy() {
    
  }
}

export default Hero;