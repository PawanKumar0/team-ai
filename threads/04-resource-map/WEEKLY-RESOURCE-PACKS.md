# Weekly Resource Packs

This is the week-by-week curriculum.

Use this file to avoid searching for what to read each week.

## How To Use

For each week:

- use the `Primary` pack first
- use the `Supplement` pack only if needed
- do not exceed 4 primary resources in a week

## Week 1: Product Wedge, Thin Slice, and Architecture Baseline

### Primary

- OpenAI practical guide to building agents
  - read sections: `What is an agent?`, `When should you build an agent?`, `Agent design foundations`, and the start of `Orchestration`
  - [PDF](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)
- Anthropic building effective agents
  - read sections: `What are agents?`, `When (and when not) to use agents`, `When and how to use frameworks`, `Building block: The augmented LLM`, `Workflow: Prompt chaining`, `Workflow: Routing`, `Single-agent systems`
  - [Article](https://www.anthropic.com/engineering/building-effective-agents)
- local repo technical guide
  - [src/MONOREPO.md](/Users/pawan/Vizmo/team-ai/src/MONOREPO.md)
- local product anchors
  - [threads/00-main-thread/PRODUCT-BRIEF.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/PRODUCT-BRIEF.md)
  - [threads/00-main-thread/ARCHITECTURE-V1.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/ARCHITECTURE-V1.md)

### Supplement

- `ai-engineering-from-scratch`
  - use it as a structured supplement for hands-on progression
  - focus on:
    - Phase 11 Lesson 01 `Prompt Engineering`
    - Phase 11 Lesson 03 `Structured Outputs`
    - Phase 13 Lesson 07 `Structured Output Schemas`
    - Phase 13 Lesson 08 `API Design for AI`
    - Phase 14 Lesson 01 `The Agent Loop`
  - [Repo root](https://github.com/rohitg00/ai-engineering-from-scratch)
  - [Phase 11](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/11-llm-engineering)
  - [Phase 13](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/13-tools-and-protocols)
  - [Phase 14 lesson 01](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/14-agent-engineering/01-the-agent-loop)
  - Team AI weekly split:
    - [AI-ENGINEERING-FROM-SCRATCH-WEEKLY-MAP.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/AI-ENGINEERING-FROM-SCRATCH-WEEKLY-MAP.md)

### What To Extract

- when a simple workflow is enough
- what an agent actually is
- why tools, instructions, and model choice are the real starting primitives
- why the monorepo boundary matters before the product grows

## Week 2: Single-Agent Workflow, Provider Abstraction, and Evals v0

### Primary

- LiteLLM routing docs
  - [Routing](https://docs.litellm.ai/docs/routing)
- OpenAI evals
  - [Evals](https://platform.openai.com/docs/guides/evals)
  - [Evaluation best practices](https://platform.openai.com/docs/guides/evaluation-best-practices)
- OpenAI Agents SDK resources
  - [Resources hub](https://developers.openai.com/resources/)
  - [Agents SDK](https://developers.openai.com/api/docs/guides/agents-sdk)
- Anthropic article
  - revisit `Building block: The augmented LLM`, `Routing`, and `Evaluator-optimizer`
  - [Article](https://www.anthropic.com/engineering/building-effective-agents)

### Supplement

- `ai-engineering-from-scratch`
  - focus on Phase 11 topics:
    - Lesson 02 `Few-Shot, Chain-of-Thought, Tree-of-Thought`
    - Lesson 09 `Function Calling & Tool Use`
    - Lesson 10 `Evaluation & Testing LLM Applications`
    - Lesson 11 `Caching, Rate Limiting & Cost Optimization`
  - and Phase 13 topics:
    - Lesson 01 `Function Calling Deep Dive`
    - Lesson 02 `Tool Use Patterns`
  - [Phase 11](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/11-llm-engineering)
  - [Phase 13](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/13-tools-and-protocols)

### What To Extract

- how to standardize request and response contracts
- how to choose one workflow before adding orchestration
- how to measure a baseline before optimizing models

## Week 3: Vector RAG, Citations, and Retrieval Quality

### Primary

- Qdrant documentation
  - [Docs](https://qdrant.tech/documentation/)
  - [Hybrid search and reranking](https://qdrant.tech/documentation/advanced-tutorials/reranking-hybrid-search/)
- Azure RAG guidance
  - [RAG overview](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)
  - [Advanced RAG](https://learn.microsoft.com/en-us/azure/developer/ai/advanced-retrieval-augmented-generation)
- Nir Diamant RAG Techniques
  - [Repo](https://github.com/NirDiamant/RAG_Techniques)

### Supplement

- `ai-engineering-from-scratch`
  - focus on Phase 11 topics:
    - Lesson 04 `Embeddings & Vector Representations`
    - Lesson 05 `Vector Databases`
    - Lesson 06 `RAG`
    - Lesson 07 `Advanced RAG`
    - Lesson 13 `Building a Production LLM Application`
  - [Phase 11](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/11-llm-engineering)
- Stanford CS25
  - [Course](https://web.stanford.edu/class/cs25/)

### What To Extract

- why vector DBs are indexes, not source of truth
- how chunking affects downstream quality
- why hybrid retrieval and reranking matter in production

## Week 4: Memory, Session State, and Bounded Context

### Primary

- Azure secure multitenant RAG
  - [Guide](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/secure-multitenant-rag)
- OpenAI evaluation best practices
  - [Guide](https://platform.openai.com/docs/guides/evaluation-best-practices)
- LangGraph docs
  - use for persistence and workflow state orientation
  - [Docs](https://docs.langchain.com/langgraph)

### Supplement

- `ai-engineering-from-scratch`
  - focus on Phase 14 topics:
    - Lesson 04 `Memory`
    - Lesson 05 `Context Window Management`
    - Lesson 06 `Context Compression & Summarization`
    - Lesson 08 `Skills & Knowledge Loading`
  - [Phase 14](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/14-agent-engineering)

### What To Extract

- session state vs long-term knowledge
- when to summarize vs when to retrieve
- how to keep memory explicit and auditable

## Week 5: Workflow Orchestration, MCP, and Selective Multi-Agent

### Primary

- MCP specification
  - [Spec](https://modelcontextprotocol.io/specification/2025-06-18)
- A2A protocol
  - [A2A](https://a2a-protocol.org/latest/)
- Google ADK A2A intro
  - [Intro](https://google.github.io/adk-docs/a2a/intro/)
- Anthropic building effective agents
  - focus on `Orchestrator-workers`, `Agents`, and the simplicity guidance
  - [Article](https://www.anthropic.com/engineering/building-effective-agents)

### Supplement

- `ai-engineering-from-scratch`
  - Phase 13 lessons:
    - Lesson 03 `MCP Fundamentals`
    - Lesson 04 `Building MCP Servers`
    - Lesson 05 `Building MCP Clients`
    - Lesson 06 `MCP Resources, Prompts & Sampling`
  - Phase 14 lessons:
    - Lesson 02 `Tool Dispatch & Registration`
    - Lesson 03 `Planning`
    - Lesson 07 `Subagents`
  - Phase 16 lessons:
    - Lesson 01 `Why Multi-Agent`
    - Lesson 03 `Communication Protocols`
    - Lesson 13 `DAG-Based Orchestration`
  - [Phase 13](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/13-tools-and-protocols)
  - [Phase 14](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/14-agent-engineering)
  - [Phase 16 lesson 01](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/16-multi-agent-and-swarms/01-why-multi-agent)
  - [Phase 16 lesson 03](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/16-multi-agent-and-swarms/03-communication-protocols)

### What To Extract

- workflow vs agent vs multi-agent
- tool boundary vs remote-agent boundary
- when MCP helps and when A2A is justified

## Week 6: Evals, Observability, and Guardrails

### Primary

- Langfuse docs
  - [Docs](https://langfuse.com/docs)
- OpenAI evals stack
  - [Evals](https://platform.openai.com/docs/guides/evals)
  - [Trace grading](https://platform.openai.com/docs/guides/trace-grading)
  - [Evaluation best practices](https://platform.openai.com/docs/guides/evaluation-best-practices)
- Anthropic article appendix
  - focus on `Prompt engineering your tools`
  - [Article](https://www.anthropic.com/engineering/building-effective-agents)

### Supplement

- LangSmith evaluation docs
  - [Docs](https://docs.langchain.com/langsmith/evaluation)
- `ai-engineering-from-scratch`
  - Phase 11:
    - Lesson 10 `Evaluation & Testing LLM Applications`
    - Lesson 12 `Guardrails, Safety & Content Filtering`
  - Phase 14:
    - Lesson 12 `Error Recovery & Self-Healing`
    - Lesson 14 `Eval-Driven Agent Development`
  - Phase 17:
    - Lesson 05 `Observability`
  - Phase 18:
    - Lesson 03 `Red Teaming & Adversarial Testing`
  - [Phase 11](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/11-llm-engineering)
  - [Phase 14](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/14-agent-engineering)
  - [Phase 17](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/17-infrastructure-and-production)
  - [Phase 18](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/18-ethics-safety-alignment)

### What To Extract

- what to measure
- how to trace failures
- how to build guardrails around tools and actions

## Week 7: Auth, Tenancy, Sandboxing, and Deployment

### Primary

- Azure secure multitenant RAG
  - [Guide](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/secure-multitenant-rag)
- Docker security docs
  - [Docs](https://docs.docker.com/engine/security/)
- OpenAI agent safety
  - [Guide](https://developers.openai.com/api/docs/guides/agent-builder-safety)

### Supplement

- `ai-engineering-from-scratch`
  - Phase 14:
    - Lesson 09 `Permissions, Sandboxing & Safety`
  - Phase 17:
    - Lesson 01 `Model Serving`
    - Lesson 02 `Docker for AI Workloads`
    - Lesson 06 `Cost Optimization`
    - Lesson 07 `CI/CD for ML`
    - Lesson 10 `Security`
    - Lesson 11 `Build a Production AI Platform`
  - Phase 18:
    - Lesson 01 `AI Ethics`
    - Lesson 02 `Alignment`
    - Lesson 04 `Responsible AI Frameworks`
  - [Phase 17](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/17-infrastructure-and-production)
  - [Phase 18](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/18-ethics-safety-alignment)

### What To Extract

- tenant isolation
- secure retrieval boundaries
- sandboxing and deployment risk control

## Week 8: Launch, Portfolio, and Interview Proof

### Primary

- OpenAI interview guide
  - [Guide](https://openai.com/interview-guide/)
- Anthropic candidate AI guidance
  - [Guidance](https://www.anthropic.com/candidate-ai-guidance)
- OpenAI Academy career prep
  - [Career prep](https://academy.openai.com/en/public/videos/ai-career-prep-resumes-and-interviews-2025-03-20)

### Supplement

- `ai-engineering-from-scratch`
  - Phase 17:
    - Lesson 08 `A/B Testing & Feature Flags for AI`
    - Lesson 11 `Build a Production AI Platform`
  - Phase 19 projects:
    - Project 01 `Build a Mini GPT & Chat Interface`
    - Project 02 `Build a Multimodal RAG System`
    - Project 03 `Build an Autonomous Research Agent`
    - Project 04 `Build a Multi-Agent Development Team`
    - Project 05 `Build a Production AI Platform`
  - use the capstone framing and “learn-build-ship” structure as portfolio inspiration
  - [Phase 19](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/19-capstone-projects)

### What To Extract

- how to present the project
- how to convert the build into interview and job-hunt proof
