require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { client: redisClient } = require('./config/redis');

const app = express();
const PORT = process.env.PORT || 3001;

// Route dosyalarını import et
const cartRoutes = require('./routes/cartRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const shipmentRoutes = require('./routes/shipmentRoutes');

// Middleware'ler
app.use(cors());
app.use(express.json());

// Route'ları kullan
app.use('/api/cart', cartRoutes);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/shipments', shipmentRoutes);

// MongoDB bağlantısı
const pass = process.env.MONGODB_PASS;
const uri = `mongodb+srv://ahmetka914:${pass}@cluster0.wrakweb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)
  .then(() => console.log('MongoDB\'ye başarıyla bağlandı.'))
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

// Redis bağlantısı
redisClient.connect()
  .then(() => console.log('Redis\'e başarıyla bağlandı.'))
  .catch(err => console.error('Redis bağlantı hatası:', err));

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
// Temel bir test rotası (API endpoint)
app.get('/', (req, res) => {
  res.send('MERN Backend Sunucusu Çalışıyor!');
});
