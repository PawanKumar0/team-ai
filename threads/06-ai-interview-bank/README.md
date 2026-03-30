# AI Interview Bank

This thread is for AI engineering interviews with a strong architecture and system-design bias.

## Public-Source Note

This bank is based on:

- public interview guidance from companies like OpenAI and Anthropic
- public AI engineering and ML interview repositories
- recurring system-design patterns across applied AI, infra, and platform teams

It is not a claim that every question below is an exact private company prompt.
It is the right bank to train against.

## How To Use

- pick 2 questions per week starting in Week 6
- answer in writing first
- then answer aloud in 25 to 40 minutes
- finish by writing trade-offs and failure modes

## Week Files

- [week-1/README.md](/Users/pawan/Vizmo/team-ai/threads/06-ai-interview-bank/week-1/README.md)
- [week-2/README.md](/Users/pawan/Vizmo/team-ai/threads/06-ai-interview-bank/week-2/README.md)
- [week-3/README.md](/Users/pawan/Vizmo/team-ai/threads/06-ai-interview-bank/week-3/README.md)
- [week-4/README.md](/Users/pawan/Vizmo/team-ai/threads/06-ai-interview-bank/week-4/README.md)
- [week-5/README.md](/Users/pawan/Vizmo/team-ai/threads/06-ai-interview-bank/week-5/README.md)
- [week-6/README.md](/Users/pawan/Vizmo/team-ai/threads/06-ai-interview-bank/week-6/README.md)
- [week-7/README.md](/Users/pawan/Vizmo/team-ai/threads/06-ai-interview-bank/week-7/README.md)
- [week-8/README.md](/Users/pawan/Vizmo/team-ai/threads/06-ai-interview-bank/week-8/README.md)

## Frontier Lab Style Questions

### 1. Design an agent platform that uses tools safely.

Strong answer should cover:

- tool schemas
- approval boundaries
- traceability
- rollback or failure handling

### 2. When would you choose workflow orchestration over multi-agent?

Strong answer should cover:

- complexity cost
- coordination overhead
- debuggability
- measurable value of decomposition

### 3. How would you evaluate an AI agent end to end?

Strong answer should cover:

- offline and online evals
- task-specific metrics
- trace grading
- human calibration

### 4. Design a safe remote-code-execution subsystem for an AI agent.

Strong answer should cover:

- sandboxing
- network and file restrictions
- logging
- approval flows
- blast radius

### 5. Design a memory system for an agent that interacts with a user over time.

Strong answer should cover:

- session vs long-term memory
- write policies
- summarization
- privacy and retention

## Applied AI Product Company Questions

### 6. Design a multitenant RAG assistant for enterprise documents.

Strong answer should cover:

- ingestion
- vector and metadata design
- ACL or tenant filters
- citations
- evals

### 7. How would you improve retrieval quality when basic vector search is failing?

Strong answer should cover:

- chunking changes
- hybrid retrieval
- reranking
- query rewriting
- evaluation methodology

### 8. How do you decide between prompt changes, RAG, fine-tuning, or workflow changes?

Strong answer should cover:

- failure diagnosis
- cost and latency
- data control
- eval-driven decision making

### 9. Design an incident-triage copilot for engineering teams.

Strong answer should cover:

- data sources
- tool access
- auth
- audit trail
- human-in-the-loop

### 10. How would you handle stale knowledge in a RAG system?

Strong answer should cover:

- freshness metadata
- reindexing
- source-of-truth ownership
- cache invalidation

## AI Infra and Platform Questions

### 11. Design a model gateway or routing layer for multiple LLM providers.

Strong answer should cover:

- provider abstraction
- retries and fallbacks
- cost and latency controls
- model policy

### 12. Design an observability system for AI applications.

Strong answer should cover:

- traces
- prompt versions
- model and tool metadata
- cost and latency
- failure analytics

### 13. Design an evaluation platform for LLM apps.

Strong answer should cover:

- datasets
- evaluators
- experiment tracking
- online and offline flow
- regression alerts

### 14. How would you architect streaming responses from an AI backend to a web client?

Strong answer should cover:

- transport choice
- partial updates
- cancellation
- retries
- observability

### 15. Design an ingestion platform for documents, code, and tickets.

Strong answer should cover:

- source connectors
- parsing and chunking
- idempotent jobs
- backfills
- metadata and lineage

## Security and Reliability Questions

### 16. How do you defend against prompt injection in a tool-using agent?

Strong answer should cover:

- instruction hierarchy
- untrusted content boundaries
- tool scoping
- approvals
- auditing

### 17. How would you design tenant isolation for a B2B AI assistant?

Strong answer should cover:

- authn and authz
- data partitioning
- retrieval filters
- trace privacy
- secret isolation

### 18. What would you cache in an AI system, and what would you never cache?

Strong answer should cover:

- embeddings
- retrieval results
- prompt templates
- final answers
- privacy and staleness constraints

### 19. Design failure handling for tool loops, long-running agents, and partial outages.

Strong answer should cover:

- timeouts
- retries
- circuit breakers
- durable checkpoints
- human fallback

### 20. How would you set SLOs for an AI product?

Strong answer should cover:

- latency
- correctness or usefulness proxies
- safety
- cost budgets
- degraded modes

## Staff-Level Architecture Questions

### 21. Your team wants multi-agent, but the product is not stable yet. What do you do?

Strong answer should cover:

- scope control
- proving value first
- simplifying architecture
- sequencing

### 22. Build vs buy: Langfuse, LangSmith, Helicone, or internal tooling?

Strong answer should cover:

- requirements
- lock-in
- speed
- security
- total cost of ownership

### 23. Your RAG system is accurate but slow and expensive. What do you optimize first?

Strong answer should cover:

- measurement
- top-k and reranking
- caching
- smaller models where safe
- async decomposition

### 24. You need to present the architecture to executives and engineers. What changes in your explanation?

Strong answer should cover:

- audience-aware communication
- business outcomes vs implementation details
- risks and milestones

## Strong Companion Resources

- OpenAI interview guide: <https://openai.com/interview-guide/>
- Anthropic careers: <https://www.anthropic.com/careers>
- Anthropic candidate AI guidance: <https://www.anthropic.com/candidate-ai-guidance>
- AI engineering interview questions repo: <https://github.com/amitshekhariitbhu/ai-engineering-interview-questions>
- System Design Primer: <https://github.com/donnemartin/system-design-primer>

## Minimum Standard

For each question, you should be able to:

- clarify scope
- draw the system
- define data flow
- explain trade-offs
- identify failure modes
- explain what you would measure
