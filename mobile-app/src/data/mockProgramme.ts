import { ProgrammeSlot, TrendingItem } from '../types';

// MOCK / DEMO CONTENT ONLY — see mockNews.ts header note.

export const mockProgramme: ProgrammeSlot[] = [
  { id: 'p-1', time: '7:00 AM', title: 'Sunrise Bulletin', description: 'Top overnight stories from Sikkim and beyond.' },
  { id: 'p-2', time: '9:00 AM', title: 'Sikkim News Bulletin', description: 'Morning roundup of state and national headlines.' },
  { id: 'p-3', time: '12:00 PM', title: 'Sikkim News Bulletin', description: 'Midday update with the latest developments.' },
  { id: 'p-4', time: '1:00 PM', title: 'Hamro Varta Special', description: 'Feature programming on people and places across Sikkim.', isLiveNow: true },
  { id: 'p-5', time: '2:00 PM', title: 'Ground Report', description: 'Field reporting from towns and villages across the state.' },
  { id: 'p-6', time: '5:00 PM', title: 'Talk of the Town', description: 'Discussion and analysis on the day’s biggest stories.' },
  { id: 'p-7', time: '7:00 PM', title: 'Evening News Bulletin', description: 'Comprehensive coverage of the day’s events.' },
  { id: 'p-8', time: '9:00 PM', title: 'Prime Time with Hamro Varta', description: 'In-depth interviews and analysis.' },
];

export const mockTrending: TrendingItem[] = [
  { id: 't-1', rank: 1, title: 'Major development announced in Gangtok', articleId: 'n-006' },
  { id: 't-2', rank: 2, title: 'Tourism activity rises across Sikkim', articleId: 'n-003' },
  { id: 't-3', rank: 3, title: 'Weather advisory issued', articleId: 'n-004' },
  { id: 't-4', rank: 4, title: 'Local sporting event attracts attention', articleId: 'n-005' },
];
