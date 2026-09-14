/**
 * Hamro Varta Television's real, verified social accounts.
 *
 * Note: there are two YouTube channels using the Hamro Varta name.
 * @hamrovartatelevision7581 (41K subs, ~570 uploads) is almost entirely a
 * 2022–24 "Sikkim Idol" talent-show archive plus daily bulletins that stopped
 * in April 2024 — dormant. @Hamrovartatv (UCA9Rsr-sOw9K-eHxBtsXrfQ, smaller,
 * ~450 uploads) is the one actually posting today's bulletins, ground
 * reports, interviews and Sikkim Premier League football coverage — verified
 * via yt-dlp channel dumps — so that's the one every video on this site is
 * sourced from and the one linked here.
 */
export const SOCIAL = {
  facebook: "https://www.facebook.com/HamrovartaSikkim/",
  youtube: "https://www.youtube.com/@Hamrovartatv",
};

/** Per-category framing for "follow this story" prompts on News. */
export const CATEGORY_FOLLOW: Record<string, string> = {
  politics: "For live Assembly updates and full political coverage",
  sikkim: "For more ground reports from across Sikkim",
  national: "For more national and cross-border coverage",
  business: "For more business and economy coverage",
  sports: "For match highlights and full sports coverage",
  entertainment: "For more entertainment coverage",
  tourism: "For more travel guides and destination coverage",
  culture: "For festival highlights and cultural coverage",
};
