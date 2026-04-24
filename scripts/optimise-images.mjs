import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgDir = path.join(__dirname, '..', 'public', 'images');

const jobs = [
  // [source filename, output filename, width, height]
  ['hero.jpg.jpg',          'hero.jpg',          1920, 1080],
  ['sigiriya.jpg.jpg',      'sigiriya.jpg',        800,  600],
  ['galle-fort.jpg.jpg',    'galle-fort.jpg',      800,  600],
  ['Ella.jpg.jpg',          'ella.jpg',            800,  600],
  ['kandy.jpg.jpg',         'kandy.jpg',           800,  600],
  ['mirissa-beach.jpg.jpg', 'mirissa-beach.jpg',   800,  600],
  ['yala.jpg.jpg',          'yala.jpg',            800,  600],
  ['tea-plantation.jpg.jpg','tea-plantation.jpg',  800,  600],
  ['scenic-train.jpg.jpg',  'scenic-train.jpg',    800,  600],
  ['whale-watching.jpg.jpg','whale-watching.jpg',  800,  600],
];

for (const [src, dest, w, h] of jobs) {
  const srcPath  = path.join(imgDir, src);
  const destPath = path.join(imgDir, dest);

  try {
    await fs.access(srcPath);
  } catch {
    console.warn(`  SKIP  ${src} — file not found`);
    continue;
  }

  const info = await sharp(srcPath)
    .resize(w, h, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toFile(destPath);

  const srcStat  = await fs.stat(srcPath);
  const destStat = await fs.stat(destPath);
  const saved    = (((srcStat.size - destStat.size) / srcStat.size) * 100).toFixed(0);

  console.log(
    `  OK    ${dest.padEnd(22)} ${w}×${h}  ` +
    `${(srcStat.size / 1024).toFixed(0).padStart(5)} KB → ` +
    `${(destStat.size / 1024).toFixed(0).padStart(5)} KB  (${saved}% smaller)`
  );
}

console.log('\nDone. All images optimised.');
