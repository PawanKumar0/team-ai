# System Design Thread

This thread has two jobs:

- make you better at designing real systems for the product
- make you better at interview-style system design

Do not study system design as isolated trivia. Tie it to the product whenever possible.

## Core Concepts To Master

### Foundation

- HTTP, TCP, DNS, WebSockets, streaming
- API contracts and versioning
- timeouts, retries, backoff, idempotency

### State and Data

- relational modeling
- transactions and consistency
- caching strategies
- queues and async processing
- search and index design
- multi-tenancy

### Scale and Reliability

- rate limiting
- backpressure
- failover and fallback
- observability and SLOs
- deployment, rollout, rollback

### AI-Specific System Design

- model routing
- retrieval architectures
- eval infrastructure
- session and memory systems
- tool and agent orchestration
- sandboxing and safety controls

## Weekly Drill Plan

### Week 1

- General case: URL shortener or API gateway
- AI case: simple LLM assistant platform

### Week 2

- General case: reliable webhook dispatcher
- AI case: model routing service with retries and fallbacks

### Week 3

- General case: job scheduler or notification system
- AI case: RAG ingestion and retrieval platform

### Week 4

- General case: auth service or cache service
- AI case: session and memory architecture

### Week 5

- General case: pub-sub system or config manager
- AI case: orchestration layer and remote agent contracts

### Week 6

- General case: observability platform or leaderboard-style metrics system
- AI case: evaluation and tracing platform

### Week 7

- General case: subscription and billing flow
- AI case: secure execution sandbox and tenant isolation

### Week 8

- General case: pick one from auction, cab booking, trending topics, or notification service
- AI case: full enterprise AI copilot platform

## Interview Discipline

For each design, practice this order:

1. clarify scope and constraints
2. estimate scale
3. define APIs and data model
4. draw high-level architecture
5. explain hot paths and failure modes
6. discuss trade-offs and future improvements

## Best Resources

- System Design Primer: <https://github.com/donnemartin/system-design-primer>
- DDIA: <https://dataintensive.net/>
- AWS Builders Library on retries and backoff: <https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/>
- The Architecture of Open Source Applications: <https://aosabook.org/en/>

## Good Resources From Your Dump

- systemdesign42/system-design: <https://github.com/systemdesign42/system-design>
- Gaurav Sen and Hussein Nasser are strong channels for system intuition
- the SystemDesignOne links are useful as idea generators, not as your primary curriculum

## Minimum Output Standard

Every week produce:

- one written system design answer
- one architecture diagram
- one list of trade-offs
- one note on how the design connects back to `Team AI`

For AI-company-style interview questions, use [threads/06-ai-interview-bank/README.md](/Users/pawan/Vizmo/team-ai/threads/06-ai-interview-bank/README.md).
