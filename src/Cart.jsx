// Cart.jsx
import React from 'react';

function Cart({ cart, updateCart, removeFromCart }) {
  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.itemId}>
            Item ID: {item.itemId} | Quantity: {item.quantity}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateCart(item.itemId, parseInt(e.target.value))}
            />
            <button onClick={() => removeFromCart(item.itemId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
