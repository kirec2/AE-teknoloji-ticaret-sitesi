const { redis } = require('../config/redis');

// Rate limiting middleware
const rateLimit = (windowMs = 60000, maxRequests = 100) => {
    return async (req, res, next) => {
        try {
            const userId = req.user?.userId || req.ip;
            const key = `rate:${userId}`;
            
            // Mevcut istek sayısını al
            let requests = await redis.get(key);
            requests = requests ? parseInt(requests) : 0;
            
            if (requests >= maxRequests) {
                return res.status(429).json({
                    message: 'Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin.',
                    retryAfter: Math.ceil(windowMs / 1000)
                });
            }
            
            // İstek sayısını artır
            await redis.incr(key);
            
            // İlk istekse süre ayarla
            if (requests === 0) {
                await redis.expire(key, Math.ceil(windowMs / 1000));
            }
            
            // Response header'ları ekle
            res.set({
                'X-RateLimit-Limit': maxRequests,
                'X-RateLimit-Remaining': maxRequests - requests - 1,
                'X-RateLimit-Reset': Math.ceil(Date.now() / 1000) + Math.ceil(windowMs / 1000)
            });
            
            next();
        } catch (error) {
            console.error('Rate limiting hatası:', error);
            // Redis hatası durumunda rate limiting'i atla
            next();
        }
    };
};

// API endpoint'leri için rate limiting
const apiRateLimit = rateLimit(60000, 100); // 1 dakikada 100 istek

// Auth endpoint'leri için daha sıkı rate limiting
const authRateLimit = rateLimit(60000, 5); // 1 dakikada 5 istek

// Sepet işlemleri için rate limiting
const cartRateLimit = rateLimit(60000, 50); // 1 dakikada 50 istek

module.exports = {
    rateLimit,
    apiRateLimit,
    authRateLimit,
    cartRateLimit
}; 