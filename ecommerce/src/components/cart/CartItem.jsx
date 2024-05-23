import React from 'react';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  const handleRemoveItem = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    dispatch({ type: 'UPDATE_ITEM', payload: { ...item, quantity: newQuantity } });
  };

  return (
    <div className="cart-item">
      <div className="item-details">
        <p>{item.name}</p>
        <p>${item.price}</p>
        <input type="number" value={item.quantity} onChange={handleQuantityChange} />
        <button onClick={handleRemoveItem}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
