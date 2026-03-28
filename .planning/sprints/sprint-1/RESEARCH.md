# Phase 1: Foundation & API Gateway - Research

## Summary
Focus: Monorepo integration, shared Zod schemas, and Next.js-to-Express connectivity.

## Shared Zod Schemas (src/packages/types)
- **Pattern**: Export Zod schemas for runtime validation and inferred TypeScript types for static analysis.
- **Monorepo Integration**: Use `workspace:*` dependencies in `package.json`.
- **Validation**: Implement simple schema tests using `vitest` to ensure cross-package compatibility.

## Next.js & Express Connectivity (Docker)
- **Proxying**: Use `next.config.ts` rewrites to proxy `/api/:path*` to the Express backend (`http://api:3001`).
- **Server Actions/SSR**: Access the backend via the internal Docker service name: `http://api:3001`.
- **Client Side**: Access the backend via the proxied `/api` endpoint.

## Middleware & Security
- **Express**: `cors()`, `express.json()`, `morgan` (dev logging).
- **Error Handling**: Implement a basic global error handler in Express from the start.

## Stack & Versions
- **Node.js**: 20.x
- **Next.js**: 16.1.6
- **Express**: 4.18.2
- **Zod**: 3.22.4
- **Vitest**: 1.3.1 (for testing types/schemas)

## Implementation Strategy
1. **Define Schemas**: Start with `User`, `HealthStatus`, and `Auth` schemas in `src/packages/types`.
2. **API Setup**: Configure Express middleware and a basic health-check endpoint.
3. **Frontend Connectivity**: Configure `next.config.ts` rewrites and a simple fetch component to verify the connection.
