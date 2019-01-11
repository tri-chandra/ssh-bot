import Jimp from 'jimp';
import fs from 'fs';

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

function loadHeaderFont() {
  return Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
}
function loadDescriptionFont() {
  return Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
}

export async function renderBackground(title, inputFile) {
  const headerFont = await loadHeaderFont();

  let bg = await (new Jimp(width, height, 0xFFF9EBFF)).composite(new Jimp(width, headerHeight, 0xFFE9C4FF), 0, 0);
  const [h, v] = getSpellPosition(1, 1);
  bg = await bg.composite(
    new Jimp(((3 * (spellWidth + padding[0])) - padding[0]), 10, 0x968A83FF), h, v - 25);
  bg = await bg.composite(new Jimp(((3 * (spellWidth + padding[0])) - padding[0]), 10, 0x84B009FF), h + (3 * (spellWidth + padding[0])), v - 25);
  bg = await bg.composite(new Jimp(((2 * (spellWidth + padding[0])) - padding[0]), 10, 0x3699B9FF), h + (6 * (spellWidth + padding[0])), v - 25);
  bg = await bg.composite(new Jimp(((1 * (spellWidth + padding[0])) - padding[0]), 10, 0xBA45BBFF), h + (8 * (spellWidth + padding[0])), v - 25);

  const heroImgPath = `${inputFile}_classic.png`;
  const heroImg = await (await Jimp.read(heroImgPath)).flip(true, false).scale(0.4);

  return bg
    .composite(heroImg, width - 360, headerHeight / 2)
    .print(headerFont, padding[0], padding[0], title);
    //.scale(0.3)
    // .write(outputFile);
}

export async function renderBackgrounds(title, inputDir, outputDir) {
  const headerFont = await loadHeaderFont();

  let bg = await (new Jimp(width, height, 0xFFF9EBFF)).composite(new Jimp(width, headerHeight, 0xFFE9C4FF), 0, 0);
  const [h, v] = getSpellPosition(1, 1);
  bg = await bg.composite(
    new Jimp(((3 * (spellWidth + padding[0])) - padding[0]), 10, 0x968A83FF), h, v - 25);
  bg = await bg.composite(new Jimp(((3 * (spellWidth + padding[0])) - padding[0]), 10, 0x84B009FF), h + (3 * (spellWidth + padding[0])), v - 25);
  bg = await bg.composite(new Jimp(((2 * (spellWidth + padding[0])) - padding[0]), 10, 0x3699B9FF), h + (6 * (spellWidth + padding[0])), v - 25);
  bg = await bg.composite(new Jimp(((1 * (spellWidth + padding[0])) - padding[0]), 10, 0xBA45BBFF), h + (8 * (spellWidth + padding[0])), v - 25);

  fs.readdir(inputDir, (err, files) => {
    files.forEach(async (file) => {
      const heroImgPath = `${inputDir}${file}`;
      const heroImg = await (await Jimp.read(heroImgPath)).flip(true, false).scale(0.4);

      bg
      .composite(heroImg, width - 360, headerHeight / 2)
      .print(headerFont, padding[0], padding[0], title)
      .write(`${outputDir}${file}`);
    });
  });
}

export async function renderDeck(hero, deckHash, user, winrate) {
  const descFont = await loadDescriptionFont();
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

  return result
    .print(descFont, padding[0], headerHeight + padding[0], 'Take a look at my spell deck!')
    .print(descFont, padding[0], headerHeight + padding[0] + padding[1], `@${user} (Win rate: ${winrate}%)`)
    .scale(0.3);
}
