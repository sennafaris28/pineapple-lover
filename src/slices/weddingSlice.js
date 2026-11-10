import { createSlice } from '@reduxjs/toolkit';
import { seed } from '../seed';
import { STORAGE_KEY } from '../config';

// Fill any keys missing from loaded/remote data with seed defaults (forward-compat).
function mergeSeed(data) {
  const s = seed();
  for (const k in s) if (!(k in data)) data[k] = s[k];
  return data;
}

// Initial state = the localStorage cache if present, otherwise the seed.
function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const r = JSON.parse(raw);
      if (r && typeof r === 'object') return mergeSeed(r);
    }
  } catch (e) {
    /* ignore corrupt cache */
  }
  return seed();
}

const weddingSlice = createSlice({
  name: 'wedding',
  initialState: loadInitial(),
  reducers: {
    // Simple top-level fields: p1, p2, wdate, totalBudget, mahar.
    setField: (state, { payload: { field, value } }) => {
      state[field] = value;
    },
    // One cell in a table row: table = slice key, row = index, col = index.
    setCell: (state, { payload: { table, row, col, value } }) => {
      state[table][row][col] = value;
    },
    addRow: (state, { payload: { table, blank } }) => {
      state[table].push(blank);
    },
    delRow: (state, { payload: { table, row } }) => {
      state[table].splice(row, 1);
    },
    // Replace every row of one table (used by the Guest List Excel import).
    setTable: (state, { payload: { table, rows } }) => {
      state[table] = rows;
    },
    // Checklist items (timeline / adat / legal) are {t, d, n?} objects.
    toggleCheck: (state, { payload: { list, index, done } }) => {
      state[list][index].d = done;
    },
    addCheck: (state, { payload: { list, text } }) => {
      state[list].push({ t: text, d: false, n: '' });
    },
    delCheck: (state, { payload: { list, index } }) => {
      state[list].splice(index, 1);
    },
    // Replace the whole document — used by JSON import and remote Firebase sync.
    replaceAll: (state, { payload }) => mergeSeed({ ...payload }),
    // Wipe back to defaults.
    resetAll: () => seed(),
  },
});

export const {
  setField, setCell, addRow, delRow, setTable,
  toggleCheck, addCheck, delCheck,
  replaceAll, resetAll,
} = weddingSlice.actions;

export default weddingSlice.reducer;
