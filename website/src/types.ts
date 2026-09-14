export interface NewsArticle {
  id: string;
  category: string;
  categoryLabel: string;
  headline: string;
  summary: string;
  body: string[];
  image: string;
  author: string;
  publishedAt: string;
  readTimeMinutes: number;
  location?: string;
  featured?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  image: string;
  duration: string;
  publishedAt: string;
  views: string;
  /** Real YouTube video id (youtube.com/watch?v=...) when this segment is sourced from the live channel. */
  youtubeId?: string;
}

export interface NotificationItem {
  id: string;
  type: "breaking" | "live" | "update" | "general";
  title: string;
  message: string;
  timeAgo: string;
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

export interface Category {
  id: string;
  label: string;
}
