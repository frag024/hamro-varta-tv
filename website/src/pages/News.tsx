import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { api, mediaUrl } from "../api";
import type { NewsArticle, Category } from "../types";
import NewsRow from "../components/NewsRow";
import { timeAgo } from "../utils/date";
import { SOCIAL } from "../social";

export default function News() {
  const [params, setParams] = useSearchParams();
  const active = params.get("category") || "latest";
  const query = params.get("q") || "";
  const [categories, setCategories] = useState<Category[]>([]);
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    api.categories().then(setCategories);
  }, []);

  useEffect(() => {
    api.newsByCategory(active).then(setArticles);
  }, [active]);

  const filtered = query
    ? articles.filter(
        (a) =>
          a.headline.toLowerCase().includes(query.toLowerCase()) ||
          a.summary.toLowerCase().includes(query.toLowerCase())
      )
    : articles;

  const [feature, ...rows] = filtered;

  return (
    <section className="tight">
      <div className="wrap">
        <div style={{ marginBottom: 28 }}>
          <div className="kicker neutral">REPORTING · SIKKIM &amp; BEYOND</div>
          <h1 style={{ fontSize: "var(--fs-h1)", marginTop: 10 }}>
            {query ? `Results for “${query}”` : "News"}
          </h1>
          {query && (
            <Link className="sec-link" to="/news" style={{ marginTop: 10, display: "inline-flex" }}>
              Clear search ×
            </Link>
          )}
          <div className="follow-line">
            <span>Full bulletins, live updates &amp; ground reports:</span>
            <a href={SOCIAL.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <span aria-hidden="true">·</span>
            <a href={SOCIAL.youtube} target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>

        {!query && (
          <div className="chips">
            {categories.map((c) => (
              <button
                key={c.id}
                className={`chip ${active === c.id ? "active" : ""}`}
                onClick={() => setParams(c.id === "latest" ? {} : { category: c.id })}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <p style={{ color: "var(--slate)", padding: "40px 0" }}>No stories match yet.</p>
        ) : (
          <div className="split-editorial">
            <Link to={`/news/${feature.id}`} className="split-feature">
              <div className="thumb">
                <img src={mediaUrl(feature.image)} alt="" loading="lazy" />
              </div>
              <span className="kicker" style={{ marginTop: 18 }}>{feature.categoryLabel.toUpperCase()}</span>
              <h3>{feature.headline}</h3>
              <p>{feature.summary}</p>
              <div className="meta mono" style={{ fontSize: 12, color: "var(--slate)" }}>
                {feature.location} · {timeAgo(feature.publishedAt)}
              </div>
            </Link>
            <div>
              {rows.map((a) => (
                <NewsRow key={a.id} article={a} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
