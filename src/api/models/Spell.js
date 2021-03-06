class Spell {
  constructor(spell) {
    this.name = spell.name;
    this.code = spell.code;
    this.type = spell.type;
    this.tier = spell.tier;
    this.unlockedAt = spell.unlockAt;

    this.resistance = spell.resistance;
    this.breakPower = spell.breakPower;
    this.shield = spell.shield;
    this.element = spell.element;
    this.damage = spell.damage;
    this.fixedDamage = spell.fixedDamage;
    this.heal = spell.heal;
    this.speed = spell.speed;
    this.count = spell.count;
    this.target = spell.target;

    this.onBlock = spell.onBlock;
    this.onBreak = spell.onBreak;
    this.onCast = spell.onCast;
    this.onTimeout = spell.onTimeout;
    this.onHit = spell.onHit;
    this.overTime = spell.overTime;
    this.tokens = spell.tokens;

    this.sprite = `${this.element.code}/${this.code}.jpg`;
  }

  getUpgradeAmount() {}
  getUpgradeCost() {}
  getTotalUpgradeAmount() {}
  getTotalUpgradeCost() {}
}

export default Spell;
