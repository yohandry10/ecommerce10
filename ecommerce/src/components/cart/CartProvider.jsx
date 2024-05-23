import React, { useReducer } from 'react';
import { CartContext } from './CartContext';
import cartReducer from '../cart/cartReducer';

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
