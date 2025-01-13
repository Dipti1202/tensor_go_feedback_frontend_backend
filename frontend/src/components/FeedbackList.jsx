import React from 'react';

const FeedbackList = ({ feedback }) => {
  return (
    <div>
      <h2>All Feedback</h2>
      <ul>
        {feedback.map((item, index) => (
          <li key={index}>
            <p>Category: {item.category}</p>
            <p>Rating: {item.rating}</p>
            <p>Comments: {item.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
