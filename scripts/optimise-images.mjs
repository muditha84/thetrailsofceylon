/**
 * Converts all JPG/PNG images to WebP with size/quality optimisation.
 * Heroes → max 1920×1080 @ 75% quality
 * All other images → max 800×600 @ 75% quality
 */
import sharp from 'sharp';
import { readdirSync, statSync, existsSync } from 'fs';
import path from 'path';

const DIRS = [
  { dir: 'public/images',        maxW: 800,  maxH: 600,  label: 'regular' },
  { dir: 'public/images/heroes', maxW: 1920, maxH: 1080, label: 'hero'    },
];

const QUALITY = 75;
const EXTS = new Set(['.jpg', '.jpeg', '.png']);

let totalBefore = 0, totalAfter = 0, converted = 0, skipped = 0, errors = 0;

function fmtBytes(b) {
  return b > 1_000_000 ? `${(b / 1_000_000).toFixed(1)} MB`
       : b > 1_000     ? `${(b / 1_000).toFixed(0)} KB`
       : `${b} B`;
}

for (const { dir, maxW, maxH, label } of DIRS) {
  if (!existsSync(dir)) continue;

  const files = readdirSync(dir).filter(f => {
    const ext = path.extname(f).toLowerCase();
    // Skip double-extension originals like adams-peak.jpg.jpg
    if (f.endsWith('.jpg.jpg') || f.endsWith('.jpeg.jpg')) return false;
    return EXTS.has(ext);
  });

  console.log(`\n── ${dir} (${files.length} images, ${label}) ──`);

  for (const file of files) {
    const srcPath = path.join(dir, file);
    const base    = path.basename(file, path.extname(file));
    const outPath = path.join(dir, base + '.webp');

    // Skip if WebP already exists and is newer than source
    if (existsSync(outPath)) {
      const srcMtime = statSync(srcPath).mtimeMs;
      const outMtime = statSync(outPath).mtimeMs;
      if (outMtime >= srcMtime) {
        console.log(`  SKIP  ${file} (webp up to date)`);
        skipped++;
        continue;
      }
    }

    const sizeBefore = statSync(srcPath).size;

    try {
      await sharp(srcPath)
        .resize(maxW, maxH, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 4 })
        .toFile(outPath);

      const sizeAfter = statSync(outPath).size;
      const saving    = ((1 - sizeAfter / sizeBefore) * 100).toFixed(0);

      totalBefore += sizeBefore;
      totalAfter  += sizeAfter;
      converted++;

      console.log(`  ✓  ${file.padEnd(42)} ${fmtBytes(sizeBefore).padStart(8)} → ${fmtBytes(sizeAfter).padStart(8)}  (-${saving}%)`);
    } catch (e) {
      console.log(`  ERR ${file}: ${e.message}`);
      errors++;
    }
  }
}

const saving = totalBefore > 0 ? ((1 - totalAfter / totalBefore) * 100).toFixed(0) : 0;
console.log(`
────────────────────────────────────────
Converted : ${converted}
Skipped   : ${skipped}
Errors    : ${errors}
────────────────────────────────────────
Before    : ${fmtBytes(totalBefore)}
After     : ${fmtBytes(totalAfter)}
Saved     : ${fmtBytes(totalBefore - totalAfter)} (-${saving}%)
────────────────────────────────────────
`);
