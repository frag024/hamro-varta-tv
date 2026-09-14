import { VideoItem } from '../types';
import { banners, news, videos as videoImages } from '../assets/images';

// MOCK / DEMO CONTENT ONLY — see mockNews.ts header note.
// Replace with a `GET /videos` API later; screens consume `VideoItem[]` only.

export const mockVideos: VideoItem[] = [
  {
    id: 'v-001',
    title: 'Sikkim Today: Evening News Bulletin',
    description:
      'Tonight’s roundup of the day’s top stories from across Sikkim, presented by the Hamro Varta newsroom.',
    category: 'bulletins',
    categoryLabel: 'News Bulletins',
    thumbnail: videoImages.newsBulletin,
    duration: '18:24',
    publishedAt: '2026-09-08T19:00:00+05:30',
    views: '12.4K',
  },
  {
    id: 'v-002',
    title: 'Inside Gangtok: A Walk Down MG Marg',
    description:
      'A ground report capturing the evening energy of Gangtok’s iconic pedestrian promenade.',
    category: 'ground-reports',
    categoryLabel: 'Ground Reports',
    thumbnail: banners.mgMarg,
    duration: '09:12',
    publishedAt: '2026-09-07T18:30:00+05:30',
    views: '8.7K',
  },
  {
    id: 'v-003',
    title: 'Exclusive Ground Report: Tourism Season Kicks Off',
    description:
      'Our team travels to Pelling and Namchi to see how homestay owners are preparing for the season.',
    category: 'ground-reports',
    categoryLabel: 'Ground Reports',
    thumbnail: news.pellingView,
    duration: '14:03',
    publishedAt: '2026-09-06T17:00:00+05:30',
    views: '15.2K',
  },
  {
    id: 'v-004',
    title: 'Special Interview: Voices from the Tourism Board',
    description:
      'A sit-down conversation on the future of sustainable tourism development across Sikkim.',
    category: 'interviews',
    categoryLabel: 'Interviews',
    thumbnail: videoImages.pressConference,
    duration: '22:47',
    publishedAt: '2026-09-05T20:00:00+05:30',
    views: '6.1K',
  },
  {
    id: 'v-005',
    title: 'Tourism & Travel: Exploring Sikkim',
    description:
      'A visual journey through Tsomgo Lake, Nathula and the high passes of East Sikkim.',
    category: 'shows',
    categoryLabel: 'Shows',
    thumbnail: banners.tsomgoLake,
    duration: '26:15',
    publishedAt: '2026-09-04T19:30:00+05:30',
    views: '21.9K',
  },
  {
    id: 'v-006',
    title: 'Hamro Varta Special: Faces of Rumtek',
    description:
      'An in-depth look at daily life and tradition inside Rumtek Monastery.',
    category: 'shows',
    categoryLabel: 'Shows',
    thumbnail: videoImages.monasteryFlags,
    duration: '19:40',
    publishedAt: '2026-09-03T19:30:00+05:30',
    views: '9.8K',
  },
  {
    id: 'v-007',
    title: 'Morning Bulletin: Top Stories from Sikkim',
    description: 'A concise morning wrap of the top stories making news across the state today.',
    category: 'bulletins',
    categoryLabel: 'News Bulletins',
    thumbnail: news.sikkimAssembly,
    duration: '11:05',
    publishedAt: '2026-09-08T07:30:00+05:30',
    views: '10.3K',
  },
  {
    id: 'v-008',
    title: 'Interview: Farmers on Organic Certification',
    description:
      'Cooperative leaders discuss the impact of organic certification on cardamom and tea exports.',
    category: 'interviews',
    categoryLabel: 'Interviews',
    thumbnail: news.teaGarden,
    duration: '16:52',
    publishedAt: '2026-09-02T18:00:00+05:30',
    views: '5.4K',
  },
  {
    id: 'v-009',
    title: 'Ground Report: Weather Advisory in North Sikkim',
    description:
      'Our correspondent reports from the field as authorities respond to a weather advisory.',
    category: 'ground-reports',
    categoryLabel: 'Ground Reports',
    thumbnail: news.weatherClouds,
    duration: '07:38',
    publishedAt: '2026-09-08T09:00:00+05:30',
    views: '18.6K',
  },
  {
    id: 'v-010',
    title: 'Sikkim Today: Ropeway Ridership on the Rise',
    description: 'A short feature on the growing role of Gangtok’s ropeway in daily commuting.',
    category: 'latest',
    categoryLabel: 'Latest Videos',
    thumbnail: news.gangtokRopeway,
    duration: '05:21',
    publishedAt: '2026-09-03T12:30:00+05:30',
    views: '4.2K',
  },
  {
    id: 'v-011',
    title: 'Popular This Week: Valley of Flowers',
    description: 'Our most-watched feature on the early blooms of Yumthang Valley.',
    category: 'popular',
    categoryLabel: 'Popular',
    thumbnail: news.yumthangValley,
    duration: '13:47',
    publishedAt: '2026-09-02T09:30:00+05:30',
    views: '24.5K',
  },
  {
    id: 'v-012',
    title: 'Popular This Week: Heritage Toy Train Route',
    description: 'A look at conservation efforts for the historic narrow-gauge railway.',
    category: 'popular',
    categoryLabel: 'Popular',
    thumbnail: news.toyTrain,
    duration: '10:58',
    publishedAt: '2026-08-28T13:30:00+05:30',
    views: '19.1K',
  },
];

export const getVideosByCategory = (category: string): VideoItem[] =>
  category === 'latest' ? mockVideos : mockVideos.filter((v) => v.category === category);

export const getVideoById = (id: string): VideoItem | undefined =>
  mockVideos.find((v) => v.id === id);
