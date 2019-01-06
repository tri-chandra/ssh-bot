import Jimp from 'jimp';

const width = 1200;
const height = 500;
const vertivalOffset = 200;
const headerHeight = 100;
const spellWidth = 68;
const padding = [20, 40];

function getSpellPosition(column, row) {
  const h = column * (spellWidth + padding[0]);
  const v = (row * (spellWidth + padding[1])) + vertivalOffset;
  return [h, v];
}

async function appendSpells(img, spells, row) {
  let output = img;
  let column = 1;
  for (let i = 0; i < spells.length; i += 1) {
    const spell = spells[i];
    const spellImgPath = `./src/renderer/output/images/spells/68x68/${spell}`;
    const spellImg = await Jimp.read(spellImgPath);
    
    output = await output.composite(spellImg, ...getSpellPosition(column, row));

    column++;
  }
  
  return output;
}

export default async function run(hero, deckHash) {
  const descFont = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  const heroImgPath = `./src/renderer/output/images/heroes/deck-background/${hero.code}.png`;
  const bg = await Jimp.read(heroImgPath);

  const basics = hero.spells.basic.map(s => s.sprite);
  const advs = hero.spells.advanced.map(s => s.sprite);
  const elites = hero.spells.elite.map(s => s.sprite);
  const ults = hero.spells.ultimate.map(s => s.sprite);

  const spells = [
    basics[deckHash.charCodeAt(0) - 97],
    basics[deckHash.charCodeAt(1) - 97],
    basics[deckHash.charCodeAt(2) - 97],
    advs[deckHash.charCodeAt(3) - 97],
    advs[deckHash.charCodeAt(4) - 97],
    advs[deckHash.charCodeAt(5) - 97],
    elites[deckHash.charCodeAt(6) - 97],
    elites[deckHash.charCodeAt(7) - 97],
    ults[deckHash.charCodeAt(8) - 97],
  ];

  const result = await appendSpells(bg, spells, 1);
  // result = await appendSpells(result, [adv1, adv2, adv3], 2);
  // result = await appendSpells(result, [elite1, elite2], 3);
  // result = await appendSpells(result, [ult1], 4);

  return result
  .print(descFont, padding[0], headerHeight + padding[0], 'Take a look at my spell deck!')
  .scale(0.3);
  //.write(`${outputFile}/${hero}2.png`);
};
