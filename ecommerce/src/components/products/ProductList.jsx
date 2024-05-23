// src/components/products/ProductList.jsx
import React from 'react';

const dummyProducts = [
  { id: 1, name: 'Producto A', price: 10.99 },
  { id: 2, name: 'Producto B', price: 12.99 },
  { id: 3, name: 'Producto C', price: 8.99 },
];

function ProductList() {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Lista de Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyProducts.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow-md">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
