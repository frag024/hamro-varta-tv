// Hamro Varta Television — local CMS + content API.
// Plain Node/Express, JSON-file storage. Local-only (no auth, no DB) by
// design for this stage — see README for the upgrade path to Phase 2.
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 4000;
const DATA_DIR = path.join(__dirname, "data");
const MEDIA_DIR = path.join(__dirname, "media");

const app = express();
app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use("/media", express.static(MEDIA_DIR));
app.use("/admin", express.static(path.join(__dirname, "admin")));

const COLLECTIONS = {
  news: { file: "news.json", idField: "id" },
  videos: { file: "videos.json", idField: "id" },
  notifications: { file: "notifications.json", idField: "id" },
  programme: { file: "programme.json", idField: "id" },
  categories: { file: "categories.json", idField: "id" },
  districts: { file: "districts.json", idField: "id" },
  events: { file: "events.json", idField: "id" },
  employees: { file: "employees.json", idField: "id" },
  ads: { file: "ads.json", idField: "id" },
  homepage: { file: "homepage.json", idField: "id" },
  audit: { file: "audit.json", idField: "id" },
};

function readCollection(name) {
  const file = path.join(DATA_DIR, COLLECTIONS[name].file);
  const raw = fs.readFileSync(file, "utf-8");
  return JSON.parse(raw);
}

function writeCollection(name, data) {
  const file = path.join(DATA_DIR, COLLECTIONS[name].file);
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf-8");
}

function makeId(prefix, list) {
  let n = list.length + 1;
  let id = `${prefix}-${String(n).padStart(3, "0")}`;
  const existing = new Set(list.map((x) => x.id));
  while (existing.has(id)) {
    n += 1;
    id = `${prefix}-${String(n).padStart(3, "0")}`;
  }
  return id;
}

const PREFIX = {
  news: "n", videos: "v", notifications: "ntf", programme: "p", categories: "c",
  districts: "d", events: "e", employees: "emp", ads: "ad", homepage: "hp", audit: "log",
};

// ---- audit log (demo): every mutating call is recorded, keyed to whatever
// role the CMS UI says it's acting as (X-Demo-Role header). Not real auth --
// see README / PRD "Security" section for the production upgrade path. ----
function appendAudit(action, entity, entityId, req, before, after) {
  if (entity === "audit") return; // don't log the log
  const list = readCollection("audit");
  list.unshift({
    id: makeId("log", list),
    timestamp: new Date().toISOString(),
    user: req.get("X-Demo-Role") || "unknown",
    action,       // create | update | delete
    entity,
    entityId,
    previousValue: before || null,
    newValue: after || null,
  });
  writeCollection("audit", list.slice(0, 300)); // cap demo log size
}

// ---- homepage builder: bulk reorder/enable (registered before the generic
// /:id routes below so it takes priority) ----
app.put("/api/homepage/reorder", (req, res) => {
  const before = readCollection("homepage");
  const next = Array.isArray(req.body) ? req.body : [];
  writeCollection("homepage", next);
  appendAudit("update", "homepage", "reorder", req, before, next);
  res.json(next);
});

// ---- dashboard KPIs, computed from the live collections ----
app.get("/api/dashboard", (req, res) => {
  const news = readCollection("news");
  const videos = readCollection("videos");
  const events = readCollection("events");
  const byStatus = (s) => news.filter((n) => n.status === s).length;
  res.json({
    content: {
      totalArticles: news.length,
      published: byStatus("published"),
      draft: byStatus("draft"),
      pendingReview: news.filter((n) => ["submitted", "under_review"].includes(n.status)).length,
      scheduled: byStatus("scheduled"),
      rejected: byStatus("rejected"),
      breakingActive: news.filter((n) => n.isBreaking).length,
      totalVideos: videos.length,
      upcomingEvents: events.filter((e) => e.status === "upcoming").length,
    },
    // No analytics/ad pipeline or social-platform API wired up yet in this
    // demo build -- these are illustrative placeholders so the dashboard
    // layout can be reviewed end-to-end. Replace with real GA/App-analytics,
    // YouTube Data API, and Facebook Graph API data in Phase 2 (see PRD §17,
    // §27, §39-42).
    audienceDemo: { websiteVisitors: 48200, appUsers: 11300, newUsers: 3120, returningUsers: 9800 },
    revenueDemo: { adRevenueINR: 186500, activeCampaigns: 2, impressions: 126180, clicks: 2212 },
    socialDemo: {
      youtube: { subscribers: 128400, viewsThisMonth: 612000, videos: videos.length },
      facebook: { followers: 96700, reachThisMonth: 340000 },
      instagram: { followers: 24300, reachThisMonth: 71000 },
      totalReachEstimate: 48200 + 340000 + 71000 + 612000, // website + FB + IG + YT, demo sum
    },
    visitorsTrend: [
      { label: "Mon", value: 5200 }, { label: "Tue", value: 5800 }, { label: "Wed", value: 6100 },
      { label: "Thu", value: 5950 }, { label: "Fri", value: 6700 }, { label: "Sat", value: 7900 },
      { label: "Sun", value: 7400 },
    ],
    trafficSplit: [
      { label: "Website", value: 48200 }, { label: "YouTube", value: 612000 },
      { label: "Facebook", value: 340000 }, { label: "Instagram", value: 71000 },
    ],
    topArticles: [...news].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 6)
      .map((n) => ({ id: n.id, headline: n.headline, views: n.views || 0, category: n.categoryLabel })),
  });
});

// ---- generic REST for every collection ----
Object.keys(COLLECTIONS).forEach((name) => {
  const base = `/api/${name}`;

  app.get(base, (req, res) => {
    let list = readCollection(name);
    if (req.query.category && name !== "categories") {
      list = list.filter((item) => item.category === req.query.category);
    }
    res.json(list);
  });

  app.get(`${base}/:id`, (req, res) => {
    const list = readCollection(name);
    const item = list.find((x) => x.id === req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  });

  app.post(base, (req, res) => {
    const list = readCollection(name);
    const item = { ...req.body };
    if (!item.id) item.id = makeId(PREFIX[name] || name[0], list);
    list.unshift(item);
    writeCollection(name, list);
    appendAudit("create", name, item.id, req, null, item);
    res.status(201).json(item);
  });

  app.put(`${base}/:id`, (req, res) => {
    const list = readCollection(name);
    const idx = list.findIndex((x) => x.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Not found" });
    const before = list[idx];
    list[idx] = { ...list[idx], ...req.body, id: req.params.id };
    writeCollection(name, list);
    appendAudit("update", name, req.params.id, req, before, list[idx]);
    res.json(list[idx]);
  });

  app.delete(`${base}/:id`, (req, res) => {
    const list = readCollection(name);
    const victim = list.find((x) => x.id === req.params.id);
    const next = list.filter((x) => x.id !== req.params.id);
    if (next.length === list.length) return res.status(404).json({ error: "Not found" });
    writeCollection(name, next);
    appendAudit("delete", name, req.params.id, req, victim, null);
    res.status(204).end();
  });
});

app.get("/api/health", (req, res) => res.json({ ok: true, name: "Hamro Varta CMS API" }));

app.listen(PORT, () => {
  console.log(`Hamro Varta CMS API running at http://localhost:${PORT}`);
  console.log(`Admin panel:        http://localhost:${PORT}/admin`);
});
