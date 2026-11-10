// Summary cards grid. `items` is an array of [label, value] pairs.
export default function Cards({ items }) {
  return (
    <div className="cards">
      {items.map(([label, val], i) => (
        <div className="card" key={i}>
          <div className="label">{label}</div>
          <div className="val">{val}</div>
        </div>
      ))}
    </div>
  );
}
