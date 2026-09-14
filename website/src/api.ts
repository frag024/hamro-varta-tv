// Thin fetch layer over the local CMS API (server/index.js).
// Swap API_BASE for a real backend later — every screen consumes the
// same typed shapes from src/types.ts either way.
export const API_BASE = "http://localhost:4000/api";
export const MEDIA_BASE = "http://localhost:4000/media";

export function mediaUrl(filename?: string): string {
  if (!filename) return "";
  if (filename.startsWith("http")) return filename;
  return `${MEDIA_BASE}/${filename}`;
}

async function getJSON<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`Request failed: ${path}`);
  return res.json();
}

export const api = {
  news: () => getJSON<import("./types").NewsArticle[]>("/news"),
  newsByCategory: (category: string) =>
    getJSON<import("./types").NewsArticle[]>(
      category === "latest" ? "/news" : `/news?category=${category}`
    ),
  article: (id: string) => getJSON<import("./types").NewsArticle>(`/news/${id}`),
  videos: () => getJSON<import("./types").VideoItem[]>("/videos"),
  video: (id: string) => getJSON<import("./types").VideoItem>(`/videos/${id}`),
  notifications: () => getJSON<import("./types").NotificationItem[]>("/notifications"),
  programme: () => getJSON<import("./types").ProgrammeSlot[]>("/programme"),
  categories: () => getJSON<import("./types").Category[]>("/categories"),
};
