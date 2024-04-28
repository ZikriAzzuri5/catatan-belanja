export default function Item({item, onDeleteItem, onToggleItem}) {
  return (
    <li key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} />
      <span style={{ textDecoration: item.checked ? 'line-through' : 'none'}}>{item.name}</span>
      <span>{item.qty}</span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  )
}