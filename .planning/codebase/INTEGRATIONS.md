# External Integrations

**Analysis Date: 2026-03-10**

## Data Storage
**Databases:**
- PostgreSQL 15-alpine (Container: `team-ai-db`)
**Caching:**
- Redis 7-alpine (Container: `team-ai-redis`)

## Authentication & Identity
**Auth Provider:**
- Custom / In-progress (Targeted for Sprint 3)

## CI/CD & Deployment
**Hosting:**
- Docker-based deployment (`docker-compose.yml`, `src/api/Dockerfile`, `src/web/Dockerfile`)
**CI Pipeline:**
- GitHub Actions (Configuration not yet present in `.github/workflows`)

## Environment Configuration
**Required env vars:**
- `DATABASE_URL`
- `REDIS_URL`
- `NEXT_PUBLIC_API_URL`
