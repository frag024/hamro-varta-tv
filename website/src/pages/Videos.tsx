import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { api, mediaUrl } from "../api";
import type { VideoItem } from "../types";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";
import Reveal from "../components/Reveal";
import { SOCIAL } from "../social";

const SECTIONS: { id: string; title: string }[] = [
  { id: "sports", title: "Sports Coverage" },
  { id: "bulletins", title: "News Bulletins" },
  { id: "interviews", title: "Interviews" },
  { id: "ground-reports", title: "Ground Reports" },
  { id: "shows", title: "Shows" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.75 } } };

function parseViews(v: string): number {
  const n = parseFloat(v);
  return v.toUpperCase().includes("K") ? n * 1000 : n;
}

export default function Videos() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [openVideo, setOpenVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    api.videos().then(setVideos);
  }, []);

  if (videos.length === 0) return <div className="wrap" style={{ padding: "80px 0" }}>Loading…</div>;

  const [featured, ...rest] = videos;
  const mostWatched = [...videos].sort((a, b) => parseViews(b.views) - parseViews(a.views)).slice(0, 5);

  return (
    <>
      {/* ================= WATCH — landing page built entirely from the real Hamro Varta YouTube channel ================= */}
      <div className="flagship" style={{ minHeight: "78vh" }}>
        <motion.img
          src={mediaUrl(featured.image)}
          alt=""
          className="flagship-bg"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2 }}
        />
        <div className="flagship-scrim" />
        <div className="wrap flagship-inner">
          <motion.div className="flagship-content" variants={container} initial="hidden" animate="show">
            <motion.span className="breaking-tag" variants={item}>
              <i className="tally" />
              ON THE CHANNEL · {featured.categoryLabel.toUpperCase()}
            </motion.span>
            <motion.h1 variants={item} style={{ fontSize: "clamp(32px,5.4vw,64px)" }}>
              {featured.title}
            </motion.h1>
            <motion.p className="deck" variants={item}>
              {featured.description}
            </motion.p>
            <motion.div className="flagship-actions" variants={item}>
              <button className="btn" onClick={() => setOpenVideo(featured)}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
                Watch Now
              </button>
              <a
                className="btn ghost"
                href={SOCIAL.youtube}
                target="_blank"
                rel="noreferrer"
              >
                Subscribe on YouTube
              </a>
            </motion.div>
            <motion.div className="meta mono" variants={item}>
              {featured.duration} · {featured.views} views · straight from Hamro Varta's YouTube channel
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================= MOST WATCHED ================= */}
      <section className="alt">
        <Reveal className="wrap" as="div">
          <div className="sec-head">
            <div>
              <div className="kicker">FROM THE CHANNEL</div>
              <h2 className="accent-red" style={{ marginTop: 8 }}>Most Watched Right Now</h2>
            </div>
            <a className="sec-link" href={`${SOCIAL.youtube}/videos`} target="_blank" rel="noreferrer">
              Full channel <span className="arrow">→</span>
            </a>
          </div>
          <div className="trending-list">
            {mostWatched.map((v, i) => (
              <div className="trending-item" key={v.id} onClick={() => setOpenVideo(v)} style={{ cursor: "pointer" }}>
                <span className="num">{i + 1}</span>
                <span className="txt">
                  <h3>{v.title}</h3>
                  <span>
                    {v.categoryLabel} · {v.duration} · {v.views} views
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= CATEGORY RAILS ================= */}
      <section className="tight">
        <div className="wrap" style={{ marginBottom: 8 }}>
          <div className="kicker neutral">SPORTS · BULLETINS · INTERVIEWS · GROUND REPORTS · SHOWS</div>
          <h2 style={{ fontSize: "var(--fs-h2)", marginTop: 10, marginBottom: 8 }}>Browse by Section</h2>
        </div>

        {SECTIONS.map((sec) => {
          const items = rest.filter((v) => v.category === sec.id);
          if (items.length === 0) return null;
          return (
            <Reveal className="wrap bleed" row key={sec.id} style={{ marginTop: 36 }}>
              <div className="divider mono" style={{ fontSize: 11 }}>{sec.title.toUpperCase()}</div>
              <div className="video-rail" style={{ marginTop: 6 }}>
                {items.map((v) => (
                  <VideoCard key={v.id} video={v} onOpen={setOpenVideo} />
                ))}
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* ================= SUBSCRIBE CTA ================= */}
      <section className="dark tight">
        <Reveal className="wrap" as="div" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div className="kicker onred">EVERY VIDEO ON THIS PAGE IS REAL</div>
            <h2 style={{ color: "#fff", fontSize: "clamp(22px,2.6vw,30px)", marginTop: 10, maxWidth: "28ch" }}>
              Pulled straight from Hamro Varta Television's YouTube channel.
            </h2>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="btn" href={SOCIAL.youtube} target="_blank" rel="noreferrer">
              Subscribe on YouTube <span className="arrow">→</span>
            </a>
            <Link className="btn ghost" to="/live">
              Watch Live TV
            </Link>
          </div>
        </Reveal>
      </section>

      {openVideo && <VideoModal video={openVideo} onClose={() => setOpenVideo(null)} />}
    </>
  );
}
