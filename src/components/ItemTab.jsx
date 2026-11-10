import { useSelector } from 'react-redux';
import Cards from './Cards';
import DataTable from './DataTable';
import { COLS } from '../config';
import { sectionStats } from '../selectors';
import { rp } from '../utils';

// Shared layout for the three itemised cost tabs (Ceremony / Seserahan / Mahar).
// `children` renders above the summary cards (used by Mahar for its summary field).
export default function ItemTab({ title, sub, tableKey, paidLabel, children }) {
  const rows = useSelector((s) => s.wedding[tableKey]);
  const s = sectionStats(rows);
  return (
    <section>
      <h2>{title}</h2>
      <p className="sub">{sub}</p>
      {children}
      <Cards
        items={[
          ['Items', String(s.items)],
          ['Total cost', rp(s.total)],
          [paidLabel, rp(s.paid)],
          ['Remaining', rp(s.outstanding)],
        ]}
      />
      <DataTable tableKey={tableKey} cols={COLS[tableKey]} addLabel="+ Add item" itemTable />
    </section>
  );
}
