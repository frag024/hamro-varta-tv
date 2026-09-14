import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1 style={{ fontSize: 32 }}>Page not found</h1>
      <p style={{ color: "var(--slate)" }}>This story or section doesn't exist.</p>
      <Link className="btn" to="/">
        Back to Home
      </Link>
    </div>
  );
}
