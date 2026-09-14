import { useEffect, useState } from "react";
import { api, mediaUrl } from "../api";
import type { ProgrammeSlot } from "../types";

export default function Live() {
  const [programme, setProgramme] = useState<ProgrammeSlot[]>([]);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    api.programme().then(setProgramme);
  }, []);

  const nowPlaying = programme.find((p) => p.isLiveNow);

  return (
    <section className="tight">
      <div className="wrap">
        <div style={{ marginBottom: 28 }}>
          <div className="kicker"><i className="tally" />ON AIR</div>
          <h1 style={{ fontSize: "var(--fs-h1)", marginTop: 10 }}>Live TV</h1>
        </div>

        <div className="live-section-grid">
          <div className="player" onClick={() => setPlaying((p) => !p)}>
            <img src={mediaUrl("tv-studio.jpg")} alt="" />
            <div className="top">
              <span className="live-pill">
                <i className="tally" />
                LIVE
              </span>
              <span className="viewers" style={{ background: "rgba(10,7,5,.5)", padding: "6px 10px", borderRadius: 3 }}>
                3.1K watching
              </span>
            </div>
            <span className="play-btn">
              <svg viewBox="0 0 24 24" fill="#fff">
                {playing ? <path d="M6 5h4v14H6zM14 5h4v14h-4z" /> : <path d="M8 5v14l11-7z" />}
              </svg>
            </span>
            <div className="bottom">
              <b>Hamro Varta Television</b>
              <span>Live from Sikkim</span>
            </div>
          </div>

          <div className="rundown">
            <div className="rundown-head">
              <h3>Today's Rundown</h3>
              <span className="kicker neutral">SCHEDULE</span>
            </div>
            {programme.map((slot) => (
              <div className={`rundown-row ${slot.isLiveNow ? "now" : ""}`} key={slot.id}>
                <div className="time">{slot.time}</div>
                <div className="info">
                  <b>
                    {slot.title}
                    {slot.isLiveNow && <span className="onair-tag">ON AIR</span>}
                  </b>
                  <span>{slot.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {nowPlaying && (
          <div style={{ marginTop: 28, padding: 16, background: "var(--red-soft)", borderRadius: 6, maxWidth: 640 }}>
            <span className="kicker" style={{ marginBottom: 6, display: "block" }}>NOW PLAYING</span>
            <p style={{ fontWeight: 700, fontSize: 15 }}>{nowPlaying.title}</p>
            <p style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 4 }}>{nowPlaying.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
