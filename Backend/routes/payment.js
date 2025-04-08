const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/verify', async (req, res) => {
  const { token, amount } = req.body;

  try {
    const response = await axios.post(
      'https://khalti.com/api/v2/payment/verify/',
      { token, amount },
      {
        headers: {
          Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
        },
      }
    );

    res.json({ success: true, data: response.data });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.response?.data || err.message,
    });
  }
});

module.exports = router;
