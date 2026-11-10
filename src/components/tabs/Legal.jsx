import Checklist from '../Checklist';

export default function Legal() {
  return (
    <section>
      <h2>Legal &amp; Administrasi</h2>
      <p className="sub">
        Marriage paperwork in Indonesia. Requirements and lead times vary by region & faith — treat
        as a guide, confirm with your KUA / Dukcapil.
      </p>
      <Checklist listKey="legal" placeholder="Add a document/step..." />
    </section>
  );
}
