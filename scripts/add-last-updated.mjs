import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'fs';
import path from 'path';

// Use glob to find files
import { readdirSync } from 'fs';

function getFiles(dir) {
  return readdirSync(dir)
    .filter(f => f.endsWith('.astro') && f !== 'index.astro')
    .map(f => path.join(dir, f));
}

const guideFiles = getFiles('src/pages/guides');
const blogFiles  = getFiles('src/pages/blog');
const allFiles   = [...guideFiles, ...blogFiles];

const BADGE = `<p class="not-prose text-xs text-gray-400 mb-6 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>Last Updated: April 2026</p>`;

let updated = 0, skipped = 0;

for (const file of allFiles) {
  let src = readFileSync(file, 'utf8');
  if (src.includes('Last Updated: April 2026')) { skipped++; continue; }

  // Try both structural patterns
  const marker1 = '<article class="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-ceylon-green-700">';
  const marker2 = '<div class="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-ceylon-green-700">';
  const marker3 = '<article class="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-ceylon-green-700 prose-strong:text-gray-900">';
  const marker = src.includes(marker1) ? marker1 : src.includes(marker2) ? marker2 : src.includes(marker3) ? marker3 : null;
  if (!marker) {
    console.log(`  SKIP (no marker): ${path.basename(file)}`);
    skipped++;
    continue;
  }
  src = src.replace(marker, `${marker}\n      ${BADGE}`);
  writeFileSync(file, src);
  console.log(`  ✓ ${path.basename(file)}`);
  updated++;
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped.`);
