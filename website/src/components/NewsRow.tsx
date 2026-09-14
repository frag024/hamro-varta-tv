import { Link } from "react-router-dom";
import { mediaUrl } from "../api";
import type { NewsArticle } from "../types";
import { timeAgo } from "../utils/date";

export default function NewsRow({
  article,
  index,
  compact = false,
}: {
  article: NewsArticle;
  /** shown as a large editorial index number instead of a thumbnail-only row */
  index?: number;
  compact?: boolean;
}) {
  return (
    <Link to={`/news/${article.id}`} className={`news-row ${compact ? "compact" : ""}`}>
      {typeof index === "number" && <span className="idx">{String(index).padStart(2, "0")}</span>}
      <span className="thumb">
        <img src={mediaUrl(article.image)} alt="" loading="lazy" />
      </span>
      <span className="info">
        <span className="kicker neutral" style={{ marginBottom: 6, display: "inline-flex" }}>
          {article.categoryLabel}
        </span>
        <h3>{article.headline}</h3>
        <span className="meta">
          <span>{article.location}</span>
          <span>·</span>
          <span>{timeAgo(article.publishedAt)}</span>
        </span>
      </span>
    </Link>
  );
}
