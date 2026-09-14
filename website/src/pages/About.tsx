import { mediaUrl } from "../api";
import Reveal from "../components/Reveal";

const VALUES = [
  {
    title: "Ground-first reporting",
    body: "Our correspondents file from the districts they cover, not just from the newsroom desk in Gangtok.",
  },
  {
    title: "One newsroom, every screen",
    body: "The same verified reporting reaches you on broadcast television, this website and our mobile app.",
  },
  {
    title: "Local language, local trust",
    body: "Coverage runs in both English and Nepali, built for the communities Hamro Varta actually serves.",
  },
];

export default function About() {
  return (
    <>
      <section className="tight">
        <Reveal className="wrap about-grid" as="div">
          <div className="about-copy">
            <div className="kicker neutral">ABOUT HAMRO VARTA</div>
            <h1 style={{ fontSize: "var(--fs-h1)", margin: "12px 0 18px" }}>
              Sikkim's television and digital news platform
            </h1>
            <p>
              Hamro Varta Television reports on the people, places and decisions shaping Sikkim —
              from Gangtok's civic affairs to the tea gardens of Temi, the monasteries of Rumtek,
              and the high passes of the east.
            </p>
            <p>
              This site is a working local preview of how our television, digital and mobile
              coverage come together as one platform — built to show the newsroom, not replace it.
            </p>
            <div className="coverage-list">
              {["Gangtok","Namchi","Pelling","Ravangla","Mangan","Gyalshing","Nathula","Tsomgo Lake"].map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 6, overflow: "hidden", boxShadow: "var(--shadow)" }}>
            <img src={mediaUrl("rumtek-monastery.jpg")} alt="" style={{ width: "100%", display: "block" }} />
          </div>
        </Reveal>
      </section>

      <section className="dark">
        <Reveal className="wrap" as="div">
          <div className="kicker onred">HOW WE WORK</div>
          <div className="region-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 40, marginTop: 24 }}>
            {VALUES.map((v) => (
              <div key={v.title}>
                <h3 style={{ color: "#fff", fontSize: 19, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: "rgba(244,239,231,.65)", fontSize: 14.5, lineHeight: 1.7 }}>{v.body}</p>
              </div>
            ))}
          </div>
          <div className="stat-band" style={{ marginTop: 48, paddingTop: 36, borderTop: "1px solid rgba(244,239,231,.14)" }}>
            <div className="stat"><b>4</b><span>Districts covered across Sikkim</span></div>
            <div className="stat"><b>TV</b><span>Broadcast + digital + mobile, one newsroom</span></div>
            <div className="stat"><b>24/7</b><span>Rolling live channel &amp; bulletins</span></div>
            <div className="stat"><b>EN/NE</b><span>English &amp; Nepali language coverage</span></div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
