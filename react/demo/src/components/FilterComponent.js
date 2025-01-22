import React, { useState } from 'react';

function FilterComponent() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleInStockOnlyChange = (event) => {
    setInStockOnly(event.target.checked);
  };

  const rows = [];
  let lastCategory = null;

  PRODUCTS.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <tr key={product.category}>
          <th colSpan="2">{product.category}</th>
        </tr>
      );
    }

    rows.push(
      <tr key={product.name}>
        <td>
          {product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>}
        </td>
        <td>{product.price}</td>
      </tr>
    );

    lastCategory = product.category;
  });

  return (
    <div>
      <div>
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={handleFilterTextChange}
        />
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={handleInStockOnlyChange}
          />
          {' '}Only show products in stock
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default FilterComponent;
