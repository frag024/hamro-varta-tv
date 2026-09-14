import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { api, mediaUrl } from "../api";
import type { NewsArticle, VideoItem, NotificationItem } from "../types";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";
import NewsRow from "../components/NewsRow";
import Reveal from "../components/Reveal";
import { EASE } from "../motion";
import { formatPublishTime, timeAgo } from "../utils/date";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

function parseViews(v: string): number {
  const n = parseFloat(v);
  return v.toUpperCase().includes("K") ? n * 1000 : n;
}

export default function Home() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [openVideo, setOpenVideo] = useState<VideoItem | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const heroFade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    api.news().then(setArticles);
    api.videos().then(setVideos);
    api.notifications().then(setNotifications);
  }, []);

  if (articles.length === 0) return <div className="wrap" style={{ padding: "80px 0" }}>Loading…</div>;

  const lead = articles.find((a) => a.featured) ?? articles[0];
  const sikkimByDate = [...articles]
    .filter((a) => a.category === "sikkim")
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const trending = (sikkimByDate.length >= 5 ? sikkimByDate : articles.slice().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )).slice(0, 5);
  const wire = articles
    .filter((a) => a.id !== lead.id)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  // Second flagship slot: a real clip from the YouTube channel, not a news article —
  // Rato Katro dance drama by default, falling back to the biggest sports story or
  // most-watched video overall if that clip isn't in the feed.
  const sportsVideos = videos.filter((v) => v.category === "sports");
  const secondVideo =
    videos.find((v) => v.id === "v-005") ??
    [...(sportsVideos.length ? sportsVideos : videos)].sort(
      (a, b) => parseViews(b.views) - parseViews(a.views)
    )[0];

  // Real Sikkim Premier League football coverage from the channel, for its own corner
  // on the Trending section rather than getting buried in the general sports rail.
  const football = videos.filter((v) => /premier league|\bspl\b/i.test(v.title));

  const latestUpdate = notifications[0];

  return (
    <>
      {/* ================= FLAGSHIP STORY — full-bleed image, flashy breaking-news treatment ================= */}
      <div className="flagship" ref={heroRef}>
        <motion.img
          src={mediaUrl(lead.image)}
          alt=""
          className="flagship-bg"
          style={{ y: heroY }}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
        />
        <div className="flagship-scrim" />
        <div className="wrap flagship-inner">
          <motion.div
            className="flagship-content"
            variants={container}
            initial="hidden"
            animate="show"
            style={{ opacity: heroFade }}
          >
            <motion.span className="breaking-tag" variants={item}>
              <i className="tally" />
              BREAKING · {lead.categoryLabel.toUpperCase()} · {lead.location}
            </motion.span>
            <motion.h1 variants={item}>{lead.headline}</motion.h1>
            <motion.p className="deck" variants={item}>
              {lead.summary}
            </motion.p>
            <motion.div className="flagship-actions" variants={item}>
              <Link className="btn" to={`/news/${lead.id}`}>
                Read the Full Story <span className="arrow">→</span>
              </Link>
              <Link className="btn ghost" to="/live">
                Watch Live
              </Link>
            </motion.div>
            <motion.div className="meta mono" variants={item}>
              {timeAgo(lead.publishedAt)} · {lead.readTimeMinutes} min read · By {lead.author}
            </motion.div>
          </motion.div>

          <motion.span
            className="flagship-index mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            STORY 1 OF 2
          </motion.span>
        </div>
      </div>

      {/* ================= SECOND STORY — broadcast card for a real clip from the YouTube channel ================= */}
      {secondVideo && (
        <section className="second-story">
          <Reveal className="ss-text" as="div">
            <div className="ss-head-row">
              <span className="kicker">{secondVideo.categoryLabel.toUpperCase()}</span>
              {secondVideo.youtubeId && (
                <span className="yt-badge">
                  <i className="tally" style={{ background: "var(--red)" }} />
                  ON YOUTUBE
                </span>
              )}
            </div>
            <h2>
              <a href="#" onClick={(e) => { e.preventDefault(); setOpenVideo(secondVideo); }}>
                {secondVideo.title}
              </a>
            </h2>
            <p>{secondVideo.description}</p>
            <div className="mono" style={{ fontSize: 12, color: "var(--slate)", marginTop: 18 }}>
              {secondVideo.duration} · {secondVideo.views} views
            </div>
            <button className="btn" onClick={() => setOpenVideo(secondVideo)} style={{ marginTop: 22, display: "inline-flex" }}>
              <svg viewBox="0 0 24 24" width="16" height="16" style={{ fill: "currentColor" }}>
                <path d="M23 12s0-3.4-.44-5a3 3 0 0 0-2.1-2.1C18.8 4.4 12 4.4 12 4.4s-6.8 0-8.46.5A3 3 0 0 0 1.44 7C1 8.6 1 12 1 12s0 3.4.44 5a3 3 0 0 0 2.1 2.1c1.66.5 8.46.5 8.46.5s6.8 0 8.46-.5a3 3 0 0 0 2.1-2.1c.44-1.6.44-5 .44-5zM9.8 15.5v-7l6 3.5-6 3.5z" />
              </svg>
              Watch on YouTube
            </button>
          </Reveal>
          <Reveal className="ss-media" as="div" style={{ cursor: "pointer" }}>
            <div onClick={() => setOpenVideo(secondVideo)} style={{ position: "relative", height: "100%" }}>
              <img src={mediaUrl(secondVideo.image)} alt="" />
              <div className="ss-scrim" />
              <span className="ss-duration mono">{secondVideo.duration}</span>
              <span className="play-btn" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                <svg viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </div>
          </Reveal>
        </section>
      )}

      {/* ================= TRENDING IN SIKKIM — light editorial split, matches News page ================= */}
      <section className="alt">
        <Reveal className="wrap" as="div">
          <div className="sec-head">
            <div>
              <div className="kicker">MOST READ TODAY</div>
              <h2 className="accent-red" style={{ marginTop: 8 }}>Trending in Sikkim</h2>
            </div>
            <Link className="sec-link" to="/news?category=sikkim">
              All Sikkim news <span className="arrow">→</span>
            </Link>
          </div>
          {trending.length > 0 && (
            <div className="split-editorial">
              <Link to={`/news/${trending[0].id}`} className="split-feature">
                <div className="thumb">
                  <img src={mediaUrl(trending[0].image)} alt="" loading="lazy" />
                </div>
                <span className="kicker" style={{ marginTop: 18 }}>
                  {trending[0].categoryLabel.toUpperCase()}
                </span>
                <h3>{trending[0].headline}</h3>
                <p>{trending[0].summary}</p>
                <div className="meta mono" style={{ fontSize: 12, color: "var(--slate)" }}>
                  {trending[0].location} · {timeAgo(trending[0].publishedAt)}
                </div>
              </Link>
              <div>
                {trending.slice(1).map((a, i) => (
                  <NewsRow key={a.id} article={a} index={i + 2} />
                ))}
              </div>
            </div>
          )}

          {football.length > 0 && (
            <div className="football-corner">
              <div className="divider mono" style={{ fontSize: 11 }}>
                ⚽ FOOTBALL CORNER · SIKKIM PREMIER LEAGUE
              </div>
              <div className="video-rail" style={{ marginTop: 6 }}>
                {football.map((v) => (
                  <VideoCard key={v.id} video={v} onOpen={setOpenVideo} />
                ))}
              </div>
            </div>
          )}
        </Reveal>
      </section>

      {/* ================= THE WIRE — everything else, deliberately quiet ================= */}
      <section className="wire tight">
        <Reveal className="wrap" as="div">
          <div className="sec-head" style={{ alignItems: "baseline" }}>
            <div>
              <div className="kicker neutral">THE WIRE</div>
              <h2 style={{ fontSize: "var(--fs-h2)", marginTop: 8 }}>Everything Else, As It Comes In</h2>
              <p style={{ fontSize: 13.5, color: "var(--slate)", marginTop: 8, maxWidth: "52ch" }}>
                Smaller updates from across Sikkim and beyond — not headline news today, but worth knowing.
              </p>
            </div>
            {latestUpdate && (
              <div className="mono" style={{ fontSize: 11.5, color: "var(--slate)", display: "flex", alignItems: "center", gap: 7 }}>
                <i className="tally" style={{ background: "var(--slate)", animation: "none" }} />
                UPDATED {latestUpdate.timeAgo.toUpperCase()}
              </div>
            )}
          </div>

          <div className="wire-list">
            {wire.map((a) => (
              <Link to={`/news/${a.id}`} className="wire-row" key={a.id}>
                <time className="mono">{formatPublishTime(a.publishedAt).split("· ")[1]}</time>
                <span className="cat mono">{a.categoryLabel}</span>
                <span className="headline">{a.headline}</span>
                <span className="loc mono">{a.location}</span>
              </Link>
            ))}
          </div>

          <Link className="sec-link" to="/news" style={{ marginTop: 24, display: "inline-flex" }}>
            Browse all news <span className="arrow">→</span>
          </Link>
        </Reveal>
      </section>

      {/* ================= ON VIDEO — compact, secondary ================= */}
      {videos.length > 0 && (
        <section className="tight">
          <Reveal className="wrap" as="div">
            <div className="sec-head">
              <div>
                <div className="kicker neutral">FROM THE NEWSROOM</div>
                <h2 style={{ fontSize: "var(--fs-h2)" }}>On Video</h2>
              </div>
              <Link className="sec-link" to="/videos">
                All videos <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal className="wrap bleed" row>
            <div className="video-rail">
              {videos.slice(0, 6).map((v) => (
                <VideoCard key={v.id} video={v} onOpen={setOpenVideo} />
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {openVideo && <VideoModal video={openVideo} onClose={() => setOpenVideo(null)} />}
    </>
  );
}
