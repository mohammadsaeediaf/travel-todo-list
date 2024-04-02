import { useState } from "react";

export default function App() {
  const [item, setItem] = useState([]);

  function handleAddItem(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItem((items) => items.filter((i) => i.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={item} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <header>
      <h1>🏝️ Far Away 🧳</h1>
    </header>
  );
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder={" item..."}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }
}
function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item listItem={item} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ listItem, onDeleteItem }) {
  return (
    <li>
      <span style={listItem.packed ? { textDecoration: "line-through" } : {}}>
        {listItem.quantity} {listItem.description}
      </span>
      <button onClick={() => onDeleteItem(listItem.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed (X%) </em>
    </footer>
  );
}
