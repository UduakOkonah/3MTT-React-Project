// ListComponent.jsx
import React from 'react';

const ListComponent = ({ items, renderItem }) => {
  if (items.length === 0) return <p>No items to display.</p>;

  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {renderItem ? renderItem(item) : JSON.stringify(item)}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
