# 60-Day Roadmap

This file is the source of truth for the next two months.

## Mission

Turn a strong engineer into a stronger AI engineer and architect by shipping one serious product while building staff-level habits:

- product thinking
- architecture thinking
- system design
- technical writing
- evaluation discipline
- delivery discipline

## Why The Old Flow Was Weak

The old plan had energy but weak sequencing:

- too much framework-first thinking
- too much "enterprise architecture" before a real product wedge
- no strong motivation loop
- no explicit weekly proof of progress
- no separate lane for staff-level growth

That creates fake complexity and low momentum.

## New Operating Model

Assumption: about 18 to 20 focused hours per week.

There are four core threads and two late-stage threads:

1. `00-main-thread`
   The product. This is the driver. Every week must improve the product.
2. `01-ai-engineering`
   The AI concepts and implementation patterns you must learn just in time.
3. `02-system-design`
   The distributed systems and interview-style design work tied to the current build.
4. `03-staff-engineering`
   The writing, trade-off, prioritization, and leadership muscle that separates senior from staff.
5. `05-global-job-hunt`
   Activate near the end so the project becomes a job-search asset, not a distraction.
6. `06-ai-interview-bank`
   A company-style question bank focused on AI architecture, system design, and staff-level judgment.

`04-resource-map` exists to keep your input stream clean.

## Main Product

Build **Team AI**, an engineering intelligence copilot for internal teams.

Core user jobs:

- ask questions over engineering docs, repos, and runbooks
- get cited answers and concrete next steps
- triage tickets and incidents
- draft implementation plans and architecture notes
- later delegate bounded sub-tasks to specialist workflows or remote agents

Why this project is the right wedge:

- strong ROI story
- realistic enterprise use case
- covers RAG, memory, tools, workflows, auth, evals, observability, deployment
- exposes real system design trade-offs
- can later expand into multi-agent and A2A without starting there

## Non-Negotiables

- Start with one good workflow before building agent swarms.
- Instrument cost, latency, quality, and failure paths early.
- Every meaningful decision gets a written rationale.
- Every week produces code, design work, and a visible artifact.
- Human approval stays in the loop for writes, deletes, and sensitive actions.
- Treat MCP as agent-to-tool plumbing and A2A as remote agent interoperability, not interchangeable buzzwords.

## 8-Week Execution Plan

The summary below is the high-level view.
The detailed playbook lives in [threads/00-main-thread/WEEK-BY-WEEK.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEK-BY-WEEK.md).

### Week 1: Scope, Architecture, and Repo Discipline

- Main thread:
  - define the product wedge, ICP, top 3 user jobs, and success metric
  - confirm monorepo/dev workflow and thin end-to-end request path
  - write architecture v1 and product brief
- AI engineering:
  - LLM APIs, structured outputs, prompt contracts, tool calling basics
- System design:
  - API gateways, request lifecycle, SLO thinking, timeouts/retries/idempotency
- Staff engineering:
  - product brief and architecture overview
- Exit criteria:
  - one request can travel UI -> API -> stubbed orchestration -> UI
  - product brief and architecture doc exist in repo

### Week 2: Single-Agent Workflow and Evaluation Harness

- Main thread:
  - build a single assistant workflow for engineering Q&A and planning
  - add structured inputs/outputs and initial evaluation set
- AI engineering:
  - prompt design, tool schemas, guardrails, LiteLLM or provider abstraction
- System design:
  - retries, backoff, rate limits, failure classification
- Staff engineering:
  - write first ADR: model/provider abstraction and request flow
- Exit criteria:
  - assistant can answer scoped questions and emit structured plans
  - baseline eval set exists

### Week 3: Ingestion and RAG v1

- Main thread:
  - ingest markdown/docs/code metadata
  - build retrieval with citations
- AI engineering:
  - chunking, embeddings, metadata, dense plus sparse retrieval, reranking basics
- System design:
  - ingestion pipeline, storage layout, async jobs, index design
- Staff engineering:
  - retrieval design review and ADR for vector store/retrieval strategy
- Exit criteria:
  - cited answers work on a small real corpus
  - retrieval quality is measured on a small labeled set

### Week 4: Memory, Sessions, and API Hardening

- Main thread:
  - add session model, conversation state, and production-facing API contracts
  - separate ephemeral context from persistent memory
- AI engineering:
  - short-term memory, long-term memory, history compaction, context management
- System design:
  - stateful workflows, transactions, concurrency, API versioning
