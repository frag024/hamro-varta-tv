// Shared content types for Hamro Varta Television.
// These interfaces are the contract between the UI and the data layer.
// Today the data layer is `src/data/mock*.ts` (static). Later it can be swapped
// for real API responses without touching screens/components, as long as the
// API returns data shaped like these interfaces.

export type CategoryId =
  | 'latest'
  | 'sikkim'
  | 'national'
  | 'politics'
  | 'business'
  | 'sports'
  | 'entertainment'
  | 'tourism'
  | 'culture';

export interface Category {
  id: CategoryId;
  label: string;
}

export interface NewsArticle {
  id: string;
  category: CategoryId;
  categoryLabel: string;
  headline: string;
  summary: string;
  body: string[]; // paragraphs
  image: number; // require() asset
  author: string;
  publishedAt: string; // ISO string
  readTimeMinutes: number;
  location?: string;
  isFeatured?: boolean;
  isEditorsPick?: boolean;
  tags?: string[];
}

export type VideoCategory =
  | 'latest'
  | 'popular'
  | 'interviews'
  | 'ground-reports'
  | 'bulletins'
  | 'shows';

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  categoryLabel: string;
  thumbnail: number; // require() asset
  duration: string; // "12:45"
  publishedAt: string; // ISO string
  views: string; // "12.4K" demo string
}

export type NotificationType = 'breaking' | 'live' | 'update' | 'general';

export interface NotificationItem {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timeAgo: string;
  read?: boolean;
  linkedArticleId?: string;
  linkedVideoId?: string;
}

export interface ProgrammeSlot {
  id: string;
  time: string;
  title: string;
  description?: string;
  isLiveNow?: boolean;
}

export interface TrendingItem {
  id: string;
  rank: number;
  title: string;
  articleId?: string;
}
