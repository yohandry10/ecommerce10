// src/componentes/Product/Reviews.js
import React, { useState } from 'react';


const Reviews = ({ productId, reviews }) => {
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(0);

  const handleReviewSubmit = () => {
    // lógica para enviar la reseña al backend
  };

  return (
    <div className="reviews">
      <h3>Customer Reviews</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <strong>{review.rating} stars</strong> - {review.comment}
          </li>
        ))}
      </ul>

      <div className="new-review">
        <h4>Leave a review</h4>
        <textarea value={newReview} onChange={(e) => setNewReview(e.target.value)} />
        <input type="number" max="5" min="1" value={newRating} onChange={(e) => setNewRating(e.target.value)} />
        <button onClick={handleReviewSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Reviews;
