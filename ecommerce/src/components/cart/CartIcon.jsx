import React from 'react';
import { useCart } from './CartContext';

const CartIcon = () => {
  const { state } = useCart();

  return (
    <div className="cart-icon">
      <svg> {/* Aquí irá el icono de carrito */}
      </svg>
      <span>{state.items.length}</span>
    </div>
  );
};

export default CartIcon;
