import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api, mediaUrl } from "../api";
import type { NewsArticle } from "../types";
import NewsCard from "../components/NewsCard";
import TrendingList from "../components/TrendingList";
import ReadingProgress from "../components/ReadingProgress";
import Reveal from "../components/Reveal";
import { formatPublishTime } from "../utils/date";
import { SOCIAL, CATEGORY_FOLLOW } from "../social";

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [related, setRelated] = useState<NewsArticle[]>([]);
  const [trending, setTrending] = useState<NewsArticle[]>([]);

  useEffect(() => {
    if (!id) return;
    setArticle(null);
    api.article(id).then((a) => {
      setArticle(a);
      api.newsByCategory(a.category).then((list) =>
        setRelated(list.filter((x) => x.id !== a.id).slice(0, 3))
      );
      api.news().then((all) =>
        setTrending(
          [...all]
            .filter((x) => x.id !== a.id)
            .sort((x, y) => new Date(y.publishedAt).getTime() - new Date(x.publishedAt).getTime())
            .slice(0, 5)
        )
      );
    });
    window.scrollTo(0, 0);
  }, [id]);

  const onShare = async () => {
    if (!article) return;
    const shareData = { title: article.headline, text: article.summary, url: window.location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard");
    }
  };

  if (!article) return <div className="wrap" style={{ padding: "80px 0" }}>Loading…</div>;

  return (
    <>
      <ReadingProgress />
      <div className="article-hero">
        <img src={mediaUrl(article.image)} alt="" />
      </div>
      <div className="article-body">
        <span className="kicker">{article.categoryLabel.toUpperCase()}</span>
        <h1>{article.headline}</h1>
        <p className="lede">{article.summary}</p>

        <div className="meta-row">
          <div className="author-avatar">
            {article.author.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{article.author}</div>
            <div className="mono" style={{ fontSize: 12, color: "var(--slate)" }}>
              {formatPublishTime(article.publishedAt)}
              {article.location ? ` · ${article.location}` : ""} · {article.readTimeMinutes} min read
            </div>
          </div>
          <button className="btn ghost" onClick={onShare}>
            Share
          </button>
        </div>

        {article.body.map((p, i) => (
          <p className="body-p" key={i}>
            {p}
          </p>
        ))}

        <div className="story-follow">
          <p>
            {CATEGORY_FOLLOW[article.category] || "For more coverage like this"} from Hamro
            Varta Television:
          </p>
          <div className="story-follow-links">
            <a className="btn ghost" href={SOCIAL.facebook} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
              Follow on Facebook
            </a>
            <a className="btn ghost" href={SOCIAL.youtube} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M23 12s0-3.4-.44-5a3 3 0 0 0-2.1-2.1C18.8 4.4 12 4.4 12 4.4s-6.8 0-8.46.5A3 3 0 0 0 1.44 7C1 8.6 1 12 1 12s0 3.4.44 5a3 3 0 0 0 2.1 2.1c1.66.5 8.46.5 8.46.5s6.8 0 8.46-.5a3 3 0 0 0 2.1-2.1c.44-1.6.44-5 .44-5zM9.8 15.5v-7l6 3.5-6 3.5z"/></svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>

        <Link className="back-link" to="/news">
          ← Back to News
        </Link>
      </div>

      {trending.length > 0 && (
        <div className="article-aside">
          <div className="divider mono" style={{ fontSize: 11 }}>TRENDING NOW</div>
          <TrendingList articles={trending} />
        </div>
      )}

      {related.length > 0 && (
        <section className="alt" style={{ marginTop: 56 }}>
          <Reveal className="wrap" as="div">
            <div className="sec-head">
              <div>
                <div className="kicker neutral">MORE FROM THIS CATEGORY</div>
                <h2 style={{ fontSize: 22 }}>Related Stories</h2>
              </div>
            </div>
            <div className="news-grid">
              {related.map((a) => (
                <NewsCard key={a.id} article={a} />
              ))}
            </div>
          </Reveal>
        </section>
      )}
    </>
  );
}
