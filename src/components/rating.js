import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

export default function MyComponent() {
  const [rating, setRating] = useState();

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
      <Rating transition onClick={handleRating} ratingValue={rating} /* Available Props */ />
    </div>
  );
}
