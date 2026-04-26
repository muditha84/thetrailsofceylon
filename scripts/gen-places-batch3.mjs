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
<BaseLayout title="${title} | The Trails of Ceylon" description="${desc}" type="article" publishDate="${publishDate}">
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
        <AffiliateBox title="${affiliateTitle}" description="${affiliateDesc}" buttonText="${affiliateBtn}" buttonHref="${affiliateHref}" variant="${affiliateVariant}" />
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
    slug: 'delft-island',
    title: "Delft Island, Jaffna: Wild Horses, Ruins & Remote Island Sri Lanka",
    desc: "Delft Island (Neduntheevu) is Jaffna's most remote and atmospheric island — wild horses, ancient ruins, a Dutch fort and a sense of genuine isolation at the edge of the Palk Strait.",
    publishDate: '2025-03-01', image: '/images/jaffna.jpg', imageAlt: 'Delft island wild horses ruins Jaffna Sri Lanka',
    breadcrumbParent: 'North & Jaffna', breadcrumbParentHref: '/places/north-jaffna',
    h1: 'Delft Island', subtitle: 'Jaffna Islands • Wild Horses • Ancient Ruins • Remote', badge: 'North Sri Lanka',
    quickFacts: [['Also Known As','Neduntheevu'],['Distance from Jaffna','35km by ferry'],['Ferry From','Kurikaduwan pier'],['Best For','Off-beat, ruins, wild horses'],['Days Needed','Full day'],['Population','~5,000 (Tamil fishing community)']],
    body: `
        <p>Delft Island — known in Tamil as Neduntheevu — is the most remote and otherworldly of Jaffna's inhabited islands, lying at the far northwestern edge of the archipelago where the Palk Strait begins to widen. The island is flat, windswept and treeless, with a landscape that feels more like the Scottish islands than tropical South Asia. Ancient coral-stone walls built by Dutch colonists demarcate fields where herds of feral horses — descendants of animals brought by the Portuguese centuries ago — roam freely between the ruins of colonial buildings and the remnants of a Portuguese fort. It is one of the strangest and most memorable places in Sri Lanka.</p>
        <h2>The Wild Horses</h2>
        <p>Delft's feral horse population — numbering around 50–60 animals — is one of the most photographed sights in northern Sri Lanka. These are small, sturdy horses descended from those introduced by Portuguese traders in the 16th century, left to run wild after the colonial period ended. They graze freely across the island, often close to the ruins and the Dutch Fort, and have become accustomed enough to humans that photography is straightforward. The horses are officially protected; do not approach aggressively or attempt to feed them.</p>
        <h2>The Dutch Fort & Colonial Ruins</h2>
        <p>A Portuguese fort was built on Delft in the early 17th century; the Dutch subsequently modified and extended it. What remains is a substantial ruin — walls, bastions and the outline of the original structure — set among the scrubby vegetation near the ferry landing. Nearby, the remains of a Dutch-era dovecote (pigeon loft) and a giant ancient tree growing from within the ruins of a colonial building add to the archaeology of the place. The entire island can be explored by bicycle, hired from the pier.</p>
        <h2>Getting to Delft Island</h2>
        <p>Reach Delft by government ferry from Kurikaduwan pier, itself accessible from Jaffna via the causeway road to Punkudutivu island (about 40km and 1.5 hours by bus or tuk-tuk from Jaffna). The ferry crossing takes about 1 hour. Ferries run twice daily (morning and afternoon) but schedules change seasonally — check at the Jaffna bus station or with your guesthouse before departing. The island is easily explored in a full day; staying overnight is possible at basic guesthouses.</p>
        <h2>Best Time to Visit</h2>
        <p>May through October — the dry season for the north — is most comfortable. November through January brings the northeast monsoon with heavy rain and rough seas that can disrupt ferries. The island is most atmospheric in the early morning light when the horses are most active and the ruins are quiet.</p>
        <h2>Tips for Visitors</h2>
        <ul>
          <li>Hire a bicycle at the pier to explore the island — it is too large to walk comfortably in a day</li>
          <li>Bring food and water — facilities on the island are extremely limited</li>
          <li>Check ferry times carefully — missing the last ferry means an unplanned overnight stay</li>
          <li>Combine with a visit to Nainativu Island (also via Kurikaduwan) for a full day of island-hopping</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Jaffna', affiliateDesc: 'Stay in Jaffna as your base for Delft Island and the northern islands — book ahead as Jaffna accommodation is limited.', affiliateBtn: 'Search Hotels on Booking.com', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Jaffna+Sri+Lanka', affiliateVariant: 'hotel',
    planVisit: [['Ferry From','Kurikaduwan pier'],['Ferry Duration','1 hour'],['Best Season','May–October'],['From Jaffna','1.5 hrs to ferry pier']],
    nearbyLinks: [{href:'/places/jaffna',label:'Jaffna City'},{href:'/places/mannar',label:'Mannar Island'},{href:'/places/north-jaffna',label:'North Sri Lanka Guide'},{href:'/places',label:'All Places'}],
  },
  {
    slug: 'ambuluwawa',
    title: 'Ambuluwawa Tower, Sri Lanka: Spiral Tower & Panoramic Views Near Kandy',
    desc: 'Ambuluwawa is a biodiversity complex near Gampola with a unique spiral tower offering 360-degree views of the central highlands — one of Sri Lanka\'s most unusual attractions.',
    publishDate: '2025-03-01', image: '/images/kandy.jpg', imageAlt: 'Ambuluwawa spiral tower panoramic views Sri Lanka',
    breadcrumbParent: 'Hill Country', breadcrumbParentHref: '/places/hill-country',
    h1: 'Ambuluwawa', subtitle: 'Hill Country • Spiral Tower • Biodiversity Complex • Kandy Day Trip', badge: 'Hill Country',
    quickFacts: [['Location','Near Gampola, 20km from Kandy'],['Tower Height','48 metres'],['View','360° panorama of central highlands'],['Best For','Views, day trip from Kandy'],['Open','Daily, 7am–6pm'],['Entry Fee','LKR 600 approx (foreigners)']],
    body: `
        <p>Ambuluwawa is one of Sri Lanka's most unexpected attractions — a multi-religious biodiversity complex set on a forested hill 1,965 metres above sea level near the town of Gampola, about 20 kilometres south of Kandy. The complex was developed by a former President of Sri Lanka and contains shrines from four of the island's major religions (Buddhist, Hindu, Christian and Muslim) arranged on a hilltop, a botanical garden, a small lake, and — most distinctively — a 48-metre spiral tower that winds around the outside of a central column in a series of increasingly vertiginous spirals. The views from the top of the tower on a clear day are extraordinary: a 360-degree panorama of the central highlands, with the Knuckles Range to the east and the mountains stretching south towards Adam's Peak.</p>
        <h2>The Spiral Tower</h2>
        <p>The tower is what brings most visitors to Ambuluwawa. The climb to the top is not for the faint-hearted or acrophobic — the exposed spiral path winds around the outside of the structure with minimal guardrails, and the final section involves climbing a narrow, near-vertical stair to a small viewing platform at the summit. The views justify every vertigo-inducing step: on a clear morning you can see vast distances in every direction, with the mist burning off the valleys below and the peaks of the central highlands stretching to the horizon. The tower is best visited in the morning before cloud builds (usually after 11am).</p>
        <h2>The Biodiversity Complex</h2>
        <p>Beyond the tower, the Ambuluwawa complex has well-maintained walking paths through secondary forest, a small botanical section, and the four religious shrines. The forest is home to several endemic bird species and butterflies — a leisurely walk of 1–2 hours through the grounds before or after climbing the tower makes for a complete half-day excursion. The views from the various viewpoints around the hill are excellent even without climbing the tower.</p>
        <h2>Getting There</h2>
        <p>Ambuluwawa is 20km south of Kandy near Gampola. From Kandy, take a bus to Gampola (30 minutes) and then a tuk-tuk to the Ambuluwawa entrance (15 minutes, LKR 300–400). Alternatively, hire a tuk-tuk from Kandy for the round trip — expect to pay LKR 1,500–2,000 including waiting time. By car or taxi from Kandy, allow 45 minutes including the final uphill section.</p>
        <h2>Best Time to Visit</h2>
        <p>Early morning (7–10am) gives the clearest views and the least cloud cover. December through April and July through September tend to be drier. Avoid visiting on weekends when the complex is busiest with Sri Lankan day-trippers from Kandy and Colombo.</p>
        <h2>Tips for Visitors</h2>
        <ul>
          <li>The tower is genuinely scary if you have a fear of heights — assess your comfort level before committing to the top</li>
          <li>Wear shoes with good grip on the smooth concrete spiral</li>
          <li>Bring a jacket — at nearly 2,000 metres, the hilltop is significantly cooler than Kandy</li>
          <li>Visit early in the morning for the best chance of clear views before cloud rolls in</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Kandy', affiliateDesc: 'Stay in Kandy as your base for Ambuluwawa and the Hill Country — a wide range of hotels from budget to boutique.', affiliateBtn: 'Search Hotels on Booking.com', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Kandy+Sri+Lanka', affiliateVariant: 'hotel',
    planVisit: [['Best Time','Early morning, clear days'],['From Kandy','45 mins by tuk-tuk'],['Entry Fee','~LKR 600'],['Ideal Visit','Half day from Kandy']],
    nearbyLinks: [{href:'/places/kandy',label:'Kandy (20km)'},{href:'/places/ella',label:'Ella'},{href:'/places/horton-plains',label:'Horton Plains'},{href:'/places/hill-country',label:'Hill Country Guide'}],
  },
  {
    slug: 'worlds-end',
    title: "World's End, Horton Plains: Sri Lanka's Most Dramatic Cliff Edge",
    desc: "World's End is a sheer 870-metre cliff at the southern edge of Horton Plains National Park — one of Sri Lanka's most dramatic natural viewpoints, best visited at dawn before the mist arrives.",
    publishDate: '2025-03-01', image: '/images/horton-plains.jpg', imageAlt: "World's End cliff Horton Plains Sri Lanka",
    breadcrumbParent: 'Hill Country', breadcrumbParentHref: '/places/hill-country',
    h1: "World's End", subtitle: "Hill Country • Horton Plains • Sheer Cliff • Dramatic Views", badge: 'Hill Country',
    quickFacts: [['Location','Horton Plains National Park'],['Drop','870 metres sheer cliff'],['Walk from Gate','9km circular trail'],['Best Time','Before 9am (before mist)'],['Altitude','2,100 metres'],['Entry Fee','USD 25–30 per person']],
    body: `
        <p>World's End is Sri Lanka's most dramatic natural viewpoint — a sheer precipice at the southern escarpment of Horton Plains National Park where the high-altitude plateau drops 870 metres in a near-vertical wall of rock and forest to the lowlands below. On a clear morning, the view extends across the southern lowlands to the coast, 50 kilometres away. By mid-morning, cloud typically rolls up from below and obscures everything — which means the entire experience of visiting World's End is defined by timing. Those who arrive early are rewarded with views that rank among the finest in Asia; those who arrive late find themselves at the edge of a grey void. The cliff itself is genuinely vertiginous — stand at the safety barrier and look straight down at the forest canopy 870 metres below, and you understand instantly why this is called World's End.</p>
        <h2>The Horton Plains Walk</h2>
        <p>World's End is reached via a 9.5km circular trail through Horton Plains National Park — a unique high-altitude ecosystem of grassland (patana), cloud forest, montane jungle and flowing streams. The walk typically takes 3–4 hours at a comfortable pace. Along the route, Baker's Falls — a 20-metre waterfall tumbling into a forested gorge — is the other highlight. The park is home to endemic species including the sambar deer, purple-faced langur and an extraordinary variety of endemic birds. The landscape is unlike anywhere else in Sri Lanka: cool, misty, with a haunting quality on overcast days and a luminous beauty on clear ones.</p>
        <h2>Early Start Is Essential</h2>
        <p>The national park gates open at 6am. Enter as early as possible and walk directly to World's End (approximately 4km) before the cloud arrives. By 9–10am on most days, visibility drops to near zero. The walk back from World's End continues via Baker's Falls and completes the circuit. The entire loop is feasible in 3–3.5 hours if you move at a reasonable pace. The park is cool at dawn — temperatures can be 8–12°C before sunrise — so bring warm layers.</p>
        <h2>Getting to Horton Plains</h2>
        <p>The most common approach is from Nuwara Eliya (32km, 1 hour by car) or Haputale (18km, 45 minutes). There is no direct public bus to the park entrance; hire a taxi or tuk-tuk from Nuwara Eliya, Ohiya or Haputale. From Ella, the drive takes about 1.5 hours via Haputale. Most travellers either stay in Nuwara Eliya and take an early morning taxi, or stay in the park area at Ohiya. The taxi from Nuwara Eliya for a return trip costs approximately LKR 3,000–4,000.</p>
        <h2>Best Time to Visit</h2>
        <p>Year-round, but the clearest mornings are December through April and July through September. The southwest monsoon (May–June) brings cloud and rain to the highlands. The inter-monsoon (October–November) can also be overcast. Regardless of season, early morning is always the best time — cloud arrives from the south regardless of the overall weather pattern.</p>
        <h2>Tips for Visitors</h2>
        <ul>
          <li>Be at the park gate when it opens at 6am — this is non-negotiable for clear views</li>
          <li>Bring warm clothing — 8–12°C at dawn at 2,100 metres feels very cold after the lowland heat</li>
          <li>No food or drink is available inside the park — bring sufficient water and snacks</li>
          <li>The entry fee is payable in USD at the gate; have notes ready</li>
          <li>Keep to the marked trail — the park has fragile endemic ecosystems sensitive to off-path walking</li>
        </ul>`,
    affiliateTitle: "Find Hotels Near Horton Plains", affiliateDesc: "Base yourself in Nuwara Eliya or Haputale for an early morning World's End visit — a wide range of options for every budget.", affiliateBtn: 'Search Hotels on Booking.com', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Nuwara+Eliya+Sri+Lanka', affiliateVariant: 'hotel',
    planVisit: [['Gate Opens','6am — arrive immediately'],['Cloud Arrives','By 9–10am — go early'],['Walk Distance','9.5km circular'],['From Nuwara Eliya','1 hr by taxi']],
    nearbyLinks: [{href:'/places/horton-plains',label:'Horton Plains NP'},{href:'/places/nuwara-eliya',label:'Nuwara Eliya'},{href:'/places/ella',label:'Ella'},{href:'/places/adams-peak',label:"Adam's Peak"}],
  },
  {
    slug: 'ravana-falls',
    title: "Ravana Falls, Ella: Sri Lanka's Most Visited Waterfall",
    desc: "Ravana Falls near Ella is Sri Lanka's most visited waterfall — a 25-metre cascade on the Ella-Wellawaya road, steeped in the legend of the demon king Ravana.",
    publishDate: '2025-03-01', image: '/images/ella.jpg', imageAlt: 'Ravana Falls waterfall near Ella Sri Lanka',
    breadcrumbParent: 'Hill Country', breadcrumbParentHref: '/places/hill-country',
    h1: 'Ravana Falls', subtitle: 'Hill Country • Waterfall • Ella Day Trip • Legend of Ravana', badge: 'Hill Country',
    quickFacts: [['Height','25 metres'],['Location','6km from Ella on A23'],['Legend','Cave of demon king Ravana'],['Best Time','After rain (more powerful)'],['Swimming','Possible at the pool below'],['Entry Fee','Free']],
    body: `
        <p>Ravana Falls is the waterfall that most visitors to Ella encounter — a 25-metre cascade dropping from a rocky cliff face directly beside the main Ella–Wellawaya road, named after the demon king Ravana of the Hindu epic Ramayana, who is said in local legend to have held Sita captive in the cave behind the falls. The waterfall is most impressive after rain, when it swells to a powerful curtain of white water; in dry conditions the flow is more modest but still picturesque. A natural pool at the base is popular for swimming — refreshingly cold at the highland elevation.</p>
        <h2>The Legend of Ravana</h2>
        <p>According to the Ramayana, the demon king Ravana abducted Sita (wife of the god Rama) and held her captive in a cave in the mountains of Lanka. The Ella area has numerous sites associated with this legend — the Ravana Cave behind the falls, the Ravana Ella Wildlife Sanctuary, and the ancient temple at Kandy dedicated to Ravana all form part of a "Ramayana trail" that Hindu pilgrims from India follow across Sri Lanka. Whether you engage with the legend spiritually or historically, it adds a dimension to what might otherwise be a standard waterfall stop.</p>
        <h2>Swimming & Photography</h2>
        <p>The pool at the base of the falls is accessible from the road and is a popular swimming spot — the water is cool and clean, and on hot afternoons a dip here is genuinely refreshing. The waterfall is most photogenic in the late afternoon when the light catches it from the west. The road-side viewing platform gives the best perspective of the full height of the falls. For closer access, walk down to the pool level.</p>
        <h2>Getting There</h2>
        <p>Ravana Falls is located 6km from Ella town on the A23 road towards Wellawaya. A tuk-tuk from Ella costs LKR 200–300 return with waiting time. The waterfall is also visible from the road between Ella and Wellawaya, making it an easy stop on a day trip from Ella towards <a href="/places/yala">Yala National Park</a> or <a href="/places/tangalle">Tangalle</a>.</p>
        <h2>Best Time to Visit</h2>
        <p>The falls are most powerful immediately after rain — the months of May through July (inter-monsoon to early southwest monsoon) typically give the highest water volume. December through April, the driest season for the Hill Country, can see reduced flow. Early morning and late afternoon are best for photography; midday light is flat and harsh.</p>
        <h2>Tips for Visitors</h2>
        <ul>
          <li>Combine with Nine Arch Bridge and Little Adam's Peak for a full day of Ella sightseeing</li>
          <li>Bring a change of clothes if you plan to swim — the pool is deeper than it looks and you will get wet</li>
          <li>The road is busy — take care crossing to the waterfall side</li>
          <li>The cave behind the falls can be explored in low water conditions — ask locally about access</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Ella', affiliateDesc: "Ella's guesthouses offer outstanding value — from budget rooms to stunning hillside properties with valley views.", affiliateBtn: 'Search Hotels in Ella', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Ella+Sri+Lanka', affiliateVariant: 'hotel',
    planVisit: [['Best Flow','After rain'],['From Ella','6km, LKR 200 tuk-tuk'],['Entry Fee','Free'],['Swimming','Yes, pool at base']],
    nearbyLinks: [{href:'/places/ella',label:'Ella (6km)'},{href:'/places/nine-arch-bridge',label:'Nine Arch Bridge'},{href:'/places/diyaluma-falls',label:'Diyaluma Falls'},{href:'/blog/sri-lanka-waterfalls',label:'Waterfalls Guide'}],
  },
  {
    slug: 'diyaluma-falls',
    title: "Diyaluma Falls: Sri Lanka's Second Highest Waterfall & Natural Pools",
    desc: "Diyaluma Falls is Sri Lanka's second highest waterfall at 171 metres, with natural infinity pools at the top that are among the most beautiful swimming spots on the island.",
    publishDate: '2025-03-01', image: '/images/ella.jpg', imageAlt: 'Diyaluma Falls natural pools Sri Lanka highest waterfall',
    breadcrumbParent: 'Hill Country', breadcrumbParentHref: '/places/hill-country',
    h1: 'Diyaluma Falls', subtitle: 'Hill Country • 171m Waterfall • Natural Pools • Swimming', badge: 'Hill Country',
    quickFacts: [['Height','171 metres (2nd highest in Sri Lanka)'],['Location','Near Koslanda, Badulla District'],['Top Pools','Natural infinity pools'],['Hike to Top','1.5–2 hrs return'],['Best Flow','Rainy season & inter-monsoon'],['Entry Fee','Small local fee at base']],
    body: `
        <p>Diyaluma Falls is Sri Lanka's second highest waterfall — a 171-metre single-drop cascade on the Punagala Oya river near the town of Koslanda in Badulla District. The falls drop from the edge of the highland plateau in a single unbroken curtain of white water that is visible from the main road between Haputale and Wellawaya. But Diyaluma's real secret is at the top: a series of natural pools formed where the river smooths across flat rock shelves before plunging over the edge — pools that effectively function as natural infinity pools, their edges apparently dropping into nothing above the valley far below. Swimming in these pools, with the sound of the falls below and the highland views all around, is one of the most extraordinary experiences in Sri Lanka.</p>
        <h2>The Natural Pools</h2>
        <p>The pools at the top of Diyaluma are reached by a 1.5–2 hour hike from the base. The trail begins near the base of the falls and ascends steeply through forest and tea estates. The effort is well worth it: the pools at the top are clean, cold and utterly beautiful, with the falls edge nearby giving the impression of swimming at the edge of the world. Locals swim here and the atmosphere is relaxed and communal. Go in the morning when the light is better and before afternoon clouds build. Wet-season months (May–September) offer the fullest pools and most powerful falls.</p>
        <h2>Viewing the Falls</h2>
        <p>The base of the falls is visible from the main road between Haputale and Wellawaya. The viewing area at the base gives the full impression of the waterfall's height — 171 metres is genuinely enormous, and on high-flow days the spray is felt from 50 metres away. The pool at the base is too turbulent for safe swimming but the viewing area is easily accessible. Early morning is best for photography — the falls face east and morning light illuminates the cascade directly.</p>
        <h2>Getting There</h2>
        <p>Diyaluma Falls is on the A4 road between Haputale and Wellawaya — about 15km from Haputale and 25km from Wellawaya. From Ella, the drive takes about 30–40 minutes via Haputale. From Colombo by bus to Wellawaya and then tuk-tuk. A tuk-tuk from Haputale to the falls costs LKR 500–700; from Ella, expect LKR 800–1,200 return with waiting time. The trailhead for the pool hike is signposted near the falls.</p>
        <h2>Best Time to Visit</h2>
        <p>The falls are most powerful from May through September when the southwest monsoon feeds the rivers. The pools at the top are accessible year-round but fullest and most swimmable in the inter-monsoon months of May–June and October–November. December through March (dry season) can see reduced flow.</p>
        <h2>Tips for Visitors</h2>
        <ul>
          <li>The hike to the pools is steep — wear shoes with grip and start early to avoid midday heat</li>
          <li>Bring a change of clothes — the pools are irresistible and you will swim</li>
          <li>Exercise extreme caution at the pool edges near the falls drop — the rocks are slippery and the edge is unfenced</li>
          <li>The hike guide service from local boys at the base is worth taking for the first visit — the trail has confusing branches</li>
        </ul>`,
    affiliateTitle: 'Find Hotels Near Diyaluma Falls', affiliateDesc: 'Stay in Haputale or Ella for easy access to Diyaluma Falls — excellent guesthouses at both bases.', affiliateBtn: 'Search Hotels on Booking.com', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Haputale+Sri+Lanka', affiliateVariant: 'hotel',
    planVisit: [['Height','171 metres'],['Hike to Pools','1.5–2 hrs return'],['Best Flow','May–September'],['From Ella','30–40 mins by tuk-tuk']],
    nearbyLinks: [{href:'/places/ella',label:'Ella (30km)'},{href:'/places/ravana-falls',label:'Ravana Falls'},{href:'/places/horton-plains',label:'Horton Plains'},{href:'/blog/sri-lanka-waterfalls',label:'Waterfalls Guide'}],
  },
  {
    slug: 'bundala',
    title: 'Bundala National Park: Flamingos, Crocodiles & Coastal Wetlands',
    desc: 'Bundala National Park is Sri Lanka\'s premier wetland sanctuary — a Ramsar-listed coastal lagoon system with flamingos, crocodiles, elephants and exceptional birdwatching.',
    publishDate: '2025-03-01', image: '/images/yala.jpg', imageAlt: 'Bundala National Park flamingos wetlands Sri Lanka',
    breadcrumbParent: 'Wildlife Parks', breadcrumbParentHref: '/places/wildlife-parks',
    h1: 'Bundala National Park', subtitle: 'South Coast • Wetland Sanctuary • Flamingos • Birdwatching', badge: 'Wildlife',
    quickFacts: [['Province','Southern Province'],['Size','6,216 hectares'],['UNESCO','Ramsar Wetland + Biosphere Reserve'],['Best For','Birdwatching, flamingos, crocodiles'],['Season','Year-round; Oct–Mar best for birds'],['From Yala','25km west']],
    body: `
        <p>Bundala National Park is one of Sri Lanka's most important wildlife sanctuaries and one of its least crowded — a Ramsar-listed wetland of international importance and UNESCO Biosphere Reserve lying on the south coast between Hambantota and Yala. The park protects a chain of five coastal lagoons (brackish and freshwater) separated by dunes and scrub forest, creating a mosaic of habitats that supports an astonishing diversity of birdlife. Bundala is famous above all for its flamingos — both greater and lesser flamingos gather here in significant numbers between September and March, creating the kind of pink-tinged spectacle usually associated with East Africa rather than South Asia. It is quieter, cheaper and in many ways more rewarding than the more famous Yala National Park just 25km to the east.</p>
        <h2>Birdwatching</h2>
        <p>Bundala has recorded over 200 bird species, of which 62 are migratory visitors from Europe and Central Asia. The lagoons attract enormous flocks of painted storks, spoonbills, great white pelicans, cormorants and herons. The shore is alive with godwits, sandpipers, plovers and other waders during migration season. The flamingos are the headline attraction — flocks of several hundred birds are common October through March, wading in the brackish shallows of the main lagoon. Early morning safaris give the best viewing conditions and the most active birds.</p>
        <h2>Other Wildlife</h2>
        <p>Beyond birds, Bundala supports a healthy population of saltwater crocodiles in its lagoons — up to 4.5 metres long and very much a presence in the shallow waters. Elephants pass through the park seasonally, and the scrub forest has resident populations of Sri Lankan leopard, sloth bear, jackal and spotted deer. The sea turtles — five species — nest on the beach strip within the park between October and May. A jeep safari covering the main lagoon circuit takes about 2.5–3 hours.</p>
        <h2>Getting to Bundala</h2>
        <p>Bundala is on the southern coastal road between Hambantota (15km east) and Tissamaharama (15km west, near Yala). From Colombo, drive south via the Southern Expressway to Matara, then east along the coast — about 3.5–4 hours. From Galle, allow 2.5 hours east. Most visitors combine Bundala with a Yala safari — the parks are close enough to visit on consecutive days from a base in Tissamaharama.</p>
        <h2>Best Time to Visit</h2>
        <p>October through March is the prime period for migratory birds and flamingos. Yala's dry season (February–July) also makes wildlife viewing easier in Bundala as animals concentrate around water sources. The park is open year-round but can flood partially during heavy monsoon rains.</p>
        <h2>Tips for Visitors</h2>
        <ul>
          <li>Bundala is far less crowded than Yala — if you have birding interests, prioritise Bundala for a more peaceful experience</li>
          <li>Hire binoculars — the lagoon birds can be distant and a good pair makes the difference</li>
          <li>Arrange a safari jeep through your guesthouse in Tissamaharama the evening before</li>
          <li>Combine with a Yala safari for a comprehensive south coast wildlife experience</li>
        </ul>`,
    affiliateTitle: 'Book a Bundala Safari', affiliateDesc: 'Half-day and full-day Bundala jeep safaris with experienced naturalist guides — combine with Yala for the ultimate south coast wildlife experience.', affiliateBtn: 'Find Safari Tours', affiliateHref: 'https://www.getyourguide.com/bundala-l5/', affiliateVariant: 'tour',
    planVisit: [['Best Birds','October–March'],['Safari Duration','2.5–3 hrs'],['From Yala','25km, 30 mins'],['From Colombo','3.5–4 hrs by car']],
    nearbyLinks: [{href:'/places/yala',label:'Yala National Park (25km)'},{href:'/places/wildlife-parks',label:'Wildlife Parks Guide'},{href:'/things-to-do/wildlife-safaris',label:'Safari Guide'},{href:'/things-to-do/bird-watching',label:'Birdwatching Guide'}],
  },
  {
    slug: 'wasgamuwa',
    title: 'Wasgamuwa National Park: Remote Elephants & Ancient Ruins Safari',
    desc: "Wasgamuwa National Park is one of Sri Lanka's least-visited elephant sanctuaries — a remote, unspoilt park on the edge of the Cultural Triangle with large herds and ancient ruins.",
    publishDate: '2025-03-01', image: '/images/minneriya.jpg', imageAlt: 'Wasgamuwa National Park elephants Sri Lanka',
    breadcrumbParent: 'Wildlife Parks', breadcrumbParentHref: '/places/wildlife-parks',
    h1: 'Wasgamuwa National Park', subtitle: 'Cultural Triangle • Remote Elephant Park • Ancient Ruins • Solitude', badge: 'Wildlife',
    quickFacts: [['Province','North Central Province'],['Size','39,322 hectares'],['Famous For','Large elephant herds, remote setting'],['Best Season','May–September (dry)'],['Crowds','Very low — genuinely remote'],['From Kandy','3 hrs by car']],
    body: `
        <p>Wasgamuwa is one of Sri Lanka's best-kept wildlife secrets — a large national park on the eastern edge of the Cultural Triangle, bordering the Mahaweli River, where herds of up to 150 elephants gather during the dry season. It is one of the least-visited parks in the country: no tourist buses, no crowded jeep convoys around a leopard sighting, no infrastructure catering to mass tourism. What it offers instead is a genuinely wild safari experience in a landscape of dense scrub forest, ancient tanks (reservoirs) built by medieval kings, and river flats where elephants wade in the shallows at dusk. Combined with the ancient ruins within and around the park boundaries, Wasgamuwa rewards the traveller willing to make the effort to get here.</p>
        <h2>Elephant Herds</h2>
        <p>Wasgamuwa has one of Sri Lanka's largest elephant populations — an estimated 150–200 animals living within and around the park. During the dry season (May–September), when the Mahaweli River drops and the smaller water sources dry up, elephants concentrate around the remaining tanks and river areas, making large-herd sightings almost guaranteed on morning and evening safaris. Mothers with young calves are commonly seen, and the relative absence of tourist pressure means the animals behave more naturally than in heavily visited parks like Yala.</p>
        <h2>Ancient Ruins</h2>
        <p>The landscape around Wasgamuwa is littered with ancient irrigation works built by the medieval Sinhalese kingdoms — great stone-faced earthen dams, sluice gates, and channels now partially reclaimed by forest. Several ruins within the park itself are accessible by jeep. The nearby Dimbulagala rock temple, visible from the park boundary, is an ancient cave monastery site with paintings and inscriptions dating back over 2,000 years.</p>
        <h2>Getting to Wasgamuwa</h2>
        <p>Wasgamuwa is genuinely remote — this is part of its appeal and its challenge. The main entrance is near Giritale, accessible from Polonnaruwa (40km, 1 hour) or Kandy (90km, 3 hours). There is no direct public transport to the park gate; a car or arranged safari jeep is necessary. Most travellers combine Wasgamuwa with a Cultural Triangle visit, staying in Giritale or Polonnaruwa and taking an early morning safari.</p>
        <h2>Best Time to Visit</h2>
        <p>May through September is the dry season and the best time for elephant viewing — water sources concentrate the herds. October through April brings more rain, making the roads challenging and elephants more dispersed, but the vegetation is lush and the park is beautiful.</p>
        <h2>Tips for Visitors</h2>
        <ul>
          <li>Arrange your safari jeep through your Polonnaruwa or Giritale guesthouse — local operators are far cheaper than Colombo-based agencies</li>
          <li>The remote location means facilities are minimal — bring water, food and insect repellent</li>
          <li>Morning safaris (6–10am) are consistently better than afternoon — elephants are most active in cooler hours</li>
          <li>Combine with Minneriya or Kaudulla if you are elephant-focused — the "Gathering" at Minneriya (Jul–Oct) is a larger spectacle</li>
        </ul>`,
    affiliateTitle: 'Book a Wasgamuwa Safari', affiliateDesc: 'Remote elephant safaris with local expert guides — arrange through your guesthouse in Polonnaruwa or Giritale for the best rates.', affiliateBtn: 'Find Safari Tours', affiliateHref: 'https://www.getyourguide.com/polonnaruwa-l5/', affiliateVariant: 'tour',
    planVisit: [['Best Season','May–September'],['Elephant Herds','Up to 150+ animals'],['From Polonnaruwa','1 hr by car'],['Crowds','Very low — genuine wilderness']],
    nearbyLinks: [{href:'/places/minneriya',label:'Minneriya (60km)'},{href:'/places/polonnaruwa',label:'Polonnaruwa (40km)'},{href:'/places/wildlife-parks',label:'Wildlife Parks Guide'},{href:'/things-to-do/wildlife-safaris',label:'Safari Guide'}],
  },
  {
    slug: 'kumana',
    title: "Kumana National Park: Birds, Wildlife & Remote East Coast Safari",
    desc: "Kumana is Sri Lanka's most remote major national park — an exceptional birdwatching destination on the far east coast with leopards, elephants and one of Asia's most important waterbird colonies.",
    publishDate: '2025-03-01', image: '/images/yala.jpg', imageAlt: 'Kumana National Park birds wildlife east coast Sri Lanka',
    breadcrumbParent: 'Wildlife Parks', breadcrumbParentHref: '/places/wildlife-parks',
    h1: 'Kumana National Park', subtitle: 'East Coast • Remote Safari • Birdwatching • Wilderness', badge: 'Wildlife',
    quickFacts: [['Province','Eastern Province'],['Size','35,665 hectares'],['Famous For','Waterbird colony, leopards, elephants'],['Best Season','May–September (east coast dry)'],['From Arugam Bay','45km north'],['Crowds','Extremely low']],
    body: `
        <p>Kumana National Park is Sri Lanka's most remote major wildlife sanctuary — a vast tract of scrub forest, coastal lagoons and mangrove swamps on the southeastern coast, bordering the Indian Ocean to the south and Yala National Park to the west. It is contiguous with Yala but far less visited — receiving perhaps 5% of Yala's annual tourist traffic — which makes it one of the genuinely wild safari experiences remaining in Sri Lanka. Kumana is most famous for its bird colonies: the Kumana Villu (a shallow tank deep in the park) hosts one of Asia's largest and most important waterbird breeding colonies, with painted storks, open-billed storks, night herons and little cormorants nesting in the trees above the water in a spectacle of sound, colour and movement.</p>
        <h2>The Kumana Villu Bird Colony</h2>
        <p>The Kumana Villu is the centrepiece of the park — a seasonally flooded tank that becomes a concentrated breeding site for waterbirds between April and July. At peak breeding season, thousands of birds nest simultaneously in the surrounding trees. Painted storks build their large stick nests in the tree canopy; below, open-billed storks, grey herons, night herons and cormorants jostle for nesting space. The noise and activity is extraordinary — one of Asia's finest wildlife spectacles and almost completely unknown outside birding circles. The tank also attracts crocodiles, elephants and, occasionally, leopards that come to drink.</p>
        <h2>Mammals</h2>
        <p>Kumana's leopard population is significant — the park forms part of the same leopard territory as Yala, and sightings are reported regularly. Elephants move through the park seasonally. Sloth bears, spotted deer, sambar deer, jackals and grey langur monkeys are resident. The absence of tourist pressure means animals behave more naturally and sightings can be more intimate than at busier parks.</p>
        <h2>Getting to Kumana</h2>
        <p>Kumana is most easily accessed from <a href="/places/arugam-bay">Arugam Bay</a> (45km north) during the east coast season (May–September). The road from Arugam Bay is rough and requires a 4WD or high-clearance vehicle. From Colombo, the journey takes about 8–10 hours by car via Monaragala. Most travellers combine Kumana with an Arugam Bay surf trip, taking a single safari day from there. Overnight camping inside the park is possible with advance permits from the Department of Wildlife Conservation.</p>
        <h2>Best Time to Visit</h2>
        <p>May through September — the east coast dry season — is when Kumana is most accessible and the bird colony is at its most spectacular (peak activity April–July). Outside this season, the roads can become impassable with rain and the park is effectively inaccessible.</p>
        <h2>Tips for Visitors</h2>
        <ul>
          <li>A 4WD vehicle is essential — the tracks inside the park are rough and can be flooded even in the dry season</li>
          <li>Kumana requires a permit in advance from the Department of Wildlife Conservation in Colombo — arrange this before travelling</li>
          <li>Bring a birding field guide — the variety of species here rewards careful observation</li>
          <li>The park has no facilities whatsoever — bring everything you need including food, water and camping equipment if staying overnight</li>
        </ul>`,
    affiliateTitle: 'Find Safari Tours Near Kumana', affiliateDesc: 'Remote safari day trips from Arugam Bay to Kumana — local operators know the park and the roads. Book in advance.', affiliateBtn: 'Find Safari Tours', affiliateHref: 'https://www.getyourguide.com/arugam-bay-l5/', affiliateVariant: 'tour',
    planVisit: [['Best Season','May–September'],['Bird Colony Peak','April–July'],['From Arugam Bay','45km, ~1.5 hrs'],['Crowds','Extremely low']],
    nearbyLinks: [{href:'/places/arugam-bay',label:'Arugam Bay (45km)'},{href:'/places/yala',label:'Yala National Park'},{href:'/places/wildlife-parks',label:'Wildlife Parks Guide'},{href:'/things-to-do/bird-watching',label:'Birdwatching Guide'}],
  },
  {
    slug: 'pinnawala',
    title: "Pinnawala Elephant Orphanage: Sri Lanka's Famous Elephant Centre",
    desc: "Pinnawala Elephant Orphanage near Kandy is Sri Lanka's most visited attraction — a sanctuary caring for orphaned elephants with a daily bathing ritual in the Maha Oya river.",
    publishDate: '2025-03-01', image: '/images/udawalawe.jpg', imageAlt: 'Pinnawala Elephant Orphanage Sri Lanka baby elephants',
    breadcrumbParent: 'Hill Country', breadcrumbParentHref: '/places/hill-country',
    h1: 'Pinnawala Elephant Orphanage', subtitle: 'Hill Country • Elephant Sanctuary • Kandy Day Trip • River Bathing', badge: 'Hill Country',
    quickFacts: [['Founded','1975 by Sri Lanka Govt'],['Location','Kegalle, 85km from Colombo'],['Elephants','80+ residents'],['Best Time','River bathing at 10am, 2pm & 6pm'],['From Kandy','45 mins by bus/car'],['Entry Fee','USD 15 per person (foreigners)']],
    body: `
        <p>Pinnawala Elephant Orphanage is Sri Lanka's most visited single attraction — a government-run sanctuary established in 1975 that cares for elephants orphaned by natural causes, human-wildlife conflict or injury. Home to over 80 elephants spanning multiple generations (Pinnawala has the world's largest captive elephant breeding programme), the orphanage is best known for its twice-daily bathing ritual in the Maha Oya river, when the entire herd is led down from the sanctuary to the river below the village — a spectacular procession of giants wading and splashing in the shallows while visitors watch from the riverbank. It is genuinely moving and remarkable, whatever your views on captive elephant welfare.</p>
        <h2>The River Bathing</h2>
        <p>The river bathing sessions — at 10am and 2pm daily (an additional session at 6pm) — are the centrepiece of any Pinnawala visit. The elephants are led from the orphanage down to the Maha Oya river, where they bathe and play in the water for about an hour under the supervision of their mahouts. Baby elephants are especially entertaining — rolling in the shallows, squirting water, and being generally exuberant. The viewing area along the riverbank gets crowded at peak times; arrive 20 minutes before the session starts to secure a good position. The restaurants overlooking the river are the best elevated viewing spot.</p>
        <h2>Bottle Feeding the Calves</h2>
        <p>Young calves at Pinnawala are fed by bottle — a job that requires several feeds per day and which visitors can observe (and occasionally assist with, depending on current policy). The calf feeding area within the sanctuary is accessible during normal opening hours. The sight of a young elephant enthusiastically demolishing a large bottle of milk is unreservedly delightful and a highlight for children and adults alike.</p>
        <h2>Responsible Tourism Note</h2>
        <p>Pinnawala's welfare standards have improved significantly in recent years but remain a subject of debate among elephant welfare organisations. The elephants are chained during certain periods and the commercial pressure of tourist visits creates challenges. We recommend visiting with eyes open — observe the conditions, support responsible tourism advocacy, and avoid elephant rides (not offered at Pinnawala itself but available at some nearby operations).</p>
        <h2>Getting to Pinnawala</h2>
        <p>Pinnawala is 85km from Colombo and 45km from Kandy, making it a natural stop on the Colombo–Kandy route. From Colombo, take a bus to Kegalle (2 hours) and then a tuk-tuk to Pinnawala (10 minutes). From Kandy, buses to Colombo stop at the Pinnawala junction (45 minutes); tuk-tuks from there cost LKR 200. Many travellers visit en route between Colombo and Kandy.</p>
        <h2>Best Time to Visit</h2>
        <p>Pinnawala is open year-round. Time your visit to coincide with the 10am river bathing session — arrive by 9:30am. Weekdays are significantly less crowded than weekends. Rainy season visits are fine — the elephants bathe regardless of rain, and the orphanage is covered in some areas.</p>
        <h2>Tips for Visitors</h2>
        <ul>
          <li>Arrive 20 minutes before the 10am bathing session to secure a good riverbank position</li>
          <li>The restaurants overlooking the river offer the best elevated view — booking a meal gives a legitimate reason to use the best tables</li>
          <li>Do not use the elephant riding operations near the orphanage — these are separate commercial ventures with poor welfare standards</li>
          <li>Combine with the Millennium Elephant Foundation (12km away) for a more welfare-focused elephant interaction experience</li>
        </ul>`,
    affiliateTitle: 'Find Hotels Near Pinnawala', affiliateDesc: 'Stay in Kandy (45 mins) or Kegalle for easy access to Pinnawala — wide range of options for every budget.', affiliateBtn: 'Search Hotels on Booking.com', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Kandy+Sri+Lanka', affiliateVariant: 'hotel',
    planVisit: [['River Bathing','10am & 2pm daily'],['From Kandy','45 mins by bus'],['Entry Fee','USD 15 (foreigners)'],['Best Day','Weekday (fewer crowds)']],
    nearbyLinks: [{href:'/places/kandy',label:'Kandy (45km)'},{href:'/places/udawalawe',label:'Udawalawe Elephants'},{href:'/places/sigiriya',label:'Sigiriya'},{href:'/places/cultural-triangle',label:'Cultural Triangle'}],
  },
  {
    slug: 'gangaramaya-temple',
    title: "Gangaramaya Temple, Colombo: Sri Lanka's Most Eclectic Buddhist Temple",
    desc: "Gangaramaya is Colombo's most famous Buddhist temple — a lavishly decorated complex of museum-like halls filled with religious artefacts, gold statues and offerings from around the world.",
    publishDate: '2025-03-01', image: '/images/colombo.jpg', imageAlt: 'Gangaramaya Temple Colombo Sri Lanka',
    breadcrumbParent: 'Places', breadcrumbParentHref: '/places',
    h1: 'Gangaramaya Temple', subtitle: 'Colombo • Buddhist Temple • Cultural Experience • City Landmark', badge: 'Colombo',
    quickFacts: [['Location','Slave Island, Colombo 2'],['Founded','Late 19th century'],['Famous For','Eclectic collection of religious art'],['Open','Daily 6am–10pm'],['Entry Fee','LKR 500 (foreigners, approx)'],['Nearby','Viharamahadevi Park, Beira Lake']],
    body: `
        <p>Gangaramaya is the most visited and most talked-about temple in Colombo — not because it is the holiest or the oldest, but because it is the most extraordinary. Built in the late 19th century on the banks of Beira Lake in the Slave Island neighbourhood, Gangaramaya has accumulated over a century's worth of donations from Buddhist devotees around the world, creating a collection of religious objects that defies easy categorisation: gold Buddha statues from Thailand and Japan; antique cars donated by wealthy patrons; ivory tusks, model ships, ancient manuscripts, crystal figurines, a life-size elephant, religious relics and art objects from a dozen countries — all crammed into a complex of halls that combine Sri Lankan, Thai, Indian and Chinese architectural styles in a synthesis that is either gloriously eclectic or magnificently chaotic, depending on your perspective.</p>
        <h2>The Temple Complex</h2>
        <p>Gangaramaya is not a single building but a complex of interconnected halls, shrines, pavilions and open courtyards spread over a considerable area. The main shrine hall contains the principal Buddha image — a large, gold-covered seated figure. The adjacent museum halls are the most remarkable part of the complex — room after room of extraordinary objects: a golden throne gifted by Thailand, a collection of ancient monks' robes, cases of gems and jewellery, a library of palm-leaf manuscripts, and display cases of religious art from across Asia. The lakeside setting adds considerably to the atmosphere, particularly at dawn when monks chant and the light hits the golden spires across the water.</p>
        <h2>Navam Perahera</h2>
        <p>Every February on the Navam full moon Poya day, Gangaramaya hosts the Navam Perahera — one of Colombo's largest and most spectacular processions. Decorated elephants, costumed dancers, drummers and torch-bearers parade through the streets around Beira Lake. The Perahera is a deeply traditional spectacle and one of the best cultural events in Sri Lanka for visitors who time their trip correctly.</p>
        <h2>Getting There</h2>
        <p>Gangaramaya is located in Slave Island (Colombo 2), walking distance from the Fort and Pettah commercial districts. From Colombo Fort railway station, walk south along Beira Lake (about 15 minutes) or take a tuk-tuk (LKR 150–200). The Slave Island railway station is immediately adjacent to the temple. Most central Colombo hotels are within tuk-tuk distance. The temple is a natural stop on any Colombo city tour.</p>
        <h2>Best Time to Visit</h2>
        <p>Gangaramaya is open year-round and is accessible in any weather. The most atmospheric times to visit are early morning (6–8am) when monks perform their morning rituals and the temple is quiet, and at dusk when the buildings are illuminated. Poya (full moon) days see increased devotional activity. February's Navam Perahera is the highlight of the annual calendar.</p>
        <h2>Tips for Visitors</h2>
        <ul>
          <li>Remove shoes and dress respectfully — cover shoulders and knees; sarongs are available for hire at the entrance</li>
          <li>A guide is worthwhile for understanding the significance of the objects in the museum halls — ask at the entrance</li>
          <li>Combine with a walk along Beira Lake and a visit to Viharamahadevi Park for a pleasant Colombo afternoon</li>
          <li>The temple shop sells quality Buddhist artefacts and is a good place to buy religious souvenirs</li>
        </ul>`,
    affiliateTitle: 'Find Hotels in Colombo', affiliateDesc: 'Colombo has an excellent range of hotels from budget guesthouses in the Fort to luxury properties overlooking the Indian Ocean.', affiliateBtn: 'Search Hotels on Booking.com', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Colombo+Sri+Lanka', affiliateVariant: 'hotel',
    planVisit: [['Open Hours','Daily 6am–10pm'],['Best Time','Early morning or dusk'],['From Fort','15 mins walk / LKR 200 tuk-tuk'],['Navam Perahera','February full moon']],
    nearbyLinks: [{href:'/places/galle-face-green',label:'Galle Face Green (1km)'},{href:'/things-to-do/temple-hopping',label:'Colombo Temple Guide'},{href:'/places',label:'All Places'},{href:'/guides/getting-around-sri-lanka',label:'Getting Around Guide'}],
  },
  {
    slug: 'galle-face-green',
    title: "Galle Face Green, Colombo: Sunset, Street Food & City Life",
    desc: "Galle Face Green is Colombo's most beloved urban space — a wide ocean promenade where the whole city gathers at sunset for street food, kite flying and sea breezes.",
    publishDate: '2025-03-01', image: '/images/colombo.jpg', imageAlt: 'Galle Face Green Colombo sunset street food Sri Lanka',
    breadcrumbParent: 'Places', breadcrumbParentHref: '/places',
    h1: 'Galle Face Green', subtitle: 'Colombo • Seafront Promenade • Sunset • Street Food', badge: 'Colombo',
    quickFacts: [['Location','Colombo 3 (Colpetty)'],['Length','500 metres of seafront lawn'],['Best Time','Late afternoon and sunset'],['Entry','Free at all times'],['Famous For','Sunset, street food, kite flying'],['Nearby','Fort, Beira Lake, Gangaramaya']],
    body: `
        <p>Galle Face Green is the great public space of Colombo — a 500-metre strip of seafront lawn running between the Galle Face Hotel and the Fort along the Indian Ocean waterfront. Built by the British colonial administration in 1859, it served as a military parade ground and horse racing track before becoming the city's premier public promenade. Today it is where Colombo's residents come to exhale: families spreading picnic blankets at dusk, children flying kites in the sea wind, couples watching the sun drop into the Indian Ocean, hawkers selling spiced chickpeas and the distinctive Sri Lankan street snack of sothi (a coconut milk flatbread), and groups of young men playing cricket in the fading light. It is one of the most genuinely pleasant urban spaces in South Asia — free, inclusive, open to everyone and at its absolute best in the hour before sunset.</p>
        <h2>Sunset at Galle Face</h2>
        <p>The sunset from Galle Face Green is one of Colombo's most reliable pleasures. Facing west directly over the Indian Ocean, the view is unobstructed — just the horizon, the waves crashing against the sea wall below, and a sky that turns from blue to gold to pink. The whole city seems to know this and the promenade fills with spectators an hour before dusk. Find a spot on the sea wall, buy a bag of spiced chickpeas from a passing vendor, and simply watch. It costs nothing and is one of the more straightforwardly lovely things you can do in any city in Asia.</p>
        <h2>Street Food</h2>
        <p>The street food scene at Galle Face Green is excellent and extremely cheap. Fixed stalls and mobile vendors offer: isso vade (prawn-topped lentil fritters), kottu roti, grilled corn, coconut roti, spiced chickpeas, ice cream, fresh king coconut and a variety of sweet Sri Lankan snacks. The stall owners are experienced at dealing with tourists and prices are posted clearly. Eating your way along the promenade at sunset is a quintessential Colombo experience.</p>
        <h2>Kite Flying</h2>
        <p>The reliable sea breeze makes Galle Face Green one of the most popular kite-flying spots in Sri Lanka. Vendors sell simple kites at the promenade, and on weekend afternoons the sky above the green is filled with dozens of kites of all sizes. It is particularly popular with families on weekend evenings and is a wonderful, low-cost activity for children.</p>
        <h2>Getting There</h2>
        <p>Galle Face Green is centrally located in Colombo — most city-centre hotels are within walking distance or a short tuk-tuk ride (LKR 150–300 from Fort). The Galle Face Hotel, a grand colonial-era property at the southern end of the green, is a Colombo landmark in its own right. The promenade is accessible at all hours and entry is completely free.</p>
        <h2>Best Time to Visit</h2>
        <p>The hour before sunset — roughly 5:30–6:30pm year-round — is the prime time. Weekends are busier and more festive; weekdays are calmer. Avoid the hottest part of the afternoon (12–3pm) when the exposed promenade becomes very hot. Morning visits are peaceful but the atmosphere is at its best in the evening.</p>
        <h2>Tips for Visitors</h2>
        <ul>
          <li>Come hungry — the street food is genuinely good and very cheap</li>
          <li>Bring cash — vendors do not accept cards</li>
          <li>The sea wall is unguarded and the waves can crash over it in rough weather — be aware of your surroundings</li>
          <li>Combine with a visit to Gangaramaya Temple (1km north) for a complete Colombo cultural afternoon</li>
          <li>The rooftop bar at the Galle Face Hotel is a splendid place for a sundowner with an unobstructed ocean view</li>
        </ul>`,
    affiliateTitle: 'Find Hotels Near Galle Face Green', affiliateDesc: 'The Galle Face Hotel is a classic Colombo landmark; nearby Fort and Colpetty have excellent options from boutique to budget.', affiliateBtn: 'Search Hotels on Booking.com', affiliateHref: 'https://www.booking.com/searchresults.html?ss=Galle+Face+Colombo+Sri+Lanka', affiliateVariant: 'hotel',
    planVisit: [['Best Time','5:30–6:30pm (sunset)'],['Entry','Free'],['Best Day','Any — weekends most festive'],['From Fort','15 mins walk']],
    nearbyLinks: [{href:'/places/gangaramaya-temple',label:'Gangaramaya Temple (1km)'},{href:'/things-to-do/temple-hopping',label:'Colombo Temples'},{href:'/blog/colombo-city-guide',label:'Colombo City Guide'},{href:'/places',label:'All Places'}],
  },
];

for (const p of pages) {
  const content = place(p);
  writeFileSync(join(base, `${p.slug}.astro`), content, 'utf8');
  console.log(`✓ places/${p.slug}.astro`);
}
console.log(`\nBatch 3 complete: ${pages.length} places pages written.`);
