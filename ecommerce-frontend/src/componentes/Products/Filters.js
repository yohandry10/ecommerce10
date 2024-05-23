// src/components/Product/Filters.js
import React from 'react';


const Filters = ({ categories, selectedCategory, setSelectedCategory, sortOptions, selectedSort, setSelectedSort }) => {
  return (
    <div className="filters">
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category.id} value={category.name}>{category.name}</option>
        ))}
      </select>

      <select onChange={(e) => setSelectedSort(e.target.value)} value={selectedSort}>
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
