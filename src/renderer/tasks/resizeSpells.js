import fs from 'fs';
import jimp from 'jimp';

export default function run(dir, outputdir, size = 34) {
  fs.readdirSync(dir).forEach(async file => {
    const filenameParts = file.split('_');
    let filename = filenameParts[filenameParts.length-1];
    const image = await jimp.read(`${dir}${file}`);

    if (filename.endsWith('.tif')) filename = filename.replace('.tif', '.jpg');
    image.resize(size, size).write(`${outputdir}${filename}`);
  });
};