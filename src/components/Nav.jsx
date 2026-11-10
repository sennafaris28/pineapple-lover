import { TABS } from '../config';

export default function Nav({ tab, setTab }) {
  return (
    <nav>
      {TABS.map(([key, label]) => (
        <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key)}>
          {label}
        </button>
      ))}
    </nav>
  );
}
