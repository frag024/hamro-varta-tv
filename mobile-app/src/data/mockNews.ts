import { NewsArticle } from '../types';
import { banners, news } from '../assets/images';

// -----------------------------------------------------------------------
// MOCK / DEMO CONTENT ONLY.
// Every article below is written for the Hamro Varta Television client
// demo. Headlines and quotes are plausible, Sikkim-specific placeholder
// journalism — not verified reporting. Replace this file with a real
// `GET /articles` API integration for production; screens consume the
// `NewsArticle[]` shape only, so no UI changes should be required.
// -----------------------------------------------------------------------

export const mockNews: NewsArticle[] = [
  {
    id: 'n-001',
    category: 'tourism',
    categoryLabel: 'Tourism',
    headline: 'Sikkim prepares for a new chapter in tourism and development',
    summary:
      'State tourism authorities outline plans to widen access to Gangtok, Pelling and Namchi ahead of the autumn travel season, with new homestay clusters and improved road links.',
    body: [
      'Sikkim is gearing up for what officials are calling one of its most ambitious tourism seasons in recent years, with new infrastructure projects and community-led homestay clusters expected to open across Gangtok, Pelling and Namchi over the coming months.',
      'Officials from the state tourism department say the push is aimed at spreading visitor footfall beyond the capital and into smaller towns, easing pressure on Gangtok during peak months while giving rural households a direct stake in tourism income.',
      'Road connectivity between Ravangla and Namchi has also been flagged for upgrades, with resurfacing work expected to shorten travel time for tourists moving between South and West Sikkim.',
      'Local tour operators have welcomed the announcement, noting that better signage, homestay certification and trained local guides could help the state compete with better-known Himalayan destinations while keeping tourism sustainable for mountain communities.',
      'Hamro Varta Television will continue tracking the rollout of these projects through the season, with ground reports planned from Pelling and Namchi in the coming weeks.',
    ],
    image: banners.heroKanchenjunga,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-09-08T04:10:00+05:30',
    readTimeMinutes: 4,
    location: 'Gangtok',
    isFeatured: true,
    tags: ['tourism', 'infrastructure', 'sikkim'],
  },
  {
    id: 'n-002',
    category: 'sikkim',
    categoryLabel: 'Sikkim',
    headline: 'New development initiatives announced across Sikkim',
    summary:
      'A fresh package of local development initiatives spanning roads, drinking water and rural electrification has been announced for districts across the state.',
    body: [
      'State authorities have announced a new round of development initiatives covering rural roads, drinking water supply and electrification across several districts of Sikkim.',
      'The initiatives are expected to be rolled out in phases, with North and West Sikkim prioritised first given ongoing connectivity challenges in higher-altitude villages.',
      'Local panchayat representatives said the announcement had been long awaited, particularly for water supply schemes in villages that currently depend on seasonal streams.',
      'Officials say project timelines will be reviewed quarterly, with public updates expected to be shared through district offices.',
    ],
    image: banners.heroGangtok,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-09-08T02:45:00+05:30',
    readTimeMinutes: 3,
    location: 'Gangtok',
    tags: ['development', 'infrastructure'],
  },
  {
    id: 'n-003',
    category: 'tourism',
    categoryLabel: 'Tourism',
    headline: 'Tourism season brings renewed activity to Gangtok',
    summary:
      'Hotels and homestays across Gangtok report rising bookings as the autumn season begins, with MG Marg once again drawing large evening crowds.',
    body: [
      'Gangtok is seeing a noticeable rise in visitor activity as the autumn tourism season gets underway, with hotel associations reporting stronger advance bookings compared to the same period last year.',
      'MG Marg, the city’s pedestrian promenade, has once again become a focal point for evening crowds, with local vendors and cafes reporting brisk business.',
      'Tour operators attribute the early uptick to improved flight connectivity into the region and continued interest in Sikkim as a monsoon-to-autumn Himalayan destination.',
      'The state tourism department has urged visitors to check road advisories before travelling to higher-altitude destinations such as Tsomgo Lake and Nathula, where weather can change quickly.',
    ],
    image: banners.mgMarg,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-09-07T11:20:00+05:30',
    readTimeMinutes: 3,
    location: 'Gangtok',
    isEditorsPick: true,
    tags: ['tourism', 'gangtok'],
  },
  {
    id: 'n-004',
    category: 'sikkim',
    categoryLabel: 'Sikkim',
    headline: 'Weather department issues advisory for parts of Sikkim',
    summary:
      'The regional meteorological centre has issued an advisory for North and West Sikkim, citing the possibility of heavy rainfall and localised landslides over the next 48 hours.',
    body: [
      'The regional meteorological centre has issued a weather advisory for parts of North and West Sikkim, warning of heavy rainfall and the possibility of localised landslides over the next 48 hours.',
      'Officials have advised travellers heading towards Lachung, Lachen and Yumthang Valley to check road conditions before departure, and to avoid unnecessary travel after dark.',
      'District administrations have placed disaster response teams on standby along key highway stretches known to be vulnerable during heavy rain.',
      'Residents in low-lying areas near streams and rivers have also been advised to stay alert, with local authorities monitoring water levels through the advisory period.',
    ],
    image: news.weatherClouds,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-09-08T06:00:00+05:30',
    readTimeMinutes: 2,
    location: 'North Sikkim',
    tags: ['weather', 'advisory'],
  },
  {
    id: 'n-005',
    category: 'sports',
    categoryLabel: 'Sports',
    headline: 'Local athletes prepare for upcoming national competition',
    summary:
      'A group of young athletes from Gangtok and Namchi is finalising preparations ahead of a national-level athletics meet, with local coaches reporting strong training numbers this season.',
    body: [
      'A group of young athletes from across Sikkim, including several from Gangtok and Namchi, are in the final stages of preparation ahead of an upcoming national-level athletics competition.',
      'Coaches at the state sports academy say this year has seen stronger participation numbers, with more schools sending athletes for trials than in previous seasons.',
      'The state sports department has arranged additional training sessions at the Gangtok sports ground over the coming weeks, along with a sports science workshop for coaches.',
      'Officials say the goal is to build a sustainable athletics pipeline from school-level competitions through to state and national representation.',
    ],
    image: news.footballMatch,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-09-06T09:30:00+05:30',
    readTimeMinutes: 3,
    location: 'Gangtok',
    tags: ['sports', 'athletics'],
  },
  {
    id: 'n-006',
    category: 'politics',
    categoryLabel: 'Politics',
    headline: 'Assembly session to review rural infrastructure spending',
    summary:
      'The Sikkim Legislative Assembly is expected to review the current fiscal year’s rural infrastructure spending in its upcoming session, with several constituencies seeking clarity on pending projects.',
    body: [
      'The Sikkim Legislative Assembly is set to take up a detailed review of rural infrastructure spending in its next session, with members from several constituencies expected to raise questions on delayed projects.',
      'The review is expected to cover road connectivity, rural water schemes and public building construction across districts, with department heads likely to be called in to brief the house.',
      'Opposition members have indicated they will seek a district-wise breakdown of fund utilisation, while the ruling party has said it welcomes scrutiny of ongoing work.',
      'Hamro Varta Television will carry live updates from the Assembly session as it proceeds.',
    ],
    image: news.sikkimAssembly,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-09-07T08:15:00+05:30',
    readTimeMinutes: 3,
    location: 'Gangtok',
    tags: ['politics', 'assembly'],
  },
  {
    id: 'n-007',
    category: 'culture',
    categoryLabel: 'Culture',
    headline: 'Preparations underway for upcoming monastery festival',
    summary:
      'Monasteries around Gangtok are preparing for an upcoming religious festival, with masked Cham dances and community gatherings expected to draw visitors from across the region.',
    body: [
      'Monasteries in and around Gangtok are in the midst of preparations for an upcoming religious festival, with monks rehearsing the traditional masked Cham dance ahead of the main celebration.',
      'The festival is expected to draw both local devotees and visitors, with several monasteries opening their courtyards to the public for the occasion.',
      'Cultural officials say events like this remain central to Sikkim’s identity, and have called for continued support to preserve traditional practices for younger generations.',
      'Local authorities are coordinating traffic and parking arrangements around major monasteries to manage the expected turnout.',
    ],
    image: news.losarFestival,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-09-05T10:00:00+05:30',
    readTimeMinutes: 3,
    location: 'Gangtok',
    tags: ['culture', 'festival'],
  },
  {
    id: 'n-008',
    category: 'business',
    categoryLabel: 'Business',
    headline: 'Organic farming cooperatives report steady growth in exports',
    summary:
      'Farmer cooperatives across Sikkim, India’s first fully organic state, report rising demand for cardamom, ginger and tea shipments this year.',
    body: [
      'Farmer cooperatives across Sikkim are reporting steady growth in exports of organic cardamom, ginger and tea, building on the state’s status as India’s first fully organic state.',
      'Cooperative leaders say improved cold-chain logistics and direct buyer relationships have helped reduce dependence on middlemen, improving margins for small farmers.',
      'The state agriculture department has said it plans to expand certification support to more farmer groups in South and West Sikkim over the next year.',
      'Industry observers note that demand for certified organic produce from the Himalayan region continues to grow steadily in both domestic and export markets.',
    ],
    image: news.teaGarden,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-09-04T07:40:00+05:30',
    readTimeMinutes: 4,
    location: 'Temi, South Sikkim',
    tags: ['business', 'agriculture'],
  },
  {
    id: 'n-009',
    category: 'sikkim',
    categoryLabel: 'Sikkim',
    headline: 'Gangtok ropeway sees rise in daily ridership',
    summary:
      'The Gangtok ropeway has recorded a steady rise in daily ridership this month, with both commuters and tourists using the service.',
    body: [
      'The Gangtok ropeway has seen a steady rise in daily ridership this month, according to operators, with both local commuters and tourists making use of the service.',
      'Operators say the ropeway continues to serve as a practical connector between different parts of the hilly city, cutting travel time during peak traffic hours.',
      'Plans to extend operating hours during the tourist season are reportedly under consideration, subject to maintenance and staffing arrangements.',
    ],
    image: news.gangtokRopeway,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-09-03T12:10:00+05:30',
    readTimeMinutes: 2,
    location: 'Gangtok',
    tags: ['sikkim', 'transport'],
  },
  {
    id: 'n-010',
    category: 'tourism',
    categoryLabel: 'Tourism',
    headline: 'Yumthang Valley draws early-season visitors as flowers bloom',
    summary:
      'The Yumthang Valley, often called the "Valley of Flowers" of Sikkim, is seeing an early wave of visitors this season.',
    body: [
      'The Yumthang Valley in North Sikkim, known locally as the Valley of Flowers, is drawing an early wave of visitors this season as rhododendrons and alpine blooms cover the hillsides.',
      'Local guides say road conditions leading up to the valley have improved compared to previous years, though they continue to advise visitors to travel with registered operators given the terrain.',
      'Homestay owners in nearby Lachung report near-full occupancy over the coming weekends, a promising sign for the local tourism economy.',
    ],
    image: news.yumthangValley,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-09-02T09:00:00+05:30',
    readTimeMinutes: 3,
    location: 'Lachung, North Sikkim',
    tags: ['tourism', 'nature'],
  },
  {
    id: 'n-011',
    category: 'sikkim',
    categoryLabel: 'Sikkim',
    headline: 'Nathula Pass reopens to tourist convoys after brief closure',
    summary:
      'Nathula Pass has reopened to tourist convoys following a brief closure for maintenance, with border authorities confirming normal operations have resumed.',
    body: [
      'Nathula Pass has reopened to tourist convoys after a brief closure for routine maintenance work, border authorities confirmed.',
      'Visitors are reminded that permits remain mandatory and that convoys operate on a fixed schedule dependent on weather and road conditions at the high-altitude pass.',
      'Tour operators in Gangtok say demand for Nathula permits typically rises through the autumn months as skies clear.',
    ],
    image: news.nathulaPass,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-09-01T08:30:00+05:30',
    readTimeMinutes: 2,
    location: 'Nathula',
    tags: ['sikkim', 'tourism', 'border'],
  },
  {
    id: 'n-012',
    category: 'entertainment',
    categoryLabel: 'Entertainment',
    headline: 'Local musicians spotlighted at Gangtok cultural evening',
    summary:
      'An evening of local music and performance at a Gangtok venue drew a strong crowd this weekend, spotlighting emerging artists from across the state.',
    body: [
      'A cultural evening held in Gangtok this weekend brought together local musicians and performers, drawing a strong turnout from residents and visitors alike.',
      'The event, organised by a collective of young artists, featured a mix of folk-influenced and contemporary performances, reflecting Sikkim’s evolving music scene.',
      'Organisers said they hope to make the evening a recurring feature, giving emerging local talent a consistent platform.',
    ],
    image: banners.gangtokNight,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-08-31T14:00:00+05:30',
    readTimeMinutes: 2,
    location: 'Gangtok',
    tags: ['entertainment', 'music'],
  },
  {
    id: 'n-013',
    category: 'sikkim',
    categoryLabel: 'Sikkim',
    headline: 'Namchi sees fresh push for heritage tourism circuit',
    summary:
      'Authorities in Namchi are working on a heritage tourism circuit connecting key religious and cultural sites across South Sikkim.',
    body: [
      'Authorities in Namchi are working on plans for a heritage tourism circuit that would connect several religious and cultural landmarks across South Sikkim.',
      'The proposed circuit is expected to include improved signage, rest points and guided walking routes between major sites.',
      'Officials say the initiative is designed to encourage visitors to spend more time in South Sikkim rather than treating it as a day trip from Gangtok.',
    ],
    image: news.namchiTown,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-08-30T10:45:00+05:30',
    readTimeMinutes: 3,
    location: 'Namchi',
    tags: ['sikkim', 'heritage'],
  },
  {
    id: 'n-014',
    category: 'sikkim',
    categoryLabel: 'Sikkim',
    headline: 'Buddha Park in Ravangla draws steady stream of visitors',
    summary:
      'The Buddha Park in Ravangla continues to draw a steady stream of visitors, with local vendors and guides reporting consistent footfall through the week.',
    body: [
      'The Buddha Park in Ravangla continues to be one of South Sikkim’s most visited landmarks, with local vendors and guides reporting a steady stream of visitors through the week.',
      'Municipal authorities say maintenance work around the park grounds is ongoing to keep pace with rising visitor numbers.',
      'Local business owners have welcomed the consistent footfall, noting it supports a wider network of guesthouses and eateries in the area.',
    ],
    image: news.ravangla,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-08-29T09:20:00+05:30',
    readTimeMinutes: 2,
    location: 'Ravangla',
    tags: ['sikkim', 'tourism'],
  },
  {
    id: 'n-015',
    category: 'national',
    categoryLabel: 'National',
    headline: 'Toy train heritage route sees renewed conservation interest',
    summary:
      'Heritage rail advocates are pushing for renewed conservation funding for narrow-gauge routes connecting the eastern Himalayan foothills.',
    body: [
      'Heritage rail advocates are pushing for renewed conservation funding for narrow-gauge routes that connect towns across the eastern Himalayan foothills.',
      'Enthusiasts argue that these routes remain an important part of regional heritage and tourism, drawing visitors interested in rail history alongside mountain scenery.',
      'Officials have acknowledged the interest but say funding decisions will depend on broader regional infrastructure priorities.',
    ],
    image: news.toyTrain,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-08-28T13:00:00+05:30',
    readTimeMinutes: 3,
    location: 'Darjeeling-Sikkim foothills',
    tags: ['national', 'heritage'],
  },
  {
    id: 'n-016',
    category: 'sikkim',
    categoryLabel: 'Sikkim',
    headline: 'Lal Bazaar traders seek better storage facilities',
    summary:
      'Traders at Gangtok’s Lal Bazaar have called for improved cold storage facilities ahead of the winter season, citing produce wastage concerns.',
    body: [
      'Traders at Gangtok’s Lal Bazaar have called on municipal authorities to improve cold storage facilities at the market, citing concerns over produce wastage during seasonal gluts.',
      'Vendors say better storage would help stabilise prices for both buyers and sellers, particularly during the monsoon and early winter months.',
      'Municipal officials have said the request is under consideration as part of a broader market modernisation plan.',
    ],
    image: news.localMarket,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-08-27T08:00:00+05:30',
    readTimeMinutes: 2,
    location: 'Gangtok',
    tags: ['sikkim', 'business'],
  },
  {
    id: 'n-017',
    category: 'sikkim',
    categoryLabel: 'Sikkim',
    headline: 'Schools across Gangtok take part in community awareness drive',
    summary:
      'Students from schools across Gangtok took part in a community awareness march this week, organised jointly with local health authorities.',
    body: [
      'Students from several schools across Gangtok took part in a community awareness march this week, organised jointly with local health authorities.',
      'The event featured banners, street plays and short talks aimed at spreading public health awareness among younger residents.',
      'Organisers said the turnout reflected strong community support for youth-led awareness initiatives in the capital.',
    ],
    image: news.schoolChildren,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-08-26T09:15:00+05:30',
    readTimeMinutes: 2,
    location: 'Gangtok',
    tags: ['sikkim', 'community'],
  },
  {
    id: 'n-018',
    category: 'sikkim',
    categoryLabel: 'Sikkim',
    headline: 'Rumtek Monastery welcomes visitors ahead of festival season',
    summary:
      'Rumtek Monastery, one of Sikkim’s most significant Buddhist institutions, is welcoming a growing number of visitors ahead of the festival season.',
    body: [
      'Rumtek Monastery, one of Sikkim’s most significant Buddhist institutions, is seeing a growing number of visitors as the festival season approaches.',
      'Monastery caretakers say they have added additional guidance for visitors around appropriate conduct and photography within the monastery complex.',
      'Local tour operators consider Rumtek a key stop on Gangtok itineraries, and expect visitor numbers to rise further in the coming weeks.',
    ],
    image: banners.rumtekMonastery,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-08-25T10:30:00+05:30',
    readTimeMinutes: 3,
    location: 'Rumtek, Gangtok',
    isEditorsPick: true,
    tags: ['sikkim', 'culture'],
  },
  {
    id: 'n-019',
    category: 'tourism',
    categoryLabel: 'Tourism',
    headline: 'Tsomgo Lake permits see high demand as skies clear',
    summary:
      'Demand for Tsomgo Lake travel permits has risen sharply this week as clearer skies improve visibility at the high-altitude lake.',
    body: [
      'Demand for travel permits to Tsomgo Lake has risen sharply this week, as improving weather conditions bring clearer skies to the high-altitude lake.',
      'Tour operators in Gangtok say early morning departures remain the most popular slot, giving visitors the best chance of clear views before afternoon cloud cover sets in.',
      'Authorities have reminded visitors that permits and appropriate warm clothing remain essential given the altitude and variable weather.',
    ],
    image: banners.tsomgoLake,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-08-24T07:50:00+05:30',
    readTimeMinutes: 2,
    location: 'Tsomgo Lake',
    tags: ['tourism', 'sikkim'],
  },
  {
    id: 'n-020',
    category: 'national',
    categoryLabel: 'National',
    headline: 'Himalayan states discuss shared disaster-response coordination',
    summary:
      'Representatives from Himalayan border states met this week to discuss shared frameworks for disaster-response coordination during the monsoon season.',
    body: [
      'Representatives from several Himalayan border states, including Sikkim, met this week to discuss shared frameworks for coordinating disaster response during the monsoon season.',
      'Discussions reportedly focused on early-warning systems, shared communication channels and joint resource deployment during landslide-prone months.',
      'Officials described the meeting as a step towards more coordinated regional planning, with further discussions expected before the next monsoon season.',
    ],
    image: news.mountainRoad,
    author: 'Hamro Varta TV Desk',
    publishedAt: '2026-08-23T11:00:00+05:30',
    readTimeMinutes: 3,
    location: 'Gangtok',
    tags: ['national', 'disaster-management'],
  },
];

export const getArticleById = (id: string): NewsArticle | undefined =>
  mockNews.find((article) => article.id === id);

export const getArticlesByCategory = (category: string): NewsArticle[] =>
  category === 'latest' ? mockNews : mockNews.filter((a) => a.category === category);

export const getRelatedArticles = (article: NewsArticle, limit = 4): NewsArticle[] =>
  mockNews
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, limit)
    .concat(mockNews.filter((a) => a.id !== article.id && a.category !== article.category))
    .slice(0, limit);
