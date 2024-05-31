import React from 'react';

const SearchResults = ({ products }) => {
  console.log('Search results received:', products);

  if (!products || products.length === 0) {
    return <div>No se encontraron productos.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {products.map((product, index) => (
        <div key={index} className="border p-4">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-500">{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
