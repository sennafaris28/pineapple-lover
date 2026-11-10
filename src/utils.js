// Format a number as Indonesian Rupiah, e.g. 325000 -> "Rp 325.000".
export const rp = (v) => 'Rp ' + (Number(v) || 0).toLocaleString('id-ID');

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
