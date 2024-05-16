// src/componentes/Wishlist/WishlistButton.js
import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';

const WishlistButton = ({ productId }) => {
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlistItems.some(item => item.id === productId);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return (
    <button
      onClick={handleWishlistClick}
      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
    >
      {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  );
};

export default WishlistButton;
