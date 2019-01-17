import { get, set } from '../services/redisProvider';
import { prefix } from '../../config/vars';

function getHero(command) {
  if (['zenron'].includes(command)) {
    return 'zenron';
  } else if (['jane'].includes(command)) {
    return 'jane';
  } else if (['thoben'].includes(command)) {
    return 'thoben';
  } else if (['tierra'].includes(command)) {
    return 'tierra';
  } else if (['vanraven', 'van', 'raven'].includes(command)) {
    return 'vanraven';
  } else if (['asgard'].includes(command)) {
    return 'asgard';
  } else if (['myris'].includes(command)) {
    return 'myris';
  } else if (['ray'].includes(command)) {
    return 'ray';
  } else if (['lua'].includes(command)) {
    return 'lua';
  } else return '';
}

async function getSpellRecord(user, hero, spellCode) {
  let spell = await get(`${user}:${hero}:${spellCode}`);

  if (!spell) spell = { win: 0, lost: 0 };
  else spell = JSON.parse(spell);

  return spell;
}

async function updateSpellRecord(user, hero, spellCode, win, lost) {
  const record = await getSpellRecord(user, hero, spellCode);
  record.win += win;
  record.lost += lost;

  return set(`${user}:${hero}:${spellCode}`, JSON.stringify(record));
}

export default {
  async win(discord, hero) {
    hero = getHero(hero);
    const author = discord.author.id;
    const deckString = await get(`${author}:${hero}`);

    if (!deckString) {
      discord.reply('You have not set a deck for the hero. Type `'+prefix+'deck [hero] [deck_code]` to set a deck.');
      retur;
    }

    updateSpellRecord(author, hero, deckString, 1, 0);

    updateSpellRecord(author, hero, `b${deckString[0]}`, 1, 0);
    updateSpellRecord(author, hero, `b${deckString[1]}`, 1, 0);
    updateSpellRecord(author, hero, `b${deckString[2]}`, 1, 0);
    updateSpellRecord(author, hero, `a${deckString[3]}`, 1, 0);
    updateSpellRecord(author, hero, `a${deckString[4]}`, 1, 0);
    updateSpellRecord(author, hero, `a${deckString[5]}`, 1, 0);
    updateSpellRecord(author, hero, `e${deckString[6]}`, 1, 0);
    updateSpellRecord(author, hero, `e${deckString[7]}`, 1, 0);
    updateSpellRecord(author, hero, `u${deckString[8]}`, 1, 0);
  },
  async lose(discord, hero) {
    hero = getHero(hero);    
    const author = discord.author.id;
    const deckString = await get(`${author}:${hero}`);

    if (!deckString) {
      discord.reply('You have not set a deck for the hero. Type `'+prefix+'deck [hero] [deck_code]` to set a deck.');
      return;
    }

    updateSpellRecord(author, hero, deckString, 0, 1);

    updateSpellRecord(author, hero, `b${deckString[0]}`, 0, 1);
    updateSpellRecord(author, hero, `b${deckString[1]}`, 0, 1);
    updateSpellRecord(author, hero, `b${deckString[2]}`, 0, 1);
    updateSpellRecord(author, hero, `a${deckString[3]}`, 0, 1);
    updateSpellRecord(author, hero, `a${deckString[4]}`, 0, 1);
    updateSpellRecord(author, hero, `a${deckString[5]}`, 0, 1);
    updateSpellRecord(author, hero, `e${deckString[6]}`, 0, 1);
    updateSpellRecord(author, hero, `e${deckString[7]}`, 0, 1);
    updateSpellRecord(author, hero, `u${deckString[8]}`, 0, 1);
  }
}