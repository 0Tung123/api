# Deployment Guide

## Quick Start

### Development (Databases only)
```bash
npm run docker:dev
npm run start:dev
```

### Production (Full stack)
```bash
npm run docker:prod
```

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run docker:dev` | Start only PostgreSQL + Redis |
| `npm run docker:prod` | Build and start all services |
| `npm run docker:build` | Build API Docker image |
| `npm run docker:rebuild` | Force rebuild and restart |
| `npm run docker:logs` | View all logs |
| `npm run docker:down` | Stop all services |

## Service URLs

- **API**: http://localhost:3002
- **Swagger**: http://localhost:3002/api
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

## Manual Docker Commands

```bash
# Build API image
docker build -t api-backend .

# Run production stack
docker-compose up -d --build

# View specific logs
docker-compose logs -f api

# Scale services
docker-compose up -d --scale api=3

# Update single service
docker-compose up -d --build api
```

## Environment Variables

Configuration is managed through `.env` file. For production deployment:

**Update these values in .env:**
- `NODE_ENV=production`
- `DB_PASSWORD=strong-password` 
- `DB_SYNCHRONIZE=false`
- `DB_LOGGING=false`
- `JWT_SECRET=your-very-secure-jwt-secret`

**Docker services will use:**
- `DB_HOST=postgres` (container name)
- `REDIS_HOST=redis` (container name)

## Health Checks

```bash
# API health
curl http://localhost:3002/health

# Database connection
docker-compose exec postgres pg_isready

# Redis connection  
docker-compose exec redis redis-cli ping
```

## Troubleshooting

**Build fails**: Clear Docker cache
```bash
docker system prune -f
docker-compose build --no-cache
```

**Database connection**: Check if containers are healthy
```bash
docker-compose ps
docker-compose logs postgres
```