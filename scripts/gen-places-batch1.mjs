import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const base = join(__dirname, '../src/pages/places');

function place({ slug, title, desc, publishDate, image, imageAlt, breadcrumbParent, breadcrumbParentHref, h1, subtitle, badge, quickFacts, body, affiliateTitle, affiliateDesc, affiliateBtn, affiliateHref, affiliateVariant, planVisit, nearbyLinks }) {
  return `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import AffiliateBox from '../../components/AffiliateBox.astro';
---
<BaseLayout
  title="${title} | The Trails of Ceylon"
  description="${desc}"
  type="article"
  publishDate="${publishDate}"
>
  <div class="relative h-[55vh] min-h-[380px] overflow-hidden">
    <img src="${image}" alt="${imageAlt}" class="w-full h-full object-cover" style="object-fit:cover;" fetchpriority="high" width="800" height="600" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 p-8">
      <div class="max-w-4xl mx-auto">
        <nav class="flex items-center gap-2 text-white/70 text-xs mb-3" aria-label="Breadcrumb">
          <a href="/" class="hover:text-white">Home</a><span>/</span>
          <a href="/places" class="hover:text-white">Places</a><span>/</span>
          <a href="${breadcrumbParentHref}" class="hover:text-white">${breadcrumbParent}</a><span>/</span>
          <span class="text-white">${h1}</span>
        </nav>
        <span class="inline-block bg-ceylon-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">${badge}</span>
        <h1 class="font-serif font-black text-white text-4xl sm:text-5xl">${h1}</h1>
        <p class="text-white/80 mt-2 text-lg">${subtitle}</p>
      </div>
    </div>
  </div>

  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-14">
    <div class="grid lg:grid-cols-[1fr_280px] gap-12">
      <article class="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-ceylon-green-700 prose-strong:text-gray-900">

        <div class="not-prose quick-facts-card">
          <h2 class="font-serif font-bold text-gray-900 text-xl mb-3">Quick Facts</h2>
          <dl class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {${JSON.stringify(quickFacts)}.map(([k, v]) => (
              <><dt class="font-semibold text-gray-700">{k}</dt><dd class="text-gray-600">{v}</dd></>
            ))}
          </dl>
        </div>

${body}

        <AffiliateBox
          title="${affiliateTitle}"
          description="${affiliateDesc}"
          buttonText="${affiliateBtn}"
          buttonHref="${affiliateHref}"
          variant="${affiliateVariant}"
        />

      </article>

      <aside class="lg:sticky lg:top-28 space-y-6 h-fit">
        <div class="plan-visit-box">
          <h3 class="font-serif font-bold text-white text-lg mb-4">Plan Your Visit</h3>
          <div class="space-y-3 text-sm">
            {${JSON.stringify(planVisit)}.map(([k, v]) => (
              <div class="flex justify-between gap-4"><span class="font-medium text-white/80">{k}</span><span class="text-white/70 text-right">{v}</span></div>
            ))}
          </div>
          <a href="${affiliateHref}" target="_blank" rel="noopener noreferrer sponsored" class="book-btn mt-4 block text-center">
            Find Hotels Nearby
          </a>
        </div>
        <div class="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h3 class="font-serif font-bold text-gray-900 text-lg mb-4">Nearby Places</h3>
          <div class="space-y-3">
            {${JSON.stringify(nearbyLinks)}.map(link => (
              <a href={link.href} class="nearby-pill">
                <svg class="w-4 h-4 text-gray-300 group-hover:text-ceylon-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  </div>
</BaseLayout>`;
}

