// Format a number as Indonesian Rupiah, e.g. 325000 -> "Rp 325.000".
export const rp = (v) => 'Rp ' + (Number(v) || 0).toLocaleString('id-ID');

// Dates are stored internally as ISO (yyyy-mm-dd) so countdown math stays simple,
// but shown/entered as dd/mm/yyyy. These convert between the two.
export function isoToDmy(iso) {
  const m = String(iso || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return m ? `${m[3]}/${m[2]}/${m[1]}` : '';
}
export function dmyToIso(s) {
  const m = String(s || '').trim().match(/^(\d{1,2})\D?(\d{1,2})\D?(\d{4})$/);
  if (!m) return '';
  const d = +m[1], mo = +m[2], y = +m[3];
  const iso = `${y}-${String(mo).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  const dt = new Date(iso + 'T00:00:00');
  // Reject impossible dates like 31/02/2027.
  if (dt.getFullYear() !== y || dt.getMonth() + 1 !== mo || dt.getDate() !== d) return '';
  return iso;
}

// Build the countdown string shown in the header.
export function countdownText(wdate) {
  if (!wdate) return 'Set your date →';
  const d = new Date(wdate + 'T00:00:00');
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const diff = Math.round((d - now) / 86400000);
  const ds = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  if (diff > 0) return `${diff} days to go · ${ds}`;
  if (diff === 0) return `🎉 Today! · ${ds}`;
  return `Married ${Math.abs(diff)} days ago · ${ds}`;
}

// Human labels for the sync status chip.
export const STATUS_LABELS = {
  local: '💾 Local only',
  connecting: '⟳ Connecting…',
  saving: '⟳ Saving…',
  synced: '☁ Synced',
  error: '⚠ Sync error (local saved)',
};
