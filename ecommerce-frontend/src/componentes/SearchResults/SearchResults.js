import React from 'react';
import { useLocation } from 'react-router-dom';
import productsData from '../../data/products.json';

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');
  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Resultados de búsqueda</h1>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
              <p className="text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron productos para "{query}"</p>
      )}
    </div>
  );
};

export default SearchResults;
