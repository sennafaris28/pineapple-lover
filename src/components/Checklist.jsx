import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCheck, addCheck, delCheck } from '../slices/weddingSlice';

// Generic checklist for the {t, d, n?} item lists (timeline / adat / legal).
export default function Checklist({ listKey, placeholder = 'Add an item...', showAdd = true }) {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.wedding[listKey]);
  const [text, setText] = useState('');

  const add = () => {
    const v = text.trim();
    if (!v) return;
    dispatch(addCheck({ list: listKey, text: v }));
    setText('');
  };

  return (
    <div className="panel">
      <ul className="check">
        {items.map((it, i) => (
          <li key={i} className={it.d ? 'done' : ''}>
            <input
              type="checkbox"
              checked={it.d}
              onChange={(e) => dispatch(toggleCheck({ list: listKey, index: i, done: e.target.checked }))}
            />
            <div className="body">
              <div className="ttl">{it.t}</div>
              {it.n ? <div className="note">{it.n}</div> : null}
            </div>
            <button className="del" title="Delete" onClick={() => dispatch(delCheck({ list: listKey, index: i }))}>✕</button>
          </li>
        ))}
      </ul>
      {showAdd && (
        <div className="toolbar">
          <input
            style={{ maxWidth: 320 }}
            placeholder={placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') add(); }}
          />
          <button className="btn sm" onClick={add}>+ Add</button>
        </div>
      )}
    </div>
  );
}
