const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const authenticateToken = require('../middleware/auth');
const User = require('../models/User');
const { redis } = require('../config/redis');

// Sepeti görüntüleme
router.get('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    
    // Önce Redis'ten sepeti kontrol et
    let cart = await redis.cartGet(userId);
    
    if (!cart) {
      // Redis'te yoksa MongoDB'den al
      cart = await Cart.findOne({ user: userId }).populate('items.product');
      
      if (cart) {
        // Redis'e kaydet (1 saat süreyle)
        await redis.cartSet(userId, cart, 3600);
      }
    }
    
    res.json(cart || { items: [] });
  } catch (err) {
    console.error('Sepet görüntüleme hatası:', err);
    res.status(500).json({ message: 'Sunucu hatası', error: err.message });
  }
});

// Sepete ürün ekleme
router.post('/add', authenticateToken, async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.userId;
  
  try {
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }
    
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity || 1;
    } else {
      cart.items.push({ product: productId, quantity: quantity || 1 });
    }
    
    await cart.save();
    
    // MongoDB'den populate edilmiş veriyi al
    const populatedCart = await Cart.findOne({ user: userId }).populate('items.product');
    
    // Redis'i güncelle
    await redis.cartSet(userId, populatedCart, 3600);
    
    res.json(populatedCart);
  } catch (err) {
    console.error('Sepete ürün ekleme hatası:', err);
    res.status(500).json({ message: 'Sunucu hatası', error: err.message });
  }
});

// Sepetten ürün çıkarma
router.delete('/remove', authenticateToken, async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.userId;
  
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: 'Sepet bulunamadı.' });
    
    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    await cart.save();
    
    // MongoDB'den populate edilmiş veriyi al
    const populatedCart = await Cart.findOne({ user: userId }).populate('items.product');
    
    // Redis'i güncelle
    await redis.cartSet(userId, populatedCart, 3600);
    
    res.json(populatedCart);
  } catch (err) {
    console.error('Sepetten ürün çıkarma hatası:', err);
    res.status(500).json({ message: 'Sunucu hatası', error: err.message });
  }
});

module.exports = router; 