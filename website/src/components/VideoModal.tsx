import { useEffect } from "react";
import { mediaUrl } from "../api";
import type { VideoItem } from "../types";

export default function VideoModal({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-wrap" style={{ width: "100%", maxWidth: 740 }}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal">
          {video.youtubeId ? (
            <iframe
              className="hero-img"
              style={{ aspectRatio: "16/9", width: "100%", border: "none" }}
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img className="hero-img" src={mediaUrl(video.image)} alt="" />
          )}
          <div className="modal-body">
            <span className="kicker">{video.categoryLabel.toUpperCase()}</span>
            <h2>{video.title}</h2>
            <div className="meta-row">
              {video.duration} · Hamro Varta Television · {video.views} views
            </div>
            <p className="body-p">{video.description}</p>
            {video.youtubeId && (
              <a
                className="sec-link"
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", marginTop: 6 }}
              >
                Watch on YouTube <span className="arrow">→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
