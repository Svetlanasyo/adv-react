import * as React from 'react';
import '../styles.css';

const allItems = [
    {id: 'apple', value: '🍎 apple'},
    {id: 'orange', value: '🍊 orange'},
    {id: 'grape', value: '🍇 grape'},
    {id: 'pear', value: '🍐 pear'},
]

function Array() {
    const [items, setItems] = React.useState(allItems);

    function addItem() {
        const itemIds = items.map(i => i.id)
        setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
    }

    function removeItem(item) {
        setItems(items.filter(i => i.id !== item.id))
    }

    return (
        <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map((item) => (
          <li>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
    )
}

export default Array
