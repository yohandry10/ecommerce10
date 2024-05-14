import React from 'react';

const Categories = () => {
  const categories = [
    { name: 'Mujer', image: 'https://via.placeholder.com/150' },
    { name: 'Hombre', image: 'https://via.placeholder.com/150' },
    { name: 'Niños', image: 'https://via.placeholder.com/150' }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
          Avance de temporada
        </h2>
        <div className="flex justify-center space-x-6">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-lg shadow-md mb-4" />
              <h3 className="text-xl font-medium text-gray-700">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
