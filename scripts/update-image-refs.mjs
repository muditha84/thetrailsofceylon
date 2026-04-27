/**
 * Updates all .jpg/.jpeg/.png image references to .webp in every .astro file.
 * Only replaces paths that contain /images/ to avoid touching non-image strings.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import path from 'path';

function walkAstro(dir, results = []) {
  for (const f of readdirSync(dir)) {
    const full = path.join(dir, f);
    if (statSync(full).isDirectory()) walkAstro(full, results);
    else if (f.endsWith('.astro')) results.push(full);
  }
  return results;
}

const files = walkAstro('src');
let totalFiles = 0, totalReplacements = 0;

for (const file of files) {
  const original = readFileSync(file, 'utf8');

  // Replace /images/anything.jpg|jpeg|png (in quotes or template literals)
  const updated = original.replace(
    /\/images\/[^'"` \t\n>)]+\.(jpg|jpeg|png)/gi,
    match => match.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  );

  if (updated !== original) {
    const count = (original.match(/\/images\/[^'"` \t\n>)]+\.(jpg|jpeg|png)/gi) || []).length;
    writeFileSync(file, updated);
    console.log(`  ✓  ${file.replace(/\\/g, '/')}  (${count} replacement${count !== 1 ? 's' : ''})`);
    totalFiles++;
    totalReplacements += count;
  }
}

console.log(`\nDone: ${totalReplacements} references updated across ${totalFiles} files.`);
