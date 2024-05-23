import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { state } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {state.items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {state.items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        )}
      </div>
      <div>
        <p>Total: ${state.total}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
