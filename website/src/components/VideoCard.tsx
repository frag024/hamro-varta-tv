import { mediaUrl } from "../api";
import type { VideoItem } from "../types";

export default function VideoCard({ video, onOpen }: { video: VideoItem; onOpen: (v: VideoItem) => void }) {
  return (
    <div className="video-card" onClick={() => onOpen(video)}>
      <div className="thumb">
        <img src={mediaUrl(video.image)} alt="" loading="lazy" />
        <span className="dur">{video.duration}</span>
        <div className="vplay">
          <span>
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </div>
      </div>
      <div className="vbody">
        <div className="vcat">{video.categoryLabel.toUpperCase()}</div>
        <h3>{video.title}</h3>
      </div>
    </div>
  );
}
