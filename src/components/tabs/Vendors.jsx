import { useSelector } from 'react-redux';
import Cards from '../Cards';
import DataTable from '../DataTable';
import { COLS } from '../../config';
import { sumCol } from '../../selectors';
import { rp } from '../../utils';

export default function Vendors() {
  const v = useSelector((s) => s.wedding.vendors);
  const quote = sumCol(v, 3);
  const dp = sumCol(v, 4);
  const booked = v.filter((r) => r[5] === 'yes').length;

  return (
    <section>
      <h2>Vendors</h2>
      <p className="sub">Quotes, deposits (DP), balances, and booking status.</p>
      <Cards
        items={[
          ['Vendors', String(v.length)],
          ['Booked', String(booked)],
          ['Total quotes', rp(quote)],
          ['DP paid', rp(dp)],
          ['Balance', rp(quote - dp)],
        ]}
      />
      <DataTable tableKey="vendors" cols={COLS.vendors} addLabel="+ Add vendor" />
    </section>
  );
}
