/**
 * Updates image references across place pages, things-to-do pages, and hub pages.
 * For individual pages: replaces the hero <img src> (first occurrence in file).
 * For hub/index pages: replaces card image paths by matching the href+image pair.
 */
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

// ─── Individual page hero images ──────────────────────────────────────────────

const placeHeroes = {
  'src/pages/places/hikkaduwa.astro':       'hikkaduwa.jpg',
  'src/pages/places/bentota.astro':         'bentota.jpg',
  'src/pages/places/hiriketiya.astro':      'hiriketiya.jpg',
  'src/pages/places/dikwella.astro':        'dikwella.jpg',
  'src/pages/places/nilaveli.astro':        'nilaveli.jpg',
  'src/pages/places/kalpitiya.astro':       'kalpitiya.jpg',
  'src/pages/places/matara.astro':          'matara.jpg',
  'src/pages/places/batticaloa.astro':      'batticaloa.jpg',
  'src/pages/places/mannar.astro':          'mannar.jpg',
  'src/pages/places/adams-peak.astro':      'adams-peak.jpg',
  'src/pages/places/nine-arch-bridge.astro':'nine-arch-bridge.jpg',
  'src/pages/places/pigeon-island.astro':   'pigeon-island.jpg',
  'src/pages/places/ambuluwawa.astro':      'ambuluwawa.jpg',
  'src/pages/places/ravana-falls.astro':    'ravana-falls.jpg',
  'src/pages/places/diyaluma-falls.astro':  'diyaluma-falls.jpg',
  'src/pages/places/bundala.astro':         'bundala.jpg',
  'src/pages/places/wasgamuwa.astro':       'wasgamuwa.jpg',
  'src/pages/places/kumana.astro':          'kumana.jpg',
  'src/pages/places/pinnawala.astro':       'pinnawala.jpg',
  'src/pages/places/gangaramaya-temple.astro': 'gangaramaya.jpg',
  'src/pages/places/galle-face-green.astro':'galle-face-green.jpg',
  'src/pages/places/worlds-end.astro':      'worlds-end.jpg',
  'src/pages/places/delft-island.astro':    'delft-island.jpg',
};

const todoHeroes = {
  'src/pages/things-to-do/hot-air-ballooning.astro': 'hot-air-ballooning.jpg',
  'src/pages/things-to-do/rope-swing.astro':          'rope-swing.jpg',
  'src/pages/things-to-do/scuba-diving.astro':        'scuba-diving.jpg',
  'src/pages/things-to-do/dolphin-watching.astro':    'dolphin-watching.jpg',
  'src/pages/things-to-do/turtle-watching.astro':     'turtle-watching.jpg',
  'src/pages/things-to-do/rock-climbing.astro':       'rock-climbing.jpg',
  'src/pages/things-to-do/waterfall-hiking.astro':    'waterfall-hiking.jpg',
  'src/pages/things-to-do/stilt-fishing.astro':       'stilt-fishing.jpg',
  'src/pages/things-to-do/kitesurfing.astro':         'kitesurfing.jpg',
  'src/pages/things-to-do/deep-sea-fishing.astro':    'deep-sea-fishing.jpg',
  'src/pages/things-to-do/pidurangala-rock.astro':    'pidurangala.jpg',
  'src/pages/things-to-do/camping.astro':             'camping.jpg',
};

// Replace the first <img src="/images/xxx.jpg"> occurrence in the file body
function fixHeroImage(filePath, newImg) {
  let src = readFileSync(filePath, 'utf8');
  // Replace src="/images/xxx.jpg (closing quote stays in place)
  const updated = src.replace(
    /(<img\b[^>]*?\bsrc=")\/images\/[^"]+\.jpg/,
    `$1/images/${newImg}`
  );
  if (updated === src) {
    console.log(`  WARN no match: ${path.basename(filePath)}`);
    return;
  }
  writeFileSync(filePath, updated);
  console.log(`  ✓ ${path.basename(filePath)} → /images/${newImg}`);
}

console.log('\n── Place pages ──');
for (const [file, img] of Object.entries(placeHeroes)) {
  fixHeroImage(file, img);
}

console.log('\n── Things-to-do pages ──');
for (const [file, img] of Object.entries(todoHeroes)) {
  fixHeroImage(file, img);
}

// ─── Hub page card image fixes ────────────────────────────────────────────────

// Replace `image: 'OLD'` within the block that contains `href: 'HREF'`
// Works by finding the href, then replacing the next image: occurrence within
// the same object literal (up to the next `}`).
function fixCardImage(filePath, href, newImg) {
  let src = readFileSync(filePath, 'utf8');
  // Regex: match href, then capture everything up to (and including) the image: field
  const re = new RegExp(
    `(href:\\s*['"]${href.replace(/\//g, '\\/')}['"][\\s\\S]*?image:\\s*['"])\/images\/[^'"]+\\.jpg(['"])`,
    'g'
  );
  const updated = src.replace(re, `$1/images/${newImg}$2`);
  if (updated === src) {
    console.log(`  WARN no match: ${href} in ${path.basename(filePath)}`);
    return;
  }
  writeFileSync(filePath, updated);
  console.log(`  ✓ ${path.basename(filePath)}: ${href} → /images/${newImg}`);
}

