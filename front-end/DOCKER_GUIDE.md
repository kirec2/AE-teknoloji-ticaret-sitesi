# Docker Kullanım Rehberi

## 🐳 Docker Kurulumu

### Windows için:
```bash
# Docker Desktop indirin
# https://www.docker.com/products/docker-desktop
```

### macOS için:
```bash
# Docker Desktop indirin
# https://www.docker.com/products/docker-desktop
```

### Linux için:
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install docker.io docker-compose

# CentOS/RHEL
sudo yum install docker docker-compose
```

## 🚀 Hızlı Başlangıç

### Development Ortamı:
```bash
# Development servislerini başlat
docker-compose -f docker-compose.dev.yml up -d

# Logları görüntüle
docker-compose -f docker-compose.dev.yml logs -f

# Servisleri durdur
docker-compose -f docker-compose.dev.yml down
```

### Production Ortamı:
```bash
# Production servislerini başlat
docker-compose up -d

# Nginx ile production başlat
docker-compose --profile production up -d

# Logları görüntüle
docker-compose logs -f

# Servisleri durdur
docker-compose down
```

## 📋 Servisler

### 1. MongoDB (Database)
- **Port**: 27017
- **Container**: aeteknoloji-mongo
- **Volume**: mongo-data
- **Health Check**: ✅

### 2. Redis (Cache)
- **Port**: 6379
- **Container**: aeteknoloji-redis
- **Volume**: redis-data
- **Health Check**: ✅

### 3. Backend (API)
- **Port**: 3001
- **Container**: aeteknoloji-backend
- **Volume**: ./backend:/app
- **Health Check**: ✅

### 4. Nginx (Reverse Proxy)
- **Port**: 80, 443
- **Container**: aeteknoloji-nginx
- **Profile**: production
- **SSL**: ✅

## 🔧 Docker Komutları

### Container Yönetimi:
```bash
# Container'ları listele
docker ps

# Container loglarını görüntüle
docker logs aeteknoloji-backend

# Container'a bağlan
docker exec -it aeteknoloji-backend sh

# Container'ı yeniden başlat
docker restart aeteknoloji-backend
```

### Image Yönetimi:
```bash
# Image'ları listele
docker images

# Image'ı yeniden build et
docker-compose build backend

# Image'ı sil
docker rmi aeteknoloji-backend
```

### Volume Yönetimi:
```bash
# Volume'ları listele
docker volume ls

# Volume'u sil
docker volume rm aeteknoloji_mongo-data

# Volume'u temizle
docker-compose down -v
```

## 🌐 Network Yönetimi

### Network'leri Listele:
```bash
docker network ls
```

### Network Detayları:
```bash
docker network inspect aeteknoloji-network
```

### Manuel Network Oluştur:
```bash
docker network create aeteknoloji-network
```

## 📊 Monitoring

### Container Durumu:
```bash
# Tüm container'ların durumu
docker stats

# Belirli container'ın durumu
docker stats aeteknoloji-backend
```

### Health Check:
```bash
# Health check durumu
docker inspect --format='{{.State.Health.Status}}' aeteknoloji-backend
```

### Resource Kullanımı:
```bash
# CPU ve Memory kullanımı
docker system df
```

## 🔒 Güvenlik

### Environment Variables:
```bash
# .env dosyası oluştur
JWT_SECRET=your-super-secret-jwt-key
MONGODB_PASSWORD=your-mongodb-password
REDIS_PASSWORD=your-redis-password
```

### Non-Root User:
```dockerfile
# Dockerfile'da non-root user kullan
USER nodejs
```

### Secrets Management:
```bash
# Docker secrets kullan
echo "your-secret" | docker secret create jwt_secret -
```

## 🚀 Production Deployment

### 1. Environment Hazırlığı:
```bash
# .env dosyası oluştur
cp .env.example .env
# Gerekli değerleri doldur
```

### 2. SSL Sertifikası:
```bash
# SSL sertifikalarını ssl/ klasörüne koy
mkdir ssl
cp your-cert.pem ssl/
cp your-key.pem ssl/
```

### 3. Production Başlatma:
```bash
# Production modunda başlat
docker-compose --profile production up -d

# Logları kontrol et
docker-compose logs -f
```

### 4. Backup:
```bash
# MongoDB backup
docker exec aeteknoloji-mongo mongodump --out /data/backup

# Redis backup
docker exec aeteknoloji-redis redis-cli BGSAVE
```

## 🛠️ Troubleshooting

### Container Başlamıyor:
```bash
# Logları kontrol et
docker-compose logs backend

# Container'ı yeniden build et
docker-compose build --no-cache backend
```

### Port Çakışması:
```bash
# Port kullanımını kontrol et
netstat -tulpn | grep :3001

# Farklı port kullan
ports:
  - "3002:3001"
```

### Volume Sorunu:
```bash
# Volume'u kontrol et
docker volume inspect aeteknoloji_mongo-data

# Volume'u yeniden oluştur
docker-compose down -v
docker-compose up -d
```

### Memory Sorunu:
```bash
# Memory limiti ayarla
deploy:
  resources:
    limits:
      memory: 512M
```

## 📈 Performance Optimization

### Multi-Stage Build:
```dockerfile
# Build stage
FROM node:18-alpine AS builder
# Production stage
FROM node:18-alpine AS production
```

### Layer Caching:
```dockerfile
# Package.json'ı önce kopyala
COPY package*.json ./
RUN npm install
# Sonra kodları kopyala
COPY . .
```

### Alpine Images:
```dockerfile
# Daha küçük image
FROM node:18-alpine
```

## 🎯 Best Practices

### 1. Security:
- ✅ Non-root user kullan
- ✅ Environment variables kullan
- ✅ Secrets management
- ✅ Regular updates

### 2. Performance:
- ✅ Multi-stage builds
- ✅ Layer caching
- ✅ Alpine images
- ✅ Resource limits

### 3. Monitoring:
- ✅ Health checks
- ✅ Logging
- ✅ Metrics
- ✅ Alerts

### 4. Backup:
- ✅ Regular backups
- ✅ Volume persistence
- ✅ Disaster recovery
- ✅ Testing

## 🎉 Sonuç

Bu Docker setup ile:
- ✅ Kolay deployment
- ✅ Scalable architecture
- ✅ Production ready
- ✅ Development friendly
- ✅ Secure environment

Docker kullanarak projenizi kolayca deploy edebilir ve yönetebilirsiniz! 🚀 