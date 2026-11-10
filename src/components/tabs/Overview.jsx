import { useSelector } from 'react-redux';
import Cards from '../Cards';
import Checklist from '../Checklist';
import { budgetRollup } from '../../selectors';
import { rp } from '../../utils';

export default function Overview() {
  const w = useSelector((s) => s.wedding);
  const done = w.timeline.filter((x) => x.d).length;
  const roll = budgetRollup(w);
  const invited = w.guests.reduce((a, r) => a + (Number(r[3]) || 0), 0);

  return (
    <section>
      <h2>Overview &amp; Timeline</h2>
      <p className="sub">Your countdown and planning milestones. Tick them off as you go.</p>
      <Cards
        items={[
          ['Milestones done', `${done} / ${w.timeline.length}`],
          ['Budget', rp(roll.target)],
          ['Allocated', rp(roll.allocated)],
          ['Guests invited', String(invited)],
        ]}
      />
      <Checklist listKey="timeline" showAdd={false} />
    </section>
  );
}
