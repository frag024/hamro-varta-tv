# Hamro Varta Website — `website/`

The public-facing news site: Vite + React + TypeScript. Fetches all its
content from the CMS API in [`../cms`](../cms) — that server must be
running first.

## Run it

```bash
cd website
npm install
npm run dev
```

- Site: `http://localhost:5173`
- Pages: Home, News (with category filter), Article detail, Live TV,
  Videos, About.

## Notes

- Both `cms` and `website` dev servers need to run at the same time (two
  terminals) — the site has no content of its own, it's a client of the
  CMS API.
- This is a Phase 1 / demo build. See
  [`HAMRO_VARTA_CMS_PRD.md`](../HAMRO_VARTA_CMS_PRD.md) for the full
  production architecture (SEO, PWA, structured data, CDN, etc.).
