import { useSelector, useDispatch } from 'react-redux';
import Cards from '../Cards';
import { setField } from '../../slices/weddingSlice';
import { budgetRollup } from '../../selectors';
import { rp } from '../../utils';

export default function Budget() {
  const dispatch = useDispatch();
  const w = useSelector((s) => s.wedding);
  const roll = budgetRollup(w);
  const left = roll.target ? roll.target - roll.allocated : roll.allocated - roll.paid;

  return (
    <section>
      <h2>Budget (IDR)</h2>
      <p className="sub">
        Total allocation rolled up from the Wedding Ceremony, Seserahan and Mahar tabs. Add or edit
        items on those tabs — this view is read-only.
      </p>
      <Cards
        items={[
          ['Total budget', rp(roll.target)],
          ['Allocated', rp(roll.allocated)],
          ['Paid', rp(roll.paid)],
          [roll.target ? 'Budget left' : 'Outstanding', rp(left)],
        ]}
      />
      <label className="field narrow">
        Total budget / target (Rp)
        <input
          type="number"
          placeholder="0"
          value={w.totalBudget}
          onChange={(e) => dispatch(setField({ field: 'totalBudget', value: e.target.value }))}
        />
      </label>
      <div className="panel">
        <table>
          <thead>
            <tr>
              <th>Section</th>
              <th className="num">Items</th>
              <th className="num">Allocated</th>
              <th className="num">Paid</th>
              <th className="num">Outstanding</th>
            </tr>
          </thead>
          <tbody>
            {roll.sections.map(([name, s]) => (
              <tr key={name}>
                <td>{name}</td>
                <td className="num">{s.items}</td>
                <td className="num">{rp(s.total)}</td>
                <td className="num">{rp(s.paid)}</td>
                <td className="num">{rp(s.outstanding)}</td>
              </tr>
            ))}
            <tr style={{ fontWeight: 600 }}>
              <td>Total</td>
              <td className="num">{roll.items}</td>
              <td className="num">{rp(roll.allocated)}</td>
              <td className="num">{rp(roll.paid)}</td>
              <td className="num">{rp(roll.allocated - roll.paid)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
