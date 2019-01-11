import { renderBackground } from '../../api/models/deck/ImageProcessor';

export default async function run(title, inputFile, outputFile) {
  (await renderBackground(title, inputFile)).write(outputFile);
}
