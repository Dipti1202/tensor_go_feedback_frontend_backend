const axios = require('axios');

const FRILL_API_BASE_URL = 'https://api.frill.co';

exports.submitFeedback = async ({ category, rating, comments }) => {
  const response = await axios.post(`${FRILL_API_BASE_URL}/feedback`, { category, rating, comments });
  return response.data;
};

exports.getFeedback = async () => {
  const response = await axios.get(`${FRILL_API_BASE_URL}/feedback`);
  return response.data;
};
