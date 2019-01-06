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

export default async function run(hero, title, inputFile, outputFile) {
  const headerFont = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
  let bg = await (new Jimp(width, height, 0xFFF9EBFF)).composite(new Jimp(width, headerHeight, 0xFFE9C4FF), 0, 0);
  const [h, v] = getSpellPosition(1, 1);
  bg = await bg.composite(new Jimp(((3 * (spellWidth + padding[0])) - padding[0]), 10, 0x968A83FF), h, v - 25);
  bg = await bg.composite(new Jimp(((3 * (spellWidth + padding[0])) - padding[0]), 10, 0x84B009FF), h + (3 * (spellWidth + padding[0])), v - 25);
  bg = await bg.composite(new Jimp(((2 * (spellWidth + padding[0])) - padding[0]), 10, 0x3699B9FF), h + (6 * (spellWidth + padding[0])), v - 25);
  bg = await bg.composite(new Jimp(((1 * (spellWidth + padding[0])) - padding[0]), 10, 0xBA45BBFF), h + (8 * (spellWidth + padding[0])), v - 25);

  const heroImgPath = `${inputFile}_classic.png`;
  const heroImg = await (await Jimp.read(heroImgPath)).flip(true, false).scale(0.4);

  bg
  .composite(heroImg, width - 360, headerHeight / 2)
  .print(headerFont, padding[0], padding[0], title)
  //.scale(0.3)
  .write(outputFile);
};
