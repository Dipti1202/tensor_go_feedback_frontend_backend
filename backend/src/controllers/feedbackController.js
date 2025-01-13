const FrillService = require('../services/frillService');

exports.submitFeedback = async (req, res) => {
  const { category, rating, comments } = req.body;

  try {
    const result = await FrillService.submitFeedback({ category, rating, comments });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const data = await FrillService.getFeedback();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
