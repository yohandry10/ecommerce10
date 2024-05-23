import React from 'react';

const FeaturedProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-bold mt-2">{product.price}</p>
      <button onClick={() => handleAddToCart(product)} className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600">
        Añadir al carrito
      </button>
    </div>
  );
};

export default FeaturedProductCard;
