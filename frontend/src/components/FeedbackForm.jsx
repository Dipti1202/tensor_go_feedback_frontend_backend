import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const feedbackData = { category, rating, comments };
    
    axios.post('http://localhost:5000/feedback/submit', feedbackData)
      .then(response => {
        alert('Feedback submitted successfully');
        setCategory('');
        setRating(1);
        setComments('');
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div>
        <label>Comments:</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
