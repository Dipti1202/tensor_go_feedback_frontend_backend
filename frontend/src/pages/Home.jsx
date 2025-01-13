import React, { useState, useEffect } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';

const Home = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch('/feedback/data')
      .then(res => res.json())
      .then(data => setFeedback(data));
  }, []);

  return (
    <div>
      <h1>Feedback Platform</h1>
      <FeedbackForm />
      <FeedbackList feedback={feedback} />
    </div>
  );
};

export default Home;
