# Codebase Structure

**Analysis Date: 2026-03-10**

## Repository Layout
The project is organized as a monorepo using `pnpm` workspaces.

### Root Directory
- `pnpm-workspace.yaml`: Configuration for workspace packages.
- `turbo.json`: Configuration for Turborepo's build and cache pipeline.
- `docker-compose.yml`: Local infrastructure setup (Postgres, Redis, API, Web).
- `Makefile`: Commands for local development and container management.
- `GEMINI.md`: Project-specific instructions for AI agents.
- `PLAN.md`: Strategic roadmap and sprint progress tracking.

### Packages & Services
- **`src/api`**: Node.js Express API service.
  - `src/index.ts`: Service entry point.
  - `Dockerfile`: Containerization setup for the API.
- **`src/web`**: Next.js React frontend application.
  - `src/app/`: Next.js App Router-based user interface.
  - `Dockerfile`: Containerization setup for the web app.
- **`src/packages/types`**: Shared library for shared Zod schemas and TypeScript types.
  - `src/index.ts`: Shared type and schema exports.

### Standards & Conventions
- **Scoping**: All internal packages are scoped (e.g., `@team-ai/api`, `@team-ai/types`).
- **Isolation**: Each service contains its own configuration files (e.g., `tsconfig.json`, `package.json`, `Dockerfile`).
- **Coordination**: Shared contracts are maintained in `src/packages/types` to ensure type consistency across the frontend and backend.
