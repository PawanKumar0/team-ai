# Architecture Overview

**Analysis Date: 2026-03-10**

## System Pattern
- **Monorepo:** Organized using `pnpm` workspaces and `TurboRepo` for efficient builds and dependency management.
- **Micro-services/Services:** 
  - **API Layer (`src/api`):** Express-based gateway for orchestrating agent tasks and managing core business logic.
  - **Web Layer (`src/web`):** Next.js App Router for the dashboard and user interface.
  - **Shared Types Layer (`src/packages/types`):** Centralized Zod schemas and TypeScript interfaces shared between frontend and backend to ensure strict type safety.

## Technology Stack Summary
- **Backend:** Node.js, Express, TypeScript.
- **Frontend:** Next.js (React), Tailwind CSS.
- **Infrastructure:** PostgreSQL (Relational Data), Redis (Caching/Messaging), Docker & Docker Compose.

## Data Flow & Interactions
- **Frontend to Backend:** The Next.js frontend communicates with the Express API gateway via REST API calls.
- **Backend to Storage:** The API interacts with PostgreSQL for persistent relational data and Redis for high-performance caching and messaging.
- **Shared Contracts:** All data exchange is governed by shared schemas in `@team-ai/types`, ensuring consistency across the stack.

## Key Abstractions
- **Shared Schemas:** Centralized definitions for `User`, `HealthStatus`, and other core entities.
- **Containerization:** Each service is containerized, with orchestration managed via Docker Compose.
