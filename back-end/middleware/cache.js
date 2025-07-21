const { redis } = require('../config/redis');

// Cache middleware
const cache = (duration = 3600) => {
    return async (req, res, next) => {
        try {
            // Cache key oluştur
            const key = `cache:${req.originalUrl}`;
            
            // Cache'den veri kontrol et
            const cachedData = await redis.cacheGet(key);
            
            if (cachedData) {
                console.log(`Cache hit: ${key}`);
                return res.json(cachedData);
            }
            
            // Orijinal response.json metodunu sakla
            const originalJson = res.json;
            
            // Response.json metodunu override et
            res.json = function(data) {
                // Cache'e kaydet
                redis.cacheSet(key, data, duration);
                
                // Orijinal metodu çağır
                return originalJson.call(this, data);
            };
            
            console.log(`Cache miss: ${key}`);
            next();
        } catch (error) {
            console.error('Cache middleware hatası:', error);
            // Cache hatası durumunda normal akışa devam et
            next();
        }
    };
};

// Ürün listesi için cache
const productCache = cache(1800); // 30 dakika

// Ürün detayı için cache
const productDetailCache = cache(3600); // 1 saat

// Arama sonuçları için cache
const searchCache = cache(900); // 15 dakika

module.exports = {
    cache,
    productCache,
    productDetailCache,
    searchCache
}; 