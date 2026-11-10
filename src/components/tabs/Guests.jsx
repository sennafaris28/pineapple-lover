import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../Cards';
import DataTable from '../DataTable';
import { COLS } from '../../config';
import { setTable } from '../../slices/weddingSlice';
import { guestStats } from '../../selectors';

// Map a spreadsheet header cell to one of our guest fields. Order matters:
// "+1 Name" is checked before the "Bringing +1?" / name rules so it isn't grabbed first.
function fieldFor(h) {
  h = String(h).toLowerCase().trim();
  if (/\+?1\s*name|plus.?one\s*name/.test(h)) return 'plusName';
  if (/guest\s*name|^name$/.test(h)) return 'name';
  if (/^side$/.test(h)) return 'side';
  if (/bringing|\+\s*1|plus.?one/.test(h)) return 'plus';
  if (/rsvp/.test(h)) return 'rsvp';
  if (/note/.test(h)) return 'notes';
  if (/attending|pax|headcount|total/.test(h)) return 'pax';
  return null;
}

const titleize = (v, allowed) => {
  const s = String(v || '').trim();
  return allowed.find((a) => a.toLowerCase() === s.toLowerCase()) ?? '';
};

// Turn a sheet (array-of-arrays) into guest rows [name, side, plus, plusName, rsvp, notes, pax].
function parseGuestSheet(aoa) {
  const hi = aoa.findIndex((r) => r.some((c) => /guest\s*name|^name$/i.test(String(c || ''))));
  if (hi < 0) throw new Error('No "Guest Name" header found in that sheet.');
  const colMap = {};
  aoa[hi].forEach((c, i) => { const f = fieldFor(c); if (f && !(f in colMap)) colMap[f] = i; });
  if (!('name' in colMap)) throw new Error('Could not find the guest-name column.');

  const out = [];
  for (let r = hi + 1; r < aoa.length; r++) {
    const row = aoa[r] || [];
    const name = String(row[colMap.name] ?? '').trim();
    if (!name) continue;
    const plusRaw = String(row[colMap.plus] ?? '').trim().toLowerCase();
    const paxRaw = row[colMap.pax];
    out.push([
      name,
      titleize(row[colMap.side], ['Groom', 'Bride', 'Both']),
      plusRaw.startsWith('y') ? 'Yes' : 'No',
      String(row[colMap.plusName] ?? '').trim(),
      titleize(row[colMap.rsvp], ['Pending', 'Confirmed', 'Declined']),
      String(row[colMap.notes] ?? '').trim(),
      paxRaw === '' || paxRaw == null ? '' : String(Number(paxRaw) || 0),
    ]);
  }
  return out;
}

export default function Guests() {
  const dispatch = useDispatch();
  const rows = useSelector((s) => s.wedding.guests);
  const fileRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const g = guestStats(rows);

  const onFile = async (e) => {
    const file = e.target.files[0];
    e.target.value = '';
    if (!file) return;
    setBusy(true);
    try {
      const XLSX = await import('xlsx'); // lazy — only loaded when importing
      const wb = XLSX.read(await file.arrayBuffer());
      const sheetName = wb.SheetNames.find((n) => /guest/i.test(n)) || wb.SheetNames[0];
      const aoa = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, defval: '' });
      const guests = parseGuestSheet(aoa);
      if (!guests.length) { alert('No guest rows found in that file.'); return; }
      const pax = guests.reduce((a, r) => a + (Number(r[6]) || 0), 0);
      if (confirm(`Import ${guests.length} guests (${pax} pax) from "${sheetName}"?\n\nThis REPLACES the current guest list.`)) {
        dispatch(setTable({ table: 'guests', rows: guests }));
        alert(`Imported ${guests.length} guests.`);
      }
    } catch (err) {
      alert('Import failed: ' + (err?.message || err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <section>
      <h2>Guest List &amp; RSVP</h2>
      <p className="sub">
        Import from Excel, then edit inline. <strong>Pax</strong> is the real headcount for that invitation
        (a household can be more than 2) — the counters below sum it.
      </p>

      <Cards
        items={[
          ['Invites sent', String(g.invites)],
          ['Total pax', String(g.pax)],
          ['Confirmed', String(g.confirmed)],
          ['Pending', String(g.pending)],
          ['Declined', String(g.declined)],
          ['No reply', String(g.noReply)],
        ]}
      />
      <Cards
        items={[
          ['Attending · Bride', String(g.bride)],
          ['Attending · Groom', String(g.groom)],
          ['Attending · Both', String(g.both)],
        ]}
      />

      <div className="toolbar">
        <button className="btn" disabled={busy} onClick={() => fileRef.current.click()}>
          {busy ? '⟳ Importing…' : '⬆ Import from Excel (.xlsx)'}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept=".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          style={{ display: 'none' }}
          onChange={onFile}
        />
      </div>

      <DataTable tableKey="guests" cols={COLS.guests} addLabel="+ Add guest" />
    </section>
  );
}
