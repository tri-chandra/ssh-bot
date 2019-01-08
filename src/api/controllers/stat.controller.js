import { get, set } from '../services/redisProvider';

async function getSpellRecord(user, hero, spellCode) {
  let spell = await get(`${user}:${hero}:${spellCode}`);

  if (!spell) spell = { win: 0, lost: 0 };
  else spell = JSON.parse(spell);

  return spell;
}

function calcSpellRecord(record, win, lost) {
  return {
    win: record.win + win,
    lost: record.lost + lost
  };
}

function updateSpellRecord(user, hero, spellCode, record) {
  return set(`${user}:${hero}:${spellCode}`, JSON.stringify(record));
}

export default {
  async win(discord, hero) {
    const author = discord.author.id;
    const deckString = await get(`${target}:${hero.code}`);

    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, deckString), 1, 0))
    );

    let spellCode = `b${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 1, 0))
    );
    
    spellCode = `b${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 1, 0))
    );

    spellCode = `b${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 1, 0))
    );

    spellCode = `a${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 1, 0))
    );

    spellCode = `a${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 1, 0))
    );

    spellCode = `a${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 1, 0))
    );

    spellCode = `e${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 1, 0))
    );

    spellCode = `e${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 1, 0))
    );

    spellCode = `u${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 1, 0))
    );
  },
  async lose(discord, hero) {
    const author = discord.author.id;
    const deckString = await get(`${target}:${hero.code}`);

    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, deckString), 0, 1))
    );

    let spellCode = `b${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 0, 1))
    );
    
    spellCode = `b${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 0, 1))
    );

    spellCode = `b${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 0, 1))
    );

    spellCode = `a${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 0, 1))
    );

    spellCode = `a${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 0, 1))
    );

    spellCode = `a${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 0, 1))
    );

    spellCode = `e${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 0, 1))
    );

    spellCode = `e${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 0, 1))
    );

    spellCode = `u${deckString[0]}`;
    updateSpellRecord(
      author, hero, spellCode,
      calcSpellRecord((getSpellRecord(author, hero, spellCode), 0, 1))
    );
  }
}