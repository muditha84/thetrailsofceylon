import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const root = fileURLToPath(new URL('..', import.meta.url));
const src = join(root, 'src');

function patch(relPath, replacements) {
  const file = join(src, relPath);
  let content = readFileSync(file, 'utf8');
  const original = content;
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  if (content !== original) {
    writeFileSync(file, content, 'utf8');
    console.log('✓', relPath);
  } else {
    console.log('– unchanged:', relPath);
  }
}

// ─── 1. Homepage: stats + budget blog Unsplash ───────────────────
patch('pages/index.astro', [
  ["{ value: '50+', label: 'Destinations' }",   "{ value: '22+', label: 'Destinations' }"],
  ["{ value: '100+', label: 'Travel Guides' }", "{ value: '10+', label: 'Travel Guides' }"],
  ["{ value: '1M+', label: 'Travellers Helped' }", "{ value: 'Growing', label: 'Community' }"],
  ["https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80", "/images/hero.jpg"],
]);

// ─── 2. Blog index: Unsplash → local images ──────────────────────
patch('pages/blog/index.astro', [
  ["https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=640&q=80", "/images/hero.jpg"],
  ["https://images.unsplash.com/photo-1596797038530-2c107229654b?w=640&q=80", "/images/cooking-classes.jpg"],
  ["https://images.unsplash.com/photo-1501854140801-50d01698950b?w=640&q=80", "/images/hero.jpg"],
]);

// ─── 3. Guides index: hero.jpg → better matching images ──────────
patch('pages/guides/index.astro', [
  // 2-week itinerary → scenic-train
  ["href: '/guides/sri-lanka-itinerary-2-weeks',\n    image: '/images/hero.jpg'",
   "href: '/guides/sri-lanka-itinerary-2-weeks',\n    image: '/images/scenic-train.jpg'"],
  // visa guide → hero (already set, keep)
  // budget guide → hero (keep for now — first hero.jpg after 2-weeks replacement)
]);
// More targeted guide image updates
patch('pages/guides/index.astro', [
  ["href: '/guides/sri-lanka-visa-guide',\n    image: '/images/hero.jpg'",
   "href: '/guides/sri-lanka-visa-guide',\n    image: '/images/negombo.jpg'"],
  ["href: '/guides/sri-lanka-safety-guide',\n    image: '/images/hero.jpg'",
   "href: '/guides/sri-lanka-safety-guide',\n    image: '/images/ella.jpg'"],
  ["href: '/guides/sri-lanka-food-guide',\n    image: '/images/hero.jpg'",
   "href: '/guides/sri-lanka-food-guide',\n    image: '/images/cooking-classes.jpg'"],
  ["href: '/guides/what-to-pack-sri-lanka',\n    image: '/images/hero.jpg'",
   "href: '/guides/what-to-pack-sri-lanka',\n    image: '/images/horton-plains.jpg'"],
]);
// budget guide and 2-week itinerary (still hero from 1-week entry)
patch('pages/guides/index.astro', [
  ["href: '/guides/sri-lanka-itinerary-1-week',\n    image: '/images/hero.jpg'",
   "href: '/guides/sri-lanka-itinerary-1-week',\n    image: '/images/sigiriya.jpg'"],
  ["href: '/guides/best-time-to-visit',\n    image: '/images/hero.jpg'",
   "href: '/guides/best-time-to-visit',\n    image: '/images/tea-plantation.jpg'"],
  ["href: '/guides/sri-lanka-budget-guide',\n    image: '/images/hero.jpg'",
   "href: '/guides/sri-lanka-budget-guide',\n    image: '/images/colombo.jpg'"],
]);

// ─── 4. Places index: hero.jpg → correct images ──────────────────
patch('pages/places/index.astro', [
  ["href: '/places/polonnaruwa',  image: '/images/hero.jpg'",
   "href: '/places/polonnaruwa',  image: '/images/polonnaruwa.jpg'"],
  ["href: '/places/trincomalee',  image: '/images/hero.jpg'",
   "href: '/places/trincomalee',  image: '/images/trincomalee.jpg'"],
  ["href: '/places/arugam-bay',   image: '/images/hero.jpg'",
   "href: '/places/arugam-bay',   image: '/images/arugam-bay.jpg'"],
  ["href: '/places/anuradhapura', image: '/images/hero.jpg'",
   "href: '/places/anuradhapura', image: '/images/anuradhapura.jpg'"],
  ["href: '/places/jaffna',       image: '/images/hero.jpg'",
   "href: '/places/jaffna',       image: '/images/jaffna.jpg'"],
]);

// ─── 5. Things-to-do index: hero.jpg → correct images ────────────
patch('pages/things-to-do/index.astro', [
  ["href: '/things-to-do/snorkelling',          image: '/images/hero.jpg'",
   "href: '/things-to-do/snorkelling',          image: '/images/snorkelling.jpg'"],
  ["href: '/things-to-do/bird-watching',        image: '/images/hero.jpg'",
   "href: '/things-to-do/bird-watching',        image: '/images/bird-watching.jpg'"],
  ["href: '/things-to-do/white-water-rafting',  image: '/images/hero.jpg'",
   "href: '/things-to-do/white-water-rafting',  image: '/images/white-water-rafting.jpg'"],
  ["href: '/things-to-do/cycling',              image: '/images/hero.jpg'",
   "href: '/things-to-do/cycling',              image: '/images/cycling.jpg'"],
  ["href: '/things-to-do/ayurveda',             image: '/images/hero.jpg'",
   "href: '/things-to-do/ayurveda',             image: '/images/ayurveda.jpg'"],
  ["href: '/things-to-do/cooking-classes',      image: '/images/hero.jpg'",
   "href: '/things-to-do/cooking-classes',      image: '/images/cooking-classes.jpg'"],
]);

