import Token from './Token';

export default {
  Bleed: new Token(
    'Bleed token',
    'Deals %dmg% damage over time. Effect happens when the token is on the playfield.',
    50,
  ),
  Blindness: new Token(
    'Blindness token',
    'Casting spells doesn\'t charge the spell charge bar. Effect happens when the token is on the playfield.',
    0,
  ),
  Chi: new Token(
    'Chi token',
    'Increases the power of a spell by 25%. Removed from the playfield if the owner takes damage. Needs to be matched with a spell of the same color to activate its effect.',
    0,
  ),
  CrystalNet: new Token(
    'Crystal Net token',
    'No new elements drop on the playfield. Effect happens when the token is on the playfield.',
    0,
  ),
  Energize: new Token(
    'Energize token',
    'Increases the power of a nature healing spell by %dmg%. Needs to be matched with a nature healing spell to activate its effect.',
    30,
  ),
  FireMark: new Token(
    'Fire Mark token',
    'If the owner takes damage the token timer is reset and there is a 25% chance that the owner takes %dmg% damage. Effect happens when the token is on the playfield.',
    50,
  ),
  Fury: new Token(
    'Fury token',
    'Removes the cast time of a spell. Token timer is reset is a fire spell is cast. Effect happens when the token is on the playfield.',
    0,
  ),
  Ghost: new Token(
    'Ghost token',
    'If another ghost token is adjacent the token timer stops. Effect happens when the token is on the playfield.',
    0,
  ),
  Heat: new Token(
    'Heat token',
    'Increases the power of a fire spell by 15. Needs to be matched with a fire spell to activate its effect.',
    15,
  ),
  Ice: new Token(
    'Ice token',
    'Blocks a space on the playfield. If the playfield is cleared because no actions are possible, the token is removed and deals %dmg% to the owner.',
    100,
  ),
  Immortality: new Token(
    'Immortality token',
    'Protects from dying. Token timer starts if the player\'s energy is down to zero. Effect happens when the token is on the playfield.',
    0,
  ),
  Instability: new Token(
    'Instability token',
    'Reduces the power of shield spells to 25%. Effect happens when the token is on the playfield.',
    0,
  ),
  Poison: new Token(
    'Poison token',
    'Deals %dmg% damage to the owner. Activates its effect when the token is on the playfield and timed out.',
    1000,
  ),
  Rage: new Token(
    'Rage token',
    'Adds 4 fire mana to a fire spell. Needs to be matched with a fire spell to activate its effect.',
    0,
  ),
  Sickness: new Token(
    'Sickness token',
    'If healed, the owner takes the heal power as damage instead. Effect happens when the token is on the playfield.',
    0,
  ),
  Spirit: new Token(
    'Spirit token',
    'Increases the power of all spells by +%dmg% for each adjacent other spirit token. Effect happens when the token is on the playfield.',
    3,
  ),
  Strength: new Token(
    'Strength token',
    'Doubles the power of an earth spell, but by no more than %dmg%. Needs to be matched with an earth spell to activate its effect.',
    350
  ),
  Stunned: new Token(
    'Stunned token',
    'Makes casting spells painfully slow. Effect happens when the token is on the playfield.',
    0,
  ),
  Trap: new Token(
    'Hunter\'s trap',
    'If the token reaches the bottom row it is destroyed and deals %dmg% damage. Effect happens when the token is on the playfield.',
    200,
  ),
  Water: new Token(
    'Water token',
    'Blocks a space on the playfield. Token timer starts when the token reaches the bottom row.',
    0,
  ),
  Weakness: new Token(
    'Weakness token',
    'Halves the power of all spells. Efect happens when the token is on the playfield.',
    0,
  ),
};
