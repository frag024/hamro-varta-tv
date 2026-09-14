import { Link } from "react-router-dom";
import { mediaUrl } from "../api";
import { SOCIAL } from "../social";

const SECTIONS = [
  { id: "sikkim", label: "Sikkim" },
  { id: "national", label: "National" },
  { id: "politics", label: "Politics" },
  { id: "business", label: "Business" },
  { id: "sports", label: "Sports" },
  { id: "tourism", label: "Tourism" },
];

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-cta">
          <h2>Stay connected with Sikkim's newsroom, on every screen.</h2>
          <div className="social-row">
            <Link to="/live" className="btn">
              Watch Live
            </Link>
            <a
              className="btn ghost"
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff", borderColor: "rgba(244,239,231,.3)" }}
            >
              Follow on Facebook
            </a>
            <a
              className="btn ghost"
              href={SOCIAL.youtube}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff", borderColor: "rgba(244,239,231,.3)" }}
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>

        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <img src={mediaUrl("logo-mark.png")} alt="" />
              <b>HAMRO VARTA TELEVISION</b>
            </div>
            <p className="tag">
              Sikkim's voice, on every screen — television, web and mobile from one
              Gangtok newsroom.
            </p>
            <div className="foot-social">
              <a href={SOCIAL.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M12 2.2c2.7 0 3 0 4.1.06 1.1.05 1.8.22 2.2.37.6.23 1 .5 1.4.9.4.4.67.86.9 1.4.15.4.32 1.1.37 2.2.06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1.1-.22 1.8-.37 2.2-.23.6-.5 1-.9 1.4-.4.4-.86.67-1.4.9-.4.15-1.1.32-2.2.37-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1.1-.05-1.8-.22-2.2-.37-.6-.23-1-.5-1.4-.9-.4-.4-.67-.86-.9-1.4-.15-.4-.32-1.1-.34-2.2C2.2 15 2.2 14.7 2.2 12s0-3 .06-4.1c.05-1.1.2-1.8.34-2.2.18-.46.4-.79.74-1.14.35-.34.68-.56 1.14-.74.35-.14.88-.3 1.85-.34C9 2.2 9.3 2.2 12 2.2zm0 4a5.8 5.8 0 1 0 0 11.6 5.8 5.8 0 0 0 0-11.6zm0 9.5a3.7 3.7 0 1 1 0-7.4 3.7 3.7 0 0 1 0 7.4zm5.9-9.7a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0z"/></svg>
              </a>
              <a href={SOCIAL.youtube} aria-label="YouTube" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M23 12s0-3.4-.44-5a3 3 0 0 0-2.1-2.1C18.8 4.4 12 4.4 12 4.4s-6.8 0-8.46.5A3 3 0 0 0 1.44 7C1 8.6 1 12 1 12s0 3.4.44 5a3 3 0 0 0 2.1 2.1c1.66.5 8.46.5 8.46.5s6.8 0 8.46-.5a3 3 0 0 0 2.1-2.1c.44-1.6.44-5 .44-5zM9.8 15.5v-7l6 3.5-6 3.5z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Sections</h4>
            <ul>
              <li><Link to="/news">Latest News</Link></li>
              {SECTIONS.map((s) => (
                <li key={s.id}><Link to={`/news?category=${s.id}`}>{s.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Watch</h4>
            <ul>
              <li><Link to="/live">Live TV</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/videos">Bulletins &amp; Shows</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Hamro Varta</Link></li>
              <li><a href="mailto:newsdesk@hamrovarta.example.com">Contact Us</a></li>
              <li><a href="mailto:ads@hamrovarta.example.com">Advertise With Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; {new Date().getFullYear()} Hamro Varta Television, Gangtok, Sikkim.</span>
          <span className="preview-note">Local development preview · content is representative sample material.</span>
        </div>
      </div>
    </footer>
  );
}
