# AI Tech Team & Super Agent: Enterprise Master Plan

This document serves as the roadmap, curriculum, and progress tracker for building an autonomous, enterprise-ready AI Tech Team SaaS.

**Learning Philosophy:** _Build First, Learn JIT (Just-In-Time)._ We build the system sprint-by-sprint. The theory (Math, Transformers, System Design) is explicitly attached to the sprint where that knowledge is actually used.

---

## 🏗 Enterprise Architecture Overview

Our goal is not just a script; it is a full, scalable product.

- **Frontend/Dashboard**: Next.js (React), TailwindCSS, Shadcn UI for managing agent tasks, viewing analytics, **Token Cost Metrics**, and **Dynamic Model Selection**.
- **Backend/API Tier**: Node/Python or Go API Gateway. Clerk/Auth0 for user authentication. Stripe for billing.
- **AI Core (LangGraph/Agents)**:
  - **Super Agent**: The orchestrator and planner. Uses **LiteLLM** for dynamic routing between GPT-4o and Claude-3.5 native tools.
  - **"Agent as an Employee"**: Specialized workers (Dev, QA, Researcher) with explicit restrictions, constrained tools, and specialized model routing profiles.
- **Data & Memory Layer**:
  - PostgreSQL (Relational data, user accounts, billing).
  - Pinecone/Qdrant (Vector DB for RAG and Long-term agent memory).
  - Redis (Caching and fast Pub/Sub agent communication).
- **Security & Sandboxing**: Docker-in-Docker (or gVisor VM isolates) to safely execute the code the Dev Agent writes.
- **Observability & Ops**: AWS/EKS (Kubernetes) for hosting. **Helicone / Langfuse** for tracking exact LLM token spending per agent. Datadog/Prometheus for system health.

---

## 🏃‍♂️ The 8-Sprint Roadmap (Our Execution Plan)

All production code lives in `src/`. Each `sprint-X` folder acts as your workbench, containing the specific JIT reading materials and the exact prompt to use to start coding that specific sprint.

### Sprint 1: Architecture & Repo Setup

**Goal**: Initialize the Next.js frontend, backend API gateway structure, Docker-compose for local development, and basic database (Postgres) schemas.

- **Status**: ⏳ Pending

### Sprint 2: Core LLM Engine & Dynamic Routing

**Goal**: Build the basic text-generation loop. The Orchestrator can take a prompt, call Anthropic/OpenAI APIs, dynamically route models (LiteLLM), and use basic tools (Model Context Protocol).

- **JIT Learning**: [Prompt Engineering Guides (Anthropic/OpenAI)](https://lnkd.in/gsnasAV6), [LiteLLM Docs](https://docs.litellm.ai/docs/routing).
- **Status**: ⏳ Pending

### Sprint 3: Identity, Auth, & Billing

**Goal**: Lock down the APIs. Integrate Clerk for user logins and Stripe for SaaS subscriptions.

- **JIT Learning (System Design)**: [Payment Systems (Idempotency, consistency)](https://lnkd.in/gxmrEKS4).
- **Status**: ⏳ Pending

### Sprint 4: RAG & Long-Term Memory

**Goal**: Connect the agents to a Vector Database (Pinecone/Qdrant) so they can read documentation and remember past conversations.

- **JIT Learning**: [Attention Is All You Need (Paper)](https://lnkd.in/gXUccydp), [Andrew Ng/Karpathy's Neural Net Deep Dives](https://lnkd.in/gwqSPS4J).
- **Status**: ⏳ Pending

### Sprint 5: Multi-Agent "Agent as an Employee" Architecture

**Goal**: Introduce the Dev and QA agents. Use LangGraph to treat these agents as distinct employees with constrained allowable models and specific tool access.

- **JIT Learning (System Design)**: [Kafka (Event streaming, brokers)](https://lnkd.in/gBiu9ePG), [LazyCPU's Agent Substack](https://open.substack.com/pub/lazycpu/p/a-simple-agent-part-1?utm_campaign=post&utm_medium=web).
- **Status**: ⏳ Pending

### Sprint 6: Dynamic UI & Real-Time Dashboard

**Goal**: Build the Next.js frontend where users can watch the agents talk to each other in real-time, select LLM preferences, and track token spend metrics.

- **JIT Learning (System Design)**: [WebSockets, CRDTs (Google Docs/WhatsApp architecture)](https://lnkd.in/g-iF2XVm), [Helicone/Langfuse Docs](https://docs.helicone.ai/).
- **Status**: ⏳ Pending

### Sprint 7: Secure Sandboxing & Execution

**Goal**: The Dev Agent shouldn't rewrite your actual computer. We build an isolated Docker environment for the Dev Agent to compile and run the code it generates.

- **JIT Learning (System Design)**: OS-level virtualization, Docker internals, security boundaries.
- **Status**: ⏳ Pending

### Sprint 8: Production Deployment & Observability

**Goal**: Deploy the system to AWS/Kubernetes. Add Langfuse/Helicone to trace exact token usage per agent and Datadog for API monitoring.

- **JIT Learning (System Design)**: [LLM Systems Inference scaling](https://lnkd.in/gZbQ5Q4M), Load balancing, API Rate Limiting.
- **Books**: [AI Engineering by Chip Huyen](https://lnkd.in/g-MRviYk), [LLM Engineering Handbook](https://lnkd.in/gyA4vFXz).
- **Status**: ⏳ Pending

---

## 📝 Progress Log

- **2026-02-23**: Completely restructured repository to map to an 8-Sprint Enterprise Roadmap, defining the AI Core, UI, Identity, Memory, and Sandbox architectures.
