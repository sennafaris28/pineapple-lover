import { useSelector, useDispatch } from 'react-redux';
import { setField } from '../slices/weddingSlice';
import { countdownText, STATUS_LABELS } from '../utils';

export default function Header() {
  const dispatch = useDispatch();
  const { p1, p2, wdate } = useSelector((s) => s.wedding);
  const status = useSelector((s) => s.auth.status);
  const set = (field) => (e) => dispatch(setField({ field, value: e.target.value }));

  return (
    <header>
      <h1>💍 Wedding Planning Dashboard</h1>
      <div className="names">
        <input placeholder="Partner 1" value={p1} onChange={set('p1')} />
        <span>&amp;</span>
        <input placeholder="Partner 2" value={p2} onChange={set('p2')} />
      </div>
      <div className="date-row">
        <label>
          Wedding date:{' '}
          <input
            type="date"
            style={{ width: 'auto', display: 'inline-block' }}
            value={wdate}
            onChange={set('wdate')}
          />
        </label>
        <span className="countdown">{countdownText(wdate)}</span>
        <span className="chip" title="Data sync status">{STATUS_LABELS[status] || status}</span>
      </div>
    </header>
  );
}
