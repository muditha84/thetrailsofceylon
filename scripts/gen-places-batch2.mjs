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
          <a href="${affiliateHref}" target="_blank" rel="noopener noreferrer sponsored" class="book-btn mt-4 block text-center">Find Hotels Nearby</a>
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
    slug: 'matara',
    title: 'Matara, Sri Lanka: Star Fort, Dondra Lighthouse & Southern City',
    desc: 'Matara is the southernmost city in Sri Lanka — an underrated destination with a Dutch Star Fort, the island\'s southernmost lighthouse at Dondra, and excellent local food.',
    publishDate: '2025-03-01',
    image: '/images/galle-fort.jpg',
    imageAlt: 'Matara Star Fort southern Sri Lanka',
    breadcrumbParent: 'South Coast',
    breadcrumbParentHref: '/places/south-coast',
    h1: 'Matara',
    subtitle: 'South Coast • Star Fort • Dondra Head • Southern Gateway',
    badge: 'South Coast',
    quickFacts: [['Province','Southern Province'],['Distance from Colombo','160km (2.5 hrs)'],['Best For','History, day trips, local culture'],['UNESCO Site','Nearby Galle Fort (45km)'],['Days Needed','1 day'],['Railway','Southern terminal station']],
    body: `
        <p>Matara is the largest city on the south coast and the end of the line for both the coastal railway and the Southern Expressway, which has historically made it a through-stop rather than a destination. But Matara deserves more attention than that. It has a Dutch-built Star Fort that is one of the best-preserved examples of its type in Asia, a thriving local market scene, excellent street food, and access to Dondra Head — the southernmost point of Sri Lanka, topped by the tallest lighthouse on the island. For travellers wanting a more genuinely Sri Lankan experience after the polished tourism of Galle and the beach towns, Matara delivers.</p>

        <h2>The Star Fort</h2>
        <p>Matara's Star Fort is a small but remarkably complete Dutch fortification built in 1763 — a star-shaped defensive work with five bastions that controlled the entrance to the town from the Nilwala River. Today it contains a small museum with colonial-era artefacts and maps, and the ramparts are freely walkable. The fort is much less visited than Galle Fort and has an authentic, un-touristed quality that makes it feel genuinely discovered rather than curated. Entry is inexpensive. The surrounding town is a pleasant place to wander, with the old ramparts of the earlier Dutch outer fort visible in places.</p>

        <h2>Dondra Head Lighthouse</h2>
        <p>Ten kilometres east of Matara, Dondra Head is the southernmost point of Sri Lanka — and it is marked by the island's tallest lighthouse, a 49-metre white column built by the British in 1889 that is visible 26 nautical miles out to sea. The lighthouse is set in a small compound that is open to visitors on certain days (check locally). The headland itself is dramatic — the Indian Ocean visible in every direction, the sense of being at the edge of something genuine. The Dondra Vishnu Temple nearby is one of the oldest Hindu temples on the island.</p>

        <h2>Local Food Scene</h2>
        <p>Matara's market area near the bus stand is one of the best places on the south coast to eat like a local. Rice and curry served on banana leaf for LKR 150–250; string hoppers with coconut milk curry; fresh tropical fruit; and the most authentic kottu roti you will find between Colombo and the far south. The absence of tourist menus means prices are honest and the food is aimed at a local palate — which makes it excellent.</p>

        <h2>Getting to Matara</h2>
        <p>Matara is the southern terminus of both the coastal railway from Colombo (3 hours) and the Southern Expressway (2.5 hours by car). Trains run throughout the day from Colombo Fort. From Galle, the train takes about 1 hour. From Tangalle, buses and tuk-tuks connect in 45 minutes. Many travellers stop in Matara briefly en route between Galle and the far south.</p>

        <h2>Best Time to Visit</h2>
        <p>Matara and the south coast are best November through April. However, as a city rather than a beach destination, Matara is visitable year-round — the Star Fort and local markets are unaffected by the monsoon.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Take the train from Galle to Matara — the coastal section is beautiful and takes about an hour</li>
          <li>Hire a tuk-tuk in Matara for a half-day tour covering the Star Fort, Dondra lighthouse and surrounding sights</li>
          <li>Eat at a local "hotel" (canteen) near the bus stand for the cheapest, most authentic south coast rice and curry</li>
          <li>Matara makes an excellent base for day trips to Hiriketiya, Tangalle and even Yala National Park</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Matara',
    affiliateDesc: 'Good-value guesthouses and hotels in Matara — well-placed for exploring the south coast on a budget.',
    affiliateBtn: 'Search Hotels on Booking.com',
    affiliateHref: 'https://www.booking.com/searchresults.html?ss=Matara+Sri+Lanka',
    affiliateVariant: 'hotel',
    planVisit: [['Best Season','Nov–April'],['Ideal Stay','1 day'],['Top Sight','Star Fort & Dondra lighthouse'],['From Colombo','2.5 hrs by expressway']],
    nearbyLinks: [{href:'/places/galle',label:'Galle Fort (45km)'},{href:'/places/tangalle',label:'Tangalle (35km)'},{href:'/places/hiriketiya',label:'Hiriketiya (20km)'},{href:'/places/south-coast',label:'South Coast Guide'}],
  },
  {
    slug: 'batticaloa',
    title: 'Batticaloa, Sri Lanka: Lagoon City, Singing Fish & East Coast Culture',
    desc: 'Batticaloa is the east coast\'s most atmospheric city — a labyrinth of lagoon islands, colonial forts, Tamil culture and the mysterious singing fish phenomenon.',
    publishDate: '2025-03-01',
    image: '/images/arugam-bay.jpg',
    imageAlt: 'Batticaloa lagoon east coast Sri Lanka',
    breadcrumbParent: 'East Coast',
    breadcrumbParentHref: '/places/east-coast',
    h1: 'Batticaloa',
    subtitle: 'East Coast • Lagoon City • Tamil Culture • Singing Fish',
    badge: 'East Coast',
    quickFacts: [['Province','Eastern Province'],['Distance from Colombo','320km (6 hrs)'],['Best For','Culture, history, local experience'],['Best Season','May–September'],['Days Needed','1–2 days'],['Famous For','Singing fish phenomenon']],
    body: `
        <p>Batticaloa — universally known as "Batti" to Sri Lankans — is a city built on islands in the middle of a vast coastal lagoon, connected by causeways and bridges, with a colonial Dutch fort at its heart and a predominantly Tamil population that gives it a cultural character unlike anywhere else in Sri Lanka. It is not a tourist destination in any conventional sense — there is no beach strip, no backpacker scene, no international restaurant row. What Batticaloa offers instead is something rarer: a functioning Sri Lankan city recovering from conflict, with genuine history, extraordinary food, and an atmosphere of resilience that makes a visit here feel meaningful as well as interesting.</p>

        <h2>The Singing Fish</h2>
        <p>Batticaloa's most celebrated phenomenon is its "singing fish" — a mysterious musical humming that rises from the depths of the lagoon on clear, still nights, particularly in the weeks around the full moon from April to September. The sound has been documented since at least the 19th century. The most likely explanation involves the combined sound produced by millions of freshwater mussels attached to the lagoon floor, though no definitive scientific explanation has been universally accepted. A boat trip on the lagoon on a full moon night in May or June, listening for the singing, is an experience unique to Batticaloa in all the world.</p>

        <h2>Batticaloa Fort</h2>
        <p>Built by the Portuguese in 1628 and subsequently occupied and extended by the Dutch and British, Batticaloa Fort sits on a small island in the lagoon connected to the main town by a drawbridge. The fort has been converted into government offices and a police station, but the outer walls, the original gateway and the interior courtyard can be visited. A small museum inside contains artefacts from the colonial period. The fort is most atmospheric at dusk when the lagoon turns gold around it.</p>

        <h2>The Lagoon & Birdlife</h2>
        <p>Batticaloa's vast lagoon system is exceptional for birdwatching — herons, egrets, kingfishers, cormorants and the occasional painted stork populate the mangrove fringes. Boat hire for lagoon exploration is available near the town centre. The lagoon is also important for traditional fishing communities who use outrigger canoes and traditional nets — you will see them working at dawn and dusk in the channels between the islands.</p>

        <h2>Getting to Batticaloa</h2>
        <p>Batticaloa is connected to Colombo by train (the Batticaloa Intercity Express takes about 7 hours from Colombo Fort) and by bus (6 hours). FitsAir operates occasional flights from Colombo to Batticaloa, reducing travel time to about 1 hour. By road, allow 6 hours from Colombo via Habarana. From Arugam Bay, Batticaloa is 100km north along the coast road — allow 2.5 hours by bus or car.</p>

        <h2>Best Time to Visit</h2>
        <p>May through September — the east coast dry season — is the most comfortable time to visit. The singing fish phenomenon is best heard June and July. October brings the northeast monsoon. As a lagoon city rather than a beach destination, Batticaloa is more weather-resistant than purely coastal places.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Arrange a moonlit lagoon boat trip through your guesthouse for the best chance of hearing the singing fish</li>
          <li>Batticaloa has excellent Tamil and Muslim food — try string hoppers with crab curry at local restaurants near the market</li>
          <li>The cycling routes around the lagoon islands are flat, scenic and a wonderful way to explore beyond the town centre</li>
          <li>Ask locally about current security and road conditions before travelling — the area is peaceful but has seen rapid change since 2009</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Batticaloa',
    affiliateDesc: 'Comfortable guesthouses and hotels in and around Batticaloa — a genuine off-the-beaten-track east coast base.',
    affiliateBtn: 'Search Hotels on Booking.com',
    affiliateHref: 'https://www.booking.com/searchresults.html?ss=Batticaloa+Sri+Lanka',
    affiliateVariant: 'hotel',
    planVisit: [['Best Season','May–September'],['Ideal Stay','1–2 days'],['Top Experience','Singing fish lagoon trip'],['From Colombo','6 hrs by train']],
    nearbyLinks: [{href:'/places/arugam-bay',label:'Arugam Bay (100km)'},{href:'/places/trincomalee',label:'Trincomalee (170km)'},{href:'/places/east-coast',label:'East Coast Guide'},{href:'/places',label:'All Places'}],
  },
  {
    slug: 'mannar',
    title: 'Mannar Island, Sri Lanka: Baobab Trees, Flamingos & Ancient History',
    desc: 'Mannar is Sri Lanka\'s most otherworldly destination — a flat, windswept island connected to the mainland by causeway, with ancient baobab trees, flamingo lagoons and the ruins of a Portuguese fort.',
    publishDate: '2025-03-01',
    image: '/images/jaffna.jpg',
    imageAlt: 'Mannar island baobab trees flamingos Sri Lanka',
    breadcrumbParent: 'North & Jaffna',
    breadcrumbParentHref: '/places/north-jaffna',
    h1: 'Mannar',
    subtitle: 'North Sri Lanka • Baobab Trees • Flamingos • Ancient Island',
    badge: 'North Sri Lanka',
    quickFacts: [['Province','Northern Province'],['Distance from Colombo','330km (5.5 hrs)'],['Best For','Birdwatching, history, off-beat travel'],['Best Season','May–October'],['Days Needed','1–2 days'],['Famous For','Africa\'s baobab trees in Asia']],
    body: `
        <p>Mannar is one of Sri Lanka's most surreal and undervisited destinations — a long, flat island connected to the Northern Province mainland by a causeway, jutting into the Palk Strait towards India in a landscape of scrub forest, salt flats, ancient ruins and enormous windswept skies. It does not look like the rest of Sri Lanka. The vegetation is sparse and thorny, the light has a particular bleached quality, and the iconic baobab trees — unmistakably African in appearance, believed to have been brought by Arab traders centuries ago — give the island the air of a different continent entirely. Birders know Mannar as one of the best flamingo-watching sites in South Asia. History buffs know it as the site of Sri Lanka's oldest Portuguese fort. Everyone else has barely heard of it — which is precisely its appeal.</p>

        <h2>The Baobab Trees</h2>
        <p>Mannar's most famous sight is its colony of baobab trees — enormous, bottle-trunked trees that are native to Africa and Madagascar but have no business being in Sri Lanka at all. The largest specimen, known as the Great Baobab, is estimated to be over 700 years old and has a trunk circumference of about 19 metres. Arab traders plying the route between Africa and South and Southeast Asia are believed to have introduced baobab seeds to Mannar, where the semi-arid conditions proved suitable for growth. The trees are found scattered across the northern part of the island, with the Great Baobab located near the Dutch Fort.</p>

        <h2>Flamingos at Vankalai</h2>
        <p>The Vankalai Sanctuary, on the southwestern tip of Mannar Island, is one of Sri Lanka's best-kept birding secrets. Greater and lesser flamingos gather here in significant numbers, particularly from December through March. The shallow, saline lagoon also attracts painted storks, spoonbills, pelicans and an extraordinary variety of shorebirds. Birding in Mannar generally is exceptional — the island sits on a major migratory route between South Asia and Africa/Europe, and over 150 species have been recorded. Early morning is best; bring binoculars and a long lens.</p>

        <h2>Mannar Fort</h2>
        <p>Built by the Portuguese in 1560 and subsequently modified by the Dutch, Mannar Fort is one of Sri Lanka's oldest colonial fortifications. The fort sits at the northern tip of the island overlooking the sea towards India (just 30km away at the narrowest point). The walls are partly ruined but the structure of the fort is clear, and the views from the ramparts across the Palk Strait on a clear day are extraordinary. A small community lives within the fort compound. Entry is free.</p>

        <h2>Getting to Mannar</h2>
        <p>Mannar is connected to Colombo by train — the Mannar line branches from the main northern railway at Medawachchiya. The journey from Colombo takes about 6–7 hours. By road, Mannar is approximately 5.5 hours from Colombo via the A9 north road through Vavuniya. From Jaffna, it is about 3 hours south. A tuk-tuk is the best way to explore the island once you arrive; the distances are manageable.</p>

        <h2>Best Time to Visit</h2>
        <p>The flamingos are best December through March. Birdwatching is good year-round but peaking November through April during the migration season. May through September can be very hot and windy. The fort and baobab trees are accessible year-round.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Hire a tuk-tuk for a full-day island circuit — the driver can navigate to the baobab trees, fort and Vankalai sanctuary</li>
          <li>Bring food and water — restaurant options on the island are extremely limited</li>
          <li>The area was heavily affected by the civil war; treat the local community with sensitivity</li>
          <li>Combine with a visit to Jaffna to make the most of the journey north</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Mannar',
    affiliateDesc: 'Basic guesthouses in Mannar town — this is truly off-the-beaten-track Sri Lanka. Accommodation options are limited so book ahead.',
    affiliateBtn: 'Search Hotels on Booking.com',
    affiliateHref: 'https://www.booking.com/searchresults.html?ss=Mannar+Sri+Lanka',
    affiliateVariant: 'hotel',
    planVisit: [['Flamingo Season','December–March'],['Ideal Stay','1–2 days'],['Top Sight','Baobab trees & flamingos'],['From Colombo','6 hrs by train']],
    nearbyLinks: [{href:'/places/jaffna',label:'Jaffna (170km)'},{href:'/places/anuradhapura',label:'Anuradhapura (100km)'},{href:'/places/north-jaffna',label:'North Sri Lanka Guide'},{href:'/places',label:'All Places'}],
  },
  {
    slug: 'adams-peak',
    title: "Adam's Peak (Sri Pada): The Sacred Mountain Climb & Sunrise Guide",
    desc: "Adam's Peak is Sri Lanka's most sacred mountain — a demanding overnight climb to a sacred footprint at the summit, rewarded by one of the most extraordinary sunrises in Asia.",
    publishDate: '2025-03-01',
    image: '/images/horton-plains.jpg',
    imageAlt: "Adam's Peak sacred mountain climb Sri Lanka sunrise",
    breadcrumbParent: 'Hill Country',
    breadcrumbParentHref: '/places/hill-country',
    h1: "Adam's Peak (Sri Pada)",
    subtitle: "Hill Country • Sacred Mountain • Pilgrim Trek • Sunrise",
    badge: 'Hill Country',
    quickFacts: [['Height','2,243 metres'],['Climb Distance','7km (Dalhousie route)'],['Steps','5,500 steps'],['Best Season','Dec–May (pilgrimage season)'],['Summit Time','Allow 3–4 hrs up'],['Sacred Footprint','Venerated by 4 religions']],
    body: `
        <p>Adam's Peak — known in Sinhala as Sri Pada, the "Sacred Footprint" — is Sri Lanka's most revered mountain and one of the most remarkable pilgrim climbs in Asia. At the summit, 2,243 metres above sea level, lies a rock indentation that Buddhists believe is the footprint of the Buddha, Hindus attribute to Shiva, Muslims to Adam (hence the English name), and early Christians to St Thomas. For over 1,000 years, pilgrims from all four faiths have climbed the mountain between December and May, making the steep stone staircase one of the world's most ancient and multi-faith routes to a sacred summit. For the traveller, the experience is unforgettable: a nighttime climb through illuminated stairways, a dawn arrival at a summit filled with chanting pilgrims, and a sunrise that casts the mountain's perfectly triangular shadow across the clouds below.</p>

        <h2>The Climb</h2>
        <p>The standard route departs from Dalhousie (also called Nallathanniya), a small town in the hills where buses from Colombo, Kandy and Hatton arrive. The trail is 7km each way and consists almost entirely of stone steps — about 5,500 in total. The path is well lit throughout the pilgrimage season (December–May) with electric lighting all the way to the summit. Tea stalls and rest shelters are spaced along the route. The ascent takes 3–4 hours at a moderate pace; the descent 2–2.5 hours. Most people begin the climb at midnight or 1am to reach the summit by sunrise (around 6am). The trail is heavily used during January and February — expect to share the steps with thousands of fellow pilgrims.</p>

        <h2>The Summit Sunrise</h2>
        <p>The summit at dawn is one of the most extraordinary experiences Sri Lanka offers. As the sun rises in the east, it casts the mountain's conical shadow across the sea of clouds to the west — a perfectly triangular shadow that shrinks as the sun rises until it disappears into the cloud layer below. The crowd of pilgrims on the small summit erupts into prayers and celebration as the light arrives. It is deeply moving regardless of your faith. The Buddha's footprint (covered by a canopy) is the spiritual focal point; monks lead prayers at sunrise.</p>

        <h2>What to Bring</h2>
        <p>The summit is cold — temperatures can drop to 5–10°C before dawn, with wind chill making it feel colder. Bring a windproof jacket, gloves, and layers that can be removed on the descent. Good shoes with grip are essential — the steps can be slippery with moisture. Bring a head torch for the pre-lit lower sections and emergency light. Water and snacks are available from stalls along the route but bring sufficient supplies. Trekking poles help significantly on the descent when knees begin to tire.</p>

        <h2>Getting to Dalhousie</h2>
        <p>From Colombo, overnight buses to Dalhousie depart in the evening from the Bastian Mawatha bus terminal (journey: 5–6 hours). From Kandy, buses to Hatton (2.5 hours) connect with buses or taxis to Dalhousie (1 hour). From Nuwara Eliya, hire a car to Dalhousie (1.5 hours). There is no railway station at Dalhousie; the nearest station is Hatton (on the Colombo–Badulla line).</p>

        <h2>Best Time to Visit</h2>
        <p>The pilgrimage season runs December through May — this is when the path is lit and tea stalls are open. Outside this season (June–November), the path is unlit, facilities are closed, and conditions can be dangerous. The clearest skies and best sunrise conditions are typically January through March. The mountain is most crowded on Poya (full moon) days and during February school holidays.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Begin the climb at midnight for sunrise — earlier starts mean a very cold summit wait; later starts risk missing the sunrise</li>
          <li>Non-Buddhists are respectfully welcome — this is a genuinely multi-faith pilgrimage</li>
          <li>The descent is harder on the knees than the ascent — take it slowly and use the handrails</li>
          <li>Book accommodation in Dalhousie or Hatton the night before — do not attempt to arrive and climb on the same night from Colombo</li>
          <li>The mountain is closed June–November; do not attempt to climb out of season</li>
        </ul>`,
    affiliateTitle: "Find Hotels Near Adam's Peak",
    affiliateDesc: "Guesthouses in Dalhousie (base of the climb), Hatton and Maskeliya — book the night before your climb to rest and begin fresh at midnight.",
    affiliateBtn: 'Search Hotels on Booking.com',
    affiliateHref: 'https://www.booking.com/searchresults.html?ss=Dalhousie+Sri+Lanka',
    affiliateVariant: 'hotel',
    planVisit: [['Pilgrimage Season','December–May'],['Start Time','Midnight for sunrise'],['Summit','2,243 metres'],['From Kandy','3.5 hrs by bus & taxi']],
    nearbyLinks: [{href:'/places/ella',label:'Ella (65km)'},{href:'/places/horton-plains',label:"Horton Plains"},{href:'/places/nuwara-eliya',label:'Nuwara Eliya'},{href:'/blog/adams-peak-hiking-guide',label:"Hiking Guide"}],
  },
  {
    slug: 'nine-arch-bridge',
    title: "Nine Arch Bridge Ella: Sri Lanka's Most Photographed Viaduct",
    desc: "The Nine Arch Bridge in Ella is Sri Lanka's most iconic railway viaduct — a stunning colonial-era stone bridge through the jungle, best photographed when a train passes.",
    publishDate: '2025-03-01',
    image: '/images/ella.jpg',
    imageAlt: 'Nine Arch Bridge Ella viaduct train Sri Lanka',
    breadcrumbParent: 'Hill Country',
    breadcrumbParentHref: '/places/hill-country',
    h1: 'Nine Arch Bridge, Ella',
    subtitle: "Hill Country • Iconic Viaduct • Train Photography • Ella's Landmark",
    badge: 'Hill Country',
    quickFacts: [['Built','1921'],['Construction','Stone & brick (no steel)'],['Height','24 metres'],['Arches','9 arches, 91m span'],['Best Photo Time','Train passing (check schedule)'],['From Ella Town','20 min walk']],
    body: `
        <p>The Nine Arch Bridge is arguably the single most photographed image in Sri Lanka — a graceful nine-arched stone viaduct curving through the jungle above Ella, with the emerald tea-covered hillsides behind it and, if your timing is right, a blue train slowly crossing from arch to arch. Built in 1921 during the British colonial period using only brick, stone and cement (local legend holds that no steel was used because wartime conditions had depleted supplies), the bridge spans 91 metres at a height of 24 metres above a rocky gorge in the valley below Ella town. It is both a feat of colonial engineering and one of the most naturally beautiful scenes in the country.</p>

        <h2>The Best Viewpoint</h2>
        <p>The standard viewpoint is from a path that leads off the Ella–Demodara road, cutting down through tea bushes to a clearing from which the full span of the bridge is visible. This is where the classic photographs are taken — the nine arches framed by jungle and tea with the hills behind. The walk from Ella town takes about 20 minutes. A second, slightly higher viewpoint gives a different angle and more of the bridge in frame. A third option is to stand on the bridge itself or on the track above — but note that this is an active railway line and standing on the track is dangerous and technically illegal.</p>

        <h2>Timing for the Train</h2>
        <p>The photographs with a train on the bridge are the most sought-after. The Kandy–Ella and Ella–Badulla trains cross the bridge several times a day. Check the current timetable at Ella station (a 5-minute walk from the main road) the evening before to identify the best crossing times. The most photographed train is typically a morning crossing when the light hits the bridge from the east. Arrive at the viewpoint 20 minutes before the expected train time and position yourself early — the viewpoint gets crowded in high season.</p>

        <h2>Combining with Other Ella Sights</h2>
        <p>The Nine Arch Bridge is most commonly visited as part of a wider exploration of Ella, which is 20 minutes away. <a href="/places/ella">Ella</a> also offers the Ella Rock hike (3–4 hours return), Little Adam's Peak (1.5 hours), Ravana Falls (10 minutes by tuk-tuk) and the Nine Arch Bridge viewpoint can be combined into a single full day of exploration on foot. The tea estate paths around the bridge are also pleasant for gentle walks.</p>

        <h2>Getting There</h2>
        <p>The Nine Arch Bridge is 1.5km from Ella town — a 20-minute walk along the Ella–Demodara road, turning off at the signposted path. Tuk-tuks from Ella cost LKR 200–300. The bridge is visible from the train between Ella and Demodara — passengers on the right side of the train (travelling towards Badulla) get the best view. Ella is reached from Kandy by the famous scenic train (7 hours) or from Colombo via Ohiya (6 hours).</p>

        <h2>Best Time to Visit</h2>
        <p>The bridge is accessible year-round but the clearest views are during the dry season months of December through April and July through September. Morning light (8–10am) is best for photography — the bridge faces east and the tea estates are at their most vivid in morning light. Mist is common in the early morning, which can add atmosphere but also obscure the view — wait it out if you can.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Check train times at Ella station the day before — schedules can run late, so build in extra time at the viewpoint</li>
          <li>Bring a zoom lens (200mm+) for frame-filling shots of the train on the bridge</li>
          <li>Arrive early on weekends — the viewpoint is one of the most crowded spots in Sri Lanka during peak season</li>
          <li>The path down to the viewpoint can be muddy after rain — wear shoes with grip</li>
          <li>Do not stand on the railway tracks — trains approach quietly and faster than they appear</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Ella',
    affiliateDesc: 'Ella has some of Sri Lanka\'s best-value mountain guesthouses — from budget rooms to stunning hilltop properties overlooking the valley.',
    affiliateBtn: 'Search Hotels in Ella',
    affiliateHref: 'https://www.booking.com/searchresults.html?ss=Ella+Sri+Lanka',
    affiliateVariant: 'hotel',
    planVisit: [['Best Light','8–10am, morning'],['Train Times','Check Ella station'],['Walk from Ella','20 minutes'],['Best Season','Dec–Apr, Jul–Sep']],
    nearbyLinks: [{href:'/places/ella',label:'Ella Town'},{href:'/places/ravana-falls',label:'Ravana Falls (3km)'},{href:'/places/horton-plains',label:'Horton Plains'},{href:'/things-to-do/train-rides',label:'Scenic Train Guide'}],
  },
  {
    slug: 'pigeon-island',
    title: 'Pigeon Island National Marine Park: Sri Lanka\'s Best Snorkelling',
    desc: 'Pigeon Island off Trincomalee is Sri Lanka\'s premier snorkelling destination — pristine coral reefs, blacktip reef sharks, sea turtles and exceptional underwater clarity.',
    publishDate: '2025-03-01',
    image: '/images/snorkelling.jpg',
    imageAlt: 'Pigeon Island coral reef snorkelling Sri Lanka blacktip sharks',
    breadcrumbParent: 'East Coast',
    breadcrumbParentHref: '/places/east-coast',
    h1: 'Pigeon Island',
    subtitle: 'East Coast • Marine Park • Snorkelling • Reef Sharks',
    badge: 'East Coast',
    quickFacts: [['Distance from Shore','1km from Nilaveli beach'],['Marine Park','National Park status since 2003'],['Best For','Snorkelling, reef sharks, turtles'],['Best Season','May–September'],['Boat Transfer','10–15 minutes'],['Entry Fee','USD 15 per person (approx)']],
    body: `
        <p>Pigeon Island National Marine Park is Sri Lanka's most celebrated snorkelling destination — a small rocky island rising 1km offshore from Nilaveli beach, Trincomalee, surrounded by some of the healthiest and most biodiverse coral reefs in the country. The island takes its name from the rock pigeons that historically nested on it. Today it is protected as a national marine park, and the reef around it is home to blacktip reef sharks, sea turtles, parrotfish, triggerfish, moray eels and over 300 species of reef fish. The water clarity during the east coast season (May–September) is exceptional — visibility of 15–25 metres is common — making Pigeon Island one of the finest shallow-water snorkelling experiences in South Asia.</p>

        <h2>The Snorkelling</h2>
        <p>The reef begins just a few metres from the island's rocky shore and extends to a depth of about 15 metres. The most celebrated sighting is the blacktip reef sharks — small (1–1.5 metre), completely harmless to snorkellers, and remarkably common. It is not unusual to see 10–15 sharks in a single session. Green sea turtles rest on the reef and on the sandy patches between coral heads. The coral itself, while affected by bleaching events, still has significant live cover — brain coral, staghorn coral and plate coral formations are extensive. The more protected northern side of the island generally has the best coral condition.</p>

        <h2>Visiting the Island</h2>
        <p>Access to Pigeon Island is via boat from Nilaveli beach — a 10–15 minute crossing. Boat trips are arranged through guesthouses in Nilaveli and Uppuveli or directly from operators at the beach. Most trips are half-day (3–4 hours) and include snorkel equipment rental. A national marine park entry fee (approximately USD 15 per person) is payable on arrival, in addition to the boat hire cost. The island has a small beach for resting between snorkels. Food and drink are not available on the island; bring water and snacks.</p>

        <h2>Marine Conservation</h2>
        <p>Pigeon Island has faced significant pressure from overtourism — at peak season, dozens of boats can visit simultaneously. Choose operators who follow the marine park rules: maintain a minimum distance from turtles and sharks, do not touch or feed marine life, do not stand on coral, and use biodegradable sunscreen (conventional sunscreen chemicals damage coral). The long-term health of the reef depends on responsible visiting behaviour.</p>

        <h2>Getting to Pigeon Island</h2>
        <p>Base yourself at <a href="/places/nilaveli">Nilaveli</a> or <a href="/places/uppuveli">Uppuveli</a> beach — boat transfers to Pigeon Island depart from both. Nilaveli is the closer departure point. Trincomalee itself is 7–8 hours from Colombo by bus or train, or about 1 hour by FitsAir flight. Most travellers combine Pigeon Island snorkelling with 2–3 nights on the Nilaveli beach strip.</p>

        <h2>Best Time to Visit</h2>
        <p>May through September is the east coast season — calm seas and excellent underwater visibility. July and August have the most settled conditions. Outside this window (October–April), the northeast monsoon makes the crossing rough and visibility poor. April can be transitional with variable conditions.</p>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Bring your own mask and snorkel — the quality of rental equipment varies significantly between operators</li>
          <li>Go in the morning — afternoon winds can make the sea choppier and cloud the water with suspended particles</li>
          <li>Apply reef-safe sunscreen only — conventional sunscreen damages coral and is harmful to marine life</li>
          <li>The blacktip sharks are harmless — maintain calm, do not chase them, and simply observe</li>
          <li>Book trips through your guesthouse for vetted operators who follow marine park guidelines</li>
        </ul>`,
    affiliateTitle: 'Find Tours to Pigeon Island',
    affiliateDesc: 'Half-day snorkelling trips to Pigeon Island including boat transfer and equipment — book through trusted operators for the best experience.',
    affiliateBtn: 'Book Pigeon Island Snorkelling',
    affiliateHref: 'https://www.getyourguide.com/trincomalee-l105/',
    affiliateVariant: 'tour',
    planVisit: [['Best Season','May–September'],['Trip Duration','Half day (3–4 hours)'],['Departure','Nilaveli or Uppuveli beach'],['Entry Fee','~USD 15 + boat hire']],
    nearbyLinks: [{href:'/places/nilaveli',label:'Nilaveli Beach (1km)'},{href:'/places/uppuveli',label:'Uppuveli Beach (8km)'},{href:'/places/trincomalee',label:'Trincomalee'},{href:'/things-to-do/snorkelling',label:'Snorkelling Guide'}],
  },
];

for (const p of pages) {
  const content = place(p);
  writeFileSync(join(base, `${p.slug}.astro`), content, 'utf8');
  console.log(`✓ places/${p.slug}.astro`);
}
console.log(`\nBatch 2 complete: ${pages.length} places pages written.`);
