/**
 * Deletes original .jpg/.jpeg/.png files from public/images/ (and heroes/)
 * only after confirming a .webp version exists beside it.
 * Also deletes double-extension .jpg.jpg files unconditionally (they're raw uploads).
 */
import { readdirSync, existsSync, unlinkSync, statSync } from 'fs';
import path from 'path';

const DIRS = ['public/images', 'public/images/heroes'];
const EXTS = new Set(['.jpg', '.jpeg', '.png']);

let deleted = 0, skipped = 0;

for (const dir of DIRS) {
  if (!existsSync(dir)) continue;
  const files = readdirSync(dir);

  for (const file of files) {
    const full = path.join(dir, file);
    if (statSync(full).isDirectory()) continue;

    // Double-extension originals: delete unconditionally
    if (file.endsWith('.jpg.jpg') || file.endsWith('.jpeg.jpg')) {
      unlinkSync(full);
      console.log(`  DEL (double-ext)  ${full}`);
      deleted++;
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (!EXTS.has(ext)) continue;

    // Only delete if the .webp counterpart exists
    const webpPath = path.join(dir, path.basename(file, ext) + '.webp');
    if (existsSync(webpPath)) {
      unlinkSync(full);
      console.log(`  DEL  ${full}`);
      deleted++;
    } else {
      console.log(`  KEEP (no webp)  ${full}`);
      skipped++;
    }
  }
}

console.log(`\nDeleted: ${deleted}  |  Kept (no webp): ${skipped}`);
