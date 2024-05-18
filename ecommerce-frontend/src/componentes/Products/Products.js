import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    {
      id: 1,
      name: 'Deportivo',
      products: [
        { id: 1, name: 'Producto Deportivo 1', price: '$99', image: 'https://via.placeholder.com/300' },
        { id: 2, name: 'Producto Deportivo 2', price: '$199', image: 'https://via.placeholder.com/300' },
        { id: 3, name: 'Producto Deportivo 3', price: '$299', image: 'https://via.placeholder.com/300' }
      ]
    },
    {
      id: 2,
      name: 'Polos',
      products: [
        { id: 4, name: 'Polo 1', price: '$29', image: 'https://via.placeholder.com/300' },
        { id: 5, name: 'Polo 2', price: '$39', image: 'https://via.placeholder.com/300' },
        { id: 6, name: 'Polo 3', price: '$49', image: 'https://via.placeholder.com/300' }
      ]
    },
    {
      id: 3,
      name: 'Televisores',
      products: [
        { id: 7, name: 'TV 1', price: '$499', image: 'https://via.placeholder.com/300' },
        { id: 8, name: 'TV 2', price: '$599', image: 'https://via.placeholder.com/300' },
        { id: 9, name: 'TV 3', price: '$699', image: 'https://via.placeholder.com/300' }
      ]
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            category.products.map(product => (
              <div key={product.id} className="border rounded-lg p-4">
                <div className="w-full h-48 overflow-hidden">
                  <img className="w-full h-full object-cover object-center" src={product.image} alt={product.name} />
                </div>
                <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
                <p className="text-green-600">{product.price}</p>
                <Link to={`/product/${product.id}`}>
                  <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Ver detalles</button>
                </Link>
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