console.log('\n── places/index.astro ──');
const placesIndex = 'src/pages/places/index.astro';
fixCardImage(placesIndex, '/places/adams-peak',         'adams-peak.jpg');
fixCardImage(placesIndex, '/places/delft-island',       'delft-island.jpg');
fixCardImage(placesIndex, '/places/ambuluwawa',         'ambuluwawa.jpg');
fixCardImage(placesIndex, '/places/worlds-end',         'worlds-end.jpg');
fixCardImage(placesIndex, '/places/ravana-falls',       'ravana-falls.jpg');
fixCardImage(placesIndex, '/places/diyaluma-falls',     'diyaluma-falls.jpg');
fixCardImage(placesIndex, '/places/bundala',            'bundala.jpg');
fixCardImage(placesIndex, '/places/wasgamuwa',          'wasgamuwa.jpg');
fixCardImage(placesIndex, '/places/kumana',             'kumana.jpg');
fixCardImage(placesIndex, '/places/gangaramaya-temple', 'gangaramaya.jpg');
fixCardImage(placesIndex, '/places/galle-face-green',   'galle-face-green.jpg');
fixCardImage(placesIndex, '/places/matara',             'matara.jpg');

console.log('\n── things-to-do/index.astro ──');
const todoIndex = 'src/pages/things-to-do/index.astro';
fixCardImage(todoIndex, '/things-to-do/hot-air-ballooning', 'hot-air-ballooning.jpg');
fixCardImage(todoIndex, '/things-to-do/scuba-diving',       'scuba-diving.jpg');
fixCardImage(todoIndex, '/things-to-do/dolphin-watching',   'dolphin-watching.jpg');
fixCardImage(todoIndex, '/things-to-do/turtle-watching',    'turtle-watching.jpg');
fixCardImage(todoIndex, '/things-to-do/rock-climbing',      'rock-climbing.jpg');
fixCardImage(todoIndex, '/things-to-do/waterfall-hiking',   'waterfall-hiking.jpg');
fixCardImage(todoIndex, '/things-to-do/stilt-fishing',      'stilt-fishing.jpg');
fixCardImage(todoIndex, '/things-to-do/kitesurfing',        'kitesurfing.jpg');
fixCardImage(todoIndex, '/things-to-do/deep-sea-fishing',   'deep-sea-fishing.jpg');
fixCardImage(todoIndex, '/things-to-do/camping',            'camping.jpg');
fixCardImage(todoIndex, '/things-to-do/pidurangala-rock',   'pidurangala.jpg');
fixCardImage(todoIndex, '/things-to-do/rope-swing',         'rope-swing.jpg');

console.log('\n── Sub-hub pages ──');
// south-coast: matara card
fixCardImage('src/pages/places/south-coast.astro', '/places/matara', 'matara.jpg');

// north-jaffna: delft-island card
fixCardImage('src/pages/places/north-jaffna.astro', '/places/delft-island', 'delft-island.jpg');

// hill-country: six cards
const hillCountry = 'src/pages/places/hill-country.astro';
fixCardImage(hillCountry, '/places/nine-arch-bridge', 'nine-arch-bridge.jpg');
fixCardImage(hillCountry, '/places/ambuluwawa',       'ambuluwawa.jpg');
fixCardImage(hillCountry, '/places/worlds-end',       'worlds-end.jpg');
fixCardImage(hillCountry, '/places/ravana-falls',     'ravana-falls.jpg');
fixCardImage(hillCountry, '/places/diyaluma-falls',   'diyaluma-falls.jpg');
fixCardImage(hillCountry, '/places/adams-peak',       'adams-peak.jpg');

// wildlife-parks: three existing cards + add pinnawala
const wildlifePath = 'src/pages/places/wildlife-parks.astro';
fixCardImage(wildlifePath, '/places/bundala',   'bundala.jpg');
fixCardImage(wildlifePath, '/places/wasgamuwa', 'wasgamuwa.jpg');
fixCardImage(wildlifePath, '/places/kumana',    'kumana.jpg');

// Add pinnawala card to wildlife-parks (it was not added in the previous session)
{
  let src = readFileSync(wildlifePath, 'utf8');
  if (!src.includes('/places/pinnawala')) {
    src = src.replace(
      `{ href: '/places/kumana', image: '/images/kumana.jpg', name: 'Kumana National Park', desc: 'East coast wilderness bordering Yala — famous waterbird nesting colony and leopards' },`,
      `{ href: '/places/kumana', image: '/images/kumana.jpg', name: 'Kumana National Park', desc: 'East coast wilderness bordering Yala — famous waterbird nesting colony and leopards' },
          { href: '/places/pinnawala', image: '/images/pinnawala.jpg', name: 'Pinnawala Elephant Orphanage', desc: 'Watch 80+ rescued elephants bathe in the river — one of Sri Lanka\\'s most beloved wildlife experiences' },`
    );
    writeFileSync(wildlifePath, src);
    console.log('  ✓ wildlife-parks.astro: added pinnawala card');
  } else {
    console.log('  skip wildlife-parks pinnawala (already present)');
  }
}

console.log('\nAll done.');
