import sharp from 'sharp';
import { readdirSync, renameSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const imagesDir = new URL('../public/images/', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

// Step 1: Rename .jpg.jpg → .jpg (skip if .jpg already exists)
const files = readdirSync(imagesDir);
for (const file of files) {
  if (file.endsWith('.jpg.jpg')) {
    const newName = file.slice(0, -4); // remove last .jpg
    const oldPath = join(imagesDir, file);
    const newPath = join(imagesDir, newName);
    if (!existsSync(newPath)) {
      renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} → ${newName}`);
    } else {
      // Remove the duplicate
      renameSync(oldPath, oldPath + '.bak');
      console.log(`Skipped (target exists): ${file}`);
    }
  }
}

// Step 2: Resize and optimise all images
const updated = readdirSync(imagesDir).filter(f => f.endsWith('.jpg') && !f.endsWith('.bak'));

const HERO = 'hero.jpg';

for (const file of updated) {
  const filePath = join(imagesDir, file);
  const isHero = file === HERO;
  const width = isHero ? 1920 : 800;
  const height = isHero ? 1080 : 600;

  try {
    const meta = await sharp(filePath).metadata();
    // Only resize if larger than target (never upscale)
    const needsResize = meta.width > width || meta.height > height;

    await sharp(filePath)
      .resize(width, height, {
        fit: 'cover',
        position: 'center',
        withoutEnlargement: true,
      })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })
      .toFile(filePath + '.tmp');

    // Replace original
    renameSync(filePath + '.tmp', filePath);
    console.log(`✓ ${file} → ${width}×${height}${needsResize ? ' (resized)' : ' (compressed only)'}`);
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log('\nDone.');
