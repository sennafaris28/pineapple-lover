import { useSelector, useDispatch } from 'react-redux';
import { setCell, addRow, delRow } from '../slices/weddingSlice';

function openLink(url) {
  let u = (url || '').trim();
  if (!u) {
    alert('Add a link first.');
    return;
  }
  if (!/^https?:\/\//i.test(u)) u = 'https://' + u;
  window.open(u, '_blank', 'noopener');
}

// Generic editable table driven by a column config (see config.js COLS).
// tableKey is the slice field; rows are plain arrays indexed by column.
export default function DataTable({ tableKey, cols, addLabel = '+ Add row', itemTable = false }) {
  const dispatch = useDispatch();
  const rows = useSelector((s) => s.wedding[tableKey]);

  const change = (row, col, value) => dispatch(setCell({ table: tableKey, row, col, value }));
  const add = () => {
    const blank = cols.map((c) => (c.type === 'select' ? c.opts[0] : ''));
    dispatch(addRow({ table: tableKey, blank }));
  };

  return (
    <div className="panel">
      <table className={itemTable ? 'item-table' : ''}>
        <thead>
          <tr>
            {cols.map((c, i) => (
              <th key={i} className={c.type === 'num' ? 'num' : ''}>{c.h}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {cols.map((c, ci) => (
                <td key={ci}>
                  {c.type === 'select' ? (
                    <select value={row[ci] ?? c.opts[0]} onChange={(e) => change(ri, ci, e.target.value)}>
                      {c.opts.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  ) : c.type === 'link' ? (
                    <div className="linkcell">
                      <input
                        type="url"
                        placeholder="https://..."
                        value={row[ci] ?? ''}
                        onChange={(e) => change(ri, ci, e.target.value)}
                      />
                      <button className="btn sm ghost" title="Open link" onClick={() => openLink(row[ci])}>↗</button>
                    </div>
                  ) : (
                    <input
                      type={c.type === 'num' ? 'number' : 'text'}
                      className={c.type === 'num' ? 'num' : ''}
                      value={row[ci] ?? ''}
                      onChange={(e) => change(ri, ci, e.target.value)}
                    />
                  )}
                </td>
              ))}
              <td>
                <button className="del" title="Delete" onClick={() => dispatch(delRow({ table: tableKey, row: ri }))}>✕</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="toolbar">
        <button className="btn sm" onClick={add}>{addLabel}</button>
      </div>
    </div>
  );
}
