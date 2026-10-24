const siteURL = 'https://thetrailsofceylon.com';
const siteTitle = 'The Trails of Ceylon';
const siteDesc = 'Expert travel guides and itineraries for Sri Lanka — destinations, activities, visa info and planning resources.';

const posts = [
  { slug: 'adams-peak-hiking-guide', title: "Adam's Peak Hiking Guide: Sri Lanka's Sacred Sunrise Trek", description: "Everything you need to know about hiking Adam's Peak — the best route, timing, what to expect, and how to reach the summit for sunrise.", date: '2025-03-20', image: '/images/adams-peak.webp' },
  { slug: 'best-beaches-sri-lanka', title: 'Best Beaches in Sri Lanka: The Complete Guide', description: "From the surf at Arugam Bay to the turtle-watching beaches of Rekawa — Sri Lanka's best beaches ranked and reviewed.", date: '2025-03-15', image: '/images/mirissa.webp' },
  { slug: 'colombo-city-guide', title: 'Colombo City Guide: What to See, Eat and Do', description: 'A complete guide to Colombo — the best neighbourhoods, restaurants, attractions and day trips from Sri Lanka\'s capital.', date: '2025-04-01', image: '/images/colombo.webp' },
  { slug: 'ella-rock-hike', title: 'Ella Rock Hike: Complete Trail Guide', description: 'How to hike Ella Rock without a guide — the full route, timings, what to bring, and the best viewpoints.', date: '2025-03-10', image: '/images/ella.webp' },
  { slug: 'ella-travel-guide', title: 'Ella Travel Guide: Sri Lanka\'s Hill Country Village', description: 'Everything you need to know about Ella — Nine Arch Bridge, Little Adam\'s Peak, the best hikes, restaurants and guesthouses.', date: '2025-02-28', image: '/images/ella.webp' },
  { slug: 'hikkaduwa-travel-guide', title: 'Hikkaduwa Travel Guide: Beaches, Reefs & Nightlife', description: "Sri Lanka's most vibrant beach town — coral reefs, surf, and the best nightlife on the south coast.", date: '2025-03-01', image: '/images/hikkaduwa.webp' },
  { slug: 'kalpitiya-kitesurfing', title: 'Kitesurfing in Kalpitiya: Sri Lanka\'s Kite Capital', description: 'Everything you need to know about kitesurfing in Kalpitiya — when to go, best schools, conditions and where to stay.', date: '2025-04-10', image: '/images/kalpitiya.webp' },
  { slug: 'pigeon-island-snorkelling', title: 'Pigeon Island: Sri Lanka\'s Best Snorkelling Spot', description: "A guide to visiting Pigeon Island National Park — how to get there, what to see underwater, and the best time to visit.", date: '2025-04-15', image: '/images/pigeon-island.webp' },
  { slug: 'sigiriya-rock-fortress-guide', title: 'Sigiriya Rock Fortress: The Complete Visitor Guide', description: 'Everything you need to know about visiting Sigiriya — the history, how to climb it, what to see and the best time to go.', date: '2025-02-15', image: '/images/sigiriya.webp' },
  { slug: 'sigiriya-tips', title: '10 Essential Tips for Visiting Sigiriya', description: 'Avoid the crowds, beat the heat, and make the most of your Sigiriya visit with these practical insider tips.', date: '2025-02-20', image: '/images/sigiriya.webp' },
  { slug: 'sri-lanka-family-travel', title: 'Sri Lanka with Kids: The Family Travel Guide', description: 'Everything you need to plan a family trip to Sri Lanka — best destinations, activities for kids, safety tips and practical advice.', date: '2025-05-01', image: '/images/og-default.webp' },
  { slug: 'sri-lanka-food-guide', title: 'Sri Lanka Food Guide: What to Eat and Where', description: "From hoppers and kottu to fresh seafood — a guide to Sri Lanka's best dishes, street food and restaurants.", date: '2025-04-20', image: '/images/og-default.webp' },
  { slug: 'sri-lanka-honeymoon-guide', title: 'Sri Lanka Honeymoon Guide: Romantic Destinations & Resorts', description: 'The best honeymoon destinations in Sri Lanka — luxury resorts, romantic beaches and unforgettable experiences for couples.', date: '2025-05-10', image: '/images/mirissa.webp' },
  { slug: 'sri-lanka-photography-guide', title: 'Sri Lanka Photography Guide: Best Spots & Tips', description: "The best photography locations in Sri Lanka — from Sigiriya at sunrise to the tea country in the mist.", date: '2025-05-15', image: '/images/og-default.webp' },
  { slug: 'sri-lanka-waterfalls', title: 'Best Waterfalls in Sri Lanka: The Complete Guide', description: "Sri Lanka's most spectacular waterfalls — Diyaluma, Bambarakanda, Ravana Falls and more.", date: '2025-04-25', image: '/images/og-default.webp' },
  { slug: 'turtle-watching-sri-lanka', title: 'Turtle Watching in Sri Lanka: Complete Guide', description: 'Where and when to see nesting sea turtles in Sri Lanka — Rekawa, Kosgoda and the best ethical wildlife experiences.', date: '2025-04-05', image: '/images/og-default.webp' },
  { slug: '2-weeks-in-sri-lanka-itinerary', title: 'The Perfect 2 Weeks in Sri Lanka Itinerary', description: 'A day-by-day 14-day Sri Lanka itinerary covering the Cultural Triangle, hill country, south coast and east coast.', date: '2025-03-05', image: '/images/og-default.webp' },
  { slug: 'colombo-day-trips', title: 'Best Day Trips from Colombo', description: "The best day trips from Colombo — Negombo, Galle, Sigiriya, Pinnawala and more within easy reach of the capital.", date: '2025-04-30', image: '/images/colombo.webp' },
  { slug: 'sri-lanka-budget-travel', title: 'Sri Lanka on a Budget: Complete Guide', description: 'How to travel Sri Lanka cheaply — budget accommodation, cheap transport, free attractions and money-saving tips.', date: '2025-05-20', image: '/images/og-default.webp' },
  { slug: 'best-time-visit-sri-lanka', title: 'Best Time to Visit Sri Lanka: Month-by-Month Guide', description: "When to visit Sri Lanka — a complete month-by-month breakdown of weather, seasons and the best time to visit each region.", date: '2025-03-25', image: '/images/og-default.webp' },
];

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  const items = sorted.map(post => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteURL}/blog/${post.slug}/</link>
      <guid isPermaLink="true">${siteURL}/blog/${post.slug}/</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <enclosure url="${siteURL}${post.image}" type="image/webp" />
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <link>${siteURL}/</link>
    <description>${escapeXml(siteDesc)}</description>
    <language>en-gb</language>
    <managingEditor>hello@thetrailsofceylon.com (The Trails of Ceylon)</managingEditor>
    <webMaster>hello@thetrailsofceylon.com (The Trails of Ceylon)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteURL}/apple-touch-icon.png</url>
      <title>${escapeXml(siteTitle)}</title>
      <link>${siteURL}/</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
