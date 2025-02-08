const express = require('express');
const axios = require('axios');
const auth = require('../middleware/auth');

const router = express.Router();

// AI Service URL (Flask microservice)
const AI_SERVICE_URL = process.env.AI_SERVICE_URL || 'http://127.0.0.1:5001';

// Disease prediction endpoint
router.post('/predict', auth, async (req, res) => {

  try {
    const response = await axios.post(`${AI_SERVICE_URL}/predict`, req.body);
    res.json(response.data);
    
  } catch (error) {
    console.error('AI Service Error:', error);
    res.status(500).json({ message: 'AI service error' });
  }
});

// Get medication recommendations

module.exports = router;