# API Backend

NestJS API backend with PostgreSQL and Redis.

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
```bash
# Edit .env file if needed (JWT_SECRET, database credentials, etc.)
```

3. Start database services only:
```bash
npm run docker:dev
```

4. Start development server:
```bash
npm run start:dev
```

## Docker Commands

### Development Mode
```bash
# Start only databases (for local development)
npm run docker:dev

# Start all services with hot reload
npm run docker:up
```

### Production Mode
```bash
# Build and start all services  
npm run docker:prod

# Build API image only
npm run docker:build

# Rebuild and restart all services
npm run docker:rebuild
```

### Utility Commands
```bash
# View logs
npm run docker:logs

# Stop all services
npm run docker:down

# View specific service logs
docker-compose logs -f api
docker-compose logs -f postgres
```

## Manual Docker Build

```bash
# Build API image
docker build -t api-backend .

# Run with external databases
docker run -p 3002:3002 \
  -e DB_HOST=localhost \
  -e REDIS_HOST=localhost \
  api-backend
```

## Services

- **API**: http://localhost:3002
- **PostgreSQL**: localhost:5432  
- **Redis**: localhost:6379
- **Swagger**: http://localhost:3002/api

## Environment Variables

All configuration is done via environment variables from `.env` file. No default values in code.

See `.env` file for current configuration. Key variables:
- `NODE_ENV`: Environment (development/production)
- `JWT_SECRET`: Change this in production
- `DB_*`: Database connection settings
- `REDIS_*`: Redis connection settings