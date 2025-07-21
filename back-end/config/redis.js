const redis = require('redis');

// Redis client oluştur
const client = redis.createClient({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || null,
    retry_strategy: function(options) {
        if (options.error && options.error.code === 'ECONNREFUSED') {
            // Redis sunucusu kapalıysa 5 saniye sonra tekrar dene
            return Math.min(options.attempt * 100, 3000);
        }
        // Bağlantı hatası varsa 1 saniye sonra tekrar dene
        return Math.min(options.attempt * 50, 2000);
    }
});

// Redis bağlantı event'leri
client.on('connect', () => {
    console.log('✅ Redis bağlantısı başarılı');
});

client.on('error', (err) => {
    console.error('❌ Redis bağlantı hatası:', err);
});

client.on('ready', () => {
    console.log('🚀 Redis hazır');
});

client.on('end', () => {
    console.log('🔌 Redis bağlantısı kapandı');
});

// Redis wrapper fonksiyonları
const redisWrapper = {
    // String işlemleri
    async set(key, value, expireTime = null) {
        try {
            if (expireTime) {
                return await client.setex(key, expireTime, JSON.stringify(value));
            }
            return await client.set(key, JSON.stringify(value));
        } catch (error) {
            console.error('Redis SET hatası:', error);
            return null;
        }
    },

    async get(key) {
        try {
            const data = await client.get(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Redis GET hatası:', error);
            return null;
        }
    },

    async del(key) {
        try {
            return await client.del(key);
        } catch (error) {
            console.error('Redis DEL hatası:', error);
            return null;
        }
    },

    // Hash işlemleri
    async hset(key, field, value) {
        try {
            return await client.hset(key, field, JSON.stringify(value));
        } catch (error) {
            console.error('Redis HSET hatası:', error);
            return null;
        }
    },

    async hget(key, field) {
        try {
            const data = await client.hget(key, field);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Redis HGET hatası:', error);
            return null;
        }
    },

    async hgetall(key) {
        try {
            const data = await client.hgetall(key);
            const result = {};
            for (const [field, value] of Object.entries(data)) {
                result[field] = JSON.parse(value);
            }
            return result;
        } catch (error) {
            console.error('Redis HGETALL hatası:', error);
            return null;
        }
    },

    // List işlemleri
    async lpush(key, value) {
        try {
            return await client.lpush(key, JSON.stringify(value));
        } catch (error) {
            console.error('Redis LPUSH hatası:', error);
            return null;
        }
    },

    async rpop(key) {
        try {
            const data = await client.rpop(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Redis RPOP hatası:', error);
            return null;
        }
    },

    // Set işlemleri
    async sadd(key, value) {
        try {
            return await client.sadd(key, JSON.stringify(value));
        } catch (error) {
            console.error('Redis SADD hatası:', error);
            return null;
        }
    },

    async smembers(key) {
        try {
            const data = await client.smembers(key);
            return data.map(item => JSON.parse(item));
        } catch (error) {
            console.error('Redis SMEMBERS hatası:', error);
            return null;
        }
    },

    // Counter işlemleri
    async incr(key) {
        try {
            return await client.incr(key);
        } catch (error) {
            console.error('Redis INCR hatası:', error);
            return null;
        }
    },

    async expire(key, seconds) {
        try {
            return await client.expire(key, seconds);
        } catch (error) {
            console.error('Redis EXPIRE hatası:', error);
            return null;
        }
    },

    // Pattern ile key bulma
    async keys(pattern) {
        try {
            return await client.keys(pattern);
        } catch (error) {
            console.error('Redis KEYS hatası:', error);
            return null;
        }
    },

    // Cache yardımcı fonksiyonları
    async cacheGet(key) {
        return await this.get(`cache:${key}`);
    },

    async cacheSet(key, value, expireTime = 3600) {
        return await this.set(`cache:${key}`, value, expireTime);
    },

    async sessionGet(userId) {
        return await this.get(`session:${userId}`);
    },

    async sessionSet(userId, data, expireTime = 86400) {
        return await this.set(`session:${userId}`, data, expireTime);
    },

    async cartGet(userId) {
        return await this.get(`cart:${userId}`);
    },

    async cartSet(userId, data, expireTime = 3600) {
        return await this.set(`cart:${userId}`, data, expireTime);
    }
};

module.exports = { client, redis: redisWrapper }; 