import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { replaceAll, resetAll } from '../../slices/weddingSlice';
import { logOut } from '../../cloud';

export default function Backup() {
  const dispatch = useDispatch();
  const w = useSelector((s) => s.wedding);
  const fileRef = useRef(null);

  const exportData = () => {
    const blob = new Blob([JSON.stringify(w, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'wedding-data.json';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const importData = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const rd = new FileReader();
    rd.onload = () => {
      try {
        dispatch(replaceAll(JSON.parse(rd.result)));
        alert('Data imported.');
      } catch (err) {
        alert('Could not read that file.');
      }
    };
    rd.readAsText(f);
    e.target.value = '';
  };

  const reset = () => {
    if (confirm("Erase ALL data and start fresh? This can't be undone.")) dispatch(resetAll());
  };

  return (
    <section>
      <h2>Backup &amp; Data</h2>
      <p className="sub">Data is cached in your browser and synced to Firebase. Export regularly for a hard backup.</p>
      <div className="panel">
        <div className="toolbar">
          <button className="btn" onClick={exportData}>⬇ Export (JSON)</button>
          <button className="btn ghost" onClick={() => fileRef.current.click()}>⬆ Import (JSON)</button>
          <input ref={fileRef} type="file" accept="application/json" style={{ display: 'none' }} onChange={importData} />
          <button className="btn ghost" onClick={logOut}>🔓 Sign out</button>
          <button className="btn ghost right" style={{ color: 'var(--warn)', borderColor: 'var(--warn)' }} onClick={reset}>🗑 Reset all</button>
        </div>
        <p className="sub" style={{ margin: '4px 0 0' }}>
          Export writes a <code>wedding-data.json</code> file. Import replaces current data.
        </p>
      </div>
    </section>
  );
}
