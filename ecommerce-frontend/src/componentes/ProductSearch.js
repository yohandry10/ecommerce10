import React, { useState, useEffect } from 'react';

const ProductSearch = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:4000/api/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'searchTerm') setSearchTerm(value);
    if (name === 'category') setCategory(value);
    filterProducts(products, name === 'searchTerm' ? value : searchTerm, name === 'category' ? value : category);
  };

  const filterProducts = (products, searchTerm, category) => {
    let filtered = products;
    if (searchTerm) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    setFilteredProducts(filtered);
    onSearchResults(filtered);
  };

  return (
    <div className="p-4">
      <input
        className="border p-2 mb-4 w-full"
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={handleFilterChange}
        placeholder="Buscar producto..."
      />
      <select
        className="border p-2 mb-4 w-full"
        name="category"
        value={category}
        onChange={handleFilterChange}
      >
        <option value="">Todas las categorías</option>
        <option value="polo1">Polo</option>
        <option value="deportivo1">Deportivo</option>
      </select>
    </div>
  );
};

export default ProductSearch;
