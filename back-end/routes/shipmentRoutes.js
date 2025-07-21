const express = require('express');
const router = express.Router();
const Shipment = require('../models/Shipment');

// Takip numarası ile kargo sorgula
router.get('/:trackingNumber', async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ trackingNumber: req.params.trackingNumber });
    if (!shipment) {
      return res.status(404).json({ message: 'Kargo bulunamadı.' });
    }
    res.json(shipment);
  } catch (err) {
    res.status(500).json({ message: 'Sunucu hatası', error: err.message });
  }
});

module.exports = router; 