import { Link } from "react-router-dom";
import type { NewsArticle } from "../types";
import { timeAgo } from "../utils/date";

/** Numbered editorial list — deliberately not a card grid. */
export default function TrendingList({ articles }: { articles: NewsArticle[] }) {
  return (
    <div className="trending-list">
      {articles.map((a, i) => (
        <Link to={`/news/${a.id}`} className="trending-item" key={a.id}>
          <span className="num">{i + 1}</span>
          <span className="txt">
            <h3>
              {a.headline}
              {i === 0 && <span className="hot-tag">🔥 HOT</span>}
            </h3>
            <span>
              {a.categoryLabel} · {timeAgo(a.publishedAt)}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
