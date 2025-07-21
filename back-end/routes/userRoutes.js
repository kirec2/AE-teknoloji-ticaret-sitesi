const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authenticateToken = require('../middleware/auth');

// Adres kaydet (çoklu adres desteği)
router.post('/address', authenticateToken, async (req, res) => {
  const { city, district, neighborhood, address } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { $push: { addresses: { city, district, neighborhood, address } } },
      { new: true }
    );
    res.json({ message: 'Adres kaydedildi!', addresses: user.addresses });
  } catch (err) {
    res.status(500).json({ message: 'Adres kaydedilemedi.', error: err.message });
  }
});

// Kayıtlı adresleri getir
router.get('/addresses', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    res.json({ addresses: user.addresses || [] });
  } catch (err) {
    res.status(500).json({ message: 'Adresler alınamadı.', error: err.message });
  }
});

// Kart kaydet
router.post('/card', authenticateToken, async (req, res) => {
  const { cardNumber, cardName, expiryDate } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { card: { cardNumber, cardName, expiryDate } },
      { new: true }
    );
    res.json({ message: 'Kart kaydedildi!', card: user.card });
  } catch (err) {
    res.status(500).json({ message: 'Kart kaydedilemedi.', error: err.message });
  }
});

// Kayıtlı kart bilgisini getir
router.get('/card', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    res.json({ card: user.card || {} });
  } catch (err) {
    res.status(500).json({ message: 'Kart bilgisi alınamadı.', error: err.message });
  }
});

module.exports = router; 