// Pure helpers that derive numbers from slices of state. Because components read
// these through useSelector, any edit re-computes and re-renders automatically —
// no manual "refresh the cards" calls like the vanilla version needed.

// Totals for one itemised table (ceremony / seserahan / maharkawin).
// Row shape: [item, qty, unitPrice, vendor, paid, notes, link].
export function sectionStats(rows) {
  rows = rows || [];
  const line = (r) => (Number(r[2]) || 0) * (Number(r[1]) || 1);
  const total = rows.reduce((a, r) => a + line(r), 0);
  const paid = rows.reduce((a, r) => a + (r[4] === 'yes' ? line(r) : 0), 0);
  return { items: rows.length, total, paid, outstanding: total - paid };
}

// Budget roll-up across the three itemised tabs.
export function budgetRollup(w) {
  const cer = sectionStats(w.ceremony);
  const ses = sectionStats(w.seserahan);
  const mah = sectionStats(w.maharkawin);
  const allocated = cer.total + ses.total + mah.total;
  const paid = cer.paid + ses.paid + mah.paid;
  const target = Number(w.totalBudget) || 0;
  return {
    sections: [
      ['Wedding Ceremony', cer],
      ['Seserahan', ses],
      ['Mahar & Mas Kawin', mah],
    ],
    allocated,
    paid,
    target,
    items: cer.items + ses.items + mah.items,
  };
}

// Sum a numeric column across rows (used by Guests / Vendors).
export const sumCol = (rows, ci) => (rows || []).reduce((a, r) => a + (Number(r[ci]) || 0), 0);

// Guest counters — mirrors the Summary block of the imported Guest List sheet.
// Row shape: [name, side, plusOne, plusName, rsvp, notes, pax].
export function guestStats(rows) {
  rows = (rows || []).filter((r) => String(r[0] || '').trim());
  const pax = (r) => Number(r[6]) || 0;
  const byRsvp = (v) => rows.filter((r) => r[4] === v).length;
  const paxOf = (side) => rows.filter((r) => r[1] === side).reduce((a, r) => a + pax(r), 0);
  return {
    invites: rows.length,                                  // undangan terkirim
    pax: rows.reduce((a, r) => a + pax(r), 0),             // total pax realistis
    confirmed: byRsvp('Confirmed'),
    pending: byRsvp('Pending'),
    declined: byRsvp('Declined'),
    noReply: rows.filter((r) => !String(r[4] || '').trim()).length,
    bride: paxOf('Bride'),
    groom: paxOf('Groom'),
    both: paxOf('Both'),
  };
}
