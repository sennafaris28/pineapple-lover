import { useSelector, useDispatch } from 'react-redux';
import Cards from '../Cards';
import { setField } from '../../slices/weddingSlice';
import { budgetRollup } from '../../selectors';
import { rp } from '../../utils';

export default function Budget() {
  const dispatch = useDispatch();
  const w = useSelector((s) => s.wedding);
  const roll = budgetRollup(w);
  const remaining = roll.target - roll.allocated;
  const over = remaining < 0;
  const remColor = over ? 'var(--warn)' : 'var(--ok)';

  return (
    <section>
      <h2>Budget (IDR)</h2>
      <p className="sub">
        Set your total budget — every cost you add on the Wedding Ceremony, Seserahan and Mahar tabs is
        <strong> deducted</strong> from it, and what's left updates live.
      </p>

      <label className="field narrow">
        Total budget you're working with (Rp)
        <input
          type="number"
          placeholder="e.g. 150000000"
          value={w.totalBudget}
          onChange={(e) => dispatch(setField({ field: 'totalBudget', value: e.target.value }))}
        />
      </label>

      <Cards
        items={[
          ['Budget set', rp(roll.target)],
          ['Deducted (allocated)', rp(roll.allocated)],
          ['Paid so far', rp(roll.paid)],
        ]}
      />

      {/* The deductive ledger: budget minus each section = remaining. */}
      <div className="panel">
        <table>
          <tbody>
            <tr style={{ fontWeight: 600 }}>
              <td>Budget set</td>
              <td className="num">{rp(roll.target)}</td>
            </tr>
            {roll.sections.map(([name, s]) => (
              <tr key={name}>
                <td style={{ color: 'var(--muted)' }}>− {name}</td>
                <td className="num" style={{ color: 'var(--muted)' }}>{rp(s.total)}</td>
              </tr>
            ))}
            <tr style={{ fontWeight: 700, borderTop: '2px solid var(--line)' }}>
              <td>= Remaining{over ? ' (over budget!)' : ''}</td>
              <td className="num" style={{ color: remColor }}>{rp(remaining)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Per-section detail. */}
      <div className="panel" style={{ marginTop: 16 }}>
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
