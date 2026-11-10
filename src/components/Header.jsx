import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setField } from '../slices/weddingSlice';
import { countdownText, STATUS_LABELS, isoToDmy, dmyToIso } from '../utils';

// dd/mm/yyyy text field. Stores ISO internally, commits only when the typed
// value is a complete valid date (or cleared), so partial typing isn't lost.
function DateInput({ value, onCommit }) {
  const [text, setText] = useState(isoToDmy(value));
  useEffect(() => { setText(isoToDmy(value)); }, [value]);

  const handle = (e) => {
    const t = e.target.value;
    setText(t);
    const iso = dmyToIso(t);
    if (iso) onCommit(iso);
    else if (t.trim() === '') onCommit('');
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      placeholder="dd/mm/yyyy"
      maxLength={10}
      style={{ width: '130px', display: 'inline-block' }}
      value={text}
      onChange={handle}
    />
  );
}

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
          <DateInput
            value={wdate}
            onCommit={(iso) => dispatch(setField({ field: 'wdate', value: iso }))}
          />
        </label>
        <span className="countdown">{countdownText(wdate)}</span>
        <span className="chip" title="Data sync status">{STATUS_LABELS[status] || status}</span>
      </div>
    </header>
  );
}
