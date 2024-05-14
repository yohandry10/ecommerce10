import React from 'react';
import FeaturedProducts from './FeaturedProducts';

const Products = () => {
  const products = [
    { id: 1, name: 'Smart TV 55" Crystal 4K UHD', price: '$1,399', image: 'https://via.placeholder.com/300', description: 'Descripción del producto 1' },
    { id: 2, name: 'TCL 65" QLED 4K Google TV', price: '$1,599', image: 'https://via.placeholder.com/300', description: 'Descripción del producto 2' }
  ];

  return (
    <div className="bg-white py-12">
      <FeaturedProducts products={products} />
    </div>
  );
}

export default Products;
