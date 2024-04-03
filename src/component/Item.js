export default function Item({ listItem, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={listItem.packed}
        onChange={() => onToggleItem(listItem.id)}
      />
      <span style={listItem.packed ? { textDecoration: "line-through" } : {}}>
        {listItem.quantity} {listItem.description}
      </span>
      <button onClick={() => onDeleteItem(listItem.id)}>❌</button>
    </li>
  );
}
