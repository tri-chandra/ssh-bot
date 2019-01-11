import { renderBackgrounds } from '../../api/models/deck/ImageProcessor';

export default async function run(title, inputDir, outputDir) {
  renderBackgrounds(title, inputDir, outputDir);
}
