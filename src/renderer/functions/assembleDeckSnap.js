import Jimp from 'jimp';
import Zenron from '../../api/models/Zenron';

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

export default async function run(hero, deckHash, outputFile) {
  const headerFont = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
  const descFont = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  let bg = await (new Jimp(width, height, 0xFFF9EBFF)).composite(new Jimp(width, headerHeight, 0xFFE9C4FF), 0, 0);
  const [h, v] = getSpellPosition(1, 1);
  bg = await bg.composite(new Jimp(((3 * (spellWidth + padding[0])) - padding[0]), 10, 0x968A83FF), h, v - 25);
  bg = await bg.composite(new Jimp(((3 * (spellWidth + padding[0])) - padding[0]), 10, 0x84B009FF), h + (3 * (spellWidth + padding[0])), v - 25);
  bg = await bg.composite(new Jimp(((2 * (spellWidth + padding[0])) - padding[0]), 10, 0x3699B9FF), h + (6 * (spellWidth + padding[0])), v - 25);
  bg = await bg.composite(new Jimp(((1 * (spellWidth + padding[0])) - padding[0]), 10, 0xBA45BBFF), h + (8 * (spellWidth + padding[0])), v - 25);

  const heroImgPath = `./src/renderer/data/images/heroes/${hero.code}/${hero.code}_classic.png`;
  const heroImg = await (await Jimp.read(heroImgPath)).flip(true, false).scale(0.4);

  const [basic1, basic2, basic3] = hero.spells.basic.map(s => s.sprite);
  const [adv1, adv2, adv3] = hero.spells.advanced.map(s => s.sprite);
  const [elite1, elite2] = hero.spells.elite.map(s => s.sprite);
  const [, , ult1] = hero.spells.ultimate.map(s => s.sprite);

  let result = await bg.composite(heroImg, width - heroImg.bitmap.width, headerHeight / 2);
  result = await appendSpells(result, [basic1, basic2, basic3, adv1, adv2, adv3, elite1, elite2, ult1], 1);
  // result = await appendSpells(result, [adv1, adv2, adv3], 2);
  // result = await appendSpells(result, [elite1, elite2], 3);
  // result = await appendSpells(result, [ult1], 4);

  return result
  .print(headerFont, padding[0], padding[0], 'Zenron')
  .print(descFont, padding[0], headerHeight + padding[0], 'My description here')
  .scale(0.3);
  //.write(`${outputFile}/${hero}2.png`);
};
