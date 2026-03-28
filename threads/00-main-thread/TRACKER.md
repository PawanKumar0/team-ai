# Weekly Tracker

This is the operational checklist for the 60-day plan.

For the detailed version, use [WEEK-BY-WEEK.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEK-BY-WEEK.md).

## Usage

At the start of each week:

- pick one product milestone
- pick one AI engineering topic to master through implementation
- pick one general system design case and one AI system design case
- pick one staff artifact to write

At the end of each week:

- demo something
- log what changed
- record metrics
- decide what to cut, keep, or deepen

## Week 1

- [ ] Write the product brief: ICP, user jobs, ROI hypothesis
- [ ] Write architecture v1
- [ ] Confirm local dev workflow for `src/web` and `src/api`
- [ ] Build thin request path from UI to API to stubbed assistant
- [ ] Do one general SD drill: API gateway or URL shortener
- [ ] Do one AI SD drill: basic LLM assistant platform
- [ ] Publish weekly review

## Week 2

- [ ] Implement single-agent workflow
- [ ] Add structured outputs and prompt contract
- [ ] Add first tool or controlled action
- [ ] Build baseline eval set
- [ ] Do one general SD drill: webhook dispatcher or retries/backoff
- [ ] Do one AI SD drill: model routing and failure handling
- [ ] Write ADR for provider abstraction

## Week 3

- [ ] Build ingestion job for docs or repo metadata
- [ ] Implement retrieval with citations
- [ ] Measure retrieval quality on a small labeled set
- [ ] Add at least one retrieval failure analysis note
- [ ] Do one general SD drill: job scheduler or notification system
- [ ] Do one AI SD drill: RAG platform design
- [ ] Write retrieval ADR

## Week 4

- [ ] Add sessions and state model
- [ ] Separate short-term context from persistent memory
- [ ] Harden API contract and error taxonomy
- [ ] Document memory boundaries and retention rules
- [ ] Do one general SD drill: auth service or cache service
- [ ] Do one AI SD drill: memory architecture for agents
- [ ] Publish weekly review

## Week 5

- [ ] Introduce orchestration framework only if Week 4 exposed real need
- [ ] Add specialist workflow or agent for one bounded task
- [ ] Integrate MCP for one tool boundary
- [ ] Study A2A and decide whether remote agents are justified
- [ ] Do one general SD drill: pub-sub or config manager
- [ ] Do one AI SD drill: multi-agent platform design
- [ ] Write RFC on multi-agent justification

## Week 6

- [ ] Add tracing and prompt/version visibility
- [ ] Add online and offline evals
- [ ] Add guardrails for prompt injection and sensitive actions
- [ ] Create operational dashboard or metric page
- [ ] Do one general SD drill: observability platform or rate limiter
- [ ] Do one AI SD drill: evaluation system design
- [ ] Write risk register

## Week 7

- [ ] Add auth and tenant boundaries
- [ ] Add deployment target and environment strategy
- [ ] Add approval flows for risky actions
- [ ] If code execution exists, isolate it with sandboxing
- [ ] Do one general SD drill: billing/subscription or webhook consistency
- [ ] Do one AI SD drill: secure agent execution platform
- [ ] Write launch checklist

## Week 8

- [ ] Cut scope aggressively and prepare a stable demo
- [ ] Optimize latency, cost, and top failure paths
- [ ] Finalize docs, diagrams, ADRs, and portfolio write-up
- [ ] Run mock system design sessions
- [ ] Publish final weekly review
- [ ] Write postmortem and next 30-day plan

## Exit Gate

By the end of the roadmap, you should have:

- [ ] product demo
- [ ] architecture doc
- [ ] 3 or more ADRs
- [ ] eval dataset and experiment history
- [ ] observability story
- [ ] system design practice record
- [ ] portfolio case study
