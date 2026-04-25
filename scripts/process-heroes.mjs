import sharp from 'sharp';
import { readdir, rename, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '../public/images');
const destDir = path.join(__dirname, '../public/images/heroes');

const heroNames = [
  'hero-adventure',
  'hero-beach',
  'hero-food',
  'hero-galle',
  'hero-hills',
  'hero-sigiriya',
  'hero-temple',
  'hero-train',
  'hero-whale',
  'hero-wildlife',
];

await mkdir(destDir, { recursive: true });

for (const name of heroNames) {
  const doubleSrc = path.join(srcDir, `${name}.jpg.jpg`);
  const singleSrc = path.join(srcDir, `${name}.jpg`);
  const dest = path.join(destDir, `${name}.jpg`);

  let sourcePath = null;
  if (existsSync(doubleSrc)) {
    sourcePath = doubleSrc;
  } else if (existsSync(singleSrc)) {
    sourcePath = singleSrc;
  }

  if (!sourcePath) {
    console.warn(`⚠️  Not found: ${name}.jpg — skipping`);
    continue;
  }

  await sharp(sourcePath)
    .resize(1920, 1080, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(dest);

  console.log(`✓ ${name}.jpg → heroes/${name}.jpg (1920×1080)`);
}

console.log('\nAll hero images processed.');
