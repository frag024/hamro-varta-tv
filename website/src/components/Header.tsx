import { useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { mediaUrl } from "../api";
import { todayLabel } from "../utils/date";
import { EASE } from "../motion";
import { SOCIAL } from "../social";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/news", label: "News" },
  { to: "/live", label: "Live TV" },
  { to: "/videos", label: "Videos" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    navigate(`/news?q=${encodeURIComponent(q.trim())}`);
    setSearchOpen(false);
    setQ("");
  };

  return (
    <>
      <div className="topstrip">
        <div className="wrap">
          <span>Gangtok, Sikkim — {todayLabel()}</span>
          <div className="right">
            <div className="social-mini">
              <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href={SOCIAL.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M23 12s0-3.4-.44-5a3 3 0 0 0-2.1-2.1C18.8 4.4 12 4.4 12 4.4s-6.8 0-8.46.5A3 3 0 0 0 1.44 7C1 8.6 1 12 1 12s0 3.4.44 5a3 3 0 0 0 2.1 2.1c1.66.5 8.46.5 8.46.5s6.8 0 8.46-.5a3 3 0 0 0 2.1-2.1c.44-1.6.44-5 .44-5zM9.8 15.5v-7l6 3.5-6 3.5z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.2c2.7 0 3 0 4.1.06 1.1.05 1.8.22 2.2.37.6.23 1 .5 1.4.9.4.4.67.86.9 1.4.15.4.32 1.1.37 2.2.06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1.1-.22 1.8-.37 2.2-.23.6-.5 1-.9 1.4-.4.4-.86.67-1.4.9-.4.15-1.1.32-2.2.37-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1.1-.05-1.8-.22-2.2-.37-.6-.23-1-.5-1.4-.9-.4-.4-.67-.86-.9-1.4-.15-.4-.32-1.1-.34-2.2C2.2 15 2.2 14.7 2.2 12s0-3 .06-4.1c.05-1.1.2-1.8.34-2.2.18-.46.4-.79.74-1.14.35-.34.68-.56 1.14-.74.35-.14.88-.3 1.85-.34C9 2.2 9.3 2.2 12 2.2zm0 4a5.8 5.8 0 1 0 0 11.6 5.8 5.8 0 0 0 0-11.6zm0 9.5a3.7 3.7 0 1 1 0-7.4 3.7 3.7 0 0 1 0 7.4zm5.9-9.7a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0z"/></svg>
              </a>
            </div>
            <span className="preview-tag">● Local development preview</span>
          </div>
        </div>
      </div>

      <header className="site" style={{ position: "relative" }}>
        <div className="wrap">
          <nav className="main">
            <Link className="brand" to="/">
              <img src={mediaUrl("logo-mark.png")} alt="Hamro Varta Television" />
              <span className="word">
                <b>HAMRO VARTA</b>
                <small>TELEVISION</small>
              </span>
            </Link>

            <div className={`navlinks ${open ? "open" : ""}`}>
              {NAV.map((n) => {
                const isActive = n.end ? location.pathname === n.to : location.pathname.startsWith(n.to);
                return (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    end={n.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    style={{ position: "relative" }}
                  >
                    {n.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        transition={{ duration: 0.35, ease: EASE }}
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: -2,
                          height: 2,
                          background: "var(--red)",
                        }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </div>

            <div className="nav-cta">
              <button
                className="icon-btn"
                aria-label="Search"
                aria-pressed={searchOpen}
                onClick={() => setSearchOpen((v) => !v)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </button>
              <Link to="/live" className="btn ghost">
                Watch Live
              </Link>
              <button
                className={`menu-toggle ${open ? "active" : ""}`}
                aria-label="Menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <span />
              </button>
            </div>
          </nav>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              className="search-panel open"
              style={{ maxHeight: "none", position: "absolute" }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <form onSubmit={onSearch}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search stories, places, topics…"
                />
                <button type="submit" className="btn" style={{ padding: "9px 18px" }}>
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
