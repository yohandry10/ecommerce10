// src/componentes/Products/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../componentes/contexts/CartContext';
import Reviews from '../Products/Reviews';
import WishlistButton from '../Wishlist/WishlistButton';

const ProductDetail = ({ products, reviews }) => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id, 10));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col lg:flex-row items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-md"
        />
        <div className="lg:ml-8 mt-8 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-green-600 text-2xl font-semibold mt-4">{product.price}</p>
          <p className="text-gray-700 mt-6">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Añadir al carrito
          </button>
          <WishlistButton productId={product.id} />
        </div>
      </div>
      <Reviews productId={product.id} reviews={reviews} />
    </div>
  );
};

export default ProductDetail;
