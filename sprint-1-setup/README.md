# Sprint 1: Architecture & Repo Setup

## 🎯 Objective

Initialize the enterprise-grade monorepo for our AI Tech Team. We are setting up a **Turborepo**-managed structure that houses a Next.js dashboard, a Node.js API Gateway, and shared packages for types and AI logic, all orchestrated via Docker.

## 📅 Sprint Timeline (5 Days)

- **Day 1: Monorepo & Tooling**: Initialize Turborepo, Pnpm/Npm workspaces, and global linting/prettier configs.
- **Day 2: Frontend Scaffold (src/web)**: Next.js 14 (App Router) setup with Shadcn UI and a baseline dashboard layout.
- **Day 3: API Gateway (src/api)**: Express or NestJS setup with Zod for validation and a shared `types` package.
- **Day 4: Infrastructure (src/infra)**: Compose the `docker-compose.yml` for PostgreSQL, Redis, and local development.
- **Day 5: Verification & DX**: Ensure hot-reloading works across the monorepo and CI/CD stubs are in place.

## 🧠 JIT (Just-In-Time) Learning

Dive into these resources to understand _why_ we are using this architecture:

### 1. Monorepo & Orchestration

- **Concept**: [Turborepo Documentation](https://turbo.build/repo/docs) - _Learn how task pipelines and remote caching work._
- **System Design**: [Microservices Architecture Guide](https://lnkd.in/gfdJqGU4) - _Focus on the API Gateway pattern._

### 2. Frontend & Observability

- **Design Layouts**: [Horizon AI Dashboard (Shadcn)](https://horizon-ui.com/shadcn-ui-admin-dashboard-template) - _Inspiration for agent observability UIs._
- **Observability Concepts**: [Maxim AI: Observability for LLMs](https://getmaxim.ai) - _Understand tracing decision chains._

### 3. Infrastructure & Persistence

- **Docker Best Practices**: [Docker Compose for Fullstack Development](https://dev.to/tomray/best-practices-for-docker-compose-in-development-10g4) - _Focus on volumes and port mapping._
- **System Design**: [Payment/Consistency Systems (Ankit Pangasa)](https://lnkd.in/gxmrEKS4) - _Crucial for the 'Identity & Billing' foundations we set today._

## 🚀 Initial Kickoff Prompt

_This prompt provides the necessary context for the AI to scaffold the monorepo structure while adhering to the enterprise specs._

---

**Prompt:**

> Target: `/Users/pawan/Vizmo/team-ai/`
> Context: We are initializing a Turborepo-based enterprise monorepo for an AI Tech Team SaaS.
>
> Task:
>
> 1. Initialize a **Turborepo** structure in the root.
> 2. Create `src/web/` as a Next.js 14+ application using the App Router, Tailwind, and Shadcn UI.
> 3. Create `src/api/` as a Node.js Express/TypeScript API Gateway.
> 4. Create a shared workspace package in `src/packages/types/` for shared Zod schemas and TypeScript interfaces between `web` and `api`.
> 5. Create a `docker-compose.yml` in the root that:
>    - Configures a **PostgreSQL** (v15+) container with persistent volumes.
>    - Configures a **Redis** container.
>    - Sets up the `api` and `web` containers for local development with hot-reloading.
> 6. Add a basic `Makefile` in the root with `make up`, `make down`, and `make logs` commands for easier DX.
>
> Please execute the scaffolding commands and verify the folder structure before finishing.
