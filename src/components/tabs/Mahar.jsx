import { useSelector, useDispatch } from 'react-redux';
import ItemTab from '../ItemTab';
import { setField } from '../../slices/weddingSlice';

export default function Mahar() {
  const dispatch = useDispatch();
  const mahar = useSelector((s) => s.wedding.mahar);
  return (
    <ItemTab
      title="Mahar & Mas Kawin"
      sub="The dowry and its components — ring, gold/replica, cash, ring box & keepsake materials."
      tableKey="maharkawin"
      paidLabel="Bought"
    >
      <div className="panel" style={{ marginBottom: 16 }}>
        <label className="field">
          Agreed mahar (summary)
          <input
            placeholder="e.g. 10 grams gold + cash Rp 500.000 + prayer set"
            value={mahar}
            onChange={(e) => dispatch(setField({ field: 'mahar', value: e.target.value }))}
          />
        </label>
      </div>
    </ItemTab>
  );
}
