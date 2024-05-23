// src/components/products/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const dummyProductDetails = {
  1: { id: 1, name: 'Producto A', price: 10.99, description: 'Descripción de Producto A' },
  2: { id: 2, name: 'Producto B', price: 12.99, description: 'Descripción de Producto B' },
  3: { id: 3, name: 'Producto C', price: 8.99, description: 'Descripción de Producto C' },
};

function ProductDetail() {
  const { id } = useParams();
  const product = dummyProductDetails[id];

  return (
    <div className="container mx-auto mt-10">
      {product ? (
        <div className="p-6 border rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <p className="text-gray-800">{product.description}</p>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
}

export default ProductDetail;
