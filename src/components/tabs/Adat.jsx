import Checklist from '../Checklist';

export default function Adat() {
  return (
    <section>
      <h2>Adat &amp; Rituals</h2>
      <p className="sub">
        Customary stages vary by ethnicity (Jawa, Sunda, Batak, Minang, Bali, etc.). Remove what
        doesn't apply and add your own.
      </p>
      <Checklist listKey="adat" placeholder="Add a ceremony/stage..." />
    </section>
  );
}
