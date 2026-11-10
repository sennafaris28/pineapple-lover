import { useSelector } from 'react-redux';
import Cards from '../Cards';
import DataTable from '../DataTable';
import { COLS } from '../../config';

export default function Guests() {
  const g = useSelector((s) => s.wedding.guests);
  const invited = g.reduce((a, r) => a + (Number(r[3]) || 0), 0);
  const yes = g.filter((r) => r[4] === 'Yes').length;
  const no = g.filter((r) => r[4] === 'No').length;

  return (
    <section>
      <h2>Guest List &amp; RSVP</h2>
      <p className="sub">Track invites, sides, and RSVP status.</p>
      <Cards
        items={[
          ['Parties', String(g.length)],
          ['Invited (pax)', String(invited)],
          ['RSVP Yes', String(yes)],
          ['RSVP No', String(no)],
        ]}
      />
      <DataTable tableKey="guests" cols={COLS.guests} addLabel="+ Add guest" />
    </section>
  );
}
