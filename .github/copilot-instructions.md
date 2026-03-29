# AI Coding Agent Instructions for Team-AI

## 🎯 Project Overview

**Team-AI** is an enterprise SaaS for building autonomous AI Tech Teams. It's a full-stack monorepo (Turborepo) with:

- **Frontend**: Next.js 16 + React 19 dashboard for managing AI agents and viewing token cost metrics
- **Backend**: Express.js API gateway with authentication and billing integration
- **Shared Types**: Zod schemas and TypeScript interfaces across packages
- **Infrastructure**: PostgreSQL, Redis, Docker orchestration

The codebase follows an **8-Sprint development roadmap** (PLAN.md) where each sprint delivers one architectural layer. **All production code lives in `src/`**; sprint folders are learning/planning workbenches only.

## 🏗 Architecture Essentials

### Monorepo Structure & Build System

- **Tool**: Turborepo with pnpm workspaces (`pnpm-workspace.yaml`)
- **Build Pipeline** (turbo.json):
  - `turbo build` compiles all packages with dependency ordering (`^build` means build dependencies first)
  - `turbo dev` runs dev servers in watch mode (cache disabled, persistent)
  - `turbo lint` checks after building dependencies
- **Key Command**: `pnpm` (required; turbo.json specifies pnpm@9.0.0)
- **Output Caching**: `build` task caches `.next/**` and `dist/**`

### Frontend (src/web)

- **Framework**: Next.js 16 App Router + React 19, TypeScript 5
- **Styling**: TailwindCSS 4 + Babel React Compiler for optimization
- **UI Kit**: Shadcn UI components for consistent agent dashboards
- **Architecture**: Enterprise-grade components tracking LLM token spend, model selection, real-time agent status
- **Rebuild**: `pnpm --filter web build` (or `turbo build`)

### API Gateway (src/api)

- **Framework**: Express.js with TypeScript
- **Validation**: Zod for input schemas (imported from `@team-ai/types`)
- **Dev Server**: `tsx watch src/index.ts` auto-restarts on changes
- **Build Target**: `tsc` outputs to `dist/`, production runs `node dist/index.js`
- **CORS**: Pre-configured for cross-origin requests

### Shared Types Package (src/packages/types)

- **Purpose**: Single source of truth for Zod schemas and TypeScript types shared between web and api
- **Usage**: Both packages import via `@team-ai/types` (workspace reference)
- **Pattern**: Define schemas in `types`, export both Zod types and TS types

### Infrastructure

- **PostgreSQL 15**: Volume-persisted at `postgres_data`, defaults: user=user, pass=password, db=team_ai, port=5432
- **Redis 7**: In-memory cache for agent state, port=6379
- **Compose Commands**: `make up/down/logs/ps` simplify Docker management
- **Local Dev**: Both services auto-restart; Dockerfiles in api/ and web/ support hot-reload mount points

## 📋 Development Workflows

### Starting Local Development

```bash
pnpm install              # Install monorepo dependencies
make up                   # Start PostgreSQL + Redis
turbo dev                 # Start dev servers (web + api watch mode)
```

### Building for Production

```bash
turbo build               # Compile all packages in dependency order
make down                 # Stop Docker services
```

### Code Quality

```bash
turbo lint                # Run linters (depends on build)
pnpm format               # Format with prettier across all packages
```

### Debugging Specific Packages

```bash
pnpm --filter @team-ai/api dev     # Run only API dev server
pnpm --filter web build             # Build only frontend
```

## 📐 Project Conventions & Patterns

### TypeScript Standards

- **Strict Mode**: `tsconfig.json` enforces strict typing across all packages
- **Exports**: Use named exports; prefer barrel exports (`index.ts`) for module interfaces
- **No `any`**: All code must be fully typed; no implicit `any` allowed

### Code Organization in src/

- **core/**: Domain logic (Agent, Task, Memory entities) — business rules independent of infrastructure
- **infra/**: Infrastructure adapters (DB clients, LLM API wrappers, VectorDB connections)
- **interfaces/**: API routes, CLI handlers, webhook adapters
- **utils/**: Shared utilities (Logger, Telemetry, Validators)

### Validation & Error Handling

- **Input Validation**: All API inputs validated with Zod schemas from `@team-ai/types`
- **Error Response Pattern**: API returns `{ error: string, code: string }` with HTTP status codes
- **Example**: `POST /api/agents` expects body matching `types/schemas/agent.schema.ts`

### Package.json Workspace References

- Web/API depend on `@team-ai/types` → resolves to `src/packages/types` automatically via pnpm
- Always add new shared modules to `types/src/index.ts` barrel export
- New workspace packages must be declared in root `pnpm-workspace.yaml`

## 🔗 Integration Points & External Dependencies

### API ↔ Frontend Communication

- **BASE_URL**: Frontend calls API at route convention `/api/*` (configured in next.config.ts)
- **Auth Header**: Placeholder for Clerk/Auth0 integration (Sprint 3)
- **State Management**: App-level context or server components for agent status

### LLM Integrations (Sprint 2)

- **LiteLLM**: Dynamic routing between OpenAI/Anthropic — not yet implemented but structure ready
- **Model Selection**: Dashboard feature for choosing GPT-4o vs Claude-3.5 per task

### Database Layer (Sprint 3+)

- **ORM TBD**: Prisma or raw Node postgres driver planned; schemas must support:
  - User accounts, authentication tokens, billing records
  - Agent definitions, task history, execution logs
  - Vector embeddings for RAG (Sprint 4)

## 🚀 Sprint Workflow for AI Agents

Each sprint has a dedicated `sprint-X/README.md` with:

1. **JIT Learning**: Links to required reading (System Design, Prompt Engineering, etc.)
2. **Kickoff Prompt**: Copy-paste-ready prompt containing full context for scaffolding that sprint
3. **Target**: Always `src/` for production code; learn materials stay in `sprint-X/`

**Agent Workflow**:

1. Read current `sprint-X/README.md` → understand objectives
2. Copy "Initial Kickoff Prompt" from the README
3. Run prompt through AI agent (provide full project context)
4. All generated code lands in `src/`; verify with `turbo build` + `turbo lint`

## ⚠️ Critical Constraints & Anti-Patterns

1. **Never modify sprint-X/ folders with production code** — they're learning materials only
2. **No generated code in root** — all src code must live in `src/web`, `src/api`, or `src/packages`
3. **Always use Zod for validation** — no raw JSON schema or unvalidated inputs
4. **TypeScript first** — no `.js` files in src/; all code strictly typed
5. **Monorepo dependency order** — must respect turbo pipeline (`^build` dependencies)
6. **Docker images are development tools** — sandboxing for agent execution is Sprint 7, not for local dev

## 📚 Key Files to Read First

| File                                       | Purpose                                            |
| ------------------------------------------ | -------------------------------------------------- |
| [PLAN.md](PLAN.md)                         | Full 8-sprint roadmap with architecture decisions  |
| [README.md](README.md)                     | High-level project overview and usage instructions |
| [src/README.md](src/README.md)             | Engineering standards and src/ folder structure    |
| [turbo.json](turbo.json)                   | Task pipeline and caching configuration            |
| [pnpm-workspace.yaml](pnpm-workspace.yaml) | Workspace package declarations                     |

---

**Last Updated**: 2026-03-09 | **For Sprint**: 1-2 (Foundation) | **Status**: Active Development
