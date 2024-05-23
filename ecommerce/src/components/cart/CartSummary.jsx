import React from 'react';
import { useCart } from './CartContext';

const CartSummary = () => {
  const { state } = useCart();

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total Items: {state.items.length}</p>
      <p>Total Price: ${state.total}</p>
      {/* Otros detalles del resumen del carrito */}
    </div>
  );
};

export default CartSummary;