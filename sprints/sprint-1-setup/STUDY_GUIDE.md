# Sprint 1 Study Guide: Enterprise Architecture & Monorepos

Welcome to Sprint 1. Before you write a single line of code, you must understand the _why_ behind our architectural choices. This document synthesizes the JIT learning links and deep research into a single, cohesive guide.

---

## 🏗️ 1. Why a Monorepo? (Turborepo & Pnpm)

**The Problem**: A SaaS product has multiple parts: a frontend Dashboard, a backend API, AI Python scripts, and shared Cloudflare workers or database schemas. If you put these in separate repositories, you spend hours syncing standard types (e.g., if you change the `User` schema in the API, the frontend doesn't know until you publish a private npm package or manually copy the change).

**The Solution**: A Monorepo. All code lives together.
**Our Stack**: `pnpm` + `Turborepo`.

- **Pnpm Workspaces**: Pnpm handles the _Physical Layer_. Instead of downloading the "shared types" from the internet, Pnpm creates a symlink. When your Next.js app imports `@team-ai/types`, it points directly to the folder on your hard drive.
- **Turborepo**: Turbo is the _Execution Engine_.
  - **Caching**: If you run `turbo build`, it builds everything. If you change a button in Next.js and run `turbo build` again, Turbo _does not_ rebuild the API. It restores the API build from the cache in milliseconds.
  - **Parallelism**: Running `turbo dev` will boot up your API and your Frontend in the exact same terminal window, perfectly interleaved.

---

## 🌉 2. The API Gateway Pattern

_(Reference: Microservices Architecture System Design)_

**The Problem**: Our Next.js dashboard shouldn't talk directly to the Super Agent Python script, nor directly to the Postgres database. That creates a security nightmare and makes it impossible to scale or load balance.

**The Solution**: The `src/api` Node.js Express server acts as our **API Gateway**.

- **Routing**: The frontend makes one call to `api.team-ai.com/v1/agent/task`. The Gateway decides whether to route that to the Python Super Agent queue or handle it directly.
- **Auth & Rate Limiting**: The Gateway verifies the JWT token (from Clerk) and checks Stripe to ensure the user has enough tokens _before_ it wakes up an expensive LLM.
- **Security**: The Gateway sits in the public subnet; our databases and AI agents sit in a private subnet, unreachable from the outside world.

---

## 🐳 3. Local Infrastructure (Docker Compose)

_(Reference: Docker Best Practices for Fullstack)_

**The Problem**: "It works on my machine" is the death of an engineering team. You installed Postgres 15, but your teammate has Postgres 13. Your Redis is running on port 6379, theirs is conflicting with another app.

**The Solution**: Containerization.

- The `docker-compose.yml` file is our infrastructure-as-code blueprint for local development.
- When you run `make up`, Docker pulls the exact, specific versions of Postgres and Redis we need, sandboxes them, maps them to specific ports, and attaches them to a shared virtual network.
- **Volumes**: We use `postgres_data:/var/lib/postgresql/data`. This means even if you destroy the Postgres container, the actual database data is saved safely on your hard drive. When you start the container again, your users and data are still there.

---

## 📊 4. The Future Goal: Observability

_(Reference: Maxim AI, Langfuse, Helicone)_

As you structure `src/api` and `src/web`, remember _why_ we are doing this: we need to track every single token.

- In a toy app, you just call `openai.chat.completions.create(...)`.
- In this enterprise app, later sprints will require us to wrap every call in a tracer (like Langfuse) so we know:
  1.  Which specific user initiated the task?
  2.  Did it route to Gemini or Claude?
  3.  How many tokens did the `QA Agent` use versus the `Dev Agent`?
  4.  What was the total cost of this trace?

---

## � 5. JIT Link Summarizations

As requested, here is the explicit summarization of the Just-In-Time learning resources mapped out for Sprint 1.

### 5.1 Monorepos: Turborepo Documentation

**Link:** [Turbo.build Repo Docs](https://turbo.build/repo/docs)

- **The Core Concept**: Turborepo is a high-performance build system for JS/TS monorepos.
- **Hash Caching**: Turbo calculates an explicit hash based on file contents, environmental variables, and dependency graphs. If the hash matches the cache, it instantly returns the built artifacts (like a compiled Next.js bundle) instead of recompiling.
- **Task Pipelines (`turbo.json`)**: You define pipelines to dictate the execution order. If the `web` app explicitly depends on the `types` package, Turbo knows to build `types` _before_ starting the `web` dev server.

### 5.2 Microservices: The API Gateway Pattern

**Link:** [System Design: Microservices Architecture](https://lnkd.in/gfdJqGU4)

- **Single Entry Point**: Instead of client devices talking to 5 different AI microservices, they talk to _one_ API Gateway.
- **Cross-Cutting Concerns**: The Gateway handles authentication (Clerk tokens), rate limiting, and SSL termination. It reduces the burden on the backend worker agents, who can assume any request reaching them is already authenticated and authorized.
- **Protocol Translation**: The Gateway can accept a standard HTTP REST request from the browser dashboard and translate it into a WebSocket or gRPC stream to communicate with the internal LangGraph Python services.

### 5.3 Frontend UI: Horizon AI Dashboard

**Link:** [Horizon AI Dashboard (Shadcn Template)](https://horizon-ui.com/shadcn-ui-admin-dashboard-template)

- **Visual Architecture**: AI products require complex layouts. You need persistent sidebars for navigation, wide data-tables for metrics (costs/tokens), and a large "Chat Arena" for agent interaction.
- **Shadcn UI**: We use Shadcn because it is _not_ an npm package. You own the code. You can completely customize the `<Button />` or `<Card />` components to fit the exact aesthetic of your enterprise AI product.

### 5.4 AI Observability: Tracing Decision Chains

**Link:** [Maxim AI Concepts](https://getmaxim.ai/)

- **Non-Deterministic Execution**: Traditional web requests are predictable. AI agents are unpredictable.
- **Tracing**: You must track the exact "Thought -> Action -> Tool -> Result" chain. Observability in an AI system isn't just "Did the server crash 500?" It is "Why did the QA Agent decide to reject this code block, and what was the tool output that caused the rejection?"

### 5.5 Docker Best Practices for Fullstack

**Link:** [Docker Compose in Development](https://dev.to/tomray/best-practices-for-docker-compose-in-development-10g4)

- **Bind Mounts**: In production, you copy your code into the container. In local development, you use "Bind Mounts" (e.g., `volumes: - .:/app`). This maps a folder on your Mac directly into the running Linux container.
- **Hot Reloading**: Bind mounts allow Next.js or Nodemon to instantly detect when you save a file in VSCode and update the running container without rebuilding the Docker image.
- **Persistent Volumes**: For databases like Postgres, you create named data volumes (e.g., `postgres_data:/var/lib/postgresql/data`). This ensures data survives container restarts and image updates.

### 5.6 Future Prep: Payment & Consistency Systems

**Link:** [System Design: Payment Systems (Ankit Pangasa)](https://lnkd.in/gxmrEKS4)

- **Idempotency**: A critical concept for billing (Sprint 3). If a user clicks "Upgrade to Pro" twice because the UI hung, you must ensure Stripe only charges them _once_. You pass an `Idempotency-Key` (like a UUID) with every API request.
- **ACID Transactions**: Postgres is used for billing because it supports atomic, consistent transactions. If the payment succeeds but the local database update fails, the entire transaction must roll back to maintain state consistency.

---

## �🚀 Your Next Step

You have read the theory and the explicit summarization of the JIT links. The architecture is sound.

1.  Open `sprint-1-setup/README.md`.
2.  Review the **Initial Kickoff Prompt** at the bottom.
3.  We will now execute that prompt to actually build this skeleton into the repo.
