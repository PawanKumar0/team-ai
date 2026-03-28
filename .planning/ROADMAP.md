# Roadmap: Team AI Project

## Phase 1: Foundation & API Gateway (Sprint 1)
- **Goal**: Initialize the Next.js frontend, backend API, and shared types.
- **Plans**:
  - [ ] .planning/sprints/sprint-1/PLAN.md — Shared types, API middleware, and Next.js proxy.
- **Tasks**:
  - [x] Scaffolding: Next.js (src/web), Express (src/api), Types (src/packages/types).
  - [x] Docker-Compose for Postgres, Redis, and local development.
  - [ ] Define shared Zod schemas for core entities (User, Session, Message).
  - [ ] Connect Frontend to Backend via internal API.
- **Status**: In Progress

## Phase 2: Core LLM Engine & Dynamic Routing (Sprint 2)
- **Goal**: Build the text-generation loop with LiteLLM proxy and fallback.
- **Tasks**:
  - [ ] Integrate LiteLLM with rate-limit aware routing via Redis.
  - [ ] Implement fallback chains (e.g., GPT-4o -> Claude 3.5).
  - [ ] Basic Tool Calling support (Model Context Protocol).
- **Learning (JIT)**: [Prompt Engineering Guides (Anthropic/OpenAI)](https://lnkd.in/gsnasAV6), [LiteLLM Docs](https://docs.litellm.ai/docs/routing), [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/).

## Phase 3: Identity, Auth, & Billing (Sprint 3)
- **Goal**: Secure the platform and add monetization.
- **Tasks**:
  - [ ] Clerk integration for user authentication.
  - [ ] Stripe integration for SaaS subscriptions and billing.
- **Learning (JIT)**: [Payment Systems (Idempotency, consistency)](https://lnkd.in/gxmrEKS4).

## Phase 4: RAG & Long-Term Memory (Sprint 4)
- **Goal**: Persistent agent memory and context.
- **Tasks**:
  - [ ] Vector Database (Pinecone/Qdrant) integration.
  - [ ] LangGraph Postgres/Redis checkpointers for state persistence.
- **Learning (JIT)**: [Attention Is All You Need (Paper)](https://lnkd.in/gXUccydp), [Andrew Ng/Karpathy's Neural Net Deep Dives](https://lnkd.in/gwqSPS4J).

## Phase 5: Multi-Agent "Agent as an Employee" (Sprint 5)
- **Goal**: specialized agents (Dev, QA, Researcher).
- **Tasks**:
  - [ ] LangGraph Supervisor/Handoff patterns for multi-agent orchestration.
  - [ ] Define role-specific tools and model constraints.
- **Learning (JIT)**: [Kafka (Event streaming, brokers)](https://lnkd.in/gBiu9ePG), LangGraph patterns.

## Phase 6: Real-Time Dashboard & Observability (Sprint 6)
- **Goal**: Live monitoring and management.
- **Tasks**:
  - [ ] Real-time agent communication view (WebSockets).
  - [ ] Integrate Langfuse/Helicone for token spend metrics and trace analysis.

## Phase 7: Secure Sandboxing & Execution (Sprint 7)
- **Goal**: Isolated environment for code execution.
- **Tasks**:
  - [ ] E2B MicroVM or Docker-in-Docker integration for Dev Agent.
  - [ ] Implement AgentShield security gates.
- **Learning (JIT)**: OS-level virtualization, Docker internals, security boundaries.

## Phase 8: Production Deployment (Sprint 8)
- **Goal**: Launch to AWS/Kubernetes.
- **Tasks**:
  - [ ] AWS/EKS (Kubernetes) deployment.
  - [ ] Datadog/Prometheus monitoring.
- **Learning (JIT)**: [LLM Systems Inference scaling](https://lnkd.in/gZbQ5Q4M), Kubernetes management.
