import DataTable from '../DataTable';
import { COLS } from '../../config';

export default function Rundown() {
  return (
    <section>
      <h2>Day-of Rundown</h2>
      <p className="sub">Minute-by-minute schedule for the big day.</p>
      <DataTable tableKey="rundown" cols={COLS.rundown} addLabel="+ Add slot" />
    </section>
  );
}
