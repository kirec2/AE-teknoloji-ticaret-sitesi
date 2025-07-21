const mongoose = require('mongoose');
require('dotenv').config();

// Model'leri import et
const User = require('./models/User');
const Product = require('./models/Product');
const Cart = require('./models/Cart');
const Favorite = require('./models/Favorite');
const Shipment = require('./models/Shipment');

// Test verileri
const testProducts = [
  {
    name: 'Beyblade Metal Fusion',
    price: 299.99,
    imageUrl: '/images/beyblade-metal.jpg',
    series: 'Beyblade Metal Fusion',
    detail: 'Metal Fusion serisinin dayanıklı ve güçlü modeli.'
  },
  {
    name: 'Bakugan Battle Planet',
    price: 199.99,
    imageUrl: '/images/Bakugan-battle-planet.png',
    series: 'Bakugan Battle Planet',
    detail: 'Bakugan Battle Planet serisinin stratejik oyuncağı.'
  },
  {
    name: 'Beyblade Burst Turbo',
    price: 249.99,
    imageUrl: '/images/Beyblade-burst.png',
    series: 'Beyblade Burst Turbo',
    detail: 'Burst Turbo serisinin yüksek performanslı modeli.'
  },
  {
    name: 'Bakutech',
    price: 179.99,
    imageUrl: '/images/Bakutech.png',
    series: 'Bakutech',
    detail: 'Bakutech serisinin teknolojik ve özel efektli oyuncağı.'
  }
];

const testUsers = [
  {
    email: 'test@aeteknoloji.com',
    password: 'test123',
    name: 'Test Kullanıcı'
  },
  {
    email: 'admin@aeteknoloji.com',
    password: 'admin123',
    name: 'Admin Kullanıcı'
  }
];

const testShipments = [
  {
    trackingNumber: 'ABC123456',
    status: 'Dağıtımda',
    lastUpdate: new Date(),
    history: [
      { date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), status: 'Kargoya verildi', location: 'İstanbul' },
      { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), status: 'Transfer Merkezinde', location: 'Ankara' },
      { date: new Date(), status: 'Dağıtımda', location: 'Ankara' }
    ]
  }
];

async function seedDatabase() {
  try {
    // MongoDB'ye bağlan
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB\'ye başarıyla bağlandı.');

    // Mevcut verileri temizle
    await User.deleteMany({});
    await Product.deleteMany({});
    await Cart.deleteMany({});
    await Favorite.deleteMany({});
    await Shipment.deleteMany({});
    console.log('Mevcut veriler temizlendi.');

    // Test kullanıcılarını oluştur
    const createdUsers = await User.insertMany(testUsers);
    console.log(`${createdUsers.length} test kullanıcısı oluşturuldu.`);

    // Test ürünlerini oluştur
    const createdProducts = await Product.insertMany(testProducts);
    console.log(`${createdProducts.length} test ürünü oluşturuldu.`);

    // Test sepeti oluştur
    const testCart = new Cart({
      user: createdUsers[0]._id,
      items: [
        {
          product: createdProducts[0]._id,
          quantity: 2
        },
        {
          product: createdProducts[1]._id,
          quantity: 1
        }
      ]
    });
    await testCart.save();
    console.log('Test sepeti oluşturuldu.');

    // Test favorileri oluştur
    const testFavorite = new Favorite({
      user: createdUsers[0]._id,
      products: [createdProducts[0]._id, createdProducts[2]._id]
    });
    await testFavorite.save();
    console.log('Test favorileri oluşturuldu.');

    await Shipment.insertMany(testShipments);
    console.log(`${testShipments.length} test kargo kaydı eklendi.`);

    console.log('\n✅ Veritabanı başarıyla oluşturuldu!');
    console.log('\n📊 Oluşturulan veriler:');
    console.log(`- ${createdUsers.length} kullanıcı`);
    console.log(`- ${createdProducts.length} ürün`);
    console.log('- 1 sepet');
    console.log('- 1 favori listesi');
    console.log('- 1 kargo kaydı');
    
    console.log('\n🔗 Test kullanıcı bilgileri:');
    console.log('Email: test@aeteknoloji.com');
    console.log('Şifre: test123');

  } catch (error) {
    console.error('Veritabanı oluşturma hatası:', error);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB bağlantısı kapatıldı.');
  }
}

// Script'i çalıştır
seedDatabase(); 