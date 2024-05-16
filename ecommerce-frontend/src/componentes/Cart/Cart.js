// src/componentes/Cart/Cart.js
import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  if (!cartItems) {
    return <p>El carrito está vacío</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="flex items-center mb-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

