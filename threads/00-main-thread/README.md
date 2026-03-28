# Main Thread

If only one folder matters day to day, it is this one.

This thread owns the product and the execution order for the next 60 days.

## Product

**Team AI: an engineering intelligence copilot for internal teams**

Start with one narrow but valuable wedge:

- engineering docs and repo Q&A with citations
- ticket and incident triage
- implementation-plan drafting
- runbook and architecture retrieval

Later expand into:

- specialist workflows
- selective multi-agent coordination
- remote agent interoperability through A2A

## Why This Product Wins

- it has clear internal-team ROI
- it is realistic to ship in two months
- it forces you to learn the right AI engineering layers
- it naturally maps to strong system design exercises
- it produces portfolio proof, not tutorial residue

## Release Ladder

### Release 1

Single-agent assistant with structured outputs and thin API/UI path.

### Release 2

RAG over docs and code context with citations and basic evals.

### Release 3

Workflow orchestration, memory, prompt/version control, tracing, guardrails.

### Release 4

Tenant-aware, production-minded, deployable product with launch docs.

## Product Architecture

Keep the architecture honest:

- `src/web`
  - operator UI, chat, settings, metrics, review screens
- `src/api`
  - request validation, auth, orchestration endpoints, streaming
- orchestration layer
  - single workflow first, specialist nodes later
- ingestion layer
  - parse docs/code/tickets and enqueue indexing jobs
- retrieval layer
  - embeddings, hybrid search, reranking, citations
- state layer
  - relational data, sessions, memory metadata
- observability layer
  - traces, evals, prompt versions, cost and latency

## What Not To Build First

- generalized autonomous coding swarm
- full billing stack before user value is proven
- fancy "employee" theatrics without measurable benefit
- multi-agent patterns that could be a single workflow
- deep deployment complexity before the app deserves it

## Success Metrics

Use metrics tied to reality:

- answer quality on a labeled set
- citation accuracy
- latency by workflow stage
- cost per successful task
- triage or planning time saved
- failure rate by tool, prompt version, and retrieval path

## Execution Rule

Every major product change should answer all four:

1. What user problem does this solve?
2. What new technical capability does it teach?
3. What system design concept does it exercise?
4. What artifact proves I understand the trade-off?

## Next File

Use [TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md) as the weekly command center.
