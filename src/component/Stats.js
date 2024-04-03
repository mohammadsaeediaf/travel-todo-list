export default function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">Start adding some item to your packing List!</p>
    );

  const itemLength = item.length;
  const itemPacked = item.filter((item) => item.packed).length;
  const percentage = Math.floor((itemPacked / itemLength) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Redy to go"
          : `You have ${itemLength} items on your list, and you already packed
            ${itemPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