// ─── 6. Category hub pages: hero.jpg cards → correct images ──────

// things-to-do/adventure.astro
patch('pages/things-to-do/adventure.astro', [
  ["{href:'/things-to-do/white-water-rafting',img:'/images/hero.jpg'",
   "{href:'/things-to-do/white-water-rafting',img:'/images/white-water-rafting.jpg'"],
  ["{href:'/things-to-do/cycling',img:'/images/hero.jpg'",
   "{href:'/things-to-do/cycling',img:'/images/cycling.jpg'"],
  ["{href:'/things-to-do/snorkelling',img:'/images/hero.jpg'",
   "{href:'/things-to-do/snorkelling',img:'/images/snorkelling.jpg'"],
]);

// things-to-do/beaches.astro
patch('pages/things-to-do/beaches.astro', [
  ["{href:'/places/tangalle',img:'/images/hero.jpg'",
   "{href:'/places/tangalle',img:'/images/tangalle.jpg'"],
  ["{href:'/places/arugam-bay',img:'/images/hero.jpg'",
   "{href:'/places/arugam-bay',img:'/images/arugam-bay.jpg'"],
  ["{href:'/places/trincomalee',img:'/images/hero.jpg'",
   "{href:'/places/trincomalee',img:'/images/trincomalee.jpg'"],
]);

// things-to-do/culture-history.astro
patch('pages/things-to-do/culture-history.astro', [
  ["{href:'/things-to-do/cooking-classes',img:'/images/hero.jpg'",
   "{href:'/things-to-do/cooking-classes',img:'/images/cooking-classes.jpg'"],
  ["{href:'/things-to-do/ayurveda',img:'/images/hero.jpg'",
   "{href:'/things-to-do/ayurveda',img:'/images/ayurveda.jpg'"],
]);

// things-to-do/food-drink.astro
patch('pages/things-to-do/food-drink.astro', [
  ['<img src="/images/hero.jpg" alt="Sri Lankan rice and curry feast"',
   '<img src="/images/cooking-classes.jpg" alt="Sri Lankan cooking class with spices"'],
  ["{href:'/things-to-do/cooking-classes',img:'/images/hero.jpg'",
   "{href:'/things-to-do/cooking-classes',img:'/images/cooking-classes.jpg'"],
  ["{href:'/guides/sri-lanka-food-guide',img:'/images/hero.jpg'",
   "{href:'/guides/sri-lanka-food-guide',img:'/images/cooking-classes.jpg'"],
]);

// things-to-do/wildlife-nature.astro
patch('pages/things-to-do/wildlife-nature.astro', [
  ["{href:'/things-to-do/bird-watching',img:'/images/hero.jpg'",
   "{href:'/things-to-do/bird-watching',img:'/images/bird-watching.jpg'"],
  ["{href:'/things-to-do/snorkelling',img:'/images/hero.jpg'",
   "{href:'/things-to-do/snorkelling',img:'/images/snorkelling.jpg'"],
]);

// ─── 7. Region hub pages: hero.jpg → correct images ─────────────

// cultural-triangle.astro
patch('pages/places/cultural-triangle.astro', [
  ["{ href: '/places/anuradhapura', image: '/images/hero.jpg'",
   "{ href: '/places/anuradhapura', image: '/images/anuradhapura.jpg'"],
  ["{ href: '/places/polonnaruwa', image: '/images/hero.jpg'",
   "{ href: '/places/polonnaruwa', image: '/images/polonnaruwa.jpg'"],
  ["{ href: '/places/dambulla', image: '/images/hero.jpg'",
   "{ href: '/places/dambulla', image: '/images/dambulla.jpg'"],
  ["{ href: '/places/minneriya', image: '/images/hero.jpg'",
   "{ href: '/places/minneriya', image: '/images/minneriya.jpg'"],
]);

// east-coast.astro
patch('pages/places/east-coast.astro', [
  ['<img src="/images/hero.jpg" alt="" class="w-full h-full object-cover" loading="eager"',
   '<img src="/images/trincomalee.jpg" alt="East coast beaches Sri Lanka" class="w-full h-full object-cover" loading="eager"'],
  ["{ href: '/places/trincomalee', image: '/images/hero.jpg'",
   "{ href: '/places/trincomalee', image: '/images/trincomalee.jpg'"],
  ["{ href: '/places/arugam-bay', image: '/images/hero.jpg'",
   "{ href: '/places/arugam-bay', image: '/images/arugam-bay.jpg'"],
]);

// north-jaffna.astro
patch('pages/places/north-jaffna.astro', [
  ['<img src="/images/hero.jpg" alt="" class="w-full h-full object-cover" loading="eager"',
   '<img src="/images/jaffna.jpg" alt="Jaffna Peninsula, northern Sri Lanka" class="w-full h-full object-cover" loading="eager"'],
  ["{ href: '/places/jaffna', image: '/images/hero.jpg'",
   "{ href: '/places/jaffna', image: '/images/jaffna.jpg'"],
]);

// south-coast.astro
patch('pages/places/south-coast.astro', [
  ["{ href: '/places/tangalle', image: '/images/hero.jpg'",
   "{ href: '/places/tangalle', image: '/images/tangalle.jpg'"],
]);

// wildlife-parks.astro
patch('pages/places/wildlife-parks.astro', [
  ["{ href: '/places/minneriya', image: '/images/hero.jpg'",
   "{ href: '/places/minneriya', image: '/images/minneriya.jpg'"],
]);

// ─── 8. About page: Unsplash person photo ────────────────────────
patch('pages/about.astro', [
  ['src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&q=80"',
   'src="/images/hero.jpg"'],
]);

console.log('\nAll done.');
