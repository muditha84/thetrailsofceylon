import sharp from 'sharp';
import { existsSync } from 'fs';
import path from 'path';

const imgDir = path.resolve('public/images');

// Each entry: source filename (in public/images/) → output filename
const images = [
  // Double-extension files (.jpg.jpg → .jpg)
  ['hikkaduwa.jpg.jpg',       'hikkaduwa.jpg'],
  ['bentota.jpg.jpg',         'bentota.jpg'],
  ['hiriketiya.jpg.jpg',      'hiriketiya.jpg'],
  ['dikwella.jpg.jpg',        'dikwella.jpg'],
  ['nilaveli.jpg.jpg',        'nilaveli.jpg'],
  ['kalpitiya.jpg.jpg',       'kalpitiya.jpg'],
  ['matara.jpg.jpg',          'matara.jpg'],
  ['adams-peak.jpg.jpg',      'adams-peak.jpg'],
  ['nine-arch-bridge.jpg.jpg','nine-arch-bridge.jpg'],
  ['pigeon-island.jpg.jpg',   'pigeon-island.jpg'],
  ['ambuluwawa.jpg.jpg',      'ambuluwawa.jpg'],
  ['ravana-falls.jpg.jpg',    'ravana-falls.jpg'],
  ['bundala.jpg.jpg',         'bundala.jpg'],
  ['wasgamuwa.jpg.jpg',       'wasgamuwa.jpg'],
  ['kumana.jpg.jpg',          'kumana.jpg'],
  ['pinnawala.jpg.jpg',       'pinnawala.jpg'],
  ['gangaramaya.jpg.jpg',     'gangaramaya.jpg'],
  ['galle-face-green.jpg.jpg','galle-face-green.jpg'],
  ['hot-air-ballooning.jpg.jpg','hot-air-ballooning.jpg'],
  ['rope-swing.jpg.jpg',      'rope-swing.jpg'],
  ['scuba-diving.jpg.jpg',    'scuba-diving.jpg'],
  ['dolphin-watching.jpg.jpg','dolphin-watching.jpg'],
  ['turtle-watching.jpg.jpg', 'turtle-watching.jpg'],
  ['rock-climbing.jpg.jpg',   'rock-climbing.jpg'],
  ['waterfall-hiking.jpg.jpg','waterfall-hiking.jpg'],
  ['stilt-fishing.jpg.jpg',   'stilt-fishing.jpg'],
  ['kitesurfing.jpg.jpg',     'kitesurfing.jpg'],
  ['deep-sea-fishing.jpg.jpg','deep-sea-fishing.jpg'],
  ['pidurangala.jpg.jpg',     'pidurangala.jpg'],
  ['delft-island.jpg.jpg',    'delft-island.jpg'],
  ['worlds-end.jpg.jpg',      'worlds-end.jpg'],
  ['camping.jpg.jpg',         'camping.jpg'],
  // Special: space in filename
  ['Mannar island.jpg',       'mannar.jpg'],
  // Single-extension originals that need resizing
  ['batticaloa.jpg',          'batticaloa.jpg'],
  ['diyaluma-falls.jpg',      'diyaluma-falls.jpg'],
];

let ok = 0, skip = 0, err = 0;

for (const [src, out] of images) {
  const srcPath = path.join(imgDir, src);
  const outPath = path.join(imgDir, out);

  if (!existsSync(srcPath)) {
    console.log(`  MISSING  ${src}`);
    skip++;
    continue;
  }

  try {
    await sharp(srcPath)
      .resize(800, 600, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 85, progressive: true, mozjpeg: true })
      .toFile(outPath + '.tmp');

    // Atomic replace: rename tmp → final (avoids partial writes)
    const { renameSync } = await import('fs');
    renameSync(outPath + '.tmp', outPath);

    console.log(`  ✓  ${src} → ${out}`);
    ok++;
  } catch (e) {
    console.log(`  ERROR  ${src}: ${e.message}`);
    err++;
  }
}

console.log(`\nDone: ${ok} resized, ${skip} missing, ${err} errors.`);
