import { Link } from "react-router-dom";
import { mediaUrl } from "../api";
import type { NewsArticle } from "../types";
import { timeAgo } from "../utils/date";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link to={`/news/${article.id}`} className="news-card">
      <div className="thumb">
        <img src={mediaUrl(article.image)} alt="" loading="lazy" />
      </div>
      <div className="body">
        <span className="kicker neutral">{article.categoryLabel}</span>
        <h3>{article.headline}</h3>
        <div className="meta">
          <span>{article.location}</span>
          <span>·</span>
          <span>{timeAgo(article.publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
}
