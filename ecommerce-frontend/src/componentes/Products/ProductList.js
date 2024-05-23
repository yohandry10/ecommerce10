// src/components/ProductList/ProductList.jsx
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-700">${product.price}</p>
          <p className="text-gray-500">{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
