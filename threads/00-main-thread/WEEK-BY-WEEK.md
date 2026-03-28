# Week-By-Week Playbook

This is the detailed version of the 8-week roadmap.

Use it with:

- [README.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/README.md)
- [TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)

## Week 1: Product Wedge, Thin Slice, and Architecture Baseline

### Outcome

Finish with a clear product wedge, a thin request path, and a written architecture baseline.

### Build

- define ICP, user jobs, and one north-star metric
- create a thin request path from `src/web` to `src/api` to a stubbed assistant
- define initial schemas for request, response, session, and citation
- add basic logging and error taxonomy

### AI Engineering

- provider APIs
- structured outputs
- prompt contracts
- tool calling basics

### System Design

- API gateway pattern
- streaming vs blocking responses
- request IDs and tracing IDs
- idempotency and retry boundaries

### Staff Artifact

- product brief
- architecture overview

### Resources

- OpenAI practical guide to building agents
- Anthropic building effective agents
- DeepLearning.AI Agentic AI intro

### Done Means

- one request succeeds end to end
- the product and architecture story are written down

## Week 2: Single-Agent Workflow, Provider Abstraction, and Evals v0

### Outcome

You have one useful assistant workflow for engineering Q&A or plan generation.

### Build

- implement the first real assistant endpoint
- add provider abstraction or model gateway
- add one or two safe tools
- create a tiny eval set
- record latency, cost, and success or failure

### AI Engineering

- output schemas
- model routing and fallback basics
- prompt iteration discipline
- deterministic and LLM-judge checks

### System Design

- rate limits
- backoff
- sync vs queued execution
- response streaming

### Staff Artifact

- ADR for provider abstraction and request flow

### Resources

- LiteLLM routing docs
- OpenAI Agents SDK docs
- OpenAI evals docs

### Done Means

- the app answers scoped questions
- prompt and model changes are measurable

## Week 3: Vector RAG, Citations, and Retrieval Quality

### Outcome

You move from generic chatbot behavior to grounded answers over your own knowledge.

### Build

- ingest markdown, docs, and selected code metadata
- implement chunking, embedding, indexing, and citation return
- add metadata filtering and document version info
- create a small labeled retrieval set

### AI Engineering

- vector RAG
- embeddings
- hybrid retrieval
- reranking
- citations and grounding

### Production Architecture Focus

- separate offline ingestion from online query serving
- keep source-of-truth documents outside the vector store
- version documents and reindex idempotently
- filter by tenant, source type, and freshness

### System Design

- ingestion pipeline design
- queues and background workers
- index build and refresh strategy
- Postgres vs vector DB boundaries

### Staff Artifact

- retrieval design review
- ADR for vector DB and retrieval strategy

### Resources

- Qdrant docs
- Qdrant hybrid search and reranking
- Azure AI Search RAG overview
- Azure advanced RAG guidance
- Nir Diamant RAG techniques

### Done Means

- answers include citations
- retrieval quality is measured
- you can explain why naive vector search is not enough for production

## Week 4: Memory, Session State, and Bounded Context

### Outcome

You add memory without turning memory into vague magic.

### Build

- add session state and user or session tables
- separate short-term context from long-term knowledge
- add summaries or compression for long conversations
- define memory write rules and retention boundaries

### AI Engineering

- session memory vs knowledge memory
- summary memory
- semantic memory
- memory compaction
- when not to store memory

### Production Architecture Focus

- Postgres or Redis for session state
- vector DB for retrievable knowledge, not everything
- explicit memory write paths
- tenant-aware access control

### System Design

- transactions and concurrency
- data ownership
- stateful workflow recovery
- API versioning

### Staff Artifact

- memory architecture note

### Resources

- LangGraph persistence concepts
- Azure secure multitenant RAG guidance
- OpenAI evaluation best practices

### Done Means

- repeat sessions work
- memory remains explicit and bounded

## Week 5: Workflow Orchestration, MCP, and Selective Multi-Agent

### Outcome

You add orchestration only where it creates measurable value.

### Build

- add a bounded multi-step workflow
- create one specialist role such as researcher or triager
- expose one internal tool boundary through MCP
- decide whether any real remote-agent use case justifies A2A

### AI Engineering

- planner/executor patterns
- supervisor vs handoff patterns
- MCP server and client boundaries
- A2A use cases and limits
- human approval for risky actions

### Production Architecture Focus

- durable checkpoints
- evented state transitions
- tool timeouts and retries
- approval nodes for destructive actions

### System Design

- orchestration vs choreography
- queues and worker pools
- long-running workflows
- remote contract design

### Staff Artifact

- RFC: when multi-agent is warranted for Team AI

### Resources

- LangGraph docs
- MCP specification
- A2A protocol docs
- Google ADK A2A intro

### Done Means

- you can defend why a workflow or agent split exists

## Week 6: Evals, Observability, and Guardrails

### Outcome

You can explain what is working, what is failing, and why.

### Build

- add traces for request, retrieval, tool calls, and final output
- add offline evals and at least one online quality signal
- add prompt-injection and sensitive-action guardrails
- add a simple quality and cost dashboard

### AI Engineering

- offline vs online evals
- grader design
- trace grading
- prompt version tracking
- prompt injection and data-exfiltration defenses

### Production Architecture Focus

- observability as a first-class subsystem
- evaluation loops tied to regressions
- policy checks before risky tools

### System Design

- dashboards and alerting
- quality gates in CI
- failure-mode taxonomy
- operational readiness

### Staff Artifact

- risk register
- operational review

### Resources

- Langfuse docs
- OpenAI evals docs
- OpenAI trace grading
- LangSmith evaluation docs

### Done Means

- you can answer how much the app costs, where it fails, and what changed

## Week 7: Auth, Tenancy, Sandboxing, and Deployment

### Outcome

The system stops looking like a demo and starts looking like a product.

### Build

- add authentication and tenant isolation
- add secrets management and environment strategy
- add approval gates for risky operations
- add sandboxing if the app executes code or shell operations
- prepare a deployable environment

### AI Engineering

- tool security
- authn and authz for AI apps
- tenant-aware retrieval
- sandbox design
- CI/CD and environment promotion

### Production Architecture Focus

- secure multitenant RAG
- control plane vs data plane separation
- background jobs and webhooks
- deployment topology

### System Design

- auth service design
- billing and idempotent webhooks
- tenant isolation
- rollout and rollback

### Staff Artifact

- launch checklist
- go/no-go review

### Resources

- Azure secure multitenant RAG guidance
- Docker security docs
- OpenAI agent safety guide

### Done Means

- you have a credible security and deployment story

## Week 8: Launch, Portfolio, Interview Pack, and Career Activation

### Outcome

You convert the build into proof: demo, case study, architecture deck, and interview material.

### Build

- stabilize the demo
- fix top quality, latency, and cost issues
- finalize docs and diagrams
- capture a portfolio-quality case study

### AI Engineering

- performance tuning
- caching opportunities
- cost reduction
- fallback strategies
- stretch: multimodal or remote-agent integration

### Career Activation

- start the global job hunt thread
- adapt the case study into resume bullets and outreach assets
- start the AI interview bank loop

### System Design

- run mock AI-system design interviews
- finalize an architecture deck for Team AI

### Staff Artifact

- postmortem
- promotion-style evidence summary

### Resources

- OpenAI interview guide
- Anthropic careers and candidate AI guidance
- OpenAI Academy career-prep resources

### Done Means

- demo is presentable
- architecture is defendable
- you have real job-search assets, not just code
