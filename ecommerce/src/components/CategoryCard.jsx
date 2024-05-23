// src/components/CategoryCard.jsx
import React from 'react';

function CategoryCard({ category }) {
  return (
    <div className="relative overflow-hidden shadow-lg rounded-lg group">
      <img
        src={category.image}
        alt={category.name}
        className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-2xl font-semibold">{category.name}</span>
      </div>
    </div>
  );
}

export default CategoryCard;
