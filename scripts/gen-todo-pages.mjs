import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const base = join(__dirname, '../src/pages/things-to-do');

function todo({ slug, title, desc, publishDate, image, imageAlt, badge, h1, body, affiliateTitle, affiliateDesc, affiliateBtn, affiliateHref, affiliateVariant, relatedLinks }) {
  return `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import AffiliateBox from '../../components/AffiliateBox.astro';
---
<BaseLayout title="${title} | The Trails of Ceylon" description="${desc}" type="article" publishDate="${publishDate}">
  <div class="relative h-[50vh] min-h-[350px] overflow-hidden">
    <img src="${image}" alt="${imageAlt}" class="w-full h-full object-cover" style="object-fit:cover;" fetchpriority="high" width="800" height="600" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 p-8">
      <div class="max-w-4xl mx-auto">
        <nav class="flex items-center gap-2 text-white/70 text-xs mb-3" aria-label="Breadcrumb">
          <a href="/" class="hover:text-white">Home</a><span>/</span>
          <a href="/things-to-do" class="hover:text-white">Things to Do</a><span>/</span>
          <span class="text-white">${h1}</span>
        </nav>
        <span class="inline-block bg-ceylon-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">${badge}</span>
        <h1 class="font-serif font-black text-white text-4xl sm:text-5xl">${h1}</h1>
      </div>
    </div>
  </div>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-14">
    <div class="grid lg:grid-cols-[1fr_260px] gap-12">
      <article class="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-ceylon-green-700 prose-strong:text-gray-900">
${body}
        <AffiliateBox title="${affiliateTitle}" description="${affiliateDesc}" buttonText="${affiliateBtn}" buttonHref="${affiliateHref}" variant="${affiliateVariant}" />
      </article>
      <aside class="lg:sticky lg:top-28 space-y-6 h-fit">
        <div class="plan-visit-box">
          <h3 class="font-serif font-bold text-white text-lg mb-4">Related Activities</h3>
          <div class="space-y-3">
            {${JSON.stringify(relatedLinks)}.map(link => (
              <a href={link.href} class="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
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
    slug: 'hot-air-ballooning',
    title: 'Hot Air Ballooning in Sri Lanka: Sunrise Flights over Dambulla',
    desc: 'Hot air ballooning over the Cultural Triangle near Dambulla offers spectacular sunrise views of Sigiriya, ancient reservoirs and the Sri Lankan jungle — a truly unforgettable experience.',
    publishDate: '2025-03-01', image: '/images/sigiriya.jpg', imageAlt: 'Hot air balloon sunrise Dambulla Sigiriya Sri Lanka', badge: 'Adventure', h1: 'Hot Air Ballooning in Sri Lanka',
    body: `        <p>Hot air ballooning over Sri Lanka's Cultural Triangle is one of the island's most extraordinary experiences — a silent, serene drift above a landscape of ancient reservoirs, jungle canopy and the extraordinary rock formations of Dambulla and Sigiriya at the best possible time of day: sunrise. From the gondola, the famous Sigiriya rock fortress rises from the forest below like a vision, the ancient tanks glitter in the dawn light, and the silence is broken only by the periodic roar of the burner above. It is expensive by Sri Lankan standards but justifiably ranks among the island's finest experiences.</p>
        <h2>How it Works</h2>
        <p>Flights depart at dawn from the Cultural Triangle area, typically near Dambulla or Habarana. The pre-flight briefing and inflation takes about 30 minutes; the flight itself lasts approximately 1 hour. Flights depend entirely on weather conditions — particularly wind speed and direction. Skilled pilots read the morning air currents to navigate over the best viewpoints. Landing locations vary with the wind. After landing, a traditional champagne (or local arrack) celebration is held. The entire morning experience takes about 3–4 hours from hotel pickup.</p>
        <h2>What You'll See</h2>
        <p>The views vary with wind direction but typically include Sigiriya Rock Fortress and its surrounding moat system, the ancient Parakrama Samudra reservoir at Polonnaruwa (one of the largest ancient man-made lakes in the world), the jungle canopy of the Cultural Triangle dry zone, and the distant outline of the Hill Country on clear mornings. Sunrise light across this landscape is spectacular — the ancient reservoirs turn gold, the morning mist burns from the valleys, and the silence of the balloon creates a sense of complete peace.</p>
        <h2>Practical Information</h2>
        <p>Sri Lanka has one main hot air balloon operator — Adventure Asia, based in Dambulla. Flights must be booked in advance and are subject to weather cancellations. Cost is approximately USD 200–260 per person. A minimum number of passengers is required for each flight. Early morning hotel pickup (around 5am) is standard. Wear comfortable clothes; light layers for the early morning cool are advisable. Photography is unrestricted from the gondola.</p>
        <h2>Best Time for Ballooning</h2>
        <p>The Cultural Triangle's dry season (December–April) offers the most stable flying conditions. Mornings are calm and clear, and the low morning light is spectacular for photography. The southwest monsoon (May–September) brings less stable conditions; flights still operate but cancellation rates are higher.</p>
        <h2>Tips</h2>
        <ul>
          <li>Book as far in advance as possible — particularly December through March when flights fill quickly</li>
          <li>Flexible dates significantly increase your chances of a successful flight — weather cancellations are common</li>
          <li>Bring a fully charged camera with a wide-angle lens for the best aerial shots</li>
          <li>The champagne landing celebration is a tradition worth embracing</li>
        </ul>`,
    affiliateTitle: 'Book a Hot Air Balloon Flight', affiliateDesc: 'Sunrise balloon flights over the Cultural Triangle — book early as places are limited and weather cancellations mean flexible dates are essential.', affiliateBtn: 'Book on GetYourGuide', affiliateHref: 'https://www.getyourguide.com/dambulla-l5/', affiliateVariant: 'tour',
    relatedLinks: [{href:'/places/sigiriya',label:'Sigiriya Rock Fortress'},{href:'/places/dambulla',label:'Dambulla Cave Temples'},{href:'/places/cultural-triangle',label:'Cultural Triangle Guide'},{href:'/things-to-do',label:'All Activities'}],
  },
  {
    slug: 'rope-swing',
    title: 'Dalawella Beach Rope Swing, Sri Lanka: The Instagram-Famous Experience',
    desc: 'The rope swing at Dalawella beach near Unawatuna is Sri Lanka\'s most photographed beach experience — a wooden swing hanging from a palm tree over the Indian Ocean.',
    publishDate: '2025-03-01', image: '/images/mirissa-beach.jpg', imageAlt: 'Rope swing Dalawella beach Unawatuna Sri Lanka', badge: 'Experience', h1: 'Dalawella Rope Swing',
    body: `        <p>The rope swing at Dalawella beach has become one of the most photographed images from Sri Lanka — a simple wooden swing hanging from a leaning palm tree over the turquoise Indian Ocean, swinging out above the waves with the green headland behind it. It is, by any measure, an extraordinarily photogenic setup, and it has generated millions of social media posts. In person, it is exactly as good as advertised: a beautiful palm-fringed cove just east of Unawatuna, a warm, clear sea, and a simple rope swing that anyone can use. Sometimes the most Instagrammed things are popular for genuine reasons.</p>
        <h2>Dalawella Beach</h2>
        <p>Dalawella is a small, quiet beach immediately east of Unawatuna — about 1km along the coast. It is sheltered by a rocky headland and has calmer, clearer water than the main Unawatuna beach. The beach has a handful of small guesthouses and restaurants but is far less developed than its neighbour. The rope swing is on the eastern end of the beach, hanging from a large palm tree that leans at a photogenic angle over the water. Access is free; a small fee is charged if you want to use the facilities of the adjacent beachside restaurant.</p>
        <h2>Getting the Perfect Photo</h2>
        <p>The classic shot is taken from the water or from a low angle on the beach, with the person on the swing silhouetted against the sky and sea. Early morning and late afternoon give the best light — harsh midday sun creates unflattering shadows. The swing is most photogenic when the person is at the end of the forward arc, highest above the water. Bring a waterproof camera or phone case — the water is immediately below the swing at high tide.</p>
        <h2>Getting There</h2>
        <p>Dalawella is 1km east of Unawatuna and 3km east of Galle Fort. From Galle, take a tuk-tuk east along the coastal road — LKR 200–300. From Unawatuna, walk east along the beach or take a short tuk-tuk ride. The beach is signposted along the main coastal road (A2). From Colombo, Galle is 2.5 hours by express train; Dalawella is a further 10-minute tuk-tuk ride.</p>
        <h2>Best Time to Visit</h2>
        <p>The south coast season (November–April) gives the best conditions — calm sea, minimal wind, good visibility. Visit in the morning (8–11am) for the best light and before the beach becomes crowded in high season. The swing is available year-round but the sea can be rough during the southwest monsoon (May–September).</p>
        <h2>Tips</h2>
        <ul>
          <li>Visit on a weekday morning for fewer people and better photo opportunities</li>
          <li>A friend in the water with a waterproof camera gives the most dramatic shots from below</li>
          <li>The restaurant at the swing rents out the swing — order something and they are very accommodating about photography time</li>
          <li>Combine with Unawatuna beach and Galle Fort for a complete south coast day</li>
        </ul>`,
    affiliateTitle: 'Find Hotels Near Unawatuna', affiliateDesc: 'Dalawella and Unawatuna have excellent beachside guesthouses — the best base for this part of the south coast.', affiliateBtn: 'Search Hotels on Booking.com', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Unawatuna+Sri+Lanka', affiliateVariant: 'hotel',
    relatedLinks: [{href:'/places/unawatuna',label:'Unawatuna Beach'},{href:'/places/galle',label:'Galle Fort'},{href:'/places/south-coast',label:'South Coast Guide'},{href:'/things-to-do',label:'All Activities'}],
  },
  {
    slug: 'scuba-diving',
    title: 'Scuba Diving in Sri Lanka: Best Sites, Seasons & Dive Operators',
    desc: 'Sri Lanka has excellent scuba diving year-round — from the coral reefs of Hikkaduwa and Pigeon Island to wreck diving off the south coast and reef sharks at Trincomalee.',
    publishDate: '2025-03-01', image: '/images/snorkelling.jpg', imageAlt: 'Scuba diving coral reef Sri Lanka', badge: 'Water Sports', h1: 'Scuba Diving in Sri Lanka',
    body: `        <p>Sri Lanka is a genuinely excellent scuba diving destination, offering a range of sites from beginner-friendly coral reefs to advanced wreck dives — and with two distinct dive seasons on opposite coasts, it is possible to dive year-round. The island's relative underdevelopment as a dive destination (compared to Thailand or the Maldives) means the reefs are less damaged and the sites less crowded. Water temperature is a constant 27–30°C year-round; visibility ranges from 10 to 30 metres depending on season and location.</p>
        <h2>Best Dive Sites</h2>
        <h3>Hikkaduwa — South Coast</h3>
        <p>Hikkaduwa has the most developed dive infrastructure on the south coast — multiple PADI-certified dive centres offering everything from beginner discover dives to advanced certification courses. The reef is at 3–12 metres depth and suitable for all levels. Resident sea turtles, reef fish and occasional moray eels. Best November–April.</p>
        <h3>Pigeon Island — East Coast</h3>
        <p>The reef around <a href="/places/pigeon-island">Pigeon Island</a> near Trincomalee is Sri Lanka's finest diving site — pristine coral at 5–20 metres with blacktip reef sharks, sea turtles, barracuda and exceptional fish diversity. Best May–September.</p>
        <h3>Unawatuna — South Coast</h3>
        <p>Several wreck dives are accessible from Unawatuna, including the Rangoon Wreck (a British steamship at 26 metres) and the Lord Nelson wreck. Coral diving at 5–15 metres. Best November–April.</p>
        <h3>Trincomalee — East Coast</h3>
        <p>Trincomalee bay has multiple dive sites including the Swami Rock drop-off, coral gardens and several WWII wrecks. Whale shark encounters between January and April. Best May–September for regular diving; January–April for whale sharks.</p>
        <h2>Getting Certified</h2>
        <p>PADI Open Water certification courses are available at Hikkaduwa, Unawatuna and Trincomalee. A standard Open Water course takes 3–4 days and costs USD 300–400 at reputable dive centres. Ensure your chosen dive centre is PADI-certified and has current equipment. The Hikkaduwa centres have the most experience with beginner certification courses.</p>
        <h2>Best Time to Dive</h2>
        <p>South coast sites (Hikkaduwa, Unawatuna): November–April. East coast sites (Pigeon Island, Trincomalee): May–September. Whale sharks at Trincomalee: January–April. Year-round is possible by switching between coasts.</p>
        <h2>Tips</h2>
        <ul>
          <li>Book dive trips through your accommodation for vetted operators with good safety records</li>
          <li>Bring your own mask if you dive regularly — rental mask quality varies</li>
          <li>Use reef-safe sunscreen only — conventional sunscreen chemicals damage coral ecosystems</li>
          <li>Dive in the morning when water clarity is typically best</li>
        </ul>`,
    affiliateTitle: 'Book Scuba Diving in Sri Lanka', affiliateDesc: 'PADI-certified dive courses and guided reef dives at Hikkaduwa, Unawatuna and Pigeon Island — book with certified operators.', affiliateBtn: 'Find Dive Tours', affiliateHref: 'https://www.getyourguide.com/sri-lanka-l976/', affiliateVariant: 'tour',
    relatedLinks: [{href:'/things-to-do/snorkelling',label:'Snorkelling Guide'},{href:'/places/pigeon-island',label:'Pigeon Island'},{href:'/places/hikkaduwa',label:'Hikkaduwa'},{href:'/things-to-do',label:'All Activities'}],
  },
  {
    slug: 'dolphin-watching',
    title: 'Dolphin Watching in Sri Lanka: Kalpitiya, Mirissa & Trincomalee',
    desc: 'Sri Lanka has world-class dolphin watching — spinner dolphins in vast pods at Kalpitiya, and common dolphins alongside blue whales at Mirissa and Trincomalee.',
    publishDate: '2025-03-01', image: '/images/whale-watching.jpg', imageAlt: 'Spinner dolphins Kalpitiya Sri Lanka dolphin watching', badge: 'Ocean', h1: 'Dolphin Watching in Sri Lanka',
    body: `        <p>Sri Lanka is one of the world's finest destinations for dolphin watching — and unlike many whale watching destinations where dolphin sightings are incidental, several locations in Sri Lanka specifically attract enormous pods of spinner and bottlenose dolphins that are reliably encountered year-round. The spinner dolphins at <a href="/places/kalpitiya">Kalpitiya</a> are particularly extraordinary — pods of several hundred animals are regularly seen, bow-riding boats and leaping in their characteristic spinning motion with an exuberance that suggests pure pleasure rather than any practical function.</p>
        <h2>Kalpitiya — Best for Spinner Dolphins</h2>
        <p>The waters west of Kalpitiya peninsula are home to permanent resident pods of spinner dolphins — Sri Lanka's most reliable and spectacular dolphin watching location. Boats depart from Kalpitiya in the morning, heading into the open ocean west of the lagoon. The pods encountered are often enormous — 200–500 animals is not uncommon, and on exceptional days the pod extends to the horizon. The interactions are intimate: dolphins bow-ride the boat, swim alongside and leap continuously. Dolphin watching season at Kalpitiya runs November through April (the calm north-east season).</p>
        <h2>Mirissa — Dolphins with Blue Whales</h2>
        <p>The whale watching boats from <a href="/places/mirissa">Mirissa</a> regularly encounter common dolphins and spinner dolphins alongside blue whales — the dolphins seem to know when a whale is about to surface and gather around it. A Mirissa whale watching trip (November–April) almost always includes dolphin encounters. Spinner and bottlenose dolphins are resident in these waters year-round; the whale watching boats encounter them most frequently in the early morning runs.</p>
        <h2>Trincomalee — East Coast Season</h2>
        <p>The waters around Trincomalee and the east coast harbour populations of bottlenose and spinner dolphins. Boat trips from Uppuveli and Nilaveli sometimes encounter dolphins on the way to or from Pigeon Island. Dedicated dolphin watching trips can be arranged from Trincomalee boat operators during the May–September season. The encounters are less predictable than at Kalpitiya but can be excellent.</p>
        <h2>Responsible Dolphin Watching</h2>
        <p>Spinner dolphins need sleep — they rest in sheltered bays in the morning and feed at night. Approaching sleeping pods disrupts their behaviour and has been linked to stress and habitat avoidance at some locations. Choose operators who maintain minimum approach distances (50 metres for dolphins), do not circle pods, and limit engine noise near resting animals. The Kalpitiya operators generally have better dolphin welfare practices than some south coast operators.</p>
        <h2>Tips</h2>
        <ul>
          <li>Book with operators who have a no-approach-to-resting-dolphins policy</li>
          <li>Morning departures consistently give better encounters than afternoon trips</li>
          <li>Bring a polarised lens for photography — it cuts through surface glare and makes dolphins visible under the water</li>
          <li>Combine dolphin watching with whale watching at Mirissa for the maximum ocean wildlife experience</li>
        </ul>`,
    affiliateTitle: 'Book Dolphin Watching Trips', affiliateDesc: 'Morning dolphin watching boat trips at Kalpitiya and combined whale and dolphin tours from Mirissa — book in advance for peak season.', affiliateBtn: 'Book on GetYourGuide', affiliateHref: 'https://www.getyourguide.com/mirissa-l5/', affiliateVariant: 'tour',
    relatedLinks: [{href:'/places/kalpitiya',label:'Kalpitiya Guide'},{href:'/things-to-do/whale-watching',label:'Whale Watching'},{href:'/places/mirissa',label:'Mirissa'},{href:'/things-to-do',label:'All Activities'}],
  },
  {
    slug: 'turtle-watching',
    title: 'Turtle Watching in Sri Lanka: Rekawa, Kosgoda & Ethical Guide',
    desc: 'Sri Lanka is one of Asia\'s most important sea turtle nesting destinations — five species nest on its beaches. A guide to ethical turtle watching at Rekawa beach and Kosgoda hatcheries.',
    publishDate: '2025-03-01', image: '/images/tangalle.jpg', imageAlt: 'Sea turtle nesting Rekawa beach Sri Lanka', badge: 'Wildlife', h1: 'Turtle Watching in Sri Lanka',
    body: `        <p>Sri Lanka is one of Asia's most significant sea turtle nesting destinations — all five species of sea turtle found in the Indian Ocean (green, leatherback, loggerhead, olive ridley and hawksbill) nest on its beaches. The south coast is the most important nesting area, with the beaches between Tangalle and Rekawa hosting significant nesting concentrations. For visitors, there are two quite different ways to experience this: the Rekawa Beach Conservation Programme, where conservation-monitored night watches allow you to observe nesting turtles on a wild beach; and the hatcheries at Kosgoda and elsewhere, which collect at-risk eggs and rear hatchlings for release.</p>
        <h2>Rekawa Beach — Wild Nesting Observation</h2>
        <p><a href="/places/tangalle">Rekawa</a>, 12km east of Tangalle, hosts one of the highest concentrations of sea turtle nesting in Sri Lanka — primarily green turtles, nesting between May and September. The Rekawa Turtle Conservation Project runs strictly controlled night watching sessions: small groups (max 8 people) wait on the dark beach under the supervision of trained rangers, who use red-light torches (white light disturbs nesting turtles) to locate nesting females. When a turtle is found, groups approach silently and observe from behind — watching a 200kg green turtle dig her nest, lay over 100 eggs and laboriously return to the sea is one of the most moving wildlife experiences in Sri Lanka. Sessions start around 8pm. Book through your Tangalle guesthouse.</p>
        <h2>Kosgoda Hatchery</h2>
        <p>The Kosgoda Sea Turtle Conservation Project, near <a href="/places/bentota">Bentota</a>, has operated since 1981 — one of Sri Lanka's longest-running turtle conservation programmes. Eggs collected from at-risk nests are incubated in protected conditions; hatchlings are held briefly before release. Visitors can tour the hatchery, observe the incubation process and — if timing allows — witness a hatchling release. Entry fee supports conservation. Open daily.</p>
        <h2>Ethical Considerations</h2>
        <p>Not all turtle experiences in Sri Lanka are equal. Commercial hatcheries that hold hatchlings for extended periods and charge for handling them are harmful — hatchlings should be released within 24–48 hours of hatching. Wild beach turtle watching with unregulated operators using white torches, approaching nesting females from the front, or allowing flash photography are all harmful practices. Choose operators affiliated with the Wildlife Conservation Society of Sri Lanka, the Turtle Conservation Project or similar organisations.</p>
        <h2>Best Time for Turtle Watching</h2>
        <p>Green turtle nesting at Rekawa peaks May–September. Loggerhead and leatherback nesting occurs October–April. The Kosgoda hatchery is active year-round. Night nesting watches are most productive during the peak nesting season.</p>
        <h2>Tips</h2>
        <ul>
          <li>Rekawa nesting watches are never guaranteed — a female may not emerge on a given night</li>
          <li>Wear dark, non-reflective clothing for night beach visits</li>
          <li>Never use white torches or camera flash near nesting turtles or hatchlings</li>
          <li>Keep voices low and movements slow when near a nesting turtle</li>
        </ul>`,
    affiliateTitle: 'Book Turtle Watching Experiences', affiliateDesc: 'Guided night turtle watching at Rekawa and hatchery visits at Kosgoda — book through ethical, conservation-affiliated operators.', affiliateBtn: 'Find Turtle Tours', affiliateHref: 'https://www.getyourguide.com/tangalle-l5/', affiliateVariant: 'tour',
    relatedLinks: [{href:'/places/tangalle',label:'Tangalle'},{href:'/places/bentota',label:'Bentota & Kosgoda'},{href:'/blog/turtle-watching-sri-lanka',label:'Ethical Turtle Watching Guide'},{href:'/things-to-do',label:'All Activities'}],
  },
  {
    slug: 'rock-climbing',
    title: 'Rock Climbing in Sri Lanka: Sigiriya, Pidurangala & Beyond',
    desc: 'Sri Lanka\'s granite outcroppings offer excellent rock climbing — from the beginner-friendly routes at Pidurangala to technical climbing at lesser-known bouldering sites across the island.',
    publishDate: '2025-03-01', image: '/images/sigiriya.jpg', imageAlt: 'Rock climbing Pidurangala Sigiriya Sri Lanka', badge: 'Adventure', h1: 'Rock Climbing in Sri Lanka',
    body: `        <p>Sri Lanka's dramatic granite inselbergs — the same geological formations that created Sigiriya and Pidurangala — offer surprisingly excellent rock climbing for a destination not traditionally associated with the sport. The Cultural Triangle's characteristic rock domes provide both accessible beginner routes and genuine technical challenges, while the bouldering fields around Kegalle and the limestone sea cliffs of the south coast add further variety. The climbing scene is small but growing, with a handful of local guides operating out of the Sigiriya area.</p>
        <h2>Pidurangala Rock</h2>
        <p><a href="/things-to-do/pidurangala-rock">Pidurangala Rock</a>, the forested hill immediately north of Sigiriya, has become Sri Lanka's most popular alternative viewpoint — a scramble (rather than a climb) over boulders and tree roots to a summit with arguably better views of Sigiriya than Sigiriya itself offers. The final section requires scrambling over a smooth granite face using iron handholds. No technical climbing equipment is needed, but good shoes with grip are essential. The climb takes 45 minutes to 1 hour and is suitable for fit adults with a reasonable head for heights.</p>
        <h2>Sigiriya — The Royal Ascent</h2>
        <p>Sigiriya itself is not a technical climb but an extraordinary feat of iron staircases and reinforced pathways ascending the sheer rock face. The final section — a metal staircase ascending the near-vertical northern face — is the most dramatic moment. For genuine rock climbers, the exterior faces of Sigiriya have been climbed in routes varying from 5.10 to 5.12 difficulty (contact local guide Kapila Madhushan for technical climbing permits and routes).</p>
        <h2>Bouldering Near Kegalle</h2>
        <p>The area around Kegalle, between Colombo and Kandy, has a growing bouldering community using the large granite boulders scattered through the landscape. Routes are informally documented and local climbers are welcoming to visiting sport climbers. This is the most accessible area for genuine rock climbing for those based in Colombo or Kandy.</p>
        <h2>Practical Information</h2>
        <p>Rock climbing as a formal tourist activity is underdeveloped in Sri Lanka — there are no dedicated climbing guiding companies operating at the level of established destinations. Visiting climbers should bring their own equipment, make contact with the Sri Lanka Mountaineering and Climbing Institute in Colombo, or connect with the informal climbing community through Facebook groups before arriving.</p>
        <h2>Best Time for Climbing</h2>
        <p>December through April is the driest and most comfortable period for climbing. The wet rock during monsoon months is a significant safety hazard on the smooth granite faces.</p>
        <h2>Tips</h2>
        <ul>
          <li>Bring your own harness, shoes and hardware — equipment rental is not available</li>
          <li>The heat is significant — start climbs before 8am and take a long midday break</li>
          <li>Pidurangala requires sturdy shoes with grip rather than climbing shoes for the standard ascent</li>
          <li>Connect with the Sri Lanka climbing community online before your trip for current route information</li>
        </ul>`,
    affiliateTitle: 'Explore the Cultural Triangle', affiliateDesc: 'The Sigiriya and Pidurangala area has excellent guesthouses as a climbing base — book your accommodation and explore the whole region.', affiliateBtn: 'Find Hotels Near Sigiriya', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Sigiriya+Sri+Lanka', affiliateVariant: 'hotel',
    relatedLinks: [{href:'/things-to-do/pidurangala-rock',label:'Pidurangala Rock Guide'},{href:'/places/sigiriya',label:'Sigiriya'},{href:'/things-to-do/hiking',label:'Hiking Guide'},{href:'/things-to-do',label:'All Activities'}],
  },
  {
    slug: 'waterfall-hiking',
    title: 'Waterfall Hiking in Sri Lanka: Ravana, Diyaluma, Baker\'s Falls & More',
    desc: 'Sri Lanka has over 100 named waterfalls — a guide to the best waterfall hikes including Diyaluma\'s natural pools, Baker\'s Falls in Horton Plains and the legendary Ravana Falls near Ella.',
    publishDate: '2025-03-01', image: '/images/ella.jpg', imageAlt: 'Waterfall hiking Sri Lanka hills', badge: 'Hiking', h1: 'Waterfall Hiking in Sri Lanka',
    body: `        <p>Sri Lanka's Hill Country is a land of waterfalls — the high rainfall of the central mountains, combined with the dramatic escarpments where the highland plateau drops to the lowlands, creates over 100 named waterfalls of varying size and accessibility. The best of them are genuinely spectacular: <a href="/places/diyaluma-falls">Diyaluma Falls</a> drops 171 metres in a single unbroken cascade; <a href="/places/ravana-falls">Ravana Falls</a> swells to an extraordinary volume after rain; Baker's Falls in Horton Plains is a perfectly formed 20-metre drop into a forested gorge. And several of the finest waterfalls have natural pools at their base or top, making them destinations for swimming as much as hiking.</p>
        <h2>Diyaluma Falls</h2>
        <p>Sri Lanka's second highest waterfall (171 metres) near Koslanda, with natural infinity pools at the top accessible via a 1.5-hour hike from the base. The pools overlook a dizzying drop and are perfect for swimming. Most powerful May–September. The hike to the top requires some scrambling but is well worth the effort.</p>
        <h2>Ravana Falls</h2>
        <p>The most visited waterfall in Sri Lanka, located 6km from <a href="/places/ella">Ella</a> on the Wellawaya road. A 25-metre cascade with a swimmable pool at the base. Named after the demon king of the Ramayana. Steeped in legend and easily accessible by tuk-tuk from Ella.</p>
        <h2>Baker's Falls, Horton Plains</h2>
        <p>A 20-metre waterfall on the trail between the park entrance and World's End in Horton Plains National Park. The falls drop into a beautiful forested gorge with good birding. Swimming is not permitted (national park rules). Best visited as part of the World's End hike.</p>
        <h2>Bambarakanda Falls</h2>
        <p>Sri Lanka's highest waterfall at 263 metres — a single-thread cascade visible from a viewpoint near the Haputale–Belihul Oya road. Less visited than Diyaluma, genuinely impressive in high flow. The hiking trail to the base takes about 2 hours return.</p>
        <h2>Devon Falls & St Claire's Falls</h2>
        <p>Two of the most photogenic waterfalls on the Hatton–Nuwara Eliya road — wide, powerful cascades through the tea estates that are visible from the road and easily accessed on the drive between Kandy and Nuwara Eliya.</p>
        <h2>Best Time for Waterfall Hiking</h2>
        <p>The southwest monsoon (May–September) brings the highest water volume — waterfalls are most powerful in June and July. The dry season (December–April) gives lower flow but clearer access and more stable weather for hiking. The inter-monsoon months (October–November) can offer the best combination of high flow and manageable rain.</p>
        <h2>Tips</h2>
        <ul>
          <li>Visit waterfalls in the morning before afternoon cloud builds and rain arrives</li>
          <li>Wear shoes with grip — wet rocks near waterfalls are extremely slippery</li>
          <li>For Diyaluma, take a local guide for the pool hike on your first visit</li>
          <li>Bring a waterproof bag for cameras and phones near powerful falls</li>
        </ul>`,
    affiliateTitle: 'Explore Sri Lanka\'s Hill Country', affiliateDesc: 'Base yourself in Ella or Haputale for the best access to Sri Lanka\'s finest waterfalls — excellent guesthouses in both towns.', affiliateBtn: 'Find Hotels in Ella', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Ella+Sri+Lanka', affiliateVariant: 'hotel',
    relatedLinks: [{href:'/places/ravana-falls',label:'Ravana Falls'},{href:'/places/diyaluma-falls',label:'Diyaluma Falls'},{href:'/places/worlds-end',label:"World's End"},{href:'/blog/sri-lanka-waterfalls',label:'Waterfalls Blog'}],
  },
  {
    slug: 'stilt-fishing',
    title: 'Stilt Fishing in Sri Lanka: Weligama\'s Iconic Ocean Fishermen',
    desc: 'The stilt fishermen of Sri Lanka\'s south coast are one of the country\'s most iconic images — men perched on poles in the Indian Ocean, fishing in the traditional manner.',
    publishDate: '2025-03-01', image: '/images/weligama.jpg', imageAlt: 'Stilt fishermen Weligama south coast Sri Lanka', badge: 'Culture', h1: 'Stilt Fishing in Sri Lanka',
    body: `        <p>Sri Lanka's stilt fishermen are one of the most iconic images of the island — men seated on a thin horizontal pole (called a "stilt" or petta) fixed to a vertical pole driven into the seabed, fishing with a simple rod and line in the shallows of the Indian Ocean as the waves break around them. The practice is believed to have originated after World War II when a shortage of fishing spots near the shore forced fishermen to find new positions. Today the stilts are a cherished cultural tradition, a tourist attraction, and an enduring symbol of Sri Lanka's relationship with the sea.</p>
        <h2>Where to See Stilt Fishing</h2>
        <p>The most famous stilt fishing locations are along the south coast between Galle and Weligama. The stilts at Koggala, Ahangama and <a href="/places/weligama">Weligama</a> are the most photographed. The fishermen typically fish at dawn and dusk when the tide is right — these are also the best times for photography, when the golden light catches the silhouettes against the sea. During the south coast tourist season (December–April), the fishermen are a regular sight along the coastal road.</p>
        <h2>Photography & Etiquette</h2>
        <p>The stilt fishermen have become accustomed to tourist photography — this is partly because many now charge a fee for photographs. This is entirely legitimate: you are photographing their place of work and they deserve compensation. Agree a fee (LKR 200–500 is typical) before photographing. The best shots are taken from a distance with a long lens — you capture the scene naturally rather than a posed situation. The golden hour before sunset gives the most dramatic silhouette photographs.</p>
        <h2>Learning to Fish from Stilts</h2>
        <p>Several operators along the south coast offer tourist experiences of actually using the stilts — climbing onto the pole and fishing briefly in the traditional manner. This is a genuine, if theatrical, cultural experience. The fishermen are patient teachers and the experience of balancing on a stilt above the Indian Ocean (even in calm, shallow water) gives a new appreciation for the skill involved. Ask at your guesthouse in Weligama or Ahangama for current operators.</p>
        <h2>Getting to the Stilt Fishing Areas</h2>
        <p>From Galle, take the A2 coastal road east towards Weligama — the stilt fishing spots are visible from the road between Koggala (10km east of Galle) and Weligama (27km east of Galle). Tuk-tuks from Galle cost LKR 500–700 to Koggala. The spots are also visible from the coastal train — passengers on the left side (heading east) get the best views.</p>
        <h2>Best Time to Visit</h2>
        <p>Dawn and dusk during the south coast season (November–April). The fishermen fish when conditions suit them — ask locally the evening before which spots will have fishermen at dawn. The stilts are most atmospheric on calm days when the sea is flat.</p>
        <h2>Tips</h2>
        <ul>
          <li>Bring a long lens (200mm minimum) for the best photographs from a respectful distance</li>
          <li>Visit at sunrise for the golden light and the most active fishing</li>
          <li>Agree the photography fee before shooting — it avoids uncomfortable negotiations afterwards</li>
          <li>Combine with a morning at Galle Fort (15–20 minutes west) for a great south coast half-day</li>
        </ul>`,
    affiliateTitle: 'Find Hotels Near Weligama', affiliateDesc: 'Weligama has excellent guesthouses along the beach — a perfect base for south coast exploration including stilt fishing villages.', affiliateBtn: 'Search Hotels on Booking.com', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Weligama+Sri+Lanka', affiliateVariant: 'hotel',
    relatedLinks: [{href:'/places/weligama',label:'Weligama Guide'},{href:'/places/galle',label:'Galle Fort'},{href:'/things-to-do/surfing',label:'Surfing at Weligama'},{href:'/things-to-do',label:'All Activities'}],
  },
  {
    slug: 'kitesurfing',
    title: 'Kitesurfing in Sri Lanka: Kalpitiya — Asia\'s Best Kite Destination',
    desc: 'Kalpitiya on Sri Lanka\'s northwest coast is one of Asia\'s finest kitesurfing destinations — flat lagoon water, consistent trade winds and world-class instruction for beginners and experts.',
    publishDate: '2025-03-01', image: '/images/whale-watching.jpg', imageAlt: 'Kitesurfing Kalpitiya lagoon Sri Lanka', badge: 'Water Sports', h1: 'Kitesurfing in Sri Lanka',
    body: `        <p>Sri Lanka has quietly established itself as one of Asia's premier kitesurfing destinations — and <a href="/places/kalpitiya">Kalpitiya</a> on the northwest coast is the reason why. The 40-kilometre lagoon enclosed between Kalpitiya peninsula and the offshore barrier islands creates conditions that are close to ideal for kite learning and progression: flat, shallow (waist-to-chest deep), consistent south-west trade winds at 15–25 knots, and warm water year-round. On the ocean side of the peninsula, more experienced kiters can access choppy water and small waves. It is the combination of a dedicated learner area and ocean access that makes Kalpitiya genuinely excellent rather than merely good.</p>
        <h2>The Wind Window</h2>
        <p>The south-west monsoon drives Kalpitiya's kite season — from May through October, the wind blows consistently enough for reliable daily sessions. June through September is peak kite season with the most consistent wind. May and October are good but more variable. The wind at Kalpitiya is typically cross-onshore from the south-west, which makes it safe for learners (blown towards the beach rather than out to sea). Typical wind speeds of 15–22 knots are ideal for most kiters.</p>
        <h2>Learning to Kite</h2>
        <p>Kalpitiya is an excellent place to learn kitesurfing. The shallow lagoon means that even when you fall, the consequences are gentle — waist-deep water over a sandy bottom. IKO-certified instruction is available at several kite camps. A standard beginners course — 9 hours of instruction spread over 3 days — costs USD 200–270 depending on the camp, and includes kite, board and safety equipment. Most beginners achieve basic independent riding (water starts and riding downwind) by the end of the course. Advanced lessons in jumping, transitions and wave riding are available for experienced kiters.</p>
        <h2>Kite Camps</h2>
        <p>Several kite camps operate at Kalpitiya, offering all-inclusive packages (accommodation, instruction, equipment, meals) that simplify the logistics of visiting this remote destination. Camps vary in style from rustic beach camps to more comfortable lodge-style operations. Most offer multi-day packages combining lessons with free sessions. Booking directly with the camps is usually the best approach — Colombo-based agencies add a significant margin.</p>
        <h2>Combining with Dolphin Watching</h2>
        <p>The dolphins at Kalpitiya (spinner and bottlenose) are resident year-round but best encountered November–April — which is opposite to the kite season. If combining dolphins and kitesurfing, visit in November (beginning of the dolphin season, end of the kite season) or April (end of dolphin season, beginning of kite season) for the best chance of both.</p>
        <h2>Tips</h2>
        <ul>
          <li>Book kite camp packages rather than accommodation and lessons separately — it is significantly cheaper and more convenient</li>
          <li>Bring sufficient sun protection — the combination of lagoon reflection, wind and tropical sun burns extremely fast</li>
          <li>Equipment hire is available at the camps — advanced kiters may want to bring their own bar and lines</li>
          <li>ATMs are unreliable near Kalpitiya — bring sufficient cash from Colombo</li>
        </ul>`,
    affiliateTitle: 'Book Kitesurfing at Kalpitiya', affiliateDesc: 'All-inclusive kite camp packages at Kalpitiya — instruction, equipment, accommodation and meals in one booking.', affiliateBtn: 'Find Kite Camp Packages', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Kalpitiya+Sri+Lanka', affiliateVariant: 'tour',
    relatedLinks: [{href:'/places/kalpitiya',label:'Kalpitiya Guide'},{href:'/things-to-do/dolphin-watching',label:'Dolphin Watching'},{href:'/things-to-do/surfing',label:'Surfing Guide'},{href:'/things-to-do',label:'All Activities'}],
  },
  {
    slug: 'deep-sea-fishing',
    title: 'Deep Sea Fishing in Sri Lanka: Trincomalee, Mirissa & Blue Water Charters',
    desc: 'Sri Lanka\'s deep ocean waters offer world-class sport fishing — blue marlin, dorado, yellowfin tuna and wahoo from charters out of Trincomalee and Mirissa.',
    publishDate: '2025-03-01', image: '/images/whale-watching.jpg', imageAlt: 'Deep sea fishing charter Sri Lanka ocean', badge: 'Fishing', h1: 'Deep Sea Fishing in Sri Lanka',
    body: `        <p>Sri Lanka's position in the Indian Ocean — at the edge of some of the deepest ocean in the world — makes it an underrated sport fishing destination. The Indian Ocean's warm waters support large populations of blue and black marlin, dorado (mahi-mahi), yellowfin tuna, wahoo, sailfish and barracuda within a short distance of the coast. Two main fishing destinations offer charter operations: Trincomalee on the east coast, where the ocean drops steeply to great depth within 10–15km of shore, and Mirissa on the south coast, where the same deep-ocean access is combined with a vibrant tourism infrastructure.</p>
        <h2>Trincomalee — East Coast Fishing</h2>
        <p>Trincomalee's deep natural harbour opens directly to the Indian Ocean, and the offshore waters drop rapidly to depths of 2,000+ metres. Several charter operators run full-day fishing trips targeting blue marlin, dorado and yellowfin tuna. The best season is May through September (the east coast dry season) when sea conditions are stable. Trincomalee has a smaller number of charter operators than Mirissa — book in advance through your guesthouse in Uppuveli or Nilaveli.</p>
        <h2>Mirissa — South Coast Fishing</h2>
        <p>Mirissa is the most developed fishing charter destination on the south coast, operating primarily during the whale watching season (November–April) when the offshore waters are calm. The same boats that run whale watching tours often offer sport fishing charters on days when whale watching is not running. Target species include dorado, wahoo, barracuda and small tuna. Larger marlin are occasionally caught on the south coast but the east coast generally has more reliable big-game fishing.</p>
        <h2>What to Expect on a Charter</h2>
        <p>Most Sri Lankan sport fishing charters operate on a half-day (5–6 hours) or full-day (8–10 hours) basis. Boats range from local wooden craft adapted for fishing to purpose-built sportfishing vessels. The best operators use trolling and jigging techniques. Some practice catch-and-release for billfish — choose operators who support sustainable practices. Costs range from USD 150–400 depending on boat size, duration and season.</p>
        <h2>Fishing Seasons</h2>
        <p>East coast (Trincomalee, Batticaloa): May–September. South coast (Mirissa, Galle): November–April. The best deep-sea conditions mirror the diving seasons — each coast has its optimal calm-water window.</p>
        <h2>Tips</h2>
        <ul>
          <li>Book through reputable guesthouses rather than beach touts — quality and safety of boats varies significantly</li>
          <li>Bring seasickness medication if you are prone — the open ocean swells can be significant</li>
          <li>A full-day charter gives better chances of encountering the larger pelagic species</li>
          <li>Ask about catch-and-release policies before booking if sustainable fishing is important to you</li>
        </ul>`,
    affiliateTitle: 'Book Deep Sea Fishing Charters', affiliateDesc: 'Full and half-day sport fishing charters from Trincomalee and Mirissa — targeting marlin, dorado, tuna and wahoo in the Indian Ocean.', affiliateBtn: 'Find Fishing Charters', affiliateHref: 'https://www.getyourguide.com/mirissa-l5/', affiliateVariant: 'tour',
    relatedLinks: [{href:'/places/trincomalee',label:'Trincomalee Guide'},{href:'/places/mirissa',label:'Mirissa'},{href:'/things-to-do/whale-watching',label:'Whale Watching'},{href:'/things-to-do',label:'All Activities'}],
  },
  {
    slug: 'temple-hopping',
    title: "Colombo Temple Guide: The City's Best Buddhist & Hindu Temples",
    desc: "Colombo has a surprisingly rich collection of Buddhist, Hindu and multi-faith temples — a guide to the best temples in the capital for cultural sightseeing.",
    publishDate: '2025-03-01', image: '/images/kandy.jpg', imageAlt: 'Colombo Buddhist temple Sri Lanka', badge: 'Culture', h1: 'Temple Hopping in Colombo',
    body: `        <p>Colombo is not typically the first destination that comes to mind for temple enthusiasts — that honour goes to Kandy, Dambulla and Anuradhapura. But Sri Lanka's capital has a surprisingly rich religious landscape: Buddhist temples, Hindu kovils (temples), mosques and churches coexist within walking distance of each other in the old city, reflecting Colombo's history as a multi-ethnic trading port. A half-day temple-hopping circuit through the Fort, Pettah and Slave Island neighbourhoods gives a genuine insight into the city's religious diversity and is one of the most rewarding ways to spend a morning in Colombo.</p>
        <h2>Gangaramaya Temple</h2>
        <p><a href="/places/gangaramaya-temple">Gangaramaya</a> in Slave Island is the city's most famous and most extraordinary temple — a vast complex of halls stuffed with religious art, gold Buddhas and donated objects from across Asia. Open daily; entry fee applies. Best visited in the early morning. Not to be missed.</p>
        <h2>Kelaniya Raja Maha Vihara</h2>
        <p>Located 11km northeast of central Colombo, Kelaniya is one of the most sacred Buddhist temples in Sri Lanka — the Buddha is believed to have visited and preached here on his third and final visit to the island. The main shrine hall contains beautifully restored murals depicting the life of the Buddha and scenes from Sri Lankan history. Free entry; respectful dress required. A tuk-tuk from the city centre takes about 30 minutes.</p>
        <h2>Sri Kathiresan Kovil — Pettah</h2>
        <p>The Sri Kathiresan Kovil in Pettah is one of Colombo's principal Hindu temples, dedicated to Lord Murugan (Kathiresan). The colourful gopuram (tower gate) rises above the crowded market street. The temple is active and vibrant — worshippers come throughout the day, and the fragrance of incense and marigold offerings fills the air. Dress respectfully; remove shoes at the gate.</p>
        <h2>Wolfendahl Church</h2>
        <p>Not a temple in the Eastern sense, but Wolfendahl Church in the old Dutch quarter of Pettah is one of the finest examples of Dutch colonial religious architecture in Asia — a cruciform church built in 1749 with original gravestones, marble tablets and a wooden interior that has survived remarkably intact. A fascinating stop on any colonial Colombo tour.</p>
        <h2>Seema Malaka — Beira Lake</h2>
        <p>Designed by Geoffrey Bawa (Sri Lanka's greatest architect) and connected to Gangaramaya Temple, Seema Malaka is a floating Buddhist platform in the middle of Beira Lake — a meditation pavilion on pontoons, with Buddha statues reflected in the surrounding water. Particularly atmospheric at dusk when the lights come on. Access is through Gangaramaya; entry fee applies.</p>
        <h2>Tips</h2>
        <ul>
          <li>Cover shoulders and knees at all religious sites — sarongs and shawls are available at most temples for hire</li>
          <li>Remove shoes at the entrance to all temples and most kovils</li>
          <li>Poya (full moon) days are the most active at Buddhist temples — and also the busiest</li>
          <li>A tuk-tuk for a half-day temple circuit costs LKR 1,500–2,500 — agree the itinerary and price in advance</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Colombo', affiliateDesc: 'Colombo has excellent hotels across all price ranges — from budget guesthouses in the Fort to five-star properties on Galle Road.', affiliateBtn: 'Search Hotels on Booking.com', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Colombo+Sri+Lanka', affiliateVariant: 'hotel',
    relatedLinks: [{href:'/places/gangaramaya-temple',label:'Gangaramaya Temple'},{href:'/places/galle-face-green',label:'Galle Face Green'},{href:'/blog/colombo-city-guide',label:'Colombo City Guide'},{href:'/things-to-do',label:'All Activities'}],
  },
  {
    slug: 'camping',
    title: 'Camping in Sri Lanka: Best Spots for an Outdoor Night Under the Stars',
    desc: 'Sri Lanka has excellent camping spots — from the beach dunes of Yala to the highland meadows of Knuckles Range and lake-edge campsites in the Cultural Triangle.',
    publishDate: '2025-03-01', image: '/images/horton-plains.jpg', imageAlt: 'Camping Sri Lanka highland landscape stars', badge: 'Adventure', h1: 'Camping in Sri Lanka',
    body: `        <p>Camping in Sri Lanka is an underutilised way to experience the island's extraordinary landscapes and wildlife at their most intimate — without the buffer of guesthouse walls between you and the natural world. The island has several genuine camping destinations ranging from national park wilderness camps (with advance permits) to beach camping on remote coastlines. This is not a well-developed camping tourism industry — you will need to organise your own equipment and logistics — but for self-sufficient travellers, the rewards are significant: waking to herds of elephants at a forest camp, seeing the Milky Way above the Knuckles Range, or watching the sunrise from a highland meadow campsite are experiences that justify considerable preparation.</p>
        <h2>Knuckles Mountain Range</h2>
        <p>The Knuckles Conservation Forest, east of Kandy, is the finest camping destination in Sri Lanka for wilderness enthusiasts. Multi-day trekking routes through cloud forest, montane jungle and grassland (patana) allow overnight camping in mountain meadows with genuinely dramatic scenery. The range is named for its knuckle-like peaks, which rise to 1,863 metres. Wildlife includes leopards, giant squirrels, endemic lizards and over 130 bird species. Camping is permitted with a Forest Department permit. Hire a local guide — the trails are unmapped and weather can change rapidly.</p>
        <h2>Yala National Park — Buffer Zone</h2>
        <p>Camping inside Yala National Park itself is not generally available to tourists, but several eco-camps operate in the buffer zone adjacent to the park — allowing you to be woken by the calls of jungle birds and (if you are lucky) the distant roar of leopards. These are not primitive camps — they typically offer furnished tents with beds and attached bathrooms, but the experience of sleeping at the edge of Yala's wilderness is genuinely special.</p>
        <h2>Kumana National Park</h2>
        <p>Overnight camping inside <a href="/places/kumana">Kumana National Park</a> is possible with advance permits from the Department of Wildlife Conservation. This is primitive camping — no facilities — in one of Sri Lanka's most remote wildernesses. The reward is the extraordinary bird colony and the sense of being entirely alone in a vast, ancient landscape.</p>
        <h2>Highland Lake Camping</h2>
        <p>Several operators around Kandy and the Hill Country offer lakeside camping experiences at reservoirs in the highlands — forest-edge campsites with basic facilities, campfire cooking and mountain views. These are more accessible than the wilderness options and suitable for families and less experienced campers.</p>
        <h2>Essential Gear</h2>
        <p>Bring a good quality tent (wind and rain resistant — Sri Lankan weather can surprise even in the dry season), a sleeping bag rated to 10°C for highland camping, a head torch, water purification tablets or a filter, and insect repellent. Bear in mind that camping near wildlife areas carries genuine risk — follow all guidelines from your guide or park authority.</p>
        <h2>Tips</h2>
        <ul>
          <li>All national park camping requires advance permits from the Department of Wildlife Conservation in Colombo — apply weeks in advance</li>
          <li>Hire an experienced local guide for any highland or wilderness camping</li>
          <li>Never camp without proper bear/wildlife precautions in areas with elephants or leopards</li>
          <li>The Knuckles Range requires Forest Department permits available from the divisional office in Kandy</li>
        </ul>`,
    affiliateTitle: 'Find Eco-Camp Accommodation', affiliateDesc: 'Luxury tented eco-camps and glamping options near Yala, Knuckles and the Cultural Triangle — the best of the camping experience with creature comforts.', affiliateBtn: 'Find Eco Camps', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Yala+Sri+Lanka', affiliateVariant: 'hotel',
    relatedLinks: [{href:'/things-to-do/hiking',label:'Hiking Guide'},{href:'/places/yala',label:'Yala National Park'},{href:'/places/kumana',label:'Kumana National Park'},{href:'/things-to-do',label:'All Activities'}],
  },
  {
    slug: 'pidurangala-rock',
    title: "Pidurangala Rock: Sigiriya's Free Alternative with Better Views",
    desc: "Pidurangala Rock is the free, less crowded alternative to Sigiriya — a 45-minute scramble to a summit with arguably the best view of Sigiriya Rock Fortress in existence.",
    publishDate: '2025-03-01', image: '/images/sigiriya.jpg', imageAlt: 'Pidurangala Rock view of Sigiriya Sri Lanka sunrise', badge: 'Hiking', h1: 'Pidurangala Rock',
    body: `        <p>Pidurangala Rock is the open secret of the Sigiriya area — a forested hill rising 667 metres above sea level immediately north of Sigiriya, requiring a 45-minute scramble to reach a summit that gives arguably the finest view of Sigiriya Rock Fortress available anywhere. While thousands of tourists pay USD 30 to climb Sigiriya, a much smaller number pay LKR 500 to climb Pidurangala and look across at Sigiriya from above — seeing the entire rock and its surrounding moat, gardens and jungle in a single breathtaking frame. It is, by most accounts, the better viewpoint. And the climb, while requiring some scrambling, is significantly less vertiginous than Sigiriya's final iron staircase.</p>
        <h2>The Climb</h2>
        <p>The trail begins at the Pidurangala Royal Cave Temple — itself worth visiting for the ancient reclining Buddha cut from the rock face. The path ascends steeply through forest and boulders, becoming progressively more scramble-like as it approaches the summit. The final section requires using iron handholds on a smooth granite face — manageable for most people with a reasonable head for heights, but genuinely challenging if you suffer from vertigo. The summit is a large, flat granite plate with the forest falling away on all sides and Sigiriya rising from the jungle directly to the south. Total climbing time: 45 minutes to 1 hour.</p>
        <h2>Sunrise at Pidurangala</h2>
        <p>Pidurangala at sunrise is one of Sri Lanka's greatest photography experiences. As the light arrives from the east, it illuminates the eastern face of Sigiriya Rock in warm gold while the surrounding jungle is still in shadow. The ancient moat system glitters below, and on clear mornings the outline of the Highland mountains is visible on the horizon. Sunrise visits require departing in darkness — the trail is manageable with head torches and the predawn ascent is cool and pleasurable. Arrive at the summit 20 minutes before sunrise.</p>
        <h2>The Cave Temple</h2>
        <p>At the base of the Pidurangala trail, the Royal Cave Temple contains a large reclining Buddha carved from the rock — a late-era addition to what was originally a 5th-century cave monastery associated with the reign of King Kassapa (who built Sigiriya). The cave has frescoes, ancient inscriptions and is still used as a working temple. Monks chant here in the early morning; the atmosphere is entirely genuine and undisturbed by tourism.</p>
        <h2>Getting There</h2>
        <p>Pidurangala is 1km north of Sigiriya — hire a tuk-tuk from the Sigiriya village or walk the road north from the main Sigiriya entrance. Most visitors combine Sigiriya (usually morning, for the shadow play) with Pidurangala the same day (sunrise or late afternoon). The entry fee at the base (LKR 500 for foreigners) is a fraction of the Sigiriya entry. Open from early morning; no closing time for the rock itself.</p>
        <h2>Best Time to Visit</h2>
        <p>Sunrise (typically 6am) is the most popular time — arrive at the trailhead by 5:15am to reach the summit before the light arrives. Late afternoon (4–5pm) gives golden light on Sigiriya's western face from the Pidurangala summit. Avoid midday — the exposed granite summit becomes very hot.</p>
        <h2>Tips</h2>
        <ul>
          <li>Wear shoes with good grip — the smooth granite near the summit is slippery, especially if wet</li>
          <li>For sunrise, bring a head torch and allow 45–60 minutes for the ascent in the dark</li>
          <li>The summit is exposed — bring water and sun protection</li>
          <li>Visit the cave temple at the base both going up and coming down — the monks chant in the early morning</li>
        </ul>`,
    affiliateTitle: 'Find Hotels Near Sigiriya', affiliateDesc: 'Several excellent guesthouses within 2km of the Sigiriya and Pidurangala trailheads — ideal for early sunrise visits.', affiliateBtn: 'Search Hotels Near Sigiriya', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Sigiriya+Sri+Lanka', affiliateVariant: 'hotel',
    relatedLinks: [{href:'/places/sigiriya',label:'Sigiriya Rock Fortress'},{href:'/places/dambulla',label:'Dambulla Cave Temples'},{href:'/things-to-do/rock-climbing',label:'Rock Climbing Guide'},{href:'/things-to-do/hiking',label:'Hiking Guide'}],
  },
];

for (const p of pages) {
  const content = todo(p);
  writeFileSync(join(base, `${p.slug}.astro`), content, 'utf8');
  console.log(`✓ things-to-do/${p.slug}.astro`);
}
console.log(`\nThings-to-do complete: ${pages.length} pages written.`);
