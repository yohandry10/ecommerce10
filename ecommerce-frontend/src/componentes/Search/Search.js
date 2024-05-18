import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import productsData from '../../data/products.json';

const products = [
  { id: 1, name: 'Producto Deportivo 1', price: 99, category: 'Deportivo' },
  { id: 2, name: 'Producto Deportivo 2', price: 199, category: 'Deportivo' },
  { id: 3, name: 'Polo 1', price: 29, category: 'Polos' },
  { id: 4, name: 'TV 1', price: 499, category: 'Televisores' },
  // más productos...
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = () => {
    if (searchTerm === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Buscar productos..."
          className="px-4 py-2 border rounded-l-lg w-full lg:w-1/2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Resultados de búsqueda</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-gray-500">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;

