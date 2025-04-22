import React from 'react';

const ListComponent = ({ items }) => {
  if (items.length === 0) return <p>No items found.</p>;

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <strong>{item.name}</strong> – {item.email}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
