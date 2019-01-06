import { renderBackground } from '../../api/models/deck/ImageProcessor';

export default async function run(hero, title, inputFile, outputFile) {
  (await renderBackground(hero, title, inputFile)).write(outputFile);
}
