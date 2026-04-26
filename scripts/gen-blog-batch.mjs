import { writeFileSync, mkdirSync } from 'fs';
import path from 'path';

const outDir = path.resolve('src/pages/blog');
mkdirSync(outDir, { recursive: true });

function post({ slug, title, description, heroImage, heroAlt, date, readTime, category, content }) {
  return `---
import BaseLayout from '../../layouts/BaseLayout.astro';
---

<BaseLayout
  title="${title} | The Trails of Ceylon"
  description="${description}"
>
  <article>
    <div class="relative py-24 bg-ceylon-green-900 overflow-hidden">
      <div class="absolute inset-0 opacity-30">
        <img src="/images/${heroImage}" alt="${heroAlt}" class="w-full h-full object-cover" loading="eager" width="1200" height="600" style="object-fit:cover;" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <nav class="flex items-center justify-center gap-2 text-white/60 text-xs mb-4" aria-label="Breadcrumb">
          <a href="/" class="hover:text-white">Home</a><span>/</span>
          <a href="/blog" class="hover:text-white">Blog</a><span>/</span>
          <span class="text-white">${title.split(':')[0]}</span>
        </nav>
        <span class="inline-block bg-ceylon-gold-400 text-ceylon-green-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">${category}</span>
        <h1 class="font-serif font-black text-white text-4xl sm:text-5xl leading-tight">${title}</h1>
        <div class="flex items-center justify-center gap-4 text-white/70 text-sm mt-4">
          <span>${date}</span>
          <span>·</span>
          <span>${readTime} min read</span>
        </div>
      </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div class="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-ceylon-green-700">
${content}
      </div>
    </div>
  </article>
</BaseLayout>
`;
}

const posts = [
  {
    slug: 'adams-peak-hiking-guide',
    title: "Adam's Peak Hiking Guide: The Sacred Climb to Sri Pada",
    description: "Everything you need to know about climbing Adam's Peak (Sri Pada) in Sri Lanka — the best season, routes, what to expect at the summit, and how to get there.",
    heroImage: 'ella.jpg',
    heroAlt: "Adam's Peak misty mountain Sri Lanka",
    date: 'January 2026',
    readTime: 9,
    category: 'Hiking',
    content: `        <p>Adam's Peak — known in Sinhala as Sri Pada, meaning "sacred footprint" — is one of Sri Lanka's most extraordinary experiences. Rising 2,243 metres above sea level in the central highlands, it draws Buddhist, Hindu, Muslim and Christian pilgrims who all claim the mysterious footprint-shaped rock at the summit as sacred to their faith. For travellers, it is simply one of the most memorable hikes in Asia.</p>

        <p>The mountain is climbed at night. Pilgrims begin the ascent around midnight or 2am, arriving at the summit before dawn to witness the famous triangular shadow that the peak casts across the cloud layer at sunrise. This spectacle — the cone of shadow stretching away below you in the early morning light — is genuinely unlike anything else.</p>

        <h2>When to Climb Adam's Peak</h2>
        <p>The climbing season runs from <strong>December to May</strong>, coinciding with the Poya (full moon) pilgrimage festival season. December and January see the largest crowds — thousands of pilgrims may be on the mountain on busy nights. The staircase is lit with string lights during the season, making night climbing safe and manageable.</p>
        <p>Outside the season (June–November), the mountain is officially closed due to the southwest monsoon. The lights are turned off, the teashops shut, and conditions can be dangerously slippery. Some experienced hikers still attempt it off-season, but it is not recommended.</p>
        <p>For the best experience, aim for <strong>January or February</strong> — the weather is settled, the skies are clearer for the sunrise shadow, and it is not quite as crowded as the festive December peak.</p>

        <h2>The Route: Hatton or Ratnapura?</h2>
        <p>There are two main routes up Adam's Peak:</p>

        <h3>Hatton Route (Nallathanniya / Dalhousie) — Recommended</h3>
        <p>The most popular route, starting from the village of Dalhousie near Hatton. The climb is approximately <strong>7 kilometres</strong> with around <strong>5,500 steps</strong>, taking 3–4 hours for a reasonably fit person. This route is fully lit during the season with string lights and lined with teashops selling hot drinks, rice and noodles, and lodging for those who want to base at the foot of the mountain.</p>
        <p>Dalhousie is reached from Hatton (2 hours from Kandy by train, or 3.5 hours from Colombo). From Hatton, take a bus or tuk-tuk to Dalhousie (about 1 hour).</p>

        <h3>Ratnapura Route</h3>
        <p>A longer, more challenging route through the rainforest foothills, starting from Ratnapura on the southwestern side. Around <strong>24 kilometres</strong> return — serious hikers only. This route is more scenic and less crowded but requires a guide and much more time. It passes through Carney Estate and the Sinharaja buffer zone.</p>

        <h2>What to Expect on the Climb</h2>
        <p>Most climbers start between <strong>midnight and 2am</strong> to arrive at the summit by dawn (around 6am). The first hour is through forested steps, relatively gentle. The middle section steepens significantly — there are some sections where you are climbing near-vertical stairs using both hands. The final push to the summit is the steepest.</p>
        <p>The summit itself is a small, crowded platform with a stupa, the sacred footprint (encased in a gilded housing), a bell tower (traditionally rung once per visit), and the most extraordinary panorama of the central highlands. On clear days you can see the coast.</p>
        <p>The descent is significantly harder on the knees than the ascent — take your time. Many climbers find trekking poles useful for the descent.</p>

        <h2>What to Bring</h2>
        <ul>
          <li><strong>Warm layers</strong> — it is genuinely cold at the summit (5–10°C), even if it is warm at the base</li>
          <li><strong>Waterproof jacket</strong> — mist and light rain are common even in dry season</li>
          <li><strong>Headtorch</strong> — useful even with the string lights</li>
          <li><strong>Water and snacks</strong> — though teashops are open all night on the mountain</li>
          <li><strong>Comfortable hiking shoes</strong> — not sandals; the steps are uneven</li>
          <li><strong>Cash</strong> — teashops are cash only</li>
        </ul>
        <p>There is no entry fee to climb Adam's Peak. Donations at the summit temple are appreciated but not required.</p>

        <h2>Where to Stay Near Adam's Peak</h2>
        <p>Most travellers base themselves in <strong>Hatton</strong> or <strong>Nuwara Eliya</strong> (45 minutes from Hatton). There are simple guesthouses in Dalhousie itself at the mountain's foot, which allows a very early start without a drive in the night. Book ahead during peak season — rooms fill fast around Poya nights.</p>
        <p>Alternatively, base in <strong>Ella</strong> (2 hours from Hatton) and do a day trip out, hiring a driver for the day. This adds cost but Ella is a more attractive base for other hill country activities.</p>

        <h2>Getting There</h2>
        <p>The scenic train from Kandy to Hatton takes about 2 hours and passes through spectacular tea country — one of the most beautiful rail journeys in Sri Lanka. From Hatton station, buses run to Dalhousie/Nallathanniya (last bus around midnight during peak season, more frequent buses during the day). Tuk-tuks also available from Hatton for around LKR 1,500–2,000.</p>

        <h2>Tips for the Climb</h2>
        <ul>
          <li>Start no later than 2am if you want a good spot at the summit for sunrise</li>
          <li>Poya (full moon) nights are the most crowded and most atmospheric — plan or avoid according to your preference</li>
          <li>The teashops serve excellent hot ginger tea and rotis — budget around LKR 500–1,000 for snacks on the mountain</li>
          <li>Dress modestly — this is a pilgrimage site. Shoulders and knees covered is appreciated</li>
          <li>The descent is when most injuries happen — go slowly and use the rails</li>
          <li>Check the weather forecast before you go — cloud at the summit will obscure the famous shadow</li>
        </ul>

        <p>Adam's Peak is one of those experiences that stays with you long after Sri Lanka. The combination of physical challenge, the communal atmosphere of thousands of pilgrims climbing through the night, and the reward of that extraordinary sunrise makes it one of the island's unmissable adventures.</p>`
  },
  {
    slug: 'hikkaduwa-travel-guide',
    title: "Hikkaduwa Travel Guide: Coral Reef, Surf & Beach Life",
    description: "A complete guide to Hikkaduwa on Sri Lanka's south coast — the best coral reef snorkelling, surf spots, where to stay and eat, and how to get there.",
    heroImage: 'hikkaduwa.jpg',
    heroAlt: 'Hikkaduwa beach coral reef Sri Lanka',
    date: 'February 2026',
    readTime: 8,
    category: 'Destinations',
    content: `        <p>Hikkaduwa is Sri Lanka's original beach resort — a town that has been drawing travellers since the 1970s backpacker trail and still delivers the goods today. It sits on the south coast around 100 kilometres from Colombo, close enough for a weekend escape from the capital but with enough to offer for a week-long stay.</p>

        <p>The town is best known for two things: its coral reef and its surf. The <strong>Hikkaduwa National Park Coral Sanctuary</strong> is one of the most accessible coral reefs in Sri Lanka, reachable by snorkel from the beach in front of the main strip. The surf breaks near Narigama Beach draw a consistent intermediate crowd. Put these together with a lively strip of restaurants, guesthouses and beach bars, and you have a resort town that retains real character despite decades of development.</p>

        <h2>The Coral Reef</h2>
        <p>The Hikkaduwa Coral Sanctuary is the main attraction — a shallow reef system beginning just 50–100 metres from the beach. At its best between December and April (calm seas, good visibility), you can snorkel directly from the beach and encounter reef fish, sea turtles, and intact coral formations.</p>
        <p>Glass-bottom boats operate from the beach, offering tours for around LKR 1,500–2,000 per person — useful if you don't want to snorkel. Snorkel gear can be rented cheaply from beach stalls. Dive shops offer PADI courses and fun dives for more experienced underwater exploration.</p>
        <p>The reef has suffered bleaching events over the decades, and some areas are more degraded than others. The best snorkelling is at the <strong>northern end of the reef</strong>, around Thiranagama. Turtles are a reliable sighting — green sea turtles frequent the area year-round.</p>

        <h2>Surfing at Hikkaduwa</h2>
        <p>Hikkaduwa has several surf breaks catering to different levels:</p>
        <ul>
          <li><strong>Main Break (in front of the reef)</strong> — a reef break producing hollow waves, suitable for experienced surfers, best December–April</li>
          <li><strong>Narigama Beach</strong> — gentler beach break, better for intermediate surfers</li>
          <li><strong>Wewala</strong> — long, peeling right-hander, popular when the swell is right</li>
        </ul>
        <p>Surf schools operate on the beach — lessons typically cost around LKR 3,000–4,000 for a 2-hour session. Board rental is widely available.</p>

        <h2>Where to Stay in Hikkaduwa</h2>
        <p>Hikkaduwa has accommodation across all price points, concentrated along the 4km beach strip from Hikkaduwa town down to Narigama.</p>
        <ul>
          <li><strong>Budget</strong>: Simple guesthouses along the main road run from LKR 3,000–6,000/night. The Narigama end has the most backpacker-friendly options.</li>
          <li><strong>Mid-range</strong>: Several comfortable beach hotels at LKR 8,000–15,000/night with air conditioning, direct beach access, and in-house restaurants.</li>
          <li><strong>Upscale</strong>: The Hikka Tranz by Cinnamon and similar branded properties offer resort facilities around LKR 20,000–35,000/night.</li>
        </ul>

        <h2>Where to Eat</h2>
        <p>The main beach strip is lined with restaurants serving everything from fresh seafood BBQ to pizza and pasta (the Italian expat food scene is strong here). Standout options:</p>
        <ul>
          <li><strong>Rotty Point</strong> — legendary for cheap, excellent roti wraps and kottu roti; very popular with locals</li>
          <li><strong>Moon Beam Restaurant</strong> — longstanding favourite, good seafood curries and rice</li>
          <li><strong>Vibration Restaurant</strong> — reliable wood-fired pizza and pasta</li>
          <li>Fresh seafood BBQ from any of the beach-facing restaurants — order by weight, grilled with garlic butter</li>
        </ul>

        <h2>Beyond the Beach</h2>
        <p>Hikkaduwa has a few attractions beyond the water:</p>
        <ul>
          <li><strong>Gangarama Maha Vihara Temple</strong> — a distinctive temple with a reclining Buddha visible from the road, free to visit</li>
          <li><strong>Hikkaduwa Lake</strong> — 2 kilometres inland, mangrove-fringed lagoon good for kayaking and birdwatching; peaceful contrast to the beach</li>
          <li><strong>Day trip to Galle</strong> — just 20 minutes south by train, Galle Fort makes an excellent half-day trip</li>
          <li><strong>Tsunami Museum</strong> — a small, moving memorial to the 2004 Indian Ocean tsunami that devastated this coastline</li>
        </ul>

        <h2>Getting to Hikkaduwa</h2>
        <p>Hikkaduwa is exceptionally well connected:</p>
        <ul>
          <li><strong>By train</strong>: The coastal railway from Colombo Fort to Galle stops at Hikkaduwa. Journey time approximately 2.5 hours. This is the most scenic and pleasant way to arrive.</li>
          <li><strong>By bus</strong>: Regular express buses from Colombo (Pettah bus stand) — about 2–2.5 hours, very cheap.</li>
          <li><strong>By car/tuk-tuk</strong>: The Southern Expressway runs from Colombo to near Hikkaduwa in under 2 hours. Hire a car from Colombo or take the expressway and exit at Dodanduwa.</li>
        </ul>

        <h2>Best Time to Visit</h2>
        <p>December to April is the prime season — clear skies, calm seas, good reef visibility, consistent surf. May to November brings the southwest monsoon, with rough seas making swimming and snorkelling inadvisable. Some guesthouses and restaurants close or run reduced hours. That said, prices drop dramatically in the off-season and the rain is not constant — many people visit year-round.</p>

        <p>Hikkaduwa rewards those who arrive with modest expectations and simple pleasures: a morning snorkel on the reef, an afternoon surf or beach read, fresh grilled fish for dinner, and the easy rhythm of a beach town that has been doing this for 50 years. It is not the most pristine or least-discovered beach in Sri Lanka, but it has genuine character that purpose-built resorts never quite manage.</p>`
  },
  {
    slug: 'kalpitiya-kitesurfing',
    title: "Kalpitiya Kitesurfing: Sri Lanka's Kite Capital",
    description: "Your complete guide to kitesurfing in Kalpitiya, Sri Lanka — the best season, schools, flat water lagoons, wind conditions, and how to get there from Colombo.",
    heroImage: 'kalpitiya.jpg',
    heroAlt: 'Kalpitiya kitesurfing lagoon Sri Lanka',
    date: 'February 2026',
    readTime: 7,
    category: 'Adventure',
    content: `        <p>Kalpitiya has quietly become one of Asia's premier kitesurfing destinations over the past decade. A long, narrow peninsula on Sri Lanka's northwest coast, it is blessed with two distinct trade wind seasons that deliver reliable, consistent wind across a protected lagoon system — almost ideal conditions for both learning and advanced kitesurfing.</p>

        <p>The location adds to the appeal. Kalpitiya sits between the open Indian Ocean and the vast Puttalam Lagoon, one of Sri Lanka's largest lagoon systems. This creates a flat water environment on the lagoon side and ocean waves on the other — something for every level of rider. Add a dolphin population in the waters offshore and you have a destination that delivers well beyond kitesurfing.</p>

        <h2>Wind Seasons</h2>
        <p>Kalpitiya benefits from two wind seasons:</p>
        <ul>
          <li><strong>Northeast season (November to March)</strong> — generally the better season, with consistent winds from the northeast at 15–25 knots. The lagoon is flat and manageable. This is peak kite season.</li>
          <li><strong>Southwest season (May to October)</strong> — stronger and gustier winds as the southwest monsoon pushes through, averaging 20–30 knots. More challenging conditions, better suited to experienced riders.</li>
        </ul>
        <p>April and October are transition months with variable conditions. The wind blows most reliably in the <strong>afternoon</strong>, typically picking up from noon and peaking at 2–4pm.</p>

        <h2>The Lagoon: Ideal Learning Conditions</h2>
        <p>The Puttalam Lagoon is what makes Kalpitiya special for beginners and intermediates. The water is flat, warm and shallow — knee to waist depth for several hundred metres in many spots — making crashes non-threatening and self-rescue easy. There are no boats, no hazards, and the lagoon stretches wide enough that you won't find yourself downwind of shore quickly.</p>
        <p>For advanced riders, the ocean side of the peninsula offers wave riding when the conditions are right, and the strong southwest season produces excellent freestyle conditions in the lagoon itself.</p>

        <h2>Kite Schools in Kalpitiya</h2>
        <p>Several established kite schools operate from the peninsula, clustered near the Dutch Bay area and around Kappalady Lagoon. Most offer:</p>
        <ul>
          <li>IKO-certified instruction (International Kiteboarding Organisation)</li>
          <li>Complete beginner courses (typically 9–12 hours over 3–4 days)</li>
          <li>Equipment rental for certified riders</li>
          <li>Board rentals (twin-tip and surfboards)</li>
          <li>Accommodation on-site or at affiliated guesthouses</li>
        </ul>
        <p>Expect to pay approximately USD 50–70 per hour for instruction, or USD 400–550 for a full beginner course including equipment. Equipment rental for certified riders runs around USD 50–70/day.</p>

        <h2>Where to Stay</h2>
        <p>Accommodation in Kalpitiya is primarily eco-lodge and guesthouse style — there are no large resort hotels. Most kite schools have associated accommodation ranging from basic beach huts to comfortable bungalows. The atmosphere is relaxed and communal — shared meals, sundowner drinks on the beach, and an easy camaraderie among the kiting crowd.</p>
        <p>Expect to pay LKR 5,000–15,000 per night for a comfortable room. Some packages bundle accommodation with kite lessons at a discount.</p>

        <h2>Dolphin Watching</h2>
        <p>The waters around Kalpitiya host year-round populations of spinner dolphins, along with occasional sightings of bottlenose dolphins, sperm whales and even blue whales during the northeast season. Local operators run early-morning dolphin watching boats from the peninsula — pod sizes in Kalpitiya are extraordinary, sometimes numbering in the hundreds. Combined with the kitesurfing, it makes Kalpitiya a genuinely rewarding destination even for non-kiters in your travel group.</p>

        <h2>Getting to Kalpitiya</h2>
        <p>Kalpitiya is approximately 165 kilometres north of Colombo, taking 3.5–4 hours by car along the coastal road. There is no direct train service. Options:</p>
        <ul>
          <li><strong>Private car/hire</strong> — most comfortable; arrange through your guesthouse or a Colombo-based driver</li>
          <li><strong>Bus</strong> — from Colombo's Bastian Mawatha bus terminal to Puttalam (2.5 hours), then connecting bus or tuk-tuk to Kalpitiya (45 minutes)</li>
        </ul>
        <p>Most kite schools can arrange airport or Colombo pick-up as part of a package — worth factoring in if arriving directly from the airport.</p>

        <h2>Beyond Kitesurfing</h2>
        <ul>
          <li><strong>Wilpattu National Park</strong> — Sri Lanka's largest national park is just 90 minutes east of Kalpitiya, making an excellent day trip safari combination</li>
          <li><strong>Mannar Island</strong> — 2 hours north, the causeway bridge and baobab trees make a fascinating half-day excursion</li>
          <li><strong>Snorkelling and diving</strong> — the Bar Reef Marine Sanctuary offshore from Kalpitiya is one of Sri Lanka's most diverse coral reef systems</li>
        </ul>

        <p>Kalpitiya is one of those places that feels genuinely undiscovered despite its growing reputation. The infrastructure is still developing, the crowds are manageable, and the combination of wind, flat water, and wildlife makes it one of the most compelling adventure destinations in South Asia.</p>`
  },
  {
    slug: 'pigeon-island-snorkelling',
    title: "Pigeon Island: Sri Lanka's Best Snorkelling Destination",
    description: "A complete guide to Pigeon Island National Park near Trincomalee — coral reefs, blacktip reef sharks, getting there, entry fees, and the best time to visit.",
    heroImage: 'pigeon-island.jpg',
    heroAlt: 'Pigeon Island coral reef snorkelling Sri Lanka',
    date: 'February 2026',
    readTime: 7,
    category: 'Nature',
    content: `        <p>Pigeon Island is the jewel of Sri Lanka's east coast — a small island national park just 1 kilometre off the beach at Nilaveli, near Trincomalee. Its coral reef is the best accessible reef in Sri Lanka for snorkelling, with stunning hard coral formations, abundant reef fish, and a resident population of <strong>blacktip reef sharks</strong> that make every entry into the water an extraordinary experience.</p>

        <p>The island itself is tiny — barely 5 hectares — and access is tightly controlled as a national park, which has helped preserve the reef in far better condition than many other Sri Lankan sites. The combination of easy access (a short boat ride), protected status, and genuinely impressive underwater scenery makes Pigeon Island one of the country's unmissable natural experiences.</p>

        <h2>The Snorkelling</h2>
        <p>The reef wraps around the entire island, with the best snorkelling on the western and southern sides. Conditions:</p>
        <ul>
          <li><strong>Coral coverage</strong>: Hard coral formations including table corals, brain corals and staghorn coral. Coverage is significantly better than the west coast reefs.</li>
          <li><strong>Fish life</strong>: Reef fish are abundant — parrotfish, triggerfish, wrasse, surgeonfish, moorish idols, and schools of fusiliers.</li>
          <li><strong>Blacktip reef sharks</strong>: The main event. A resident population of blacktip reef sharks patrols the reef — typically 1–1.5 metres long, completely harmless to snorkellers, and extraordinary to observe up close. Sightings are near-certain on a good day.</li>
          <li><strong>Sea turtles</strong>: Green and hawksbill turtles are frequently encountered.</li>
          <li><strong>Visibility</strong>: Typically 10–20 metres in good conditions.</li>
        </ul>
        <p>The water is shallow enough to snorkel (1–5 metres on most of the reef platform) and warm year-round at 27–30°C. No wetsuit required.</p>

        <h2>Diving at Pigeon Island</h2>
        <p>While snorkelling covers most of the reef, diving reveals the deeper sections — including drop-offs and caves on the island's south side. Several dive operators in Nilaveli and Uppuveli offer fun dives and PADI courses that include Pigeon Island. Divers have better access to the shark aggregations and can explore the reef at depth. Dive trips typically cost USD 35–60 per dive including equipment.</p>

        <h2>Getting to Pigeon Island</h2>
        <p>Boats depart from <strong>Nilaveli Beach</strong> (approximately 16 kilometres north of Trincomalee). The boat crossing takes about 10 minutes. Boats are operated by licensed operators from the beach — expect to pay around LKR 1,500–2,000 per person return for the boat transfer.</p>
        <p>The national park entry fee (payable at the jetty on the island) is <strong>USD 15 per person</strong> for foreign visitors. Sri Lankan nationals pay significantly less. Snorkel gear can be rented from operators at the beach if you haven't brought your own — quality varies, so bringing your own mask and snorkel is recommended.</p>

        <h2>Best Time to Visit</h2>
        <p>The east coast of Sri Lanka has the opposite weather pattern to the west coast. The <strong>best season is from May to September</strong>, when the northeast monsoon has cleared and the sea is calm. August is considered peak month — clear skies, excellent visibility, calm conditions.</p>
        <p>Avoid November through March when the northeast monsoon brings rough seas and poor visibility — boat crossings may be cancelled, and conditions make snorkelling uncomfortable even when possible.</p>
        <p>April and October are shoulder months — conditions can be acceptable but variable.</p>

        <h2>What to Bring</h2>
        <ul>
          <li>Your own mask and snorkel (highly recommended — rental quality is inconsistent)</li>
          <li>Reef-safe sunscreen (regular sunscreen is banned in the national park)</li>
          <li>Rash guard or thin wetsuit top — protection from sun exposure while snorkelling</li>
          <li>USD 15 in cash for the entry fee (exact change helpful)</li>
          <li>Waterproof bag for your phone/camera</li>
          <li>Underwater camera or GoPro — the wildlife is exceptional for photographs</li>
          <li>Water and snacks — there are no facilities on the island</li>
        </ul>

        <h2>Getting to Trincomalee/Nilaveli</h2>
        <p>Trincomalee is on Sri Lanka's northeast coast, around 260 kilometres from Colombo. Getting there:</p>
        <ul>
          <li><strong>By train</strong>: Colombo to Trincomalee via Gal Oya — about 8–9 hours. The train runs a few times daily; book in advance on the Sri Lanka Railways website.</li>
          <li><strong>By bus</strong>: Express buses from Colombo run to Trincomalee in 5–6 hours.</li>
          <li><strong>By car</strong>: Hire a car from Colombo — around 5 hours via the A6/A9 highway.</li>
        </ul>
        <p>From Trincomalee town, take a tuk-tuk or taxi to Nilaveli Beach (about 20 minutes, LKR 600–800). Most guesthouses in Nilaveli and Uppuveli can arrange boat transfers to Pigeon Island.</p>

        <h2>Practical Notes</h2>
        <ul>
          <li>The national park has a daily visitor limit — arrive early (8am boat) to avoid disappointment, especially in peak season</li>
          <li>Do not touch or stand on coral — national park rules and basic reef etiquette</li>
          <li>Do not feed the fish or attempt to touch the sharks — observe from a respectful distance</li>
          <li>The island has no shade — apply and reapply reef-safe sunscreen generously</li>
          <li>Combine with a visit to nearby Fort Frederick and Trincomalee town for a full day out</li>
        </ul>

        <p>Pigeon Island delivers on its reputation. The blacktip sharks patrolling the reef edge, the turtle encounters, and the sheer abundance and colour of the reef fish make it a snorkelling experience that rivals sites across Southeast Asia and the Maldives — at a fraction of the cost and with far fewer crowds.</p>`
  },
  {
    slug: 'colombo-city-guide',
    title: "Colombo City Guide: What to See, Do and Eat in Sri Lanka's Capital",
    description: "A complete guide to Colombo — the best neighbourhoods, sights, restaurants, markets and nightlife in Sri Lanka's vibrant commercial capital.",
    heroImage: 'colombo.jpg',
    heroAlt: 'Colombo city skyline Sri Lanka',
    date: 'March 2026',
    readTime: 9,
    category: 'Cities',
    content: `        <p>Colombo is not a city that announces itself quietly. Sri Lanka's commercial capital of 2.3 million people is chaotic, loud, fragrant, and fascinating — a place where colonial Dutch and British architecture sits next to gleaming glass towers, where street food stalls operate in the shadow of five-star hotel lobbies, and where Buddhist temples, Hindu kovils, colonial mosques, and Catholic churches stand within blocks of each other.</p>

        <p>Most travellers arrive in Colombo and immediately plan to leave, rushing towards the beaches and hill country. This is a mistake. Colombo rewards those who stay — at least a day or two — with excellent food, compelling history, and a street life that reveals more about modern Sri Lanka than any beach ever will.</p>

        <h2>Neighbourhoods to Know</h2>

        <h3>Fort and Pettah</h3>
        <p>Colombo Fort is the historic commercial core, centred around the Old Parliament building, the Grand Oriental Hotel, and the harbour. The Dutch-era fort walls are long gone, but several colonial buildings survive. Immediately east is Pettah — Colombo's most intense bazaar district, a warren of streets specialising in everything from electronics to fabrics to spices. The experience is overwhelming in the best way.</p>

        <h3>Galle Face Green</h3>
        <p>The long oceanfront promenade south of Fort is Colombo's social heart. In the late afternoons and evenings, thousands of people walk, cycle, and gather here — families, couples, kite-flyers, street food vendors. The Galle Face Hotel, a Victorian-era grand dame at the northern end, offers excellent colonial-era sundowners overlooking the Indian Ocean.</p>

        <h3>Colombo 7 (Cinnamon Gardens)</h3>
        <p>The leafy, affluent residential district inland from Galle Face is home to the city's best addresses. Tree-lined streets of colonial villas, embassies, the National Museum, Viharamahadevi Park (the city's largest), and several of Colombo's top restaurants. A pleasant contrast to the chaos of Fort and Pettah.</p>

        <h3>Colombo 3 / Kollupitiya</h3>
        <p>The main commercial strip along Galle Road through Colombo 3 is where you'll find the city's most accessible concentration of cafes, restaurants, bars and boutiques. Liberty Plaza and the surrounding streets are particularly active.</p>

        <h3>Pettah and Slave Island (Colombo 2)</h3>
        <p>Slave Island, despite its grim name (a legacy of Dutch colonial slavery), is a fascinating neighbourhood — predominantly Muslim and Tamil, with kovils and mosques side by side, excellent curry houses, and the Jami Ul-Alfar Mosque, one of Colombo's most photographed buildings with its striking red-and-white striped exterior.</p>

        <h2>What to See</h2>
        <ul>
          <li><strong>National Museum of Colombo</strong> — the country's foremost museum; essential for understanding Sri Lanka's 2,500-year history, art and culture (Colombo 7, LKR 500 entry)</li>
          <li><strong>Gangaramaya Temple</strong> — the most eclectic temple in Sri Lanka; a bizarre and wonderful collection of Buddha statues, religious art and curios from around the world, beside the Beira Lake (Colombo 2, donations)</li>
          <li><strong>Jami Ul-Alfar Mosque</strong> — the striking 1909 red-and-white mosque in Pettah (respectful dress required)</li>
          <li><strong>Colombo Old Town / Fort</strong> — Dutch and British colonial architecture around the old harbour area</li>
          <li><strong>Viharamahadevi Park</strong> — Colombo's green lung; a relaxed spot to observe local life, with a large seated Buddha statue as centrepiece (free entry)</li>
          <li><strong>Dutch Hospital Shopping Precinct</strong> — a 17th-century hospital converted into a cluster of upscale restaurants and boutiques (Fort area)</li>
        </ul>

        <h2>Where to Eat</h2>
        <p>Colombo has the best restaurant scene in Sri Lanka by a significant margin:</p>
        <ul>
          <li><strong>Ministry of Crab</strong> — the city's most celebrated restaurant, showcasing Sri Lankan crab in inventive preparations; book weeks ahead (Dutch Hospital precinct)</li>
          <li><strong>Noodles</strong> — exceptional pan-Asian noodle dishes in a lively space (Colombo 3)</li>
          <li><strong>Lucky Fort Restaurant</strong> — classic Chinese-Sri Lankan fusion that locals love; inexpensive and excellent</li>
          <li><strong>Colombo Market Food Stalls</strong> — for authentic Sri Lankan street food: kottu roti, hoppers, string hoppers, roti wraps</li>
          <li><strong>Gallery Café</strong> — beautifully designed cafe in a converted Geoffrey Bawa house; excellent for lunch (Colombo 7)</li>
          <li><strong>The Galle Face Hotel</strong> — for sundowners and the classic Colombo colonial experience; their Sunday buffet is legendary</li>
        </ul>

        <h2>Shopping</h2>
        <ul>
          <li><strong>Pettah Market</strong> — wholesale bazaar for everything; not tourist-focused but atmospheric</li>
          <li><strong>Barefoot Gallery</strong> — iconic Colombo institution; handwoven textiles, books, gifts and a lovely courtyard cafe (Colombo 3)</li>
          <li><strong>Paradise Road</strong> — upscale Sri Lankan homeware, art and gifts (Colombo 3/7)</li>
          <li><strong>Odel / One Galle Face Mall</strong> — modern malls for branded goods and Sri Lankan fashion labels</li>
        </ul>

        <h2>Getting Around Colombo</h2>
        <p>Traffic in Colombo is notoriously heavy during peak hours. Options:</p>
        <ul>
          <li><strong>Tuk-tuk</strong> — ubiquitous and useful for short hops; use the meter or agree a price before getting in</li>
          <li><strong>PickMe / Uber</strong> — ride-hailing apps work well in Colombo and are often cheaper than negotiated tuk-tuk fares</li>
          <li><strong>Commuter railway</strong> — useful for reaching the Fort area from the southern suburbs</li>
          <li><strong>Walking</strong> — practical within neighbourhoods (Galle Face to Fort is a pleasant 20-minute walk along the coast); less practical for crossing the city</li>
        </ul>

        <h2>Where to Stay</h2>
        <ul>
          <li><strong>Budget</strong>: Hostels and guesthouses in Colombo 3/6 from LKR 3,000–6,000/night</li>
          <li><strong>Mid-range</strong>: Comfortable boutique hotels in Colombo 3/7 from LKR 10,000–20,000/night</li>
          <li><strong>Luxury</strong>: Shangri-La, Cinnamon Grand, Galle Face Hotel — from USD 150–300/night</li>
        </ul>

        <p>Colombo is a city in rapid transition — new restaurants, bars, and boutiques open monthly, the skyline changes year on year, and an increasingly confident local creative scene makes it an exciting place to spend time. Give it at least a full day, and it will likely earn another.</p>`
  },
  {
    slug: 'sri-lanka-waterfalls',
    title: "Sri Lanka's Most Spectacular Waterfalls: A Complete Guide",
    description: "Discover Sri Lanka's best waterfalls — from Diyaluma and Ravana Falls to Baker's Falls in Horton Plains. Locations, accessibility, swimming, and how to get there.",
    heroImage: 'ella.jpg',
    heroAlt: 'Waterfall Sri Lanka hill country',
    date: 'March 2026',
    readTime: 8,
    category: 'Nature',
    content: `        <p>Sri Lanka's hill country is laced with waterfalls. The central highlands receive enormous rainfall, and as rivers plunge from the plateau edges down to the lowland plains, they create some of the most dramatic waterfall scenery in Asia. Several Sri Lankan waterfalls rank among the tallest in the world — Diyaluma, at 220 metres, is the island's highest and rivals anything in Southeast Asia.</p>

        <p>The best waterfall experiences combine spectacular scenery with accessibility for swimming, hiking, and photography. This guide covers the essential falls across the hill country, with practical information on getting there and what to expect.</p>

        <h2>Diyaluma Falls — 220 Metres, Badulla District</h2>
        <p>Sri Lanka's highest waterfall plunges in a single dramatic drop of 220 metres into a deep pool at its base. Located near Koslanda on the road between Ella and Wellawaya, Diyaluma is most dramatically experienced from the base pool, where you can swim in the mist of the falls. The walk to the base is easy (20 minutes from the road).</p>
        <p>More adventurous visitors hike to the <strong>top of the falls</strong> for a series of natural rock pools and jacuzzis carved by the river above the drop — one of Sri Lanka's most extraordinary natural swimming experiences. The hike to the top takes about 1.5 hours and involves scrambling through undergrowth; a local guide from the base (ask at roadside stalls) makes it easier and safer.</p>
        <p><strong>Getting there</strong>: On the A23 road between Ella and Wellawaya, approximately 20km from Ella. Accessible by bus or tuk-tuk from Ella (around 45 minutes, LKR 1,500–2,000 return by tuk-tuk).</p>

        <h2>Ravana Falls — Ella</h2>
        <p>One of Sri Lanka's most visited waterfalls, Ravana Falls cascades 25 metres directly beside the Ella–Wellawaya road, making it the most accessible waterfall in the hill country — visible from the road and reachable in seconds. In the wet season (May–October), it becomes a broad, powerful curtain of water; in the dry season, it is more graceful but less imposing.</p>
        <p>The pool at the base is swimmable and popular with locals. Named after the demon king Ravana of the Ramayana — legend holds this is where he hid Sita during her abduction. The mythological connection makes it a pilgrimage point for Hindu visitors from India.</p>
        <p><strong>Getting there</strong>: 6km from Ella town on the A23. Walk (1.5 hours) or tuk-tuk from Ella (LKR 400–600 one way).</p>

        <h2>Baker's Falls — Horton Plains</h2>
        <p>Baker's Falls is within Horton Plains National Park, accessed via the famous World's End circuit walk. The 20-metre waterfall drops through a dense rainforest gorge — a cool, misty experience quite unlike the open hillside falls elsewhere. The walk to Baker's Falls (via World's End) is around 9km and takes 3–4 hours.</p>
        <p>The setting — enclosed in ancient cloud forest with endemic birds calling overhead — makes Baker's Falls the most atmospheric of Sri Lanka's major waterfalls even if not the most dramatic in scale.</p>
        <p><strong>Getting there</strong>: Horton Plains requires a vehicle from Nuwara Eliya (45 minutes to the park entrance). Entry fee USD 25 per person (includes park access). Leave early — the plains cloud over by mid-morning.</p>

        <h2>Devon and St Clair's Falls — Near Talawakele</h2>
        <p>Often called "Sri Lanka's widest waterfalls", the twin falls near Talawakele on the Nuwara Eliya–Hatton road are set within a working tea estate — the tea bushes framing the falls create the quintessential hill country photograph. Devon (97m) is slightly higher than St Clair's (80m), and both fall in multiple stages through the estate.</p>
        <p>A viewpoint is accessible from the roadside — both falls are visible from the A7 road. For closer access and to walk between them, arrange permission at the Nuwara Eliya or Hatton tea estate offices.</p>
        <p><strong>Getting there</strong>: On the A7 road between Hatton and Nuwara Eliya; Talawakele is 20km from Hatton. Visible from the road.</p>

        <h2>Bambarakanda Falls — 241 Metres, Badulla District</h2>
        <p>Technically Sri Lanka's highest waterfall at 241 metres (though the claim is contested with Diyaluma), Bambarakanda is a slender ribbon of water plunging down a cliff face near Haputale. Its elevation makes it especially dramatic in the wet season. The location is more remote than Diyaluma — accessible via a rough road from Koslanda — and sees fewer visitors.</p>
        <p><strong>Getting there</strong>: Near Kalupahana, off the A4 between Colombo and Badulla. Best reached by hired vehicle or tuk-tuk from Haputale or Ella.</p>

        <h2>Aberdeen Falls — Near Nuwara Eliya</h2>
        <p>A beautiful 98-metre waterfall in a lush valley near Ginigathena, Aberdeen Falls sits within a tea estate and requires a 30-minute walk through the estate to reach. The approach through manicured tea bushes is itself rewarding. Swimming at the base is possible.</p>
        <p><strong>Getting there</strong>: Near Ginigathena on the A7, between Kandy and Nuwara Eliya. Ask locally for the estate access road.</p>

        <h2>Best Time to Visit</h2>
        <p>Sri Lanka's waterfall season peaks during and just after the monsoons:</p>
        <ul>
          <li><strong>May–September</strong>: Southwest monsoon — waterfalls in the hill country are at their most powerful and dramatic</li>
          <li><strong>October–November</strong>: Inter-monsoon — good water levels, some rain</li>
          <li><strong>December–April</strong>: Drier but not dry — most falls remain impressive; swimming is easiest in calmer flow</li>
        </ul>
        <p>Flash floods are a genuine risk near waterfalls during heavy rain — check weather forecasts and do not enter pools if the river upstream is running fast and muddy.</p>

        <h2>Practical Tips</h2>
        <ul>
          <li>Wear shoes with grip — waterfall paths are almost always slippery</li>
          <li>The hike to the top of Diyaluma is worth every step — go early (before 9am) to beat the heat</li>
          <li>A waterproof bag for your phone and camera is essential near any waterfall</li>
          <li>Local guides at popular falls (offered informally at the roadside) can unlock additional access and knowledge for a small fee (LKR 500–1,500)</li>
          <li>Combine Diyaluma and Ravana Falls in a single day trip from Ella — they are on the same road</li>
        </ul>

        <p>Sri Lanka's waterfalls are among its most spectacular natural attractions and consistently surprise visitors who arrive expecting beaches. The hill country waterfall circuit — Diyaluma, Ravana, Baker's, and a tea estate walk near Talawakele — makes for one of the most memorable days the island offers.</p>`
  },
  {
    slug: 'turtle-watching-sri-lanka',
    title: "Sea Turtle Watching in Sri Lanka: Where, When and How",
    description: "A guide to watching and supporting sea turtles in Sri Lanka — the best beaches for nesting, hatcheries to visit, ethical operators, and the best time of year.",
    heroImage: 'mirissa-beach.jpg',
    heroAlt: 'Sea turtle Sri Lanka beach',
    date: 'March 2026',
    readTime: 7,
    category: 'Wildlife',
    content: `        <p>Sri Lanka is one of the world's important sea turtle destinations. Five of the world's seven sea turtle species nest on Sri Lankan beaches — the green turtle, hawksbill, leatherback, loggerhead, and olive ridley — making the island's coastline globally significant for turtle conservation.</p>

        <p>The south and west coasts of Sri Lanka have the highest density of nesting activity, and several dedicated turtle hatcheries and conservation projects have operated for decades. The challenge for travellers is distinguishing genuinely conservation-focused operations from the exploitative ones — this guide addresses both the best places to visit and the ethical considerations.</p>

        <h2>When Do Turtles Nest?</h2>
        <p>Sea turtles nest year-round on Sri Lankan beaches, but the peak season for nesting activity on the south and west coasts is between <strong>November and April</strong>, coinciding with the calm, dry season when the beaches are accessible and the sea is gentle. This is when you are most likely to witness nesting activity and hatchlings emerging.</p>
        <p>On the east coast (Nilaveli, Uppuveli, Rekawa) the pattern is similar — peak nesting between November and April, with good activity often extending through June on the east coast's different weather cycle.</p>

        <h2>Best Places to Watch Turtles</h2>

        <h3>Rekawa Beach — The Best Wild Nesting Site</h3>
        <p>Rekawa Beach, east of Tangalle on the south coast, is Sri Lanka's most important sea turtle nesting beach and offers the best opportunity to witness nesting in a genuinely wild, unmanipulated setting. The <strong>Turtle Conservation Project (TCP)</strong> has operated at Rekawa since 1995, running guided night tours (typically 9pm–midnight) to observe nesting females and, during hatching season, hatchlings making their way to the sea.</p>
        <p>Turtle sightings on these guided visits are not guaranteed — wild turtles operate on their own schedule — but success rates during peak season are high. The fee (around LKR 1,500–2,000 per person) goes directly to the conservation project and community patrol guards who protect the nests from poaching. This is widely considered the most ethical turtle watching experience in Sri Lanka.</p>

        <h3>Kosgoda Turtle Hatchery</h3>
        <p>On the west coast between Colombo and Hikkaduwa, Kosgoda has the highest concentration of turtle hatcheries in Sri Lanka. The better operators (there are many, of variable quality) collect eggs from vulnerable nests, incubate them in protected conditions, and release hatchlings. Most charge a small entrance fee and allow visitors to watch hatchling releases.</p>
        <p><strong>Important</strong>: Choose carefully. The best hatcheries release hatchlings at night in dark conditions (as nature intends) and do not keep adult turtles in tanks for display. Avoid any operation that lets tourists handle hatchlings excessively, uses flash photography, or releases hatchlings in daylight — all of which harm the turtles. Ask about their practices before visiting.</p>

        <h3>Mirissa Beach</h3>
        <p>Green sea turtles feed in the waters around Mirissa and are frequently encountered by snorkellers on the reef. Sightings are reliable but unscheduled — simply enter the water and keep your eyes open. This is the purest form of turtle encounter: wild, free animals going about their lives. Some operators also offer early morning turtle tours targeting feeding turtles before the beach crowds arrive.</p>

        <h3>Tangalle</h3>
        <p>The wild, quieter beaches around Tangalle see significant nesting activity. Less organised than Rekawa but the reduced tourist presence means encounters can feel more genuine. Local guesthouses often know which beaches have recent nesting activity.</p>

        <h3>Nilaveli and Pigeon Island</h3>
        <p>On the east coast, snorkellers at Pigeon Island regularly encounter hawksbill turtles feeding on the reef. The beaches north of Trincomalee also see nesting activity during the northeast season (October–April).</p>

        <h2>Ethical Considerations</h2>
        <p>Sri Lanka's turtle tourism has a mixed reputation — the genuine conservation projects do excellent work, but commercial hatcheries with questionable practices have proliferated. Guidelines for responsible turtle watching:</p>
        <ul>
          <li>Do not use flash photography near turtles — artificial light disorients nesting females and hatchlings</li>
          <li>Do not touch nesting females or hatchlings unless instructed by a trained guide</li>
          <li>Keep noise low near nesting beaches at night</li>
          <li>Ask hatcheries whether they release in daylight (bad) or after dark (good)</li>
          <li>Choose operators who keep adult turtles in natural, large holding pools rather than small concrete tanks for display purposes</li>
          <li>Rekawa TCP and similar NGO-backed projects are the gold standard — your fees fund real conservation</li>
        </ul>

        <h2>Getting to Rekawa</h2>
        <p>Rekawa is approximately 10km east of Tangalle, along a minor coastal road. From Tangalle town, hire a tuk-tuk (LKR 800–1,200 return, driver will wait). The TCP office at Rekawa can be contacted in advance to confirm tour schedules — trips depend on nesting activity and weather.</p>

        <p>Sea turtle encounters — whether watching a 150kg leatherback hauling herself above the tide line, or seeing a hundred hatchlings scrambling towards moonlit surf — are among the most moving wildlife experiences that Sri Lanka offers. Done responsibly, turtle watching is a profoundly worthwhile activity and a direct contribution to the conservation of species that have swum these seas for 100 million years.</p>`
  },
  {
    slug: 'sri-lanka-honeymoon-guide',
    title: "Sri Lanka Honeymoon Guide: Romantic Escapes & Luxury Stays",
    description: "Plan the perfect Sri Lanka honeymoon — from private beach villas and hill country retreats to whale watching and sunset dinners. Itinerary ideas and the best romantic hotels.",
    heroImage: 'mirissa-beach.jpg',
    heroAlt: 'Romantic beach sunset Sri Lanka honeymoon',
    date: 'April 2026',
    readTime: 8,
    category: 'Travel Planning',
    content: `        <p>Sri Lanka is one of the world's great honeymoon destinations — and has been for decades. The island delivers the full romantic spectrum: private beachfront villas on golden coastlines, misty hill country retreats with fireplace evenings, candlelit dinners over the Indian Ocean, and enough wildlife, culture, and adventure to make the romance feel earned rather than manufactured.</p>

        <p>Unlike the Maldives — the other Indian Ocean honeymooner favourite — Sri Lanka offers genuine variety. You can spend three days on a private beach in the south, three days in a colonial-era tea estate bungalow in the hills, and an evening watching blue whales from a boat in Mirissa, all within a two-week honeymoon. This guide covers the experiences, the hotels, and the itineraries that make Sri Lanka a remarkable choice.</p>

        <h2>When to Honeymoon in Sri Lanka</h2>
        <p><strong>December to March</strong> is the classic choice — the south and west coasts are at their best, the hill country is dry and clear, and whale watching season peaks in January and February. This is also peak tourist season, so book accommodation 3–6 months ahead for the best properties.</p>
        <p><strong>May to August</strong> is the alternative for those with flexibility — the east coast (Nilaveli, Uppuveli, Arugam Bay) is in its best season while the south coast is affected by the southwest monsoon. This allows a different itinerary that combines the best of the east with the hill country, which is beautiful year-round.</p>

        <h2>The Classic Honeymoon Route</h2>

        <h3>Days 1–2: Colombo</h3>
        <p>Arrive and base at the Galle Face Hotel or Shangri-La — both offer exceptional harbour views and romantic atmosphere. Colombo evenings are genuinely elegant: cocktails at the Galle Face promenade, dinner at Ministry of Crab or Gallery Café, an evening stroll through the colonial Fort district.</p>

        <h3>Days 3–5: Galle & South Coast</h3>
        <p>Drive down the Southern Expressway to Galle Fort — or take the scenic coastal train for the more romantic arrival. Base at a boutique hotel within the Fort walls (Amangalla, Fort Bazaar, or Sun House are exceptional choices). Explore the ramparts at sunset, dine at the candlelit restaurants within the Fort, take a day trip to Unawatuna Bay.</p>

        <h3>Days 6–8: Mirissa or Tangalle</h3>
        <p>Move east along the coast to Mirissa for whale watching (book the earliest morning boat for the best chances of blue whales), beachside sunsets and fresh seafood. Alternatively, continue to Tangalle — wilder beaches, fewer crowds, and some extraordinary villa options including private infinity pool properties. For true seclusion, look at the villa properties around Rekawa Lagoon.</p>

        <h3>Days 9–11: Hill Country — Ella and Nuwara Eliya</h3>
        <p>Take the world-famous scenic train from Ella to Nuwara Eliya — book the observation car or a first-class seat for the full experience. Base in Ella at 98 Acres Resort (tented villas overlooking a tea-covered hillside valley) or move to Nuwara Eliya and stay at the Grand Hotel or Heritance Tea Factory for the colonial-era romantic experience. Hike to Little Adam's Peak, walk through tea estates at dawn, have dinner by a fireplace.</p>

        <h3>Days 12–14: Sigiriya and Cultural Triangle</h3>
        <p>End with the ancient wonders — Sigiriya Rock Fortress and Dambulla Cave Temple. Base at one of the outstanding eco-luxury lodges in the area (Aliya Resort, Cinnamon Lodge Habarana, or the extraordinary Water Garden Sigiriya). Jeep safaris into Minneriya during elephant gathering season (August–October) if timing allows.</p>

        <h2>The Best Romantic Hotels</h2>

        <h3>South Coast</h3>
        <ul>
          <li><strong>Amangalla, Galle</strong> — the most prestigious address in Galle Fort; Dutch colonial splendour, 30 suites and rooms (from USD 600/night)</li>
          <li><strong>Fort Bazaar, Galle</strong> — boutique luxury within the Fort walls; rooftop dining with rampart views (from USD 250/night)</li>
          <li><strong>Tri Lanka, Koggala</strong> — extraordinary suspended tree-house villas above a lagoon; genuinely unique (from USD 400/night)</li>
          <li><strong>Amanwella, Tangalle</strong> — private plunge pool villas on a quiet beach; total seclusion (from USD 800/night)</li>
        </ul>

        <h3>Hill Country</h3>
        <ul>
          <li><strong>98 Acres Resort, Ella</strong> — tented villas with extraordinary valley views; romantic and intimate (from USD 180/night)</li>
          <li><strong>Heritance Tea Factory, Nuwara Eliya</strong> — a converted Victorian tea factory; fireplaces, antiques, mist and romance (from USD 200/night)</li>
          <li><strong>Ceylon Tea Trails, Norwood</strong> — four restored British-era tea estate bungalows available for exclusive hire; the ultimate hill country experience (from USD 600/night)</li>
        </ul>

        <h3>Cultural Triangle</h3>
        <ul>
          <li><strong>Water Garden Sigiriya</strong> — private pool villas set in rice paddy fields; serene and beautiful (from USD 300/night)</li>
          <li><strong>Cinnamon Lodge, Habarana</strong> — large resort with excellent gardens, pool and safari access (from USD 200/night)</li>
        </ul>

        <h2>Romantic Experiences</h2>
        <ul>
          <li><strong>Private whale watching boat</strong> — charter a private boat from Mirissa for exclusive blue whale encounters (can be arranged through high-end operators)</li>
          <li><strong>Sunset on Galle Fort Ramparts</strong> — free, accessible, genuinely magical</li>
          <li><strong>Scenic train first class</strong> — the Kandy to Ella train through the hill country is one of the world's great rail journeys</li>
          <li><strong>Private tea estate bungalow</strong> — Ceylon Tea Trails offers exclusive use of restored British bungalows — butler included</li>
          <li><strong>Sunrise at Sigiriya</strong> — climb the Rock Fortress before the crowds; the dawn views are extraordinary</li>
          <li><strong>Candlelit dinner on a private beach</strong> — many south coast hotels offer private beach dining arrangements on request</li>
        </ul>

        <h2>Budget Considerations</h2>
        <p>A Sri Lanka honeymoon can be done at almost any budget:</p>
        <ul>
          <li><strong>Luxury</strong>: USD 400–800/night accommodation, private drivers, premium experiences — budget USD 5,000–10,000+ for two weeks</li>
          <li><strong>Mid-range</strong>: USD 100–200/night accommodation, comfortable private transport — budget USD 2,500–4,000 for two weeks</li>
          <li><strong>Romantic on a budget</strong>: Boutique guesthouses with character, scenic train travel, select splurge experiences — Sri Lanka is affordable enough to deliver romance without luxury price tags</li>
        </ul>

        <p>Sri Lanka's combination of extraordinary scenery, warm hospitality, culinary adventure, and genuine wildlife experiences makes it a honeymoon destination that surpasses almost anywhere in the world for sheer variety and value. The island rewards honeymooners who want more than a beach — who want a journey as well as a destination.</p>`
  },
  {
    slug: 'sri-lanka-family-travel',
    title: "Sri Lanka with Kids: The Complete Family Travel Guide",
    description: "Planning a family trip to Sri Lanka? This guide covers the best destinations, activities and hotels for families with children, plus practical tips for travelling with kids.",
    heroImage: 'pinnawala.jpg',
    heroAlt: 'Elephants at Pinnawala Sri Lanka family travel',
    date: 'April 2026',
    readTime: 8,
    category: 'Travel Planning',
    content: `        <p>Sri Lanka is one of the world's great destinations for families with children. The island's combination of accessible wildlife, safe beaches, short distances, warm and welcoming locals, and a travel infrastructure that accommodates families at every budget level makes it a superb choice for a family holiday — particularly for families travelling from Europe or Australia who want something more immersive than a resort-only trip.</p>

        <p>Children are genuinely welcomed in Sri Lanka. The culture is naturally warm towards children — expect your kids to be fussed over, offered treats, and engaged with curiosity by locals across the island. This instinctive hospitality makes travel with young children in Sri Lanka significantly easier than many other destinations.</p>

        <h2>Family-Friendly Destinations</h2>

        <h3>Negombo — Easy Arrival Base</h3>
        <p>Just 7km from the international airport, Negombo is many families' first stop. The beach is calmer than the south coast, the fish market makes for an entertaining early morning visit, and the town has a strong network of family-friendly hotels. Good base for a couple of nights on arrival before heading south or up to the Cultural Triangle.</p>

        <h3>Pinnawala Elephant Orphanage</h3>
        <p>Children's undisputed highlight for many families. Orphaned and injured wild elephants are cared for at this facility near Kegalle, and twice daily the herd (80+ elephants) walks to the river for bathing — one of the most extraordinary wildlife spectacles in Asia. Watch from the riverbank restaurants that overlook the bathing area. The walk from the orphanage to the river passes right through the grounds — children love being in close proximity to the bathing elephants.</p>
        <p>Open daily 8am–6pm; entry around USD 20 per adult, USD 10 per child.</p>

        <h3>Sigiriya and the Cultural Triangle</h3>
        <p>Older children (8+) find Sigiriya Rock Fortress genuinely exciting — it reads like a real adventure, climbing a fortress built for a king who feared his brother. The story is dramatic (a prince who murdered his father, built an impregnable fortress, lost his kingdom and his life), the climb is challenging enough to be exciting without being dangerous, and the views from the top are extraordinary.</p>
        <p>Combine with Minneriya National Park (elephant gathering season July–October produces the largest elephant congregation in Asia) or Kaudulla for a jeep safari. Children who love elephants will remember Minneriya for life.</p>

        <h3>Kandy</h3>
        <p>Kandy has several child-friendly attractions:</p>
        <ul>
          <li><strong>Kandy Lake and Dalada Maligawa (Temple of the Tooth)</strong> — the temple's evening puja ceremony, with elephants and drummers, is genuinely spectacular for children</li>
          <li><strong>Peradeniya Botanical Gardens</strong> — huge gardens with a bat colony (flying foxes) and a giant fig tree children can climb through</li>
          <li><strong>Cultural show</strong> — traditional Kandyan dancing and fire-walking performances at 5pm at several venues; theatrical and visually engaging</li>
        </ul>

        <h3>Ella</h3>
        <p>The scenic train journey from Kandy through Nuwara Eliya to Ella is an adventure for children of all ages — the train winds through tea country, over viaducts, and through tunnels. From Ella, the hike to Little Adam's Peak (accessible for children 7+) and the Nine Arch Bridge walk (easy, flat, spectacular) are excellent family activities.</p>

        <h3>South Coast Beaches</h3>
        <p>For beach time, the south coast delivers. Family-friendly beach recommendations:</p>
        <ul>
          <li><strong>Unawatuna</strong> — sheltered bay, calm water, excellent for young swimmers; snorkelling on the reef accessible from the beach</li>
          <li><strong>Mirissa</strong> — beautiful crescent beach, whale watching for older children and teens (3–4 hour boat trip)</li>
          <li><strong>Tangalle</strong> — wilder, quieter, excellent for families wanting a more low-key beach experience</li>
          <li><strong>Hikkaduwa</strong> — coral reef snorkelling and glass-bottom boats; good for children who enjoy underwater life</li>
        </ul>

        <h3>Yala National Park</h3>
        <p>Sri Lanka's most famous wildlife reserve offers leopard, elephant, sloth bear, crocodile and abundant birdlife. Leopard sighting rates at Yala are among the highest in the world — for children who love wildlife documentaries, seeing a wild leopard in its natural habitat is an unforgettable experience. Book a reputable operator and expect 3–4 hour game drives at dawn and dusk.</p>

        <h2>Practical Family Travel Tips</h2>

        <h3>Transport</h3>
        <p>For families, hiring a private car with driver is the most practical option — you control stops, pace, and timings. A driver for 1–2 weeks costs approximately USD 50–70/day including fuel. Trains are an experience the children will love but require planning around schedules and advance booking. Tuk-tuks are fun for short local trips; for any journey over 30 minutes with young children, a car is more comfortable.</p>

        <h3>Health and Food</h3>
        <p>Sri Lanka's food is generally safe in established restaurants. Stick to cooked food and bottled water. Sri Lankan cuisine can be spicy — request mild ("not spicy") for children. Rice and curry is ubiquitous and easily adapted; pasta, bread, and plain rice are available everywhere. Pharmacies are well-stocked in Colombo, Kandy, and major tourist towns. Travel health insurance with medical evacuation cover is strongly recommended.</p>

        <h3>Accommodation</h3>
        <p>Most hotels and guesthouses accommodate families — request interconnecting rooms or a family room when booking. Many mid-range and luxury properties offer family packages. Pool villas are particularly good for families: private swimming pool, space for children to play, and independence that hotels can't match.</p>

        <h3>Pacing</h3>
        <p>Sri Lanka is small but the roads can be slow. Limit driving to 3–4 hours per day maximum with children. A two-week itinerary that covers Colombo/Negombo, Cultural Triangle, Kandy, Ella, and the south coast is about right — trying to add more becomes exhausting for everyone.</p>

        <h2>Suggested 2-Week Family Itinerary</h2>
        <ul>
          <li><strong>Days 1–2</strong>: Arrive Negombo, beach, fish market</li>
          <li><strong>Days 3–4</strong>: Sigiriya (Rock Fortress + Minneriya elephant safari)</li>
          <li><strong>Day 5</strong>: Pinnawala Elephant Orphanage en route to Kandy</li>
          <li><strong>Days 6–7</strong>: Kandy (Temple of the Tooth, Botanical Gardens, cultural show)</li>
          <li><strong>Day 8</strong>: Scenic train to Ella (book 1st class observation seats)</li>
          <li><strong>Days 9–10</strong>: Ella (Nine Arch Bridge, Little Adam's Peak, waterfalls)</li>
          <li><strong>Day 11</strong>: Drive to Yala; afternoon game drive</li>
          <li><strong>Day 12</strong>: Morning game drive, drive to south coast</li>
          <li><strong>Days 13–14</strong>: Beach time — Unawatuna or Mirissa; whale watching if timing right</li>
        </ul>

        <p>Sri Lanka with children is one of the most rewarding family travel experiences available — the right combination of wonder, adventure, culture, wildlife, and beach that creates memories lasting a lifetime. The island is manageable, affordable, safe, and genuinely welcoming to families. It is, unambiguously, one of the best family travel destinations in Asia.</p>`
  },
  {
    slug: 'sri-lanka-photography-guide',
    title: "Sri Lanka Photography Guide: Best Spots, Light & Tips",
    description: "A photographer's guide to Sri Lanka — the best locations, golden hour spots, wildlife photography tips, and how to capture the island's most iconic images.",
    heroImage: 'scenic-train.jpg',
    heroAlt: 'Scenic train photography Sri Lanka hill country',
    date: 'April 2026',
    readTime: 8,
    category: 'Photography',
    content: `        <p>Sri Lanka is a photographer's island. The variety packed into this compact country — ancient rock fortresses, tea-covered hillsides, colonial coastal forts, Buddhist temples draped in firelight, leopards in dry forest, and an extraordinary range of endemic birdlife — means that almost wherever you point your camera, you find something worth photographing.</p>

        <p>The challenge is not finding subjects but finding the best light, the right access, and the patience to wait for the extraordinary moment rather than settling for the obvious one. This guide covers the island's most photogenic locations with specific advice on timing, positioning, and approach.</p>

        <h2>The Nine Arch Bridge, Ella</h2>
        <p>Sri Lanka's most photographed single image — a colonial-era stone viaduct curving through lush green jungle, framed by jungle and tea bushes. The challenge is separating your version from the millions already taken.</p>
        <p><strong>Best approach</strong>: Arrive at dawn (6–7am) before the tour buses. Morning mist in the valley below the bridge creates atmospheric conditions that midday light destroys. The classic viewpoint is from the jungle path on the northern side (ask at your guesthouse for the exact path). For trains — the train schedule from Ella is visible on the Sri Lanka Railways website; position yourself 10 minutes before the train is due. The train passes at around 9:30am and around 3pm heading different directions — check the current schedule.</p>

        <h2>Sigiriya Rock Fortress at Sunrise</h2>
        <p>Sri Lanka's most iconic structure, the 5th-century rock fortress rising 200 metres from the surrounding plain. The crowds arrive from 8am — be there at opening (7am) or book a private guided sunrise entry if the park allows early access.</p>
        <p><strong>Best shots</strong>: The classic mirror-pool reflection shot is from the eastern water gardens — arrive early before the water surface is disturbed. The summit view at dawn, before the light flattens, captures the cloud-covered lowland plain stretching to the horizon. From Pidurangala Rock (30 minutes' hike, adjacent to Sigiriya) you get the famous aerial view of the rock fortress from above — the single best photography vantage point in Sri Lanka. Pidurangala is often less crowded than Sigiriya itself and the views are arguably superior.</p>

        <h2>Tea Plantations — Nuwara Eliya, Ella, Haputale</h2>
        <p>Sri Lanka's tea country photographs beautifully at almost any time of day, but early morning with mist in the valleys is transcendent. The tea pluckers — predominantly Tamil women in colourful saris with baskets on their backs — are among the most photographed subjects in Sri Lanka. <strong>Ask before photographing</strong> — a nod, a smile, and sometimes a small payment is the respectful approach. Many pluckers are accustomed to photography and may pose willingly; others prefer not to be photographed.</p>
        <p><strong>Best locations</strong>: The hill above Lipton's Seat (near Haputale), the estate roads around Pedro Tea Estate (Nuwara Eliya), and the surrounding hillsides around Ella Rock for landscapes. The drive on the A4 from Haputale to Badulla through managed tea estate is one of the island's most photogenic roads.</p>

        <h2>Galle Fort — Golden Hour</h2>
        <p>The Dutch colonial ramparts of Galle Fort photograph beautifully in late afternoon golden hour and blue hour after sunset. The lighthouse at the south rampart with the Indian Ocean behind is a classic. Walk the full perimeter of the ramparts during the 1.5 hours before sunset — the light changes dramatically and each angle offers different compositions.</p>
        <p>Inside the Fort, the colonial streets with their boutiques, cafes and restored Dutch townhouses photograph well throughout the day — midday light on the white-walled streets can be harsh but creates strong shadows that work well in black and white.</p>

        <h2>Wildlife Photography — Yala and Minneriya</h2>
        <p>Sri Lanka's wildlife photography highlights:</p>
        <ul>
          <li><strong>Leopards at Yala</strong> — Sri Lanka has the world's highest density of wild leopards per square kilometre. Dawn game drives offer the best light and most active animals. A 400mm+ telephoto is recommended. Patience is required — leopards are abundant but not always visible.</li>
          <li><strong>The Elephant Gathering, Minneriya</strong> — August to October, hundreds of elephants converge around the receding Minneriya Reservoir. Wide angle for the landscape, telephoto for individual portraits and behaviour shots.</li>
          <li><strong>Blue whales, Mirissa</strong> — photographing blue whales requires a long telephoto (500mm minimum useful) and patience with boat movement. Go in January–March for the best conditions. A monopod or gimbal head helps with the rocking boat.</li>
          <li><strong>Endemic birds</strong> — Sri Lanka has 35 endemic bird species including the Sri Lanka junglefowl (national bird), Sri Lanka blue magpie, and Serendib scops owl. Sinharaja Rainforest and Kitulgala are the prime birding photography locations.</li>
        </ul>

        <h2>Temple Photography</h2>
        <p>Sri Lanka's Buddhist temples offer extraordinary photography opportunities — monks in saffron robes, candlelit ceremonies, flower offerings, and incense smoke. Key guidelines:</p>
        <ul>
          <li>Always ask before photographing monks or temple ceremonies</li>
          <li>Avoid flash photography inside temples</li>
          <li>Evening puja at the Temple of the Tooth in Kandy (6:30pm) is extraordinary — the drums, elephants and candlelit procession; a tripod or stabilised camera is needed in the low light</li>
          <li>Kataragama during the Esala Perahera (July/August) is one of Asia's most visually intense festivals</li>
        </ul>

        <h2>Practical Photography Tips</h2>
        <ul>
          <li><strong>Golden hour timing</strong>: Sunrise in Sri Lanka is typically 6–6:30am year-round; sunset 6–6:30pm. Plan shoots around these windows.</li>
          <li><strong>Monsoon light</strong>: The southwest monsoon (May–September on the west coast) brings dramatic skies, fast-moving clouds and post-rain light that can be extraordinary for landscapes.</li>
          <li><strong>Tuk-tuk photography</strong>: For intimate street photography, a tuk-tuk moving through markets and towns at low speed is a useful vantage point — the slight elevation and the open sides allow candid shots that walking makes harder to manage.</li>
          <li><strong>Memory and power</strong>: Sri Lanka's photography opportunities are relentless — bring significantly more storage than you think you'll need. Power cuts are less common than before but power banks are useful on safari days.</li>
          <li><strong>Drone regulations</strong>: Drone photography requires a permit from the Civil Aviation Authority of Sri Lanka. Drones are prohibited near military sites, airports, and national parks without special permission. Apply several weeks in advance if you plan to fly commercially or near regulated areas.</li>
        </ul>

        <h2>The Shots Most Photographers Miss</h2>
        <ul>
          <li>The pre-dawn activity at Pettah Market, Colombo — produce, fish and flower vendors setting up under artificial light, 4–5am</li>
          <li>The coastal train journey — shoot from the open doorway of the train as it runs along the cliff edge north of Hikkaduwa</li>
          <li>Jami Ul-Alfar Mosque in Pettah at golden hour — the red-and-white striped facade in warm light</li>
          <li>Stilt fishermen south of Galle, ideally in evening light with the sea as background</li>
          <li>The fireflies at Sinharaja Rainforest — long exposure photography of synchronised firefly displays after dark</li>
        </ul>

        <p>Sri Lanka rewards the photographer who moves slowly, arrives early, and stays beyond the obvious subjects. The island's surface images are well-documented; the extraordinary pictures are still waiting for those patient enough to find them.</p>`
  }
];

for (const p of posts) {
  const filePath = path.join(outDir, `${p.slug}.astro`);
  writeFileSync(filePath, post(p));
  console.log(`✓ blog/${p.slug}.astro`);
}

console.log(`\nBlog posts complete: ${posts.length} pages written.`);
