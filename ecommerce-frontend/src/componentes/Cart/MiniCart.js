// src/components/Cart/MiniCart.js
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './MiniCart.css';

const MiniCart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="mini-cart">
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>{item.name} - {item.quantity}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MiniCart;
