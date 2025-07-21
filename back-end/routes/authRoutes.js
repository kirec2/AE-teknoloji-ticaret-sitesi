const express = require('express');
const router = express.Router();
const User = require('../models/User');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Kullanıcı kayıt (register) endpoint'i
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  // Basit veri doğrulama
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Tüm alanlar zorunludur.' });
  }
  try {
    // Kullanıcı mevcut mu kontrolü
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Bu e-posta ile zaten kayıt olunmuş.' });
    }
    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'Kayıt başarılı!' });
  } catch (err) {
    res.status(500).json({ message: 'Sunucu hatası', error: err.message, stack: err.stack });
  }
});

router.post('/login', async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).json({ message: 'Kullanıcı bulunamadı!' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Şifre yanlış!' });
    }
    // Token oluştur
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ message: 'Giriş başarılı!', token });
  } catch (err) {
    res.status(500).json({ message: 'Sunucu hatası', error: err.message, stack: err.stack });
  }
});

module.exports = router; 