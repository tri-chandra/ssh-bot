import jimp from 'jimp';

export default async function run(dir, outputFile) {
  const image = await jimp.read(`${dir}_classic.png`);
  image.resize(34, 34).write(`${outputFile}`);
};