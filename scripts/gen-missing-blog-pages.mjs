import { writeFileSync } from 'fs';
import path from 'path';

const outDir = path.resolve('src/pages/blog');

const pages = [
  {
    slug: 'ella-rock-hike',
    title: "Hiking Ella Rock: A Complete Guide",
    description: "A step-by-step guide to hiking Ella Rock in Sri Lanka — the route, timing, what to expect at the summit and tips for the best experience.",
    heroImage: 'ella.jpg',
    heroAlt: 'Ella Rock summit view Sri Lanka',
    date: 'March 2026',
    readTime: 7,
    category: 'Hiking',
    content: `        <p>Ella Rock is the definitive hike of Sri Lanka's hill country — a moderately challenging trail through tea estates and jungle that rewards you with one of the most spectacular panoramic views on the island. At 1,041 metres above sea level, the summit looks out over the entire Ella valley, the Great Ella Gap, and on clear days, all the way to the distant shimmer of the southern coast.</p>

        <p>Unlike Little Adam's Peak (the easy tourist walk), Ella Rock requires genuine navigation, a degree of fitness, and an early start. The trail is not well-signed and the route finding is part of the adventure. This guide gives you a clear step-by-step route so you can tackle it confidently.</p>

        <h2>Route Overview</h2>
        <p>The standard route begins from Ella town and climbs through tea estate roads and forest trails to the summit. Total distance is approximately 8km return, with around 450m of elevation gain. Allow 3.5–4.5 hours for the round trip at a comfortable pace.</p>

        <h2>Step-by-Step Route</h2>
        <ol>
          <li><strong>Start at Ella railway station</strong> — walk south along the train tracks for about 15 minutes until you reach a crossing. Cross the tracks and follow the dirt road uphill.</li>
          <li><strong>Tea estate road</strong> — the trail climbs through Lipton's or Newburgh Tea Estate. Follow the main dirt road uphill, keeping the ridge to your right.</li>
          <li><strong>Forest section</strong> — after 45–60 minutes of climbing through the estate, the trail enters denser forest. The path narrows. Continue uphill — there are occasional faded trail markers.</li>
          <li><strong>False summit</strong> — you'll pass what feels like a summit with partial views. Keep going — the true Ella Rock summit is a further 15–20 minutes through forest.</li>
          <li><strong>Summit</strong> — a rocky clearing with 270° views. The Ella valley stretches below, with the Nine Arch Bridge visible if conditions are clear. The Great Ella Gap — the dramatic notch in the ridge through which you can see distant lowlands — is the defining view.</li>
        </ol>

        <h2>Best Time to Go</h2>
        <p>Start no later than <strong>7am</strong>. The summit clouds over by mid-morning on most days — arriving early gives you the best views and cooler temperatures for the climb. Avoid starting after 8am.</p>
        <p>December through March is the driest period. The wet season (May–September) brings clouds and slippery trails, though the waterfalls and greenery are spectacular. Avoid going immediately after heavy rain — the clay paths become treacherous.</p>

        <h2>What to Bring</h2>
        <ul>
          <li>Good grip shoes — trail runners or hiking boots; sandals are not suitable</li>
          <li>At least 1.5 litres of water — there is nowhere to refill on the trail</li>
          <li>Snacks — the summit is a perfect breakfast spot</li>
          <li>Light waterproof layer — summit temperatures can be cool and misty</li>
          <li>Offline map (Maps.me or OsmAnd with Sri Lanka downloaded) — the trail is not signed</li>
        </ul>

        <h2>Hiring a Guide</h2>
        <p>A local guide (LKR 1,500–2,500 for the hike) is recommended for first-timers — not because the hike is dangerous, but because the route finding is genuinely confusing in a few sections. Ask at your guesthouse the evening before. Most guides are local young men who know the mountain well.</p>

        <h2>Practical Information</h2>
        <ul>
          <li>There is no entry fee for Ella Rock</li>
          <li>The trail passes through private tea estate land — be respectful of workers</li>
          <li>Ticks are present in the forest section — check yourself after</li>
          <li>The descent is harder on the knees than the ascent — take your time</li>
          <li>Combine with Little Adam's Peak in the afternoon for a full hiking day</li>
        </ul>

        <p>Ella Rock is harder and more rewarding than anything else easily accessible from the village. The views from the summit — if the clouds cooperate — are among the finest in Sri Lanka. Get up early, follow this guide, and you'll have one of the best mornings of your trip.</p>`
  },
  {
    slug: 'sigiriya-tips',
    title: "10 Essential Tips for Visiting Sigiriya Rock Fortress",
    description: "Everything first-time visitors need to know before climbing Sigiriya — from the best time to arrive to what to wear, how to book tickets and what to see at the top.",
    heroImage: 'sigiriya.jpg',
    heroAlt: 'Sigiriya rock fortress sunrise Sri Lanka',
    date: 'January 2026',
    readTime: 6,
    category: 'Cultural Sites',
    content: `        <p>Sigiriya is one of the most extraordinary ancient sites in the world — a 5th-century rock fortress rising 200 metres above the surrounding jungle, with mirror-wall frescoes, ornamental gardens and summit ruins that make it unlike anywhere else in Asia. Visiting is an experience you won't forget. But going in unprepared means battling the heat, the crowds, and the frustration of missing its best features. These 10 tips ensure you get the most from your visit.</p>

        <h2>1. Arrive at Opening Time (7am)</h2>
        <p>Sigiriya opens at 7am and the first hour is magical — cool air, soft morning light, and a fraction of the crowds that arrive from 9am onwards. Tour buses and day-trippers from Colombo and Kandy start arriving from 9–10am. If you arrive at 8:30am, you will share the famous mirror wall spiral staircase with hundreds of people. If you arrive at 7am, you'll have it almost to yourself.</p>

        <h2>2. Book Tickets in Advance</h2>
        <p>The entry fee is <strong>USD 30 per person</strong> (foreign nationals) — one of the most expensive heritage site entries in Sri Lanka. Tickets can be purchased at the gate or online through the Cultural Triangle Board. In peak season (December–March), the site has a daily visitor cap and can sell out. Book online to secure your slot and avoid queuing at the gate in the heat.</p>

        <h2>3. Don't Skip the Water Gardens</h2>
        <p>Most visitors rush straight to the rock. The ornamental water gardens at the base — one of the oldest landscaped gardens in the world — deserve 30 minutes of unhurried exploration. The hydraulic engineering that kept symmetrical pools and fountains running 1,500 years ago is astonishing, and the gardens provide perfect framing for photographs of the rock itself.</p>

        <h2>4. The Fresco Pocket is the Emotional Highlight</h2>
        <p>Halfway up the rock, a covered spiral staircase leads to a sheltered pocket in the cliff where ancient frescoes of celestial maidens have survived for 1,500 years. These are extraordinary — painted in vivid ochre and greens, they are among the finest examples of ancient Sri Lankan art. Photography is allowed. Take your time here — the crowds rush past, but this is arguably the most remarkable thing at the site.</p>

        <h2>5. The Mirror Wall Has 1,000-Year-Old Graffiti</h2>
        <p>The polished plaster wall adjacent to the fresco walkway is so reflective that ancient visitors could see themselves in it. Thousands of them left inscriptions — the earliest dating from the 8th century. The wall is now protected behind a barrier, but walk slowly and read the English translations of the graffiti on the information boards. They are unexpectedly moving.</p>

        <h2>6. The Final Lion Staircase Is Steep</h2>
        <p>The final approach to the summit climbs through the paws of a massive carved lion (only the paws remain — the head collapsed centuries ago) via a very steep staircase bolted to the rock face. This section has metal railings but is genuinely exposed — those with severe vertigo may struggle. Take it slowly. There is no disgrace in stopping here and viewing the rock from the lion paws level, which itself has excellent views.</p>

        <h2>7. The Summit Ruins Reward Exploration</h2>
        <p>The summit is the remains of a royal palace — throne platforms, cisterns, and the foundations of royal chambers. Most visitors walk around it once and descend. Spend at least 20–30 minutes exploring. The western side has the best views of the surrounding jungle and reservoir system; the northern platform offers the most dramatic looking-down view of the approach path.</p>

        <h2>8. Wear the Right Shoes</h2>
        <p>The surface is stone throughout but can be slippery when wet. Comfortable closed-toe shoes with grip are ideal — sandals work but are less secure on the steep final section. Avoid flip-flops on the lion staircase.</p>

        <h2>9. Combine With Pidurangala for the Aerial View</h2>
        <p>Pidurangala Rock, a 30-minute hike adjacent to Sigiriya, gives you the famous overhead view of Sigiriya — the photograph that most people assume you can only take from a drone. Go to Pidurangala in the late afternoon for golden hour light on the rock. Entry is much cheaper (around LKR 1,000), and it is significantly less crowded. These two sites together make the perfect Sigiriya day.</p>

        <h2>10. Allow at Least 3 Hours</h2>
        <p>Rushing Sigiriya is the most common mistake. Water gardens (30 min) + ascent including fresco and mirror wall (60–75 min) + summit exploration (30 min) + descent (45 min) = 3 hours minimum. If you want to see Dambulla Cave Temple in the same day (highly recommended — 18km away), go to Dambulla first (opens 7am, less dramatic in afternoon light) then Sigiriya.</p>

        <p>Sigiriya is one of those rare places that exceeds its reputation. The history, the engineering, the art, and the sheer audacity of building a palace on the summit of a 200-metre rock — it is genuinely one of the wonders of the ancient world. Give it the time it deserves.</p>`
  },
  {
    slug: 'sri-lanka-food-guide',
    title: "Sri Lankan Food Guide: What to Eat, Where to Eat & Must-Try Dishes",
    description: "A complete guide to Sri Lankan cuisine — from rice and curry to hoppers, kottu roti and seafood. What to eat, where to find the best food, and the essential dishes to try.",
    heroImage: 'cooking-classes.jpg',
    heroAlt: 'Sri Lankan food rice and curry hoppers',
    date: 'February 2026',
    readTime: 9,
    category: 'Food & Drink',
    content: `        <p>Sri Lankan cuisine is one of Asia's most aromatic and complex — a food culture shaped by centuries of Indian, Arab, Dutch, Portuguese and British influence, built around a core of fresh coconut, chilli, and spice that is unlike anywhere else. Yet it remains surprisingly unknown to the wider world. Arriving in Sri Lanka expecting "Indian food but different" will leave you unprepared for the depth and distinctiveness of what you'll encounter.</p>

        <p>This guide covers the essential dishes, the best places to eat, and how to navigate the food culture of an island where a full meal can cost LKR 300 from a roadside kade or LKR 5,000 at a boutique hotel restaurant — and both can be extraordinary.</p>

        <h2>The Staple: Rice and Curry</h2>
        <p>Sri Lankan rice and curry is not a single dish but a ritual — a spread of small curry portions served alongside rice, eaten together in combinations. A typical meal includes:</p>
        <ul>
          <li><strong>The rice</strong>: white or red (the traditional Sri Lankan grain), served with dhal (lentil curry) as the base</li>
          <li><strong>Vegetable curries</strong>: 2–4 small portions — typically jackfruit, drumstick, pumpkin, green bean or bitter gourd</li>
          <li><strong>A protein curry</strong>: fish, chicken, mutton or egg — depending on region and occasion</li>
          <li><strong>Pol sambol</strong>: freshly grated coconut with red chilli, onion and lime — essential accompaniment</li>
          <li><strong>Papadums and pickle</strong>: often included</li>
        </ul>
        <p>The best rice and curry in Sri Lanka comes from family-run kades (local eateries) where the curries have been simmering for hours. Ask for a <em>rice packet</em> — the local term for a take-away portion wrapped in banana leaf. Under LKR 300, and better than anything a tourist restaurant can produce.</p>

        <h2>Hoppers (Appa)</h2>
        <p>Hoppers are Sri Lanka's most distinctive breakfast food — bowl-shaped fermented rice pancakes, crisp at the edges and soft in the centre, cooked in a small wok-like pan. They come in several forms:</p>
        <ul>
          <li><strong>Plain hopper</strong>: the base, eaten with coconut sambol and dhal</li>
          <li><strong>Egg hopper</strong>: an egg cracked into the centre while cooking — the most popular variety</li>
          <li><strong>Milk hopper</strong>: coconut milk added for a richer, sweeter version</li>
          <li><strong>String hoppers</strong> (Idiyappam): thin rice noodles pressed into nest shapes — usually breakfast, eaten with coconut sambol or dhal</li>
        </ul>
        <p>The best hoppers are made to order and eaten immediately. Many guesthouses serve them for breakfast; find them at hopper-specific stalls that open in the evenings in towns and villages.</p>

        <h2>Kottu Roti</h2>
        <p>Sri Lanka's definitive street food — strips of roti chopped and stir-fried on a flat iron griddle with egg, vegetables, and your choice of protein. The rhythmic clanging of the metal blades that chop the kottu is the soundtrack of Sri Lankan evenings. It is loud, theatrical, and the result is deeply satisfying. Ask for <em>chicken kottu</em> or <em>egg kottu</em>. Cheese kottu is a local favourite. Under LKR 500 from a street stall.</p>

        <h2>Seafood</h2>
        <p>Sri Lanka is an island and the seafood reflects it. The south coast and east coast both have excellent fresh catches:</p>
        <ul>
          <li><strong>Grilled reef fish</strong>: ordered by weight from beach restaurants, often grilled with garlic, chilli and lime</li>
          <li><strong>Crab curry</strong>: a south coast speciality — coconut milk curry with mud crab. Ministry of Crab in Colombo is the famous high-end version; local versions at beach restaurants are equally good for a fraction of the price</li>
          <li><strong>Prawn curry</strong>: available at any coastal town; often prepared with coconut milk and tomato</li>
          <li><strong>Ambul thiyal</strong>: the distinctive black "sour fish" curry from the south — fish preserved with goraka (a sour fruit), cooked dry. A unique taste unlike anything else</li>
        </ul>

        <h2>Short Eats</h2>
        <p>Sri Lankan bakeries and tea shops serve <em>short eats</em> — bite-sized savoury snacks eaten with tea at any time of day:</p>
        <ul>
          <li><strong>Isso vadai</strong>: lentil fritters topped with a whole prawn — a Jaffna speciality found across the island</li>
          <li><strong>Mutton rolls</strong>: cylindrical pastries filled with spiced mutton</li>
          <li><strong>Fish cutlets</strong>: spiced fish cakes, crumbed and fried</li>
          <li><strong>Pattis</strong>: small pastry parcels with savoury fillings</li>
        </ul>
        <p>The best short eats come from traditional family bakeries, not tourist cafes. Look for a glass display cabinet at the counter of any local tea shop.</p>

        <h2>Street Food Worth Seeking</h2>
        <ul>
          <li><strong>Gotu kola sambol</strong>: raw centella herb with coconut, onion and chilli — incredibly nutritious, eaten as a condiment</li>
          <li><strong>Pol roti</strong>: thick flatbread made with coconut and sometimes green chilli — one of the best breakfast options</li>
          <li><strong>Wattalapam</strong>: a rich steamed pudding of coconut milk, jaggery and cashew — Sri Lanka's best dessert and a Malay influence brought by the Dutch</li>
          <li><strong>Wood apple juice</strong>: from the hard-shelled Sri Lankan wood apple; sweet, sour and completely unlike anything you've tasted</li>
        </ul>

        <h2>Where to Eat</h2>
        <ul>
          <li><strong>Local kades (roadside eateries)</strong>: the best and cheapest food on the island. No menus, no decor — just excellent rice and curry. LKR 200–400 for a full meal.</li>
          <li><strong>Colombo restaurants</strong>: the city has an excellent dining scene — Ministry of Crab, Gallery Café, and Noodles are standouts. USD 15–50/head.</li>
          <li><strong>Galle Fort restaurants</strong>: Galle has the most sophisticated restaurant scene outside Colombo — excellent seafood and modern Sri Lankan cuisine. USD 15–30/head.</li>
          <li><strong>Guesthouse cooking</strong>: across the island, guest house owners cooking fresh breakfast and dinner for guests often produce the best meals. Ask if they cook and say yes.</li>
        </ul>

        <h2>Food Safety Tips</h2>
        <ul>
          <li>Stick to cooked food at street stalls — avoid raw salads and unpeeled fruit from unknown sources</li>
          <li>The rule for curry applies: if it smells good and the turnover is high, it's safe and fresh</li>
          <li>Drink bottled water — tap water is not safe for consumption</li>
          <li>Sri Lankan food is genuinely spicy — if you have a low tolerance, say <em>"mild, not spicy"</em> when ordering. Most restaurants will accommodate, though some curries cannot be de-chillied</li>
        </ul>

        <p>Sri Lankan food is one of the great pleasures of travelling the island — and one of its most underrated. The combination of fresh spice, coconut, and generations of culinary tradition produces food that is deeply satisfying and endlessly varied. Eat everywhere, try everything, and let the kade owners feed you well.</p>`
  },
  {
    slug: 'sigiriya-rock-fortress-guide',
    title: "Sigiriya Rock Fortress: The Complete Visitor's Guide",
    description: "Everything you need to know to visit Sigiriya Rock Fortress in Sri Lanka — history, what to see, entry fees, best time to visit and how to get there.",
    heroImage: 'sigiriya.jpg',
    heroAlt: 'Sigiriya Lion Rock fortress sunrise view Sri Lanka',
    date: 'April 2026',
    readTime: 10,
    category: 'Cultural Sites',
    content: `        <p>Sigiriya is arguably the most extraordinary ancient monument in South Asia. Rising 200 metres above the surrounding jungle from a seemingly impossible volcanic plug of granite, the 5th-century rock fortress of King Kashyapa is a UNESCO World Heritage Site, Sri Lanka's most visited attraction, and one of the genuine wonders of the ancient world.</p>

        <p>What makes Sigiriya remarkable is not merely its scale but its sophistication. The palace complex built atop the rock between 477 and 495 AD included mirror-polished plaster walls, ornamental gardens with hydraulic fountains (still partly functional), gallery frescoes of celestial maidens that have survived 1,500 years, and a throne room with views over an empire. That this was built in the 5th century, in the tropics, by a king who had murdered his father and seized the throne — is extraordinary.</p>

        <h2>The History of Sigiriya</h2>
        <p>Kashyapa I came to power by imprisoning his father Dhatusena behind a wall of mud and seizing the throne from his legitimate heir, Moggallana, who fled to India. Fearing his brother's return, Kashyapa built his palace on Sigiriya rock — a naturally defensible position, but also a statement of divine ambition. He believed himself to be Kubera, the god of wealth.</p>
        <p>When Moggallana returned with an Indian army in 495 AD, Kashyapa descended from the rock to meet him in battle. His elephant turned away from a swamp, his troops misread this as retreat, and the army fled. Kashyapa died by suicide — possibly his own sword. Moggallana converted the fortress to a Buddhist monastery, which it remained until the 14th century.</p>

        <h2>What to See at Sigiriya</h2>

        <h3>The Water Gardens</h3>
        <p>The approach to the rock passes through one of the world's oldest landscaped gardens. The symmetrical gardens with their pools, fountains and serpentine water channels are bisected by a central causeway. Remarkably, some of the underground hydraulic pipes still function during the rainy season, feeding the fountains as they did 1,500 years ago. Arrive early and walk slowly — most visitors rush through to get to the rock.</p>

        <h3>Boulder and Terrace Gardens</h3>
        <p>Beyond the formal water gardens, the approach climbs through boulder gardens featuring caves with ancient drip-ledge inscriptions, and terrace gardens carved into the lower slopes of the rock. The engineering of these terraces — buttressed against the rock, with elaborate drainage — is remarkable.</p>

        <h3>The Mirror Wall</h3>
        <p>A polished plaster wall running along the rock face was so well-made that ancient visitors could see their reflection. Those visitors left graffiti — the earliest dating from the 8th century, making them among the oldest surviving examples of Sinhala script. The poems and observations written on the wall form a unique historical record. The wall is now protected behind barriers, but the content (translated on information boards) is worth reading.</p>

        <h3>The Frescoes</h3>
        <p>A spiral staircase leads to a sheltered pocket in the cliff where 22 of an original estimated 500 frescoes of celestial maidens survive. Painted in the 5th century using mineral pigments, these figures — possibly apsaras (heavenly nymphs) or women of the royal court — remain vivid and detailed after 1,500 years. This is the emotional highlight of the site. Photography is permitted.</p>

        <h3>The Lion Paws and Summit</h3>
        <p>The final approach passes through the paws of an enormous carved lion (the head and body collapsed long ago) that once framed the entrance to the summit palace. A steep metal staircase bolted to the rock face leads to the top. The summit holds the remains of the royal palace: cisterns cut into the rock, a throne platform, and the foundations of royal chambers. The 360° views over the jungle and reservoir system below are breathtaking.</p>

        <h2>Entry Fees and Tickets</h2>
        <ul>
          <li>Foreign adults: <strong>USD 30</strong></li>
          <li>Foreign children (6–12): <strong>USD 15</strong></li>
          <li>Sri Lankan nationals pay significantly less</li>
          <li>Tickets include entry to the entire site including water gardens, frescoes and summit</li>
          <li>Book online at the Cultural Triangle Board website to skip the gate queue</li>
        </ul>

        <h2>Opening Hours</h2>
        <p>Open daily <strong>7am–5:30pm</strong>. Last entry at 5pm. The site illuminates briefly at dusk but summit access closes earlier.</p>

        <h2>Best Time to Visit</h2>
        <p>Arrive at 7am when the gates open. The summit clouds over by mid-morning on most days, and the crowds become intense after 9am when tour buses arrive from Kandy, Colombo and Dambulla. The early morning light on the rock is also dramatically better for photography. December to March is the driest period with the clearest summit views.</p>

        <h2>Getting to Sigiriya</h2>
        <ul>
          <li><strong>From Colombo</strong>: approximately 4.5 hours by car or bus. Take the A6 highway via Kurunegala and Dambulla.</li>
          <li><strong>From Kandy</strong>: 2.5–3 hours by car through the Matale hills.</li>
          <li><strong>From Habarana</strong>: 20 minutes by tuk-tuk — the most common nearby base.</li>
          <li><strong>By bus</strong>: Regular services from Dambulla (45 minutes) to Sigiriya village; tuk-tuk from village to site.</li>
        </ul>

        <h2>What to Combine Sigiriya With</h2>
        <ul>
          <li><strong>Pidurangala Rock</strong> (2km away): a shorter climb giving the famous aerial view of Sigiriya — combine in the same day</li>
          <li><strong>Dambulla Cave Temple</strong> (18km): the most impressive Buddhist cave temple in Sri Lanka — 5 caves with 150+ Buddha statues</li>
          <li><strong>Minneriya National Park</strong> (30km): the Great Elephant Gathering (July–October)</li>
          <li><strong>Polonnaruwa</strong> (60km): the second ancient capital, best visited the following day</li>
        </ul>

        <p>Sigiriya rewards the curious visitor who goes slowly. Rush it and you'll see a tall rock with some old ruins. Take three hours and engage with the water gardens, the mirror wall graffiti, the frescoes, and the extraordinary view from the summit — and you'll understand why this is considered one of the greatest achievements of the ancient world.</p>`
  },
  {
    slug: 'ella-travel-guide',
    title: "Ella Travel Guide: Sri Lanka's Most Beloved Hill Town",
    description: "A complete guide to Ella, Sri Lanka — Nine Arch Bridge, Ella Rock, Little Adam's Peak, where to stay, where to eat and how to get there on the scenic train.",
    heroImage: 'ella.jpg',
    heroAlt: 'Nine Arch Bridge Ella misty morning Sri Lanka',
    date: 'April 2026',
    readTime: 9,
    category: 'Destinations',
    content: `        <p>Ella is the town that most captures what travellers come to Sri Lanka's hill country to find. A small village at 1,041 metres in the southern highlands, surrounded by emerald tea estates and misty jungle ridges, it has grown from a backpacker stop on the scenic train route to one of Sri Lanka's most-visited destinations — yet somehow retained a character that larger tourist towns have long since lost.</p>

        <p>The appeal is straightforward: spectacular scenery, excellent hiking, the most photographed railway viaduct in Asia, and a concentration of good guesthouses and cafes that punches well above a small village's weight. Ella is the kind of place where you arrive planning to stay two nights and find yourself booking four.</p>

        <h2>The Nine Arch Bridge</h2>
        <p>Sri Lanka's most photographed sight is a colonial-era railway viaduct of nine stone arches, built by British engineers in 1921 using only stone, brick and cement — no metal. Surrounded by jungle and tea bushes on a hillside above Ella, it is genuinely one of the most beautiful structures in Asia.</p>
        <p>The classic viewpoint is from the jungle path on the northern side of the bridge (ask your guesthouse for the path — it is a 15-minute walk from town). <strong>Arrive before 7am</strong> to avoid crowds and catch the morning mist. Trains cross at approximately 9:30am (heading up to Kandy/Colombo) and 3pm (heading down to Badulla) — time your visit for the train crossing for the iconic photograph. Check current train times at your guesthouse as schedules vary.</p>

        <h2>Hiking Ella Rock</h2>
        <p>Ella Rock (1,041m) is the more challenging and rewarding of the two main hikes — a 3.5–4 hour round trip through tea estates and jungle to a summit with panoramic views over the Ella valley and the Great Ella Gap. The trail is not well-signed so take a guide (ask at your guesthouse the evening before) or download an offline map. Start before 7am for the clearest views.</p>
        <p>See our <a href="/blog/ella-rock-hike">complete Ella Rock hiking guide</a> for step-by-step directions.</p>

        <h2>Little Adam's Peak</h2>
        <p>The easy alternative to Ella Rock — a gentle 2-hour return walk through tea estates to a summit with excellent valley views. Well-signed and suitable for all fitness levels. Very popular, can be busy on weekends. Best in the early morning before the clouds arrive. No guide needed.</p>

        <h2>Ravana Falls</h2>
        <p>Six kilometres below Ella on the road to Wellawaya, Ravana Falls is one of Sri Lanka's most dramatic and accessible waterfalls — a 25-metre cascade visible from the road and linked in Hindu mythology to the Ramayana story. Swimming is possible at the base pool. Takes 30 minutes by tuk-tuk from Ella (around LKR 500 one way).</p>

        <h2>Diyaluma Falls Day Trip</h2>
        <p>Twenty kilometres from Ella towards Wellawaya, Diyaluma is Sri Lanka's highest waterfall at 220 metres. The hike to the natural rock pools at the summit is extraordinary — one of the best outdoor experiences in Sri Lanka. Allow a full morning. Hire a tuk-tuk from Ella for around LKR 2,000 return.</p>

        <h2>The Scenic Train Journey</h2>
        <p>The train from Kandy or Colombo to Ella is Sri Lanka's most famous rail journey — 7 hours from Kandy through cloud forest, across stone viaducts, and through tunnels, with the train emerging periodically onto clifftop sections with breathtaking views. Book a first-class or observation car seat in advance through 12Go Asia or at Colombo Fort station. Second-class (unreserved) is also possible but standing room only on busy days.</p>
        <p>From Ella, trains continue to Badulla (the end of the line, 30 minutes) and back up through the hill country towards Kandy. Many travellers take the train one way and hire a tuk-tuk or vehicle for the other direction.</p>

        <h2>Where to Stay in Ella</h2>
        <ul>
          <li><strong>Budget</strong>: Excellent guesthouses along the main road and on the hillsides above town from LKR 3,000–6,000/night. Many include breakfast. The hillside guesthouses often have better valley views.</li>
          <li><strong>Mid-range</strong>: Comfortable boutique guesthouses from LKR 8,000–15,000/night — look for those with private balconies overlooking the valley.</li>
          <li><strong>Upscale</strong>: 98 Acres Resort offers tented villas overlooking a tea-covered hillside valley — the finest accommodation in Ella at around USD 150–200/night.</li>
        </ul>

        <h2>Where to Eat</h2>
        <ul>
          <li><strong>Café Ella</strong>: Reliable, good value Western and Sri Lankan food; great views from the terrace</li>
          <li><strong>Dream Café</strong>: Popular for breakfast; excellent smoothies and hoppers</li>
          <li><strong>Matey Hut</strong>: Local-style rice and curry; cheap, authentic and consistently good</li>
          <li><strong>Chill Space</strong>: Good for evening drinks with valley views</li>
          <li>Any of the small kottu roti stalls along the main road for a late-night meal</li>
        </ul>

        <h2>Getting to Ella</h2>
        <ul>
          <li><strong>By train</strong>: The most memorable arrival — from Kandy (7 hours) or from Colombo (8–9 hours). Book in advance.</li>
          <li><strong>By bus</strong>: From Colombo, Kandy, Nuwara Eliya or Badulla. Buses are slower but more frequent.</li>
          <li><strong>By tuk-tuk</strong>: From nearby towns like Haputale (1 hour) or Bandarawela (45 minutes) for a local experience.</li>
          <li><strong>By car/private driver</strong>: From Colombo approximately 6 hours; from Yala/south coast approximately 2.5–3 hours.</li>
        </ul>

        <h2>Best Time to Visit</h2>
        <p>Ella is pleasant year-round but at its best from <strong>December to March</strong> — dry, clear skies and the best visibility for hiking and the train views. The wet season (May–September) brings regular afternoon rain and mist, which is atmospheric if not ideal for hiking. The town can feel quieter off-season, which is its own appeal.</p>

        <p>Ella is one of those places that does not disappoint. The combination of excellent hiking, extraordinary scenery, comfortable guesthouses and the best train arrival in Asia makes it the hill country destination that almost everyone puts at or near the top of their Sri Lanka favourites. Go, stay longer than you planned, and don't rush the Nine Arch Bridge at 7am.</p>`
  },
];

for (const p of pages) {
  const content = `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import ExpediaWidget from '../../components/ExpediaWidget.astro';
---

<BaseLayout
  title="${p.title} | The Trails of Ceylon"
  description="${p.description}"
  type="article"
  publishDate="${new Date().toISOString().split('T')[0]}"
>
  <article>
    <div class="relative py-24 bg-ceylon-green-900 overflow-hidden">
      <div class="absolute inset-0 opacity-30">
        <img src="/images/${p.heroImage}" alt="${p.heroAlt}" class="w-full h-full object-cover" loading="eager" width="1200" height="600" style="object-fit:cover;" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <nav class="flex items-center justify-center gap-2 text-white/60 text-xs mb-4" aria-label="Breadcrumb">
          <a href="/" class="hover:text-white">Home</a><span>/</span>
          <a href="/blog" class="hover:text-white">Blog</a><span>/</span>
          <span class="text-white">${p.category}</span>
        </nav>
        <span class="inline-block bg-ceylon-gold-400 text-ceylon-green-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">${p.category}</span>
        <h1 class="font-serif font-black text-white text-4xl sm:text-5xl leading-tight">${p.title}</h1>
        <div class="flex items-center justify-center gap-4 text-white/70 text-sm mt-4">
          <span>${p.date}</span>
          <span>·</span>
          <span>${p.readTime} min read</span>
        </div>
      </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div class="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-ceylon-green-700">
${p.content}
      </div>
      <p class="text-gray-400 text-xs mt-10 pt-6 border-t border-gray-100">Last Updated: April 2026</p>
    </div>
  </article>
  <ExpediaWidget heading="🏨 Search Hotels & Flights to Sri Lanka" />
</BaseLayout>
`;
  writeFileSync(path.join(outDir, `${p.slug}.astro`), content);
  console.log(`✓ blog/${p.slug}.astro`);
}
console.log(`\nDone: ${pages.length} pages written.`);
