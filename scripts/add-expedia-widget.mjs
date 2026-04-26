import { readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

// Slug → human-readable place name overrides (for tricky cases)
const placeNames = {
  'adams-peak': "Adam's Peak",
  'worlds-end': "World's End",
  'galle-face-green': 'Galle Face Green',
  'nine-arch-bridge': 'the Nine Arch Bridge',
  'pigeon-island': 'Pigeon Island',
  'delft-island': 'Delft Island',
  'gangaramaya-temple': 'Gangaramaya Temple',
  'horton-plains': 'Horton Plains',
  'nuwara-eliya': 'Nuwara Eliya',
  'arugam-bay': 'Arugam Bay',
  'sri-pada': "Adam's Peak",
};

function slugToTitle(slug) {
  if (placeNames[slug]) return placeNames[slug];
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function insertWidget(filePath, heading) {
  let src = readFileSync(filePath, 'utf8');

  // Skip if already has the widget
  if (src.includes('ExpediaWidget')) {
    console.log(`  skip (already done): ${path.basename(filePath)}`);
    return;
  }

  // Add import to frontmatter (after the first import line)
  src = src.replace(
    /(import BaseLayout from ['"][^'"]+['"];)/,
    `$1\nimport ExpediaWidget from '../../components/ExpediaWidget.astro';`
  );

  // Insert widget before </BaseLayout>
  const headingAttr = heading ? ` heading="${heading}"` : '';
  src = src.replace(
    '</BaseLayout>',
    `  <ExpediaWidget${headingAttr} />\n</BaseLayout>`
  );

  writeFileSync(filePath, src);
  console.log(`  ✓ ${path.basename(filePath)}`);
}

function processDir(dir, headingFn) {
  const files = readdirSync(dir).filter(
    f => f.endsWith('.astro') && f !== 'index.astro'
  );
  console.log(`\n${dir} (${files.length} files)`);
  for (const file of files) {
    const slug = file.replace('.astro', '');
    const heading = headingFn(slug);
    insertWidget(path.join(dir, file), heading);
  }
}

const root = path.resolve('src/pages');

// Places: location-specific heading
processDir(path.join(root, 'places'), slug =>
  `\uD83C\uDFE8 Find Hotels in ${slugToTitle(slug)}`
);

// Guides: generic heading
processDir(path.join(root, 'guides'), () =>
  '\uD83C\uDFE8 Search Hotels & Flights to Sri Lanka'
);

// Blog: generic heading
processDir(path.join(root, 'blog'), () =>
  '\uD83C\uDFE8 Search Hotels & Flights to Sri Lanka'
);

console.log('\nDone.');