- Staff engineering:
  - write state model and data ownership note
- Exit criteria:
  - repeat sessions work
  - memory design is explicit and bounded

### Week 5: Workflow Orchestration, MCP, and Selective Multi-Agent

- Main thread:
  - add bounded workflow orchestration
  - introduce specialist roles only where they improve outcomes
- AI engineering:
  - LangGraph or equivalent orchestration, MCP integration, A2A fundamentals
- System design:
  - orchestration vs choreography, queues, workflow durability, remote contracts
- Staff engineering:
  - RFC: when multi-agent is justified vs overengineering
- Exit criteria:
  - one workflow clearly benefits from decomposition
  - MCP tool boundary is clean

### Week 6: Evals, Observability, and Guardrails

- Main thread:
  - add tracing, prompt versioning, online/offline evals, failure dashboards
  - harden prompt-injection and data-exfiltration paths
- AI engineering:
  - Langfuse, trace-based debugging, judge-based evals, custom evals, human review
- System design:
  - monitoring, alerting, dashboards, quality gates, operational readiness
- Staff engineering:
  - operational review and risk register
- Exit criteria:
  - you can explain cost, latency, retrieval quality, and common failure modes

### Week 7: Auth, Tenancy, Security, and Deployment Path

- Main thread:
  - add auth, tenant boundaries, secrets handling, and a deployment target
  - add sandbox rules for sensitive tools or code execution if needed
- AI engineering:
  - sandboxing, secret isolation, policy checks, approval flows
- System design:
  - multi-tenancy, authn/authz, webhooks, billing/idempotency, CI/CD
- Staff engineering:
  - launch checklist and go/no-go criteria
- Exit criteria:
  - app has a credible production path, not just localhost capability

### Week 8: Launch, Portfolio, and Interview Proof

- Main thread:
  - demo-ready release
  - final polish on UX, reliability, docs, and architecture
- AI engineering:
  - optimize latency and cost, failure fallbacks, stretch goal for multimodal or remote agent integration
- System design:
  - final system design deck and mock interviews
- Staff engineering:
  - case study, postmortem, and promotion-style evidence summary
- Career activation:
  - turn the project into job-search assets and start the global search thread
- Interview activation:
  - start the AI interview bank and company-style mock loops
- Exit criteria:
  - deployed demo or production-like environment
  - portfolio-quality write-up and system design deck exist

## Weekly Cadence

Use this every week:

- `Mon`: plan the slice, write the target artifact, set success metric
- `Tue`: implement the main product change
- `Wed`: finish implementation and add tests/evals
- `Thu`: do system design drill and architecture review
- `Fri`: document, demo, measure, and review
- `Sat or Sun`: one long-form learning block plus one mock design

Every week must ship:

- one product increment
- one AI engineering note or experiment
- one system design drill
- one staff artifact
- one weekly review

## What To Ignore For Now

- generic "6 month AI engineer" reels
- random framework hopping
- full autonomous coding agents before retrieval, evals, and safety
- building billing before proving the product wedge
- polishing dashboards before traces and metrics exist

## Final Outputs By Day 60

- working product in `src/`
- product brief
- architecture overview
- at least 3 ADRs
- evaluation dataset and experiment log
- observability setup
- weekly reviews
- system design question bank with written answers
- portfolio case study

## Navigation

- Main thread: [threads/00-main-thread/README.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/README.md)
- Weekly tracker: [threads/00-main-thread/TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- Detailed weekly plan: [threads/00-main-thread/WEEK-BY-WEEK.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEK-BY-WEEK.md)
- AI engineering: [threads/01-ai-engineering/README.md](/Users/pawan/Vizmo/team-ai/threads/01-ai-engineering/README.md)
- System design: [threads/02-system-design/README.md](/Users/pawan/Vizmo/team-ai/threads/02-system-design/README.md)
- Staff engineering: [threads/03-staff-engineering/README.md](/Users/pawan/Vizmo/team-ai/threads/03-staff-engineering/README.md)
- Resources: [threads/04-resource-map/README.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/README.md)
- Global job hunt: [threads/05-global-job-hunt/README.md](/Users/pawan/Vizmo/team-ai/threads/05-global-job-hunt/README.md)
- AI interview bank: [threads/06-ai-interview-bank/README.md](/Users/pawan/Vizmo/team-ai/threads/06-ai-interview-bank/README.md)
- Journal system: [journal/README.md](/Users/pawan/Vizmo/team-ai/journal/README.md)
