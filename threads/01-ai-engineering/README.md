# AI Engineering Thread

This thread defines what you must know to call yourself an AI engineer in the current market without hand-waving.

## Competency Map

### 1. LLM Product Basics

- prompts and instructions
- structured outputs
- tool schemas
- error handling

### 2. API and Model Layer

- provider APIs
- model routing
- latency and cost trade-offs
- retries and fallbacks

### 3. Retrieval

- chunking
- embeddings
- metadata
- hybrid retrieval
- reranking
- citations

### 4. State and Memory

- session state
- short-term memory
- long-term memory
- history compaction
- memory boundaries

### 5. Evaluation

- labeled datasets
- exact-match or task-based evals
- LLM-as-a-judge where appropriate
- regression tracking

### 6. Orchestration

- single workflow loops
- bounded planners
- specialist workflows
- multi-agent only when needed

### 7. Protocols and Interop

- MCP for agent-to-tool communication
- A2A for agent-to-agent communication across service boundaries

### 8. Observability

- traces
- prompt versions
- latency
- token and cost metrics
- failure analysis

### 9. Security and Safety

- prompt injection
- tool approvals
- data minimization
- auth, tenancy, secrets
- sandboxing for risky actions

### 10. Production Readiness

- deployment
- queues
- caching
- backpressure
- feature flags
- rollback paths

## Learning Order

### Weeks 1 to 2

- prompt contracts
- tool calling
- structured outputs
- provider abstraction

### Weeks 3 to 4

- retrieval and citations
- session state
- memory discipline

### Weeks 5 to 6

- orchestration
- MCP
- A2A fundamentals
- evals
- tracing
- guardrails

### Weeks 7 to 8

- auth and tenancy
- sandboxing
- deployment
- optimization

## RAG Architecture Ladder

### 1. Basic Vector RAG

- embed chunks
- retrieve nearest chunks
- ground answers with citations

### 2. Production RAG

- hybrid retrieval
- reranking
- metadata filters
- freshness controls
- document versioning

### 3. Secure Multitenant RAG

- tenant filters
- document ACL inheritance
- isolated ingestion paths
- auditability

### 4. Agentic Retrieval

- query planning
- multi-query retrieval
- specialized retrieval tools
- structured retrieval outputs for workflows

Use the ladder in order. Do not jump to agentic retrieval on top of weak basic retrieval.

## Memory Architecture Ladder

- message history
- summary memory
- user or project profile memory
- retrievable knowledge artifacts
- explicit memory write policies

Separate:

- conversation state
- knowledge base
- user profile
- traces and evaluations

## Agent Architecture Ladder

- single prompt
- single workflow with tools
- bounded planner/executor
- specialist workflows
- remote agents with A2A

Multi-agent is late-stage complexity, not the starting point.

## Production AI Architecture Blueprint

A serious AI product usually has these layers:

- ingress layer
- orchestration layer
- knowledge layer
- state layer
- safety layer
- observability layer
- operations layer

That means:

- API, auth, rate limits, streaming
- workflow engine, model routing, tool policies
- ingestion pipeline, vector index, search, reranking
- sessions, feedback, and memory metadata
- approvals, prompt-injection defense, tenant checks
- traces, evals, prompt versions, cost and latency
- queues, workers, CI/CD, deployment, rollback

## Industrial Patterns To Internalize

- vector DB is not the source of truth
- keep ingestion and query serving separate
- add evals before prompt tweaking
- add citations before memory tricks
- design for tenant isolation early in B2B products
- keep destructive actions behind approvals
- debug with traces, not anecdotes

## Current-Practice Guidance

These are the principles to internalize:

- Prefer simple, composable workflows before elaborate agent frameworks.
- Use one strong workflow to prove value before splitting work across many agents.
- Treat retrieval quality as an engineering problem, not a prompt problem.
- Add evals before trying to optimize prompts, models, or architecture.
- Keep write actions and sensitive tools behind approvals.
- Use MCP when you need clean tool boundaries.
- Use A2A only when agents are truly remote or owned by separate systems or teams.

## High-Signal Resources

### Core

- OpenAI practical guide: <https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf>
- OpenAI agents resources: <https://developers.openai.com/resources/>
- OpenAI Agents SDK: <https://developers.openai.com/api/docs/guides/agents-sdk>
- OpenAI agent safety: <https://developers.openai.com/api/docs/guides/agent-builder-safety>
- Anthropic: <https://www.anthropic.com/engineering/building-effective-agents>
- DeepLearning.AI Agentic AI: <https://learn.deeplearning.ai/courses/agentic-ai/information>

### Orchestration and Protocols

- LangGraph docs: <https://docs.langchain.com/langgraph>
- LiteLLM routing: <https://docs.litellm.ai/docs/routing>
- MCP specification: <https://modelcontextprotocol.io/specification/2025-06-18>
- A2A protocol: <https://a2a-protocol.org/latest/>
- Google ADK A2A intro: <https://google.github.io/adk-docs/a2a/intro/>

### Retrieval and Observability

- Qdrant docs: <https://qdrant.tech/documentation/>
- Qdrant hybrid search: <https://qdrant.tech/documentation/advanced-tutorials/reranking-hybrid-search/>
- Azure AI Search RAG overview: <https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview>
- Azure advanced RAG guide: <https://learn.microsoft.com/en-us/azure/developer/ai/advanced-retrieval-augmented-generation>
- Azure secure multitenant RAG: <https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/secure-multitenant-rag>
- Langfuse docs: <https://langfuse.com/docs>
- OpenAI evals: <https://platform.openai.com/docs/guides/evals>
- OpenAI evaluation best practices: <https://platform.openai.com/docs/guides/evaluation-best-practices>
- OpenAI trace grading: <https://platform.openai.com/docs/guides/trace-grading>
- LangSmith evaluation: <https://docs.langchain.com/langsmith/evaluation>

### Strong Supplemental Resources From Your Dump

- AI engineering interview questions: <https://github.com/amitshekhariitbhu/ai-engineering-interview-questions>
- Everything Claude Code: <https://github.com/affaan-m/everything-claude-code>
- Nir Diamant RAG techniques: <https://github.com/NirDiamant/RAG_Techniques>
- Nir Diamant GenAI agents: <https://github.com/NirDiamant/GenAI_Agents>
- Stanford CS25: <https://web.stanford.edu/class/cs25/>

## What To Prove

By the end of this thread, you should be able to explain and demonstrate:

- why a workflow was enough or why multi-agent was necessary
- how retrieval quality was measured
- how prompts changed and why
- how latency and cost are observed
- how risky actions are controlled
- what would fail first in production