const pages = [
  {
    slug: 'hikkaduwa',
    title: 'Hikkaduwa, Sri Lanka: Beaches, Coral Reefs & Nightlife Guide',
    desc: 'Hikkaduwa is Sri Lanka\'s most vibrant beach town — coral reefs teeming with turtles, consistent surf, and the best nightlife on the south coast.',
    publishDate: '2025-03-01',
    image: '/images/snorkelling.jpg',
    imageAlt: 'Coral reef snorkelling at Hikkaduwa, Sri Lanka',
    breadcrumbParent: 'South Coast',
    breadcrumbParentHref: '/places/south-coast',
    h1: 'Hikkaduwa',
    subtitle: 'South Coast • Coral Reefs • Surf • Nightlife',
    badge: 'South Coast',
    quickFacts: [
      ['Province', 'Southern Province'],
      ['Distance from Colombo', '98km (1.5 hrs)'],
      ['Best For', 'Snorkelling, surf, nightlife'],
      ['Best Season', 'Nov–April'],
      ['Days Needed', '2–3 days'],
      ['Beach Length', '3km coral reef coast'],
    ],
    body: `        <p>Hikkaduwa is Sri Lanka's original beach resort, and four decades after the first travellers discovered it, it remains one of the island's most energetic and fun destinations. Strung along 3 kilometres of coast with a coral reef running parallel to the shoreline, Hikkaduwa offers some of the most accessible reef snorkelling in Sri Lanka, consistent surf breaks, a vibrant restaurant and bar scene, and the only real beachside nightlife outside Colombo. It is busier and more developed than the quieter beaches to the south, but that is precisely the point — Hikkaduwa has an energy all its own.</p>

        <h2>Snorkelling & Marine Life</h2>
        <p>The Hikkaduwa Coral Sanctuary is a protected marine park running along most of the beach. You can snorkel straight from the beach — the reef begins just 30–50 metres offshore and reaches a maximum depth of about 6 metres, making it ideal for beginners. The coral itself has suffered bleaching events in recent decades but remains home to an impressive variety of reef fish — parrotfish, butterflyfish, surgeonfish and the occasional moray eel. Most remarkably, Hikkaduwa has a resident population of sea turtles — green turtles and hawksbill turtles that have become extraordinarily comfortable around snorkellers. Ethical interaction is important: do not touch or chase the turtles, and choose operators who enforce minimum approach distances.</p>
        <p>Glass-bottom boat tours operate from the beach and give non-swimmers a view of the reef. Snorkel gear rental is available from most beach shacks for LKR 300–500 per hour. Mask quality varies — bring your own if snorkelling is a priority.</p>

        <h2>Surfing at Hikkaduwa</h2>
        <p>Hikkaduwa has been a surf destination since the 1970s. The main break — a reef break known as "Hikka" — produces consistent right-handers best suited to intermediate surfers. The wave breaks over a shallow reef and can be punchy when the swell is running. More forgiving breaks suitable for beginners can be found at the northern end of the beach near Narigama. Surf season runs November to April, with the most consistent swell January through March. Board rental is ubiquitous (LKR 800–1,200/day); lessons are available from certified instructors at most surf schools.</p>

        <h2>Nightlife & Eating</h2>
        <p>Hikkaduwa comes alive after dark in a way that few Sri Lankan beach towns do. The main strip of restaurants and bars along Galle Road runs south from the bus stand — look for Rotty, Spaghetti and Coco's for reliable food; the beachside bar at Vibration is the most established nightlife venue. The Tuesday full-moon parties at Drunken Monkey and similar venues draw a cosmopolitan mix of travellers. The food scene is better than you might expect — beyond the tourist staples, small local restaurants serve excellent rice and curry and fresh seafood.</p>

        <h2>Getting to Hikkaduwa</h2>
        <p>Hikkaduwa lies 98km south of Colombo on the coastal railway line. The train from Colombo Fort takes about 2.5 hours and is one of Sri Lanka's most scenic journeys — the line runs right along the shoreline for much of the way. Trains run frequently throughout the day; the express takes around 2 hours. By car via the Southern Expressway, Hikkaduwa is about 1.5 hours from Colombo (exit at Pinnaduwa and continue south on the A2). From Galle, it is just 20 minutes by tuk-tuk or bus.</p>

        <h2>Best Time to Visit</h2>
        <p>The south coast season runs November through April. December to February is peak season with the most settled weather — blue skies, calm seas and good visibility for snorkelling and diving. The water is clearest January through March. The surf is most consistent January through March. Avoid May through October when the southwest monsoon brings rough seas and strong currents that make water activities dangerous and most tourist businesses close or reduce hours.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Book accommodation directly with guesthouses for the best rates — Hikkaduwa has dozens of excellent small guesthouses that are much better value than the big hotels</li>
          <li>Snorkel in the morning when the water is calmer and visibility is better</li>
          <li>The beach at the southern end (Narigama and Thiranagama) is quieter and less touristy than the main strip</li>
          <li>Hire a bicycle for a day to explore the coast — the flat terrain makes cycling ideal</li>
          <li>The Turtle Watch programme at the south end of the beach operates an ethical hatchery — worth visiting to understand turtle conservation</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Hikkaduwa',
    affiliateDesc: 'From budget guesthouses on the beach to comfortable hotels along the coral reef strip — find your perfect base in Hikkaduwa.',
    affiliateBtn: 'Search Hotels on Booking.com',
    affiliateHref: 'https://www.booking.com/searchresults.html?ss=Hikkaduwa+Sri+Lanka',
    affiliateVariant: 'hotel',
    planVisit: [
      ['Best Season', 'November–April'],
      ['Ideal Stay', '2–3 days'],
      ['Top Activity', 'Coral reef snorkelling'],
      ['From Colombo', '2.5 hrs by train'],
    ],
    nearbyLinks: [
      { href: '/places/galle', label: 'Galle Fort (20km)' },
      { href: '/places/unawatuna', label: 'Unawatuna (25km)' },
      { href: '/places/weligama', label: 'Weligama (40km)' },
      { href: '/things-to-do/snorkelling', label: 'Snorkelling Guide' },
    ],
  },
  {
    slug: 'bentota',
    title: 'Bentota, Sri Lanka: Lagoon, Water Sports & Brief Garden',
    desc: 'Bentota is Sri Lanka\'s premier resort beach — a beautiful sandy spit between the Indian Ocean and a tranquil lagoon, famous for water sports, luxury hotels and the extraordinary Brief Garden.',
    publishDate: '2025-03-01',
    image: '/images/mirissa-beach.jpg',
    imageAlt: 'Bentota beach and lagoon, Sri Lanka',
    breadcrumbParent: 'South Coast',
    breadcrumbParentHref: '/places/south-coast',
    h1: 'Bentota',
    subtitle: 'South Coast • Resort Beach • Water Sports • Lagoon',
    badge: 'South Coast',
    quickFacts: [
      ['Province', 'Southern Province'],
      ['Distance from Colombo', '65km (1.5 hrs)'],
      ['Best For', 'Water sports, couples, families'],
      ['Best Season', 'Nov–April'],
      ['Days Needed', '2–4 days'],
      ['Beach Type', 'Sandy spit with lagoon'],
    ],
    body: `        <p>Bentota occupies a narrow sandy spit where the Bentota River meets the Indian Ocean, creating one of the most naturally beautiful beach settings in Sri Lanka. On one side, the open sea — on the other, a wide, tranquil lagoon fringed with mangroves. Between them, a long arc of golden sand that has drawn honeymooning couples and families for decades. Bentota is more upmarket than Hikkaduwa and more resort-oriented than Mirissa, with Sri Lanka's largest concentration of four and five-star beach hotels. But it also has a distinct local character — the lagoon, in particular, is alive with birdlife, boat trips and a sense of tropical escape that the more commercialised beach towns cannot match.</p>

        <h2>Water Sports on the Lagoon</h2>
        <p>The Bentota River lagoon is Sri Lanka's water sports capital. The calm, sheltered water is ideal for everything from windsurfing and kitesurfing to jet-skiing, wakeboarding, banana boat rides, and water-skiing. The lagoon also offers excellent kayaking — paddle upstream through the mangroves, which shelter herons, kingfishers, water monitors and — with luck — small crocodiles. Most large hotels offer water sports packages; independent operators on the beach typically charge LKR 2,000–5,000 per activity. Renting a motor boat to explore the lagoon and its mangrove channels is one of the best ways to spend a morning.</p>

        <h2>Brief Garden</h2>
        <p>One of Sri Lanka's most extraordinary gardens, Brief Garden was created by artist and landscape gardener Bevis Bawa (brother of architect Geoffrey Bawa) over 40 years from 1929. The four-acre garden is an exuberant, eccentric masterpiece — terraced lawns, tropical planting, pools, sculptures and a pavilion decorated with murals by artist Donald Friend. Bawa entertained artists, writers and celebrities here, and the house retains its bohemian, personal atmosphere. Brief Garden is located inland near Aluthgama, about 5km from Bentota — hire a tuk-tuk. Open daily 8am–5pm; entry fee applies.</p>

        <h2>Kosgoda Turtle Hatchery</h2>
        <p>Just 8km north of Bentota, the Kosgoda Sea Turtle Conservation Project is one of Sri Lanka's longest-running turtle conservation programmes. Five species of sea turtle — green, leatherback, loggerhead, olive ridley and hawksbill — nest on the beach here. The hatchery collects eggs from at-risk nests, incubates them safely, and releases hatchlings. Visitors can watch the hatchery operation, learn about turtle biology, and if timing allows, witness a release. Most visits are early morning or evening. A small admission fee supports the conservation work.</p>

        <h2>The Beach</h2>
        <p>Bentota Beach itself is wide, long and relatively uncrowded — the presence of large hotel estates along the shoreline means fewer beach hawkers than at Hikkaduwa. Swimming conditions are good November through April, though a degree of caution is needed near the river mouth where currents can be unpredictable. The southern part of the beach (beyond the railway bridge) is quieter and popular with families.</p>

        <h2>Getting to Bentota</h2>
        <p>Bentota is on the coastal railway line between Colombo and Galle — trains from Colombo Fort take about 1.5–2 hours and run throughout the day. The beach is a short tuk-tuk ride from Bentota station. By car via the Southern Expressway, Bentota is about 1 hour from Colombo. From Galle, it is about 40 minutes north by train or road. From Colombo airport (Negombo), allow 2.5–3 hours.</p>

        <h2>Best Time to Visit</h2>
        <p>The south coast season (November to April) is when Bentota is at its best. The calmer sea conditions make water sports safer and more enjoyable. February and March offer the most settled weather. The southwest monsoon (May–September) can make the sea too rough for most water activities, though the lagoon remains relatively sheltered.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Book a river lagoon boat tour through your hotel or a local operator for a genuine wildlife experience — early morning is best for birds</li>
          <li>Brief Garden is worth the tuk-tuk trip even if you're not a garden enthusiast — the atmosphere is unlike anywhere else in Sri Lanka</li>
          <li>For the best value accommodation, stay in Aluthgama (the town across the river from Bentota) and tuk-tuk to the beach</li>
          <li>Combine Bentota with a day trip to Galle Fort (40 minutes south) to balance beach and culture</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Bentota',
    affiliateDesc: 'Bentota has some of Sri Lanka\'s finest beach resorts — from boutique guesthouses on the lagoon to five-star oceanfront hotels.',
    affiliateBtn: 'Search Hotels on Booking.com',
    affiliateHref: 'https://www.booking.com/searchresults.html?ss=Bentota+Sri+Lanka',
    affiliateVariant: 'hotel',
    planVisit: [
      ['Best Season', 'November–April'],
      ['Ideal Stay', '2–4 days'],
      ['Top Activity', 'Lagoon water sports'],
      ['From Colombo', '1.5 hrs by train'],
    ],
    nearbyLinks: [
      { href: '/places/hikkaduwa', label: 'Hikkaduwa (30km)' },
      { href: '/places/galle', label: 'Galle Fort (40km)' },
      { href: '/things-to-do/turtle-watching', label: 'Turtle Watching' },
      { href: '/places/south-coast', label: 'South Coast Guide' },
    ],
  },
  {
    slug: 'hiriketiya',
    title: 'Hiriketiya Beach, Sri Lanka: The Hidden Bay Worth Seeking Out',
    desc: 'Hiriketiya is Sri Lanka\'s most photogenic beach — a perfect horseshoe bay with great surf, boutique cafes and an intimate atmosphere away from the crowds.',
    publishDate: '2025-03-01',
    image: '/images/arugam-bay.jpg',
    imageAlt: 'Hiriketiya bay surf and beach, Sri Lanka',
    breadcrumbParent: 'South Coast',
    breadcrumbParentHref: '/places/south-coast',
    h1: 'Hiriketiya',
    subtitle: 'South Coast • Hidden Bay • Surf • Boutique Scene',
    badge: 'South Coast',
    quickFacts: [
      ['Province', 'Southern Province'],
      ['Nearest Town', 'Dickwella (3km)'],
      ['Best For', 'Surf, photography, boutique stay'],
      ['Best Season', 'Nov–March'],
      ['Days Needed', '2–3 days'],
      ['Bay Shape', 'Perfect horseshoe bowl'],
    ],
    body: `        <p>Hiriketiya arrived on the global travel radar about a decade ago and almost immediately became the most photographed beach in Sri Lanka. The reason is its geography: a near-perfect horseshoe bay carved from the southern coastline near Dickwella, where the surrounding hills cup the ocean into a sheltered bowl of turquoise water. The beach is small — perhaps 200 metres across — which gives it an intimate, almost secret quality that the longer, flatter beaches of the south coast lack. A handful of excellent small cafes and boutique guesthouses line the back of the beach, and the whole atmosphere is relaxed, creative, and cosmopolitan in the way that only the best small surf beaches achieve.</p>

        <h2>Surfing Hiriketiya</h2>
        <p>The bay's horseshoe shape creates both a left and a right break, which can work simultaneously when the swell lines up correctly. The left is generally considered the better wave — a fun, peeling ride suitable for intermediate surfers. The right is shorter but can be hollow on bigger days. The bottom is sand, which makes it forgiving for wipeouts. The bay faces south, meaning it picks up the same south swell that drives the rest of the south coast breaks. Best November through March; the wave can get messy with the southwest monsoon from May. Board rental is available from several shacks at the back of the beach. The waves at Hiriketiya are genuinely fun rather than exceptional — but the setting makes every session feel special.</p>

        <h2>The Cafe & Food Scene</h2>
        <p>For a beach this small, Hiriketiya has a remarkably good food scene. The cafes lining the back of the beach — Dots, Hey Turtle, and a rotating cast of pop-up operators — serve excellent coffee, smoothie bowls, fresh fish tacos and the kind of wholesome café food that has become standard at good surf beaches worldwide. The standard is consistently high, the prices are reasonable, and eating breakfast while watching surfers is one of the great simple pleasures of a Sri Lanka beach trip.</p>

        <h2>Accommodation</h2>
        <p>Hiriketiya has a limited number of guesthouses and small hotels — this is part of its charm. The options within walking distance of the beach book up quickly in peak season (December–February); reservations are essential. A handful of excellent boutique guesthouses offer rooms right on the beach. For more options, the town of Dickwella (3km) has additional accommodation including some good midrange guesthouses.</p>

        <h2>Getting to Hiriketiya</h2>
        <p>Hiriketiya is not on the main coastal railway line. The nearest train station is Weligama (about 15km west) or Matara (about 20km east). From either station, hire a tuk-tuk to Hiriketiya — expect to pay LKR 600–900. By road from Galle, follow the A2 coastal road east through Matara — the turn to Hiriketiya is signposted at Dickwella. From Mirissa, it is about 30 minutes by tuk-tuk east along the coast road.</p>

        <h2>Best Time to Visit</h2>
        <p>November through March is the prime window — the bay is settled, the surf is consistent, and the cafes are fully open. April can still be good. From May, the southwest monsoon can make the bay choppy. Unlike some south coast beaches, Hiriketiya's enclosed shape gives it some protection from wind, making it workable on days when more exposed beaches are rough.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Book accommodation at least 2 weeks ahead in December and January — the limited beachfront options sell out fast</li>
          <li>Visit on a weekday if possible — weekend crowds from Colombo can make the small bay feel congested</li>
          <li>The rocks at either end of the bay are great for cliff jumping at high tide — but check conditions carefully first</li>
          <li>Explore nearby Dickwella for a more local experience: good rice and curry restaurants and a much lower tourist premium</li>
          <li>The viewpoint above the northern headland gives the best aerial view of the bay — walk up in the morning for photos</li>
        </ul>`,
    affiliateTitle: 'Find Places to Stay Near Hiriketiya',
    affiliateDesc: 'Boutique guesthouses right on the bay and comfortable options in nearby Dickwella — book ahead as Hiriketiya accommodation is limited.',
    affiliateBtn: 'Search Hotels on Booking.com',
    affiliateHref: 'https://www.booking.com/searchresults.html?ss=Hiriketiya+Sri+Lanka',
    affiliateVariant: 'hotel',
    planVisit: [
      ['Best Season', 'November–March'],
      ['Ideal Stay', '2–3 days'],
      ['Top Activity', 'Surfing & cafe scene'],
      ['From Weligama', '15km by tuk-tuk'],
    ],
    nearbyLinks: [
      { href: '/places/weligama', label: 'Weligama (15km)' },
      { href: '/places/tangalle', label: 'Tangalle (25km)' },
      { href: '/places/galle', label: 'Galle Fort' },
      { href: '/things-to-do/surfing', label: 'Surfing Guide' },
    ],
  },
  {
    slug: 'dikwella',
    title: 'Dikwella, Sri Lanka: Off the Beaten Path on the South Coast',
    desc: 'Dikwella is a working fishing town on the south coast with a spectacular Buddha statue, blowholes and access to Hiriketiya bay — refreshingly free of tourist crowds.',
    publishDate: '2025-03-01',
    image: '/images/tangalle.jpg',
    imageAlt: 'Dikwella south coast Sri Lanka fishing town',
    breadcrumbParent: 'South Coast',
    breadcrumbParentHref: '/places/south-coast',
    h1: 'Dikwella',
    subtitle: 'South Coast • Off the Beaten Path • Wewurukannala Buddha',
    badge: 'South Coast',
    quickFacts: [
      ['Province', 'Southern Province'],
      ['Distance from Galle', '52km'],
      ['Best For', 'Local life, Buddha statue, blowholes'],
      ['Best Season', 'Nov–April'],
      ['Days Needed', '1–2 days'],
      ['Nearest Beach', 'Hiriketiya (3km)'],
    ],
    body: `        <p>Dikwella sits in the section of the south coast that most travellers speed through on their way between Mirissa and Tangalle — and this is precisely what makes it interesting. It is a working fishing town without the tourist infrastructure of Hikkaduwa or Unawatuna, which means cheaper food, more genuine interactions, and a sense of what Sri Lankan coastal life actually looks like beyond the beach bars and boutique hotels. But Dikwella has two attractions that are genuinely worth a detour: one of the most extraordinary religious monuments in Sri Lanka, and the best surf beach on the southeastern coast just three kilometres away.</p>

        <h2>Wewurukannala Vihara — The Giant Buddha</h2>
        <p>The Wewurukannala Vihara temple complex on the outskirts of Dikwella is dominated by a colossal seated Buddha statue that rises 39 metres above the surrounding landscape — one of the largest Buddha statues in Sri Lanka. The statue, built in the 1960s and 1970s, is painted in vivid colours and is visible from several kilometres away. More striking than the exterior is the interior of the multi-storey building at the base of the statue: a sequence of rooms containing elaborate dioramas depicting the Buddhist hell realms and the punishments that await wrongdoers in the next life. The imagery is graphic, vivid, and utterly unlike anything you will see elsewhere in Sri Lanka — and the experience of climbing through these painted rooms to emerge at the top beside the giant Buddha is genuinely extraordinary.</p>

        <h2>Dickwella Beach & The Blowholes</h2>
        <p>About 2km from town, the coast is punctuated by a series of natural blowholes known as Hummanaya — said to be the largest blowholes in Asia. During high tide and when the swell is running, jets of seawater are forced up through crevices in the coastal rocks to heights of 20 metres or more, accompanied by a thunderous roar. The blowholes are best visited on a day with some swell and at high tide — check conditions locally before making the trip. A small fee is charged to access the viewpoint.</p>

        <h2>Hiriketiya Bay</h2>
        <p>Dikwella is the jumping-off point for <a href="/places/hiriketiya">Hiriketiya</a>, one of Sri Lanka's most photographed beaches. The perfect horseshoe bay is 3km from town and accessible by tuk-tuk in 10 minutes. It has become Sri Lanka's most fashionable small beach in recent years, with a thriving surf and café scene.</p>

        <h2>Getting to Dikwella</h2>
        <p>Dikwella has a railway station on the Colombo–Matara coastal line — trains from Colombo take about 3 hours; from Galle about 1.5 hours. By road from Galle, follow the A2 east through Matara (about 50km). Tuk-tuks are plentiful for local exploration once you arrive. From Tangalle, Dikwella is 20km west along the coast road.</p>

        <h2>Best Time to Visit</h2>
        <p>The south coast season (November–April) applies here — best beach and sea conditions, driest weather. The Wewurukannala Vihara is open year-round and unaffected by the monsoon. The blowholes are actually more spectacular during the monsoon season when the swell is strongest — though road access can occasionally be disrupted by heavy rain.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>The Wewurukannala Vihara is open daily from early morning — visit first thing before the heat builds and before tour groups arrive</li>
          <li>Dress respectfully at the temple: cover shoulders and knees, remove shoes at the entrance</li>
          <li>Ask your guesthouse about current blowhole conditions before making the trip</li>
          <li>Dikwella's local restaurants serve some of the best-value rice and curry on the south coast — eat where the fishermen eat</li>
        </ul>`,
    affiliateTitle: 'Find Hotels Near Dikwella',
    affiliateDesc: 'Stay in Dikwella town or the nearby boutique options at Hiriketiya bay — book ahead for the peak December–February period.',
    affiliateBtn: 'Search Hotels on Booking.com',
    affiliateHref: 'https://www.booking.com/searchresults.html?ss=Dikwella+Sri+Lanka',
    affiliateVariant: 'hotel',
    planVisit: [
      ['Best Season', 'November–April'],
      ['Ideal Stay', '1–2 days'],
      ['Top Sight', 'Wewurukannala Buddha'],
      ['Nearest Beach', 'Hiriketiya (3km)'],
    ],
    nearbyLinks: [
      { href: '/places/hiriketiya', label: 'Hiriketiya Bay (3km)' },
      { href: '/places/tangalle', label: 'Tangalle (20km)' },
      { href: '/places/weligama', label: 'Weligama (25km)' },
      { href: '/places/mirissa', label: 'Mirissa (35km)' },
    ],
  },
  {
    slug: 'nilaveli',
    title: 'Nilaveli Beach, Sri Lanka: East Coast Paradise Near Trincomalee',
    desc: 'Nilaveli is one of Sri Lanka\'s finest beaches — a long stretch of pristine white sand north of Trincomalee, with Pigeon Island\'s coral reef just offshore.',
    publishDate: '2025-03-01',
    image: '/images/trincomalee.jpg',
    imageAlt: 'Nilaveli beach pristine white sand east coast Sri Lanka',
    breadcrumbParent: 'East Coast',
    breadcrumbParentHref: '/places/east-coast',
    h1: 'Nilaveli',
    subtitle: 'East Coast • Pristine Beach • Pigeon Island Snorkelling',
    badge: 'East Coast',
    quickFacts: [
      ['Province', 'Eastern Province'],
      ['Distance from Trincomalee', '16km north'],
      ['Best For', 'Beach, snorkelling, solitude'],
      ['Best Season', 'May–September'],
      ['Days Needed', '2–3 days'],
      ['Beach Type', 'Wide, white sand, calm sea'],
    ],
    body: `        <p>Nilaveli is the east coast's finest beach — a sweeping arc of white sand running north of Trincomalee, with water so clear you can see the sandy bottom in chest-deep water. It is one of the least-visited beautiful beaches in Sri Lanka, partly because it is on the east coast (best May–September, opposite to the busy winter season on the south coast), and partly because the journey to get here requires some effort. Those who make the trip are rewarded with uncrowded shorelines, exceptional snorkelling at nearby <a href="/places/pigeon-island">Pigeon Island</a>, and a tranquillity that is becoming increasingly rare in the more famous beach destinations.</p>

        <h2>Pigeon Island National Marine Park</h2>
        <p>Just 1km offshore from Nilaveli beach, Pigeon Island is Sri Lanka's most celebrated snorkelling and diving destination. The island has two sections: one protected as a national park with pristine coral gardens, blacktip reef sharks and sea turtles; and a smaller island used as a picnic spot. Boat transfers from Nilaveli beach take about 10–15 minutes. The marine park charges an entry fee, and reputable operators emphasise no-touch, no-feed snorkelling to protect the reef. Best visibility is from May through September.</p>

        <h2>The Beach</h2>
        <p>Nilaveli beach stretches for about 5km, with the clearest sand and calmest conditions in the middle section in front of the main guesthouses. Unlike south coast beaches, there is almost no seaweed, minimal fishing boat traffic, and the sea gradient is gentle — ideal for swimming with children. The beach is wide enough that even during the July–August peak (when Sri Lankan families from Colombo come for the holidays), there is plenty of space. Early morning and evening are magical — the light is soft, the beach is empty, and the sea has a luminous quality.</p>

        <h2>Whale Shark Encounters</h2>
        <p>Between January and April (outside the main Nilaveli season but coinciding with the southwest coast season), whale sharks visit the waters around Trincomalee and Nilaveli. Dive operators in Trincomalee organise specific whale shark dive trips during this period. These enormous, gentle fish — the world's largest — are a bucket-list encounter. Trips must be booked in advance and encounters cannot be guaranteed.</p>

        <h2>Getting to Nilaveli</h2>
        <p>Nilaveli is reached via Trincomalee, which is about 7–8 hours from Colombo by bus or train (via Habarana junction). From Trincomalee town, take a tuk-tuk north along the A12 to Nilaveli — 30 minutes, roughly LKR 600. Alternatively, some guesthouses offer pickup from Trincomalee. By car from Colombo, allow 6–7 hours depending on traffic. FitsAir operates occasional flights from Colombo to Trincomalee, cutting travel time to about 1 hour.</p>

        <h2>Best Time to Visit</h2>
        <p>May through September is the prime window, with June, July and August offering the calmest sea and best snorkelling visibility. The northeast monsoon arrives in October, bringing rough seas. During the south coast off-season (May–September), Nilaveli is at its best — a welcome alternative for travellers who find the south coast too crowded or too expensive in high season.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Book Pigeon Island snorkelling trips through your guesthouse — they know the reliable operators</li>
          <li>Bring your own snorkel gear if possible — quality varies between rental operators</li>
          <li>The sea at Nilaveli is perfectly calm for swimming most of May–September but check with locals daily as conditions can change</li>
          <li>Combine with a visit to Trincomalee town (the Koneswaram temple and natural harbour are worth a half day)</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Nilaveli',
    affiliateDesc: 'Beachfront guesthouses and comfortable hotels right on Nilaveli beach — most within walking distance of the Pigeon Island boat launch.',
    affiliateBtn: 'Search Hotels on Booking.com',
    affiliateHref: 'https://www.booking.com/searchresults.html?ss=Nilaveli+Sri+Lanka',
    affiliateVariant: 'hotel',
    planVisit: [
      ['Best Season', 'May–September'],
      ['Ideal Stay', '2–3 days'],
      ['Top Activity', 'Pigeon Island snorkelling'],
      ['From Trincomalee', '30 mins by tuk-tuk'],
    ],
    nearbyLinks: [
      { href: '/places/trincomalee', label: 'Trincomalee (16km)' },
      { href: '/places/pigeon-island', label: 'Pigeon Island' },
      { href: '/places/uppuveli', label: 'Uppuveli (8km)' },
      { href: '/things-to-do/snorkelling', label: 'Snorkelling Guide' },
    ],
  },
  {
    slug: 'uppuveli',
    title: 'Uppuveli Beach, Sri Lanka: Trincomalee\'s Best Beach Strip',
    desc: 'Uppuveli is the beach directly north of Trincomalee — calmer and more accessible than Nilaveli, with a CWGC war cemetery and excellent seafood on the shore.',
    publishDate: '2025-03-01',
    image: '/images/trincomalee.jpg',
    imageAlt: 'Uppuveli beach Trincomalee east coast Sri Lanka',
    breadcrumbParent: 'East Coast',
    breadcrumbParentHref: '/places/east-coast',
    h1: 'Uppuveli',
    subtitle: 'East Coast • Beach • Trincomalee Strip • WWII Cemetery',
    badge: 'East Coast',
    quickFacts: [
      ['Province', 'Eastern Province'],
      ['Distance from Trincomalee', '6km north'],
      ['Best For', 'Beach, history, seafood'],
      ['Best Season', 'May–September'],
      ['Days Needed', '1–2 days'],
      ['Nearest Snorkelling', 'Pigeon Island (8km)'],
    ],
    body: `        <p>Uppuveli is the first beach you reach heading north from Trincomalee — closer to town than Nilaveli, more convenient, and with a strip of guesthouses and beach restaurants that makes it a natural base for exploring the broader Trincomalee area. The beach is beautiful — a long, wide stretch of white sand with the same calm east coast sea that makes this region so special — and the community of fishing villages behind it gives the place a genuinely local character. Uppuveli is slightly busier than Nilaveli, but still tranquil by south coast standards, and its proximity to Trincomalee town makes it easier to combine beach time with cultural sightseeing.</p>

        <h2>Trincomalee War Cemetery</h2>
        <p>One of Uppuveli's most significant landmarks is the Commonwealth War Graves Commission cemetery on the beach road — the final resting place of 361 Commonwealth servicemen who died in Ceylon during the Second World War. Trincomalee was a critical Allied naval base and suffered Japanese air raids in April 1942 (the same week as the attack on Colombo). The cemetery is beautifully maintained, its white headstones arranged under shade trees near the sea, and is open to visitors throughout the day. It is a moving and often overlooked piece of Second World War history.</p>

        <h2>The Beach</h2>
        <p>Uppuveli beach runs for about 3km, with the main accommodation strip concentrated in the middle section. The sand is wide, clean and golden-white. The sea is calm from May through September — perfect for swimming, kayaking and stand-up paddleboarding. Several guesthouses have sun loungers on the beach available to guests. Boat trips to Pigeon Island for snorkelling can be arranged from Uppuveli — a 20-minute journey — and are slightly cheaper than from Nilaveli.</p>

        <h2>Food & Seafood</h2>
        <p>Uppuveli is known for excellent fresh seafood. The guesthouses along the beach strip serve grilled fish, crab curry, prawn kottu and fresh-caught barracuda — the quality of seafood in Trincomalee is among the best in Sri Lanka. The local Muslim fishing community ensures a constant supply of the freshest catch. Rice and curry from the small town eateries just behind the beach costs LKR 200–400 and is consistently excellent.</p>

        <h2>Getting to Uppuveli</h2>
        <p>From Trincomalee town, take a tuk-tuk north on the Nilaveli road — Uppuveli is 6km and costs about LKR 200–300. The bus from Trincomalee bus station to Nilaveli also stops at Uppuveli. By train or bus from Colombo, arrive at Trincomalee and take a tuk-tuk north. The railway station in Trincomalee is about 7–8 hours from Colombo Fort via Habarana. Driving from Colombo takes 6–7 hours.</p>

        <h2>Best Time to Visit</h2>
        <p>May through September is peak season for the east coast. July and August bring the most visitors — Sri Lankan families from Colombo and Kandy often holiday here in August. For fewer crowds, May, June and September are excellent months with good weather but far fewer tourists. October signals the arrival of the northeast monsoon and the beach season winds down.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Stay at one of the beach-strip guesthouses rather than in Trincomalee town — the beach is much more pleasant and tuk-tuks make town visits easy</li>
          <li>Visit the CWGC cemetery in the early morning when the light is soft and the grounds are quiet</li>
          <li>Negotiate tuk-tuk prices to Pigeon Island boat launch in advance</li>
          <li>Trincomalee town is worth a half-day: the Koneswaram temple cliff and the natural harbour viewpoints are spectacular</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Uppuveli',
    affiliateDesc: 'Beachside guesthouses and midrange hotels along the Uppuveli beach strip — book ahead for July and August when east coast demand peaks.',
    affiliateBtn: 'Search Hotels on Booking.com',
    affiliateHref: 'https://www.booking.com/searchresults.html?ss=Uppuveli+Sri+Lanka',
    affiliateVariant: 'hotel',
    planVisit: [
      ['Best Season', 'May–September'],
      ['Ideal Stay', '1–2 days'],
      ['Top Sight', 'War Cemetery & beach'],
      ['From Trincomalee', '6km, LKR 200 tuk-tuk'],
    ],
    nearbyLinks: [
      { href: '/places/trincomalee', label: 'Trincomalee (6km)' },
      { href: '/places/nilaveli', label: 'Nilaveli (8km)' },
      { href: '/places/pigeon-island', label: 'Pigeon Island' },
      { href: '/places/east-coast', label: 'East Coast Guide' },
    ],
  },
  {
    slug: 'kalpitiya',
    title: 'Kalpitiya, Sri Lanka: Kitesurfing Capital & Dolphin Watching',
    desc: 'Kalpitiya is Sri Lanka\'s kitesurfing capital — a remote peninsula on the northwest coast with world-class kite conditions, spinner dolphin pods and a completely undeveloped coastline.',
    publishDate: '2025-03-01',
    image: '/images/whale-watching.jpg',
    imageAlt: 'Kitesurfing and dolphins at Kalpitiya lagoon Sri Lanka',
    breadcrumbParent: 'Places',
    breadcrumbParentHref: '/places',
    h1: 'Kalpitiya',
    subtitle: 'Northwest Coast • Kitesurfing • Dolphins • Remote Peninsula',
    badge: 'Northwest Coast',
    quickFacts: [
      ['Province', 'North Western Province'],
      ['Distance from Colombo', '155km (3.5 hrs)'],
      ['Best For', 'Kitesurfing, dolphins, solitude'],
      ['Kite Season', 'May–October (SW wind)'],
      ['Days Needed', '2–5 days'],
      ['Lagoon Size', '40km sheltered strip'],
    ],
    body: `        <p>Kalpitiya is the kind of destination that makes dedicated adventure travellers feel they have discovered something genuinely undiscovered. This narrow peninsula on Sri Lanka's northwest coast encloses a 40-kilometre lagoon that produces some of the most consistent and powerful kite conditions in Asia — flat water on one side, ocean swell on the other, and a steady south-west wind from May to October that has made Kalpitiya one of the continent's premier kitesurfing destinations. Beyond the kite scene, Kalpitiya is also home to some of the world's most accessible spinner dolphin pods — hundreds of dolphins regularly encountered on morning boat trips out of the peninsula's small harbours.</p>

        <h2>Kitesurfing in Kalpitiya</h2>
        <p>The lagoon between Kalpitiya peninsula and the chain of barrier islands offshore creates ideal kitesurfing conditions: flat, waist-deep water over a sandy bottom, with the south-west trade wind blowing consistently at 15–25 knots from May through October. The setup is beginner-friendly on the lagoon side — the shallow water and consistent wind direction make learning to kite far easier than at many other destinations. Experienced kiters can head to the ocean side for wave riding. Several kite schools operate from the peninsula offering IKO-certified instruction. A basic kite course (3–4 hours of instruction) costs approximately USD 200–250 and gets most beginners flying independently. Advanced kiters can hire equipment and guides for downwind trips along the coast.</p>

        <h2>Spinner Dolphin Watching</h2>
        <p>The waters around Kalpitiya are home to resident pods of spinner dolphins — sometimes hundreds at a time. Morning boat trips (departing 6–7am) offer encounters with these acrobatic dolphins, often bow-riding the boat and leaping in their characteristic spinning motion. The encounters are usually in the open ocean west of the peninsula. On good days, other species including bottlenose dolphins and pilot whales are also seen. The trips are genuinely spectacular — far less commercialised than the dolphin watching at Mirissa and with a much higher probability of large pod encounters. Whale sharks are occasionally spotted in the area between January and April.</p>

        <h2>The Islands</h2>
        <p>The chain of small barrier islands off the Kalpitiya coast — Bar Reef is the most celebrated — form one of Sri Lanka's largest coral reef systems. Snorkelling trips to the reef can be arranged from Kalpitiya and offer a glimpse of reef life that is far less disturbed than the heavily visited south coast reefs. Bar Reef is a marine sanctuary; access is regulated and entry fees apply.</p>

        <h2>Getting to Kalpitiya</h2>
        <p>Kalpitiya is 155km north of Colombo via Negombo and Puttalam on the A003 highway. By car or taxi, allow 3.5–4 hours from Colombo (traffic in Negombo can add significant time). There is no train line directly to Kalpitiya; the nearest station is Puttalam, from where a tuk-tuk to the peninsula costs LKR 1,500–2,000. Most travellers hire a car from Colombo. Some kite camps arrange transfers.</p>

        <h2>Best Time to Visit</h2>
        <p>The kite season runs from May to October — the southwest monsoon that makes life difficult on the south coast generates the reliable wind that Kalpitiya's kiters prize. The wind is most consistent June through September. Outside this window (November–April), conditions are light and variable and most kite operations close. The dolphin watching is best from November to April, which means combining both activities requires picking one season.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Book kite lessons and accommodation together — the main kite camps offer all-inclusive packages that are better value than booking separately</li>
          <li>Kalpitiya has almost no tourist infrastructure outside the kite camps — bring cash as ATMs are unreliable</li>
          <li>The peninsula is flat and sandy — bring sun protection and quality sunglasses</li>
          <li>Early morning dolphin trips are worth setting an alarm for — the encounters can be extraordinary</li>
          <li>Bring a high SPF sunscreen — the combination of sun, wind and water reflection burns quickly</li>
        </ul>`,
    affiliateTitle: 'Book Kite Camps in Kalpitiya',
    affiliateDesc: 'All-inclusive kite camps with accommodation, instruction and equipment — Kalpitiya\'s camps are the best way to experience this remote destination.',
    affiliateBtn: 'Find Kalpitiya Kite Camps',
    affiliateHref: 'https://www.booking.com/searchresults.html?ss=Kalpitiya+Sri+Lanka',
    affiliateVariant: 'tour',
    planVisit: [
      ['Kite Season', 'May–October'],
      ['Dolphin Season', 'November–April'],
      ['Ideal Stay', '3–5 days'],
      ['From Colombo', '3.5 hrs by car'],
    ],
    nearbyLinks: [
      { href: '/things-to-do/kitesurfing', label: 'Kitesurfing Guide' },
      { href: '/things-to-do/dolphin-watching', label: 'Dolphin Watching' },
      { href: '/places/north-jaffna', label: 'North Sri Lanka' },
      { href: '/places', label: 'All Places' },
    ],
  },
];

for (const p of pages) {
  const content = place(p);
  writeFileSync(join(base, `${p.slug}.astro`), content, 'utf8');
  console.log(`✓ places/${p.slug}.astro`);
}
console.log(`\nBatch 1 complete: ${pages.length} places pages written.`);
