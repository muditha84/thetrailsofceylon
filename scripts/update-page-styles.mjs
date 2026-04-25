import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const root = fileURLToPath(new URL('..', import.meta.url));

const dirs = [
  join(root, 'src/pages/places'),
  join(root, 'src/pages/things-to-do'),
  join(root, 'src/pages/guides'),
  join(root, 'src/pages/blog'),
];

let filesUpdated = 0;

for (const dir of dirs) {
  const files = readdirSync(dir).filter(f => f.endsWith('.astro') && f !== 'index.astro');
  for (const file of files) {
    const filePath = join(dir, file);
    let content = readFileSync(filePath, 'utf8');
    const original = content;

    // 1. Update Nearby Places link class → nearby-pill
    content = content.replace(
      /class="flex items-center gap-2 text-sm text-gray-700 hover:text-ceylon-green-700 font-medium group"/g,
      'class="nearby-pill"'
    );

    // 2. Remove the SVG arrow inside nearby links (it's now handled by CSS or not needed for pill style)
    // Keep the SVG but it will be styled by .nearby-pill svg

    // 3. Update Quick Facts box div class → quick-facts-card
    content = content.replace(
      /class="not-prose bg-ceylon-gold-50 border border-ceylon-gold-200 rounded-2xl p-6 mb-8"/g,
      'class="not-prose quick-facts-card"'
    );

    // 4. Update Quick Facts h2 to remove old class override
    content = content.replace(
      /class="font-serif font-bold text-gray-900 text-xl mb-3">Quick Facts<\/h2>/g,
      '>Quick Facts</h2>'
    );

    // 5. Update Plan Your Visit sidebar box → plan-visit-box
    content = content.replace(
      /class="bg-ceylon-green-50 border border-ceylon-green-200 rounded-2xl p-5"/g,
      'class="plan-visit-box"'
    );

    // 6. Update Book Hotel button inside sidebar → book-btn
    content = content.replace(
      /class="block mt-5 bg-ceylon-green-700 hover:bg-ceylon-green-800 text-white text-center font-semibold py-3 px-4 rounded-xl text-sm transition-colors"/g,
      'class="book-btn"'
    );

    // 7. Update Nearby Places outer div → consistent style
    content = content.replace(
      /class="bg-white border border-gray-200 rounded-2xl p-5"/g,
      'class="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"'
    );

    if (content !== original) {
      writeFileSync(filePath, content, 'utf8');
      filesUpdated++;
      console.log('Updated:', file);
    }
  }
}

console.log(`\nDone. ${filesUpdated} files updated.`);
