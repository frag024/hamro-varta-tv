# Hamro Varta Mobile App — `mobile-app/`

React Native (Expo) app for readers/viewers — the mobile client described
in [`HAMRO_VARTA_CMS_PRD.md`](../HAMRO_VARTA_CMS_PRD.md) (§58–62). Same
CMS API as the website powers this app; there is no separate content
system.

## Run it

```bash
cd mobile-app
npm install
npx expo start
```

Then open in Expo Go, an emulator, or the web preview (`w` in the Expo
CLI, or `npm run web`).

## Structure

- `App.tsx`, `index.ts` — app entry
- `src/` — screens, navigation, components
- `assets/` — app icons, splash, fonts (optimized)
- `assets_source/` — original/unoptimized source assets

## Notes

- Built on Expo SDK 57 / React Native 0.86 / React 19.
- This is a Phase 1 / demo build — it currently talks to the demo CMS API
  in [`../cms`](../cms). Push notifications, offline reading, and
  personalized feeds are Phase 2+ per the PRD.
