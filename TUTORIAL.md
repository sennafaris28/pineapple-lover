# Build a Wedding Dashboard from Scratch — React + Redux Toolkit + Firebase

This walks you through building the whole app yourself, from an empty folder to a
deployed, cloud-synced dashboard. It assumes you can read JavaScript but explains
every React and Redux concept as it shows up.

**What you'll end up with:** a tabbed planner where editing any number anywhere
instantly updates the budget roll-up, your data auto-saves to the browser *and*
Firebase, and your partner sees changes live on their phone.

**Mental model up front (read this twice):**

> There is **one** JavaScript object holding all your data (`state.wedding`).
> Components never change it directly. They **dispatch an action** ("set this cell
> to 5000"). A **reducer** produces the next version of that object. Components
> **select** the slices they care about and re-render when those change.
> A **middleware** watches every change and saves it (localStorage + Firebase).

That one-way loop — `dispatch → reducer → new state → re-render` — is all Redux is.

---

## Table of contents
1. [Prerequisites](#1-prerequisites)
2. [Scaffold the project (Vite)](#2-scaffold-the-project-vite)
3. [Install dependencies](#3-install-dependencies)
4. [Project structure & config](#4-project-structure--config)
5. [The data model (seed)](#5-the-data-model-seed)
6. [Redux 101 + the wedding slice](#6-redux-101--the-wedding-slice)
7. [The auth slice](#7-the-auth-slice)
8. [Selectors & utils](#8-selectors--utils)
9. [Firebase project setup](#9-firebase-project-setup)
10. [firebase.js + cloud.js (the sync bridge)](#10-firebasejs--cloudjs-the-sync-bridge)
11. [The sync middleware](#11-the-sync-middleware)
12. [Wire the store + entry point](#12-wire-the-store--entry-point)
13. [Styling](#13-styling)
14. [Generic components: Cards, DataTable, Checklist](#14-generic-components-cards-datatable-checklist)
15. [Header, Nav, AuthGate](#15-header-nav-authgate)
16. [The tab components](#16-the-tab-components)
17. [App.jsx — tab routing](#17-appjsx--tab-routing)
18. [Run it](#18-run-it)
19. [Lock down the database rules](#19-lock-down-the-database-rules)
20. [Deploy to GitHub Pages](#20-deploy-to-github-pages)
21. [How to add a new tab (extending it)](#21-how-to-add-a-new-tab-extending-it)
22. [Recap of the data flow](#22-recap-of-the-data-flow)

---

## 1. Prerequisites

- **Node.js 18+** and npm. Check: `node -v`.
- A **Google account** (for Firebase) and a **GitHub account** (for hosting) — only needed from step 9 on.
- Basic JavaScript. No prior React/Redux needed.

Why this stack:
- **Vite** — instant dev server + fast builds, zero config.
- **React** — UI as components; the screen is a function of state.
- **Redux Toolkit (RTK)** — the modern, low-boilerplate way to do Redux. You get one
  predictable state container and great dev tooling. (For an app this small Redux is
  arguably overkill, but it's a great way to *learn* the pattern — and it makes the
  "edit here, see it everywhere" behaviour trivial.)
- **Firebase** — a hosted realtime database + auth, free tier, no backend to run.

---

## 2. Scaffold the project (Vite)

```bash
npm create vite@latest pineapple-lover-react -- --template react
cd pineapple-lover-react
```

That gives you a starter React app. We'll replace most of its `src/` as we go. Delete
the files we won't use:

```bash
rm src/App.css src/index.css src/assets/react.svg
```

Keep `index.html`, `src/main.jsx`. Replace `index.html` body with just a mount point:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

Add a `vite.config.js` with a **relative base** so it works under a GitHub Pages
sub-path later:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
});
```

---

## 3. Install dependencies

```bash
npm install @reduxjs/toolkit react-redux firebase
```

- `@reduxjs/toolkit` — `createSlice`, `configureStore`.
- `react-redux` — the glue (`<Provider>`, `useSelector`, `useDispatch`).
- `firebase` — auth + realtime database SDK.

---

## 4. Project structure & config

We'll build this layout:

```
src/
├── config.js          constants: Firebase config, tabs, table columns
├── seed.js            default data
├── firebase.js        initialise Firebase
├── cloud.js           Firebase <-> Redux bridge
├── syncMiddleware.js  save-on-change
├── store.js           configureStore
├── selectors.js       derived numbers
├── utils.js           formatting helpers
├── slices/
│   ├── weddingSlice.js
│   └── authSlice.js
├── components/
│   ├── Header.jsx  Nav.jsx  AuthGate.jsx
│   ├── Cards.jsx  DataTable.jsx  Checklist.jsx  ItemTab.jsx
│   └── tabs/ (one file per tab)
├── App.jsx
├── main.jsx
└── styles.css
```

Create `src/config.js`. This is the one file you edit to point at *your* Firebase and
to define what columns each table has — the table components are generic and read from
here.

```js
export const FIREBASE_CONFIG = {
  apiKey: '', authDomain: '', databaseURL: '', projectId: '',
  storageBucket: '', messagingSenderId: '', appId: '',
};
export const WEDDING_ID = 'our-wedding';         // shared workspace id
export const cloudEnabled = !!FIREBASE_CONFIG.databaseURL; // local-only if blank
export const STORAGE_KEY = 'weddingDashReactV1'; // localStorage cache key

export const TABS = [
  ['overview', 'Overview'], ['budget', 'Budget'], ['ceremony', 'Wedding Ceremony'],
  ['seserahan', 'Seserahan'], ['mahar', 'Mahar & Mas Kawin'], ['guests', 'Guests'],
  ['vendors', 'Vendors'], ['adat', 'Adat & Rituals'], ['legal', 'Legal'],
  ['rundown', 'Rundown'], ['data', 'Backup'],
];

// Itemised tables (Ceremony/Seserahan/Mahar) share these columns.
const itemCols = (paidLabel) => [
  { h: 'Item', type: 'text' }, { h: 'Qty', type: 'text' },
  { h: 'Unit price', type: 'num' }, { h: 'Vendor', type: 'text' },
  { h: paidLabel, type: 'select', opts: ['no', 'yes'] },
  { h: 'Notes', type: 'text' }, { h: 'Marketplace link', type: 'link' },
];

export const COLS = {
  ceremony: itemCols('Paid'),
  seserahan: itemCols('Bought'),
  maharkawin: itemCols('Bought'),
  guests: [
    { h: 'Name', type: 'text' }, { h: 'Side', type: 'select', opts: ['Groom', 'Bride'] },
    { h: 'Category', type: 'select', opts: ['Family', 'Friends', 'Work', 'VIP'] },
    { h: 'Invited #', type: 'num' }, { h: 'RSVP', type: 'select', opts: ['Pending', 'Yes', 'No'] },
    { h: 'Table', type: 'text' },
  ],
  vendors: [
    { h: 'Category', type: 'text' }, { h: 'Vendor', type: 'text' }, { h: 'Contact', type: 'text' },
    { h: 'Quote', type: 'num' }, { h: 'DP paid', type: 'num' },
    { h: 'Booked', type: 'select', opts: ['no', 'yes'] }, { h: 'Notes', type: 'text' },
  ],
  rundown: [{ h: 'Time', type: 'text' }, { h: 'Event (acara)', type: 'text' }, { h: 'PIC', type: 'text' }],
};
```

**Why a config-driven table?** Instead of hand-writing 5 near-identical tables, we
describe each table as data (`{h, type}` columns) and let one `DataTable` component
render any of them. Less code, fewer bugs.

---

## 5. The data model (seed)

Everything lives in one object. Itemised rows are plain arrays in a fixed column order:
`[item, qty, unitPrice, vendor, paid, notes, link]`. Checklist items are
`{ t: text, d: done, n?: note }`.

Create `src/seed.js` returning the defaults (trimmed here — fill in the lists you want):

```js
export function seed() {
  return {
    p1: '', p2: '', wdate: '', totalBudget: '', mahar: '',
    timeline: [{ t: '12 mo — Set date & budget', d: false }, /* ... */],
    ceremony: [['Venue / Gedung', '1', '', '', 'no', '', ''], /* ... */],
    guests: [],
    vendors: [],
    seserahan: [['Hijab / prayer set', '1', '', '', 'no', '', ''], /* ... */],
    maharkawin: [['Cincin nikah', '1', '', '', 'no', '', ''], /* ... */],
    rundown: [['08:00', 'Siraman / prep', ''], /* ... */],
    adat: [{ t: 'Lamaran / Tunangan', d: false }, /* ... */],
    legal: [{ t: 'Register via KUA / Simkah', d: false, n: 'Start 1–3 months ahead' }, /* ... */],
  };
}
```

> Why arrays for rows instead of `{ item, qty, ... }` objects? Because the columns are
> config-driven, index access (`row[2]`) keeps the generic table dead simple. Trade-off:
> you must keep column order in sync between `seed.js` and `config.js`.

---

## 6. Redux 101 + the wedding slice

**The vocabulary**, in one breath:
- **store** — the object holding all state + the dispatch function.
- **action** — a plain object describing what happened, e.g. `{ type: 'wedding/setCell', payload: {...} }`.
- **reducer** — a pure function `(state, action) => nextState`.
- **slice** — (RTK) a bundle of related reducers + the actions they imply, created with `createSlice`.
- **dispatch(action)** — the only way to trigger a state change.
- **selector** — a function that reads a piece of state; components use `useSelector`.

RTK's magic: inside `createSlice` reducers you **write code that looks like you're
mutating** (`state.p1 = 'x'`). Under the hood RTK uses **Immer** to turn that into a
safe, immutable update. No spread-operator gymnastics.

Create `src/slices/weddingSlice.js`:

```js
import { createSlice } from '@reduxjs/toolkit';
import { seed } from '../seed';
import { STORAGE_KEY } from '../config';

function mergeSeed(data) {           // fill any missing keys with defaults
  const s = seed();
  for (const k in s) if (!(k in data)) data[k] = s[k];
  return data;
}

function loadInitial() {             // start from the localStorage cache if present
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) { const r = JSON.parse(raw); if (r && typeof r === 'object') return mergeSeed(r); }
  } catch (e) { /* ignore */ }
  return seed();
}

const weddingSlice = createSlice({
  name: 'wedding',
  initialState: loadInitial(),
  reducers: {
    setField:   (state, { payload: { field, value } })        => { state[field] = value; },
    setCell:    (state, { payload: { table, row, col, value } }) => { state[table][row][col] = value; },
    addRow:     (state, { payload: { table, blank } })        => { state[table].push(blank); },
    delRow:     (state, { payload: { table, row } })          => { state[table].splice(row, 1); },
    toggleCheck:(state, { payload: { list, index, done } })   => { state[list][index].d = done; },
    addCheck:   (state, { payload: { list, text } })          => { state[list].push({ t: text, d: false, n: '' }); },
    delCheck:   (state, { payload: { list, index } })         => { state[list].splice(index, 1); },
    replaceAll: (state, { payload })                          => mergeSeed({ ...payload }),
    resetAll:   ()                                            => seed(),
  },
});

export const {
  setField, setCell, addRow, delRow, toggleCheck, addCheck, delCheck, replaceAll, resetAll,
} = weddingSlice.actions;
export default weddingSlice.reducer;
```

Notes:
- `createSlice` auto-generates **action creators** from the reducer names. Calling
  `setCell({ table:'ceremony', row:0, col:2, value:'2000000' })` returns the action
  object; you pass it to `dispatch`.
- `replaceAll`/`resetAll` **return** a brand-new object instead of mutating — Immer
  allows either "mutate the draft" *or* "return the next state", not both at once.
- `replaceAll` is what both **JSON import** and **remote Firebase sync** use.

---

## 7. The auth slice

A second, tiny slice for sign-in state and the sync-status chip. Create
`src/slices/authSlice.js`:

```js
import { createSlice } from '@reduxjs/toolkit';
import { cloudEnabled } from '../config';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, status: cloudEnabled ? 'connecting' : 'local', error: '' },
  reducers: {
    setUser:      (s, { payload }) => { s.user = payload; },
    setStatus:    (s, { payload }) => { s.status = payload; },
    setAuthError: (s, { payload }) => { s.error = payload; },
  },
});

export const { setUser, setStatus, setAuthError } = authSlice.actions;
export default authSlice.reducer;
```

Two slices, two concerns. The store will combine them into
`{ wedding: {...}, auth: {...} }`.

---

## 8. Selectors & utils

**Selectors** derive numbers from state. Because components read them through
`useSelector`, any relevant edit recomputes and re-renders automatically — no manual
"refresh the totals" calls. Create `src/selectors.js`:

```js
export function sectionStats(rows) {              // totals for one itemised table
  rows = rows || [];
  const line = (r) => (Number(r[2]) || 0) * (Number(r[1]) || 1); // unitPrice * qty
  const total = rows.reduce((a, r) => a + line(r), 0);
  const paid  = rows.reduce((a, r) => a + (r[4] === 'yes' ? line(r) : 0), 0);
  return { items: rows.length, total, paid, outstanding: total - paid };
}

export function budgetRollup(w) {                 // across the three cost tabs
  const cer = sectionStats(w.ceremony), ses = sectionStats(w.seserahan), mah = sectionStats(w.maharkawin);
  const allocated = cer.total + ses.total + mah.total;
  const paid = cer.paid + ses.paid + mah.paid;
  return {
    sections: [['Wedding Ceremony', cer], ['Seserahan', ses], ['Mahar & Mas Kawin', mah]],
    allocated, paid, target: Number(w.totalBudget) || 0, items: cer.items + ses.items + mah.items,
  };
}

export const sumCol = (rows, ci) => (rows || []).reduce((a, r) => a + (Number(r[ci]) || 0), 0);
```

Create `src/utils.js` for formatting:

```js
export const rp = (v) => 'Rp ' + (Number(v) || 0).toLocaleString('id-ID'); // 325000 -> Rp 325.000

export function countdownText(wdate) {
  if (!wdate) return 'Set your date →';
  const d = new Date(wdate + 'T00:00:00'), now = new Date(); now.setHours(0, 0, 0, 0);
  const diff = Math.round((d - now) / 86400000);
  const ds = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  if (diff > 0) return `${diff} days to go · ${ds}`;
  if (diff === 0) return `🎉 Today! · ${ds}`;
  return `Married ${Math.abs(diff)} days ago · ${ds}`;
}

export const STATUS_LABELS = {
  local: '💾 Local only', connecting: '⟳ Connecting…', saving: '⟳ Saving…',
  synced: '☁ Synced', error: '⚠ Sync error (local saved)',
};
```

> You can skip cloud sync entirely for now: leave `databaseURL` blank and the app runs
> local-only with localStorage. Steps 9–12 add the cloud; steps 13+ work either way.

---

## 9. Firebase project setup

1. Go to **console.firebase.google.com → Add project** (skip Analytics).
2. **Build → Realtime Database → Create Database** → location **Singapore (asia-southeast1)** → **Locked mode**.
3. In **Rules**, start permissive-but-authed (we tighten it in step 19):
   ```json
   { "rules": { "weddings": { "$id": { ".read": "auth != null", ".write": "auth != null" } } } }
   ```
4. **Build → Authentication → Get started → Sign-in method → enable Google** (set a support email).
5. **Project settings (⚙️) → Your apps → Web `</>`** → register an app → copy the
   `firebaseConfig` values into `FIREBASE_CONFIG` in `src/config.js`.

**Is it free?** Yes — Google sign-in and the Realtime Database free tier (1 GB stored,
10 GB/month) are plenty for a two-person planner.

---

## 10. firebase.js + cloud.js (the sync bridge)

`src/firebase.js` initialises the SDK **only** when a `databaseURL` is set:

```js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { FIREBASE_CONFIG, cloudEnabled } from './config';

let auth = null, database = null, googleProvider = null;
if (cloudEnabled) {
  const app = initializeApp(FIREBASE_CONFIG);
  auth = getAuth(app);
  database = getDatabase(app);
  googleProvider = new GoogleAuthProvider();
}
export { auth, database, googleProvider };
```

`src/cloud.js` is the bridge between Firebase and Redux. It lives **outside React**: we
hand it the store once and it dispatches actions as auth/data events arrive.

```js
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { ref, onValue, set } from 'firebase/database';
import { auth, database, googleProvider } from './firebase';
import { cloudEnabled, WEDDING_ID, STORAGE_KEY } from './config';
import { setUser, setStatus, setAuthError } from './slices/authSlice';
import { replaceAll } from './slices/weddingSlice';

let store = null, subscribed = false, applyingRemote = false, pushTimer = null;
export const isApplyingRemote = () => applyingRemote;

export function persistLocal(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

export function initCloud(s) {
  store = s;
  if (!cloudEnabled) { store.dispatch(setStatus('local')); return; }
  store.dispatch(setStatus('connecting'));
  onAuthStateChanged(auth, (user) => {
    if (user) { store.dispatch(setUser({ uid: user.uid, email: user.email })); subscribe(); }
    else { store.dispatch(setUser(null)); store.dispatch(setStatus('connecting')); }
  });
}

function subscribe() {
  if (subscribed) return; subscribed = true;
  const r = ref(database, 'weddings/' + WEDDING_ID);
  onValue(r, (snap) => {
    const remote = snap.val();
    if (remote) {
      // skip our own echo; apply only genuinely different remote data
      if (JSON.stringify(remote) !== JSON.stringify(store.getState().wedding)) {
        applyingRemote = true; store.dispatch(replaceAll(remote)); applyingRemote = false;
      }
    } else { set(r, store.getState().wedding); } // first run: seed the cloud
    store.dispatch(setStatus('synced'));
  }, () => {
    store.dispatch(setStatus('error'));
    store.dispatch(setAuthError('Access denied — ask the admin to allow your account in the DB rules.'));
  });
}

export function scheduleCloudPush(state) {       // debounced push of the whole doc
  if (!cloudEnabled || !subscribed) return;
  store.dispatch(setStatus('saving'));
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    set(ref(database, 'weddings/' + WEDDING_ID), state)
      .then(() => store.dispatch(setStatus('synced')))
      .catch(() => store.dispatch(setStatus('error')));
  }, 400);
}

export function signIn() {
  store.dispatch(setAuthError(''));
  signInWithPopup(auth, googleProvider).catch((e) => store.dispatch(setAuthError(e.message)));
}
export function logOut() { if (auth) signOut(auth); }
```

**The echo-guard.** When we push to Firebase, our own `onValue` listener fires back
with the same data. We skip it two ways: (a) `JSON.stringify` compare so identical data
is ignored, and (b) the `applyingRemote` flag so the middleware (next step) doesn't
re-push data that *came from* the cloud.

---

## 11. The sync middleware

**Middleware** sits between `dispatch` and the reducers — it sees every action. We use
it to save after any data change, so no component ever calls "save" manually. Create
`src/syncMiddleware.js`:

```js
import { persistLocal, scheduleCloudPush, isApplyingRemote } from './cloud';

export const syncMiddleware = (store) => (next) => (action) => {
  const result = next(action);                       // let the reducer run first
  if (typeof action.type === 'string' && action.type.startsWith('wedding/')) {
    const state = store.getState().wedding;
    persistLocal(state);                             // always cache locally
    if (!isApplyingRemote()) scheduleCloudPush(state); // push, unless it came from cloud
  }
  return result;
};
```

That `(store) => (next) => (action) => {}` triple-arrow is the standard Redux
middleware signature — curried functions. You rarely write it; just recognise it.

---

## 12. Wire the store + entry point

`src/store.js`:

```js
import { configureStore } from '@reduxjs/toolkit';
import wedding from './slices/weddingSlice';
import auth from './slices/authSlice';
import { syncMiddleware } from './syncMiddleware';

export const store = configureStore({
  reducer: { wedding, auth },
  middleware: (getDefault) => getDefault().concat(syncMiddleware),
});
```

`configureStore` combines the slices into `state.wedding` / `state.auth`, adds the Redux
DevTools and good defaults, then appends our middleware.

`src/main.jsx` — the entry point. `<Provider>` makes the store available to every
component via hooks; `initCloud(store)` starts the Firebase listeners.

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { initCloud } from './cloud';
import App from './App';
import './styles.css';

initCloud(store);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);
```

---

## 13. Styling

Copy `src/styles.css` from this repo (it's plain CSS with light/dark via
`prefers-color-scheme`). Key classes you'll reference: `.card`, `.panel`, `.btn`,
`.check`, `.gate`, `.item-table` (widens the Item column, narrows Qty). Nothing
Redux-specific here — style however you like.

---

## 14. Generic components: Cards, DataTable, Checklist

Now the React. A component is a function returning JSX; it reads state with
`useSelector` and triggers changes with `useDispatch`.

**`src/components/Cards.jsx`** — dumb presentational grid:

```jsx
export default function Cards({ items }) {         // items: [[label, value], ...]
  return (
    <div className="cards">
      {items.map(([label, val], i) => (
        <div className="card" key={i}>
          <div className="label">{label}</div><div className="val">{val}</div>
        </div>
      ))}
    </div>
  );
}
```

**`src/components/DataTable.jsx`** — the workhorse. Give it a `tableKey` (slice field)
and `cols`; it renders editable rows and dispatches on every change.

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { setCell, addRow, delRow } from '../slices/weddingSlice';

function openLink(url) {
  let u = (url || '').trim(); if (!u) return alert('Add a link first.');
  if (!/^https?:\/\//i.test(u)) u = 'https://' + u;
  window.open(u, '_blank', 'noopener');
}

export default function DataTable({ tableKey, cols, addLabel = '+ Add row', itemTable = false }) {
  const dispatch = useDispatch();
  const rows = useSelector((s) => s.wedding[tableKey]);   // re-renders when this array changes
  const change = (row, col, value) => dispatch(setCell({ table: tableKey, row, col, value }));
  const add = () => dispatch(addRow({ table: tableKey, blank: cols.map((c) => (c.type === 'select' ? c.opts[0] : '')) }));

  return (
    <div className="panel">
      <table className={itemTable ? 'item-table' : ''}>
        <thead><tr>{cols.map((c, i) => <th key={i} className={c.type === 'num' ? 'num' : ''}>{c.h}</th>)}<th></th></tr></thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {cols.map((c, ci) => (
                <td key={ci}>
                  {c.type === 'select' ? (
                    <select value={row[ci] ?? c.opts[0]} onChange={(e) => change(ri, ci, e.target.value)}>
                      {c.opts.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : c.type === 'link' ? (
                    <div className="linkcell">
                      <input type="url" placeholder="https://..." value={row[ci] ?? ''} onChange={(e) => change(ri, ci, e.target.value)} />
                      <button className="btn sm ghost" onClick={() => openLink(row[ci])}>↗</button>
                    </div>
                  ) : (
                    <input type={c.type === 'num' ? 'number' : 'text'} className={c.type === 'num' ? 'num' : ''}
                           value={row[ci] ?? ''} onChange={(e) => change(ri, ci, e.target.value)} />
                  )}
                </td>
              ))}
              <td><button className="del" onClick={() => dispatch(delRow({ table: tableKey, row: ri }))}>✕</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="toolbar"><button className="btn sm" onClick={add}>{addLabel}</button></div>
    </div>
  );
}
```

Things to notice:
- **Controlled inputs**: `value={...}` comes from the store, `onChange` dispatches. The
  input never holds its own state — Redux is the single source of truth.
- `row[ci] ?? ''` avoids React's "controlled vs uncontrolled" warning if a cell is missing.
- This one component powers Ceremony, Seserahan, Mahar, Guests, Vendors, and Rundown.

**`src/components/Checklist.jsx`** — the same idea for the `{t, d, n}` lists:

```jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCheck, addCheck, delCheck } from '../slices/weddingSlice';

export default function Checklist({ listKey, placeholder = 'Add an item...', showAdd = true }) {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.wedding[listKey]);
  const [text, setText] = useState('');               // local component state for the input box
  const add = () => { const v = text.trim(); if (!v) return; dispatch(addCheck({ list: listKey, text: v })); setText(''); };

  return (
    <div className="panel">
      <ul className="check">
        {items.map((it, i) => (
          <li key={i} className={it.d ? 'done' : ''}>
            <input type="checkbox" checked={it.d} onChange={(e) => dispatch(toggleCheck({ list: listKey, index: i, done: e.target.checked }))} />
            <div className="body"><div className="ttl">{it.t}</div>{it.n ? <div className="note">{it.n}</div> : null}</div>
            <button className="del" onClick={() => dispatch(delCheck({ list: listKey, index: i }))}>✕</button>
          </li>
        ))}
      </ul>
      {showAdd && (
        <div className="toolbar">
          <input style={{ maxWidth: 320 }} placeholder={placeholder} value={text}
                 onChange={(e) => setText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') add(); }} />
          <button className="btn sm" onClick={add}>+ Add</button>
        </div>
      )}
    </div>
  );
}
```

> **When to use `useState` vs Redux?** The checkbox/row data is shared and persisted →
> Redux. The half-typed text in the "add" box is throwaway UI state → local `useState`.
> Rule of thumb: Redux for data that outlives the component or is read elsewhere.

---

## 15. Header, Nav, AuthGate

**`src/components/Header.jsx`** — names, date, live countdown, sync chip:

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { setField } from '../slices/weddingSlice';
import { countdownText, STATUS_LABELS } from '../utils';

export default function Header() {
  const dispatch = useDispatch();
  const { p1, p2, wdate } = useSelector((s) => s.wedding);
  const status = useSelector((s) => s.auth.status);
  const set = (field) => (e) => dispatch(setField({ field, value: e.target.value }));
  return (
    <header>
      <h1>💍 Wedding Planning Dashboard</h1>
      <div className="names">
        <input placeholder="Partner 1" value={p1} onChange={set('p1')} /><span>&amp;</span>
        <input placeholder="Partner 2" value={p2} onChange={set('p2')} />
      </div>
      <div className="date-row">
        <label>Wedding date: <input type="date" style={{ width: 'auto', display: 'inline-block' }} value={wdate} onChange={set('wdate')} /></label>
        <span className="countdown">{countdownText(wdate)}</span>
        <span className="chip">{STATUS_LABELS[status] || status}</span>
      </div>
    </header>
  );
}
```

**`src/components/Nav.jsx`** — buttons from `TABS`; active tab is a prop from `App`:

```jsx
import { TABS } from '../config';
export default function Nav({ tab, setTab }) {
  return (
    <nav>
      {TABS.map(([key, label]) => (
        <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key)}>{label}</button>
      ))}
    </nav>
  );
}
```

**`src/components/AuthGate.jsx`** — the Google sign-in overlay (only rendered when cloud
is on and nobody's signed in):

```jsx
import { useSelector } from 'react-redux';
import { signIn } from '../cloud';
export default function AuthGate() {
  const error = useSelector((s) => s.auth.error);
  return (
    <div className="gate"><div className="box">
      <h2>💍 Sign in</h2><p className="sub">Log in to your shared wedding planner.</p>
      <button className="btn" style={{ width: '100%' }} onClick={signIn}>Continue with Google</button>
      <div className="err">{error}</div>
    </div></div>
  );
}
```

---

## 16. The tab components

Most tabs are tiny — they compose the generic components. A reusable `ItemTab` covers
the three cost tables. **`src/components/ItemTab.jsx`:**

```jsx
import { useSelector } from 'react-redux';
import Cards from './Cards';
import DataTable from './DataTable';
import { COLS } from '../config';
import { sectionStats } from '../selectors';
import { rp } from '../utils';

export default function ItemTab({ title, sub, tableKey, paidLabel, children }) {
  const s = sectionStats(useSelector((st) => st.wedding[tableKey]));
  return (
    <section>
      <h2>{title}</h2><p className="sub">{sub}</p>
      {children}
      <Cards items={[['Items', String(s.items)], ['Total cost', rp(s.total)], [paidLabel, rp(s.paid)], ['Remaining', rp(s.outstanding)]]} />
      <DataTable tableKey={tableKey} cols={COLS[tableKey]} addLabel="+ Add item" itemTable />
    </section>
  );
}
```

Then the thin tabs — e.g. **`src/components/tabs/Ceremony.jsx`:**

```jsx
import ItemTab from '../ItemTab';
export default function Ceremony() {
  return <ItemTab title="Wedding Ceremony" sub="All ceremony & reception costs." tableKey="ceremony" paidLabel="Paid" />;
}
```

`Seserahan` and `Mahar` are the same with different props (`Mahar` passes a summary
`<input>` as `children`). `Adat`/`Legal` render `<Checklist>`. `Guests`/`Vendors`/
`Rundown` render `<Cards>` (where relevant) + `<DataTable>`. The **Budget** tab is
read-only — it renders `budgetRollup(w)` as cards + a table. **Backup** has export/
import/sign-out/reset buttons that dispatch `replaceAll`/`resetAll`. Copy these from
the repo's `src/components/tabs/` — they're short and follow the patterns above.

---

## 17. App.jsx — tab routing

No router library needed: keep the active tab in component state and render one tab.

```jsx
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { cloudEnabled, TABS } from './config';
import Header from './components/Header';
import Nav from './components/Nav';
import AuthGate from './components/AuthGate';
import Overview from './components/tabs/Overview';
// ...import the other 10 tabs...

const TAB_COMPONENTS = { overview: Overview, budget: Budget, /* ...the rest... */ };

export default function App() {
  const [tab, setTab] = useState(TABS[0][0]);
  const user = useSelector((s) => s.auth.user);
  const TabView = TAB_COMPONENTS[tab];
  return (
    <>
      {cloudEnabled && !user && <AuthGate />}
      <Header />
      <Nav tab={tab} setTab={setTab} />
      <main><TabView /></main>
      <footer className="foot">General planning guide — verify adat & legal rules locally.</footer>
    </>
  );
}
```

`AuthGate` renders on top (fixed overlay) until a user signs in. In local-only mode
(`cloudEnabled` false) it never shows.

---

## 18. Run it

```bash
npm run dev          # http://localhost:5173
```

- **Local-only** (blank `databaseURL`): the dashboard loads straight away, data saved to localStorage.
- **Cloud on**: you'll see the Google sign-in gate. (Add `localhost` to Firebase →
  Authentication → Settings → Authorized domains, and your Pages domain later.)

Open **Redux DevTools** (browser extension) to watch actions fire and state change —
the best way to *see* the data flow.

Test the magic: type a Unit price on **Wedding Ceremony**, then open **Budget** — the
roll-up already includes it. No wiring; selectors + `useSelector` did it.

---

## 19. Lock down the database rules

Anyone with a Google account can *authenticate*, so the real gate is your DB rules.
After you and your partner each sign in once, get both **User UIDs** from Firebase →
Authentication → Users, then set:

```json
{
  "rules": {
    "weddings": {
      "$id": {
        ".read":  "auth.uid === 'UID_ONE' || auth.uid === 'UID_TWO'",
        ".write": "auth.uid === 'UID_ONE' || auth.uid === 'UID_TWO'"
      }
    }
  }
}
```

Now only your two accounts can read/write — even though the client config is public in
the built JS (that's normal and safe for Firebase; the rules are what protect data).

---

## 20. Deploy to GitHub Pages

A React app is a build step, so Pages serves the built `dist/`, not the source.

1. Push the repo to GitHub (public repo for free Pages).
2. Add a deploy workflow `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy
   on: { push: { branches: [main] } }
   permissions: { contents: read, pages: write, id-token: write }
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with: { node-version: 20 }
         - run: npm ci && npm run build
         - uses: actions/upload-pages-artifact@v3
           with: { path: dist }
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment: github-pages
       steps:
         - uses: actions/deploy-pages@v4
   ```
3. In the repo: **Settings → Pages → Source → GitHub Actions**.
4. Add your `*.github.io` domain to Firebase → Authentication → Settings → Authorized domains.

Because `vite.config.js` uses `base: './'`, the built asset paths are relative and work
under `/<repo>/` with no extra config.

(Simpler alternative: `npm i -D gh-pages`, add `"deploy": "npm run build && gh-pages -d dist"`, run `npm run deploy`.)

---

## 21. How to add a new tab (extending it)

Say you want a **"Honeymoon"** cost tab:

1. **seed.js** — add `honeymoon: [['Flights','1','','','no','','']]`.
2. **config.js** — add `honeymoon: itemCols('Paid')` to `COLS`, and `['honeymoon','Honeymoon']` to `TABS`.
3. **tabs/Honeymoon.jsx**:
   ```jsx
   import ItemTab from '../ItemTab';
   export default function Honeymoon() {
     return <ItemTab title="Honeymoon" sub="Trip costs." tableKey="honeymoon" paidLabel="Paid" />;
   }
   ```
4. **App.jsx** — import it and add `honeymoon: Honeymoon` to `TAB_COMPONENTS`.

No reducer changes needed — `setCell`/`addRow`/`delRow` are generic over `tableKey`.
That's the payoff of the config-driven design.

---

## 22. Recap of the data flow

```
 ┌─────────────┐   dispatch(action)    ┌──────────────┐
 │  Component  │ ───────────────────▶  │   Reducer    │  (Immer-powered update)
 │ (useSelector│                       │ in weddingSlice
 │  useDispatch)│ ◀─────────────────── └──────┬───────┘
 └─────────────┘   re-render on change        │ new state
        ▲                                      ▼
        │                              ┌────────────────┐
        │   useSelector re-reads       │  Redux store   │
        └──────────────────────────── │ {wedding, auth} │
                                       └──────┬─────────┘
                                              │ every wedding/* action
                                              ▼
                                       ┌────────────────┐   localStorage
                                       │ syncMiddleware │ ─────────────▶ cache
                                       └──────┬─────────┘
                                              │ scheduleCloudPush (debounced)
                                              ▼
                                       ┌────────────────┐   onValue (remote change)
                                       │    Firebase    │ ─────────────▶ dispatch(replaceAll)
                                       │  Realtime DB   │                 (loops back to store)
                                       └────────────────┘
```

That's the whole app: **one state object, pure reducers, selectors for derived values,
middleware for persistence, and Firebase mirrored in through `replaceAll`.** Once this
clicks, you can rebuild it — or any Redux app — from memory.

Happy building, and selamat menikah. 💍
