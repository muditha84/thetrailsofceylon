import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, basename } from 'path';

const SOURCE = 'C:/Users/mudit/OneDrive/Documents/THETRAILSOFCEYLON.COM/Public/Images';
const OUTPUT = 'C:/Users/mudit/thetrailsofceylon/public/images';
const QUALITY = 82;

// Find all double-extension originals in source folder
const originals = readdirSync(SOURCE).filter(f => f.match(/\.jpg\.jpg$|\.png\.png$/));

if (originals.length === 0) {
  console.log('No .jpg.jpg or .png.png files found in Downloads.');
  process.exit(0);
}

console.log(`Source: ${SOURCE}`);
console.log(`Found ${originals.length} original images. Converting at quality ${QUALITY}...\n`);

let converted = 0;
let skipped = 0;

for (const file of originals) {
  // e.g. ravana-falls.jpg.jpg -> ravana-falls.webp  (lowercased to match page references)
  const stem = basename(file, '.jpg').replace(/\.jpg$/, '').replace(/\.png$/, '').toLowerCase();
  const outName = stem + '.webp';
  const inPath = join(SOURCE, file);
  const outPath = join(OUTPUT, outName);

  const existingExists = existsSync(outPath);

  try {
    const info = await sharp(inPath)
      .webp({ quality: QUALITY, effort: 4 })
      .toFile(outPath);

    const sizeKB = Math.round(info.size / 1024);
    const action = existingExists ? 'REPLACED' : 'NEW';
    console.log(`  [${action}] ${outName}  ${info.width}x${info.height}px  ${sizeKB}KB`);
    converted++;
  } catch (err) {
    console.log(`  [ERROR] ${file}: ${err.message}`);
    skipped++;
  }
}

console.log(`\nDone. ${converted} converted, ${skipped} errors.`);
console.log(`Output: ${OUTPUT}`);
