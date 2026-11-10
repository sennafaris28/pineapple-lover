# Pineapple Lover — Wedding Dashboard (React + Redux)

A wedding-planning dashboard built with **React 18 + Redux Toolkit + Vite**, with
**Firebase Realtime Database** sync and **Google** sign-in. It's the React port of the
original single-file vanilla build.

## Tabs
Overview · Budget (roll-up) · Wedding Ceremony · Seserahan · Mahar & Mas Kawin ·
Guests · Vendors · Adat & Rituals · Legal · Rundown · Backup.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production
```bash
npm run build      # outputs to dist/
npm run preview    # preview the built bundle
```

## Configure cloud sync
Edit `src/config.js`:
- Paste your Firebase web config into `FIREBASE_CONFIG`.
- Leave `databaseURL` blank to run **local-only** (localStorage, no login).
- Set `WEDDING_ID` to a shared workspace id both partners use.

See **[TUTORIAL.md](./TUTORIAL.md)** to build the whole thing from scratch and for the
Firebase + GitHub Pages setup.

## Architecture at a glance
```
src/
├── config.js          Firebase config, tab list, table column definitions
├── seed.js            Default data
├── firebase.js        Firebase app init (auth + database)
├── cloud.js           Bridges Firebase <-> Redux (auth listener, sync, push)
├── syncMiddleware.js  Persists every change to localStorage + Firebase
├── store.js           configureStore
├── slices/
│   ├── weddingSlice.js  All planner data + reducers
│   └── authSlice.js     user / sync status / error
├── selectors.js       Derived numbers (section totals, budget roll-up)
├── utils.js           rp(), countdown, status labels
├── components/
│   ├── Header, Nav, AuthGate, Cards, DataTable, Checklist, ItemTab
│   └── tabs/           One component per tab
├── App.jsx            Shell + tab routing
└── main.jsx           Entry: Provider + initCloud
```
