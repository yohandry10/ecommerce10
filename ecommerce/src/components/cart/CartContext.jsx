import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const initialState = {
  items: [],
  total: 0,
  // Otros datos del carrito, como impuestos, envío, etc.
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        total: state.total - (action.payload.price * action.payload.quantity),
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
        total: state.items.reduce((total, item) => total + (item.price * item.quantity), 0),
      };
    // Otros casos de acción...
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
