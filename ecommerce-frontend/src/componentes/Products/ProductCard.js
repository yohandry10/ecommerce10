import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
        <p className="text-green-600 text-lg font-semibold">{product.price}</p>
        <Link 
          to={`/product/${product.id}`} 
          className="block mt-4 bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
