# Technology Stack

**Analysis Date: 2026-03-10**

## Languages
**Primary:**
- TypeScript 5.x - Used across all packages (`src/api`, `src/web`, `src/packages/types`)
**Secondary:**
- JavaScript/ESM - Configuration files (`eslint.config.mjs`, `next.config.ts`)

## Runtime
**Environment:**
- Node.js 20.x
**Package Manager:**
- pnpm 9.0.0 (Lockfile: `pnpm-lock.yaml`)

## Frameworks
**Core:**
- Next.js 16.1.6 - Frontend framework in `src/web`
- React 19.2.3 - UI library in `src/web`
- Express 4.18.2 - API Gateway in `src/api`
**Build/Dev:**
- Turborepo - Monorepo orchestration (`turbo.json`)
- tsx - TypeScript execution for API development
- Tailwind CSS 4 - Styling in `src/web`

## Key Dependencies
**Critical:**
- Zod 3.22.4 - Shared schema validation in `src/packages/types`
**Infrastructure:**
- Docker & Docker Compose - Containerization and orchestration

## Configuration
**Environment:**
- Environment variables managed via `docker-compose.yml` (e.g., `DATABASE_URL`, `REDIS_URL`)
