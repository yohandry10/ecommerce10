// src/components/Wishlist/Wishlist.js
import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist container mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Lista de Deseos</h2>
      {wishlistItems.length === 0 ? (
        <p>No hay artículos en la lista de deseos</p>
      ) : (
        <ul>
          {wishlistItems.map(item => (
            <li key={item.id} className="flex items-center mb-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <button
                onClick={() => removeFromWishlist(item.id)}
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

export default Wishlist;
