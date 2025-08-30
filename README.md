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
npm run start:dev                    # Start without SQL queries
npm run start:dev:verbose            # Start with SQL queries shown
```

## Docker Commands

### Development Mode
```bash
# Start only databases (for local development)
npm run docker:dev

# Start databases + pgAdmin web interface
npm run docker:dev:pgadmin

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
- **pgAdmin**: http://localhost:5050 (admin@example.com / admin123)
- **Swagger**: http://localhost:3002/api

## Environment Variables

All configuration is done via environment variables from `.env` file. No default values in code.

See `.env` file for current configuration. Key variables:
- `NODE_ENV`: Environment (development/production)
- `JWT_SECRET`: Change this in production
- `DB_*`: Database connection settings
- `DB_LOGGING`: Set to `true` to see SQL queries (disabled by default)
- `REDIS_*`: Redis connection settings

## Database Management

### pgAdmin Web Interface

Access PostgreSQL database via web interface:

**URL**: http://localhost:5050  
**Login**: admin@example.com / admin123

**Add Server Connection:**
1. Right-click "Servers" → "Register" → "Server"
2. **General tab**: Name = "Local API DB"
3. **Connection tab**:
   - Host: `postgres` (container name)
   - Port: `5432`
   - Database: `api_db`
   - Username: `postgres`
   - Password: `postgres123`

### Direct PostgreSQL Connection

```bash
# Connect via psql (requires PostgreSQL client)
psql -h localhost -p 5432 -U postgres -d api_db
```