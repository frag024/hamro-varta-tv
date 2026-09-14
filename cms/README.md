# Hamro Varta CMS + Content API — `cms/`

The central newsroom platform described in [`HAMRO_VARTA_CMS_PRD.md`](../HAMRO_VARTA_CMS_PRD.md):
one place to manage news, videos, events, breaking news, homepage layout,
categories, districts, advertisers and staff — exposed as an API the
website and mobile app both consume.

**Current stage: Phase 1 demo build.** Plain Node/Express, JSON files as
the datastore, no authentication yet. It exists to validate the CMS→API→
Website/Mobile architecture end-to-end before a real database and auth
layer are added (see the PRD's MVP scope and roadmap).

## Run it

```bash
cd cms
npm install
node index.js
```

- API base: `http://localhost:4000/api` — `news`, `videos`, `events`,
  `notifications`, `programme`, `categories`, `districts`, `employees`,
  `ads`, `homepage`, `audit`, plus `GET /api/dashboard` for KPIs.
- Admin panel: **http://localhost:4000/admin** — dashboard, editorial
  workflow (draft → review → approved → published), breaking-news
  control, homepage builder, and a demo role switcher covering every
  persona in the PRD (Super Admin, Editor-in-Chief, Journalist, Video
  Team, Ad Manager, HR, Analyst…).
- Media files: `http://localhost:4000/media/<filename>`

## What's real vs. demo data

Content (news, videos, events, categories, districts) is genuinely
editable and drives the website. Audience/revenue figures on the
dashboard (website visitors, ad revenue, YouTube/Facebook/Instagram
reach) are clearly-labelled placeholders — no analytics or social-platform
API is wired up yet. Every create/update/delete is written to
`data/audit.json` so the audit-log concept can be demoed too.

## Upgrade path (Phase 2+, per the PRD)

Swap JSON files for Postgres, add real auth + RBAC + 2FA, wire up the
YouTube Data API / Facebook Graph API for the social numbers, and connect
a real analytics pipeline for the audience/revenue KPIs. The API shape
(`/api/v1/...` resources) is designed so the website and mobile app don't
need to change when that happens.
