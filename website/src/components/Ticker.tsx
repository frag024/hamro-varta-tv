import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";
import type { NotificationItem } from "../types";

export default function Ticker() {
  const [items, setItems] = useState<NotificationItem[]>([]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    api.notifications().then(setItems);
  }, []);

  if (items.length === 0) return null;
  const loop = [...items, ...items];

  return (
    <div className="ticker">
      <div className="ticker-inner">
        <div className="ticker-label">
          <i className="tally" />
          BREAKING
        </div>
        <div className="ticker-track-wrap">
          <div className={`ticker-track ${paused ? "paused" : ""}`}>
            {loop.map((n, i) => {
              const to = n.linkedArticleId
                ? `/news/${n.linkedArticleId}`
                : n.linkedVideoId
                ? "/videos"
                : "/news";
              return (
                <Link to={to} key={`${n.id}-${i}`}>
                  {n.message}
                </Link>
              );
            })}
          </div>
        </div>
        <button
          className="ticker-pause"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Resume ticker" : "Pause ticker"}
          aria-pressed={paused}
        >
          {paused ? (
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
          )}
        </button>
      </div>
    </div>
  );
}
