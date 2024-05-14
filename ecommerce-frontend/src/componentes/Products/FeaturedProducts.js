import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products }) => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Productos Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
