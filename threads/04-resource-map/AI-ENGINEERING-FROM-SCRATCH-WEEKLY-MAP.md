# AI Engineering From Scratch Weekly Map

This file decomposes `ai-engineering-from-scratch` into the 8-week Team AI roadmap.

Use this as a topic map, not as a second full-time curriculum.
The goal is:

- pull the right lessons into the right week
- avoid reading that repo linearly
- connect each lesson to the thing you are building now

Source repo:

- [ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)
- [ROADMAP.md](https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/ROADMAP.md)

## Week 1

### Take These Lessons

- Phase 11 Lesson 01: Prompt Engineering
- Phase 11 Lesson 03: Structured Outputs
- Phase 13 Lesson 07: Structured Output Schemas
- Phase 13 Lesson 08: API Design for AI
- Phase 14 Lesson 01: The Agent Loop

### Why These Lessons

- Week 1 is about understanding workflow shape, contracts, and product boundaries
- you need the idea of an agent loop without actually building a full agent yet

### Apply To Team AI

- shared schemas in `src/packages/types`
- one typed assistant path in `src/api`
- one typed rendering path in `src/web`

## Week 2

### Take These Lessons

- Phase 11 Lesson 02: Few-Shot, Chain-of-Thought, Tree-of-Thought
- Phase 11 Lesson 09: Function Calling & Tool Use
- Phase 11 Lesson 10: Evaluation & Testing LLM Applications
- Phase 11 Lesson 11: Caching, Rate Limiting & Cost Optimization
- Phase 13 Lesson 01: Function Calling Deep Dive
- Phase 13 Lesson 02: Tool Use Patterns

### Why These Lessons

- Week 2 is where the assistant becomes actually useful
- this is the right time to add provider boundaries, constrained tool use, and baseline evals

### Apply To Team AI

- useful assistant workflow in `src/api`
- safe tool boundary
- tiny eval seed set

## Week 3

### Take These Lessons

- Phase 11 Lesson 04: Embeddings & Vector Representations
- Phase 11 Lesson 05: Vector Databases
- Phase 11 Lesson 06: RAG
- Phase 11 Lesson 07: Advanced RAG
- Phase 11 Lesson 13: Building a Production LLM Application

### Why These Lessons

- Week 3 is the retrieval week
- these lessons map directly to ingestion, indexing, retrieval, citations, and production RAG thinking

### Apply To Team AI

- ingestion pipeline
- retrieval path
- cited answers
- source-of-truth boundaries

## Week 4

### Take These Lessons

- Phase 14 Lesson 04: Memory
- Phase 14 Lesson 05: Context Window Management
- Phase 14 Lesson 06: Context Compression & Summarization
- Phase 14 Lesson 08: Skills & Knowledge Loading

### Why These Lessons

- Week 4 is about memory boundaries, not vague “AI remembers everything”
- these lessons map well to session state, summaries, and explicit memory policies

### Apply To Team AI

- session state
- summary memory
- bounded context
- explicit memory write rules

## Week 5

### Take These Lessons

- Phase 13 Lesson 03: MCP Fundamentals
- Phase 13 Lesson 04: Building MCP Servers
- Phase 13 Lesson 05: Building MCP Clients
- Phase 13 Lesson 06: MCP Resources, Prompts & Sampling
- Phase 14 Lesson 02: Tool Dispatch & Registration
- Phase 14 Lesson 03: Planning
- Phase 14 Lesson 07: Subagents
- Phase 16 Lesson 01: Why Multi-Agent
- Phase 16 Lesson 03: Communication Protocols
- Phase 16 Lesson 13: DAG-Based Orchestration

### Why These Lessons

- Week 5 is the orchestration week
- this is where you learn the difference between workflow, tool boundary, MCP, subagent, and multi-agent

### Apply To Team AI

- bounded orchestration
- one clean tool boundary
- explicit justification for or against specialist agents

## Week 6

### Take These Lessons

- Phase 11 Lesson 10: Evaluation & Testing LLM Applications
- Phase 11 Lesson 12: Guardrails, Safety & Content Filtering
- Phase 14 Lesson 12: Error Recovery & Self-Healing
- Phase 14 Lesson 14: Eval-Driven Agent Development
- Phase 17 Lesson 05: Observability
- Phase 18 Lesson 03: Red Teaming & Adversarial Testing

### Why These Lessons

- Week 6 is about measurement, quality, and guardrails
- these lessons cover the minimum operational discipline needed before trust increases

### Apply To Team AI

- traces
- eval harness
- risk controls
- failure taxonomy

## Week 7

### Take These Lessons

- Phase 14 Lesson 09: Permissions, Sandboxing & Safety
- Phase 17 Lesson 01: Model Serving
- Phase 17 Lesson 02: Docker for AI Workloads
- Phase 17 Lesson 06: Cost Optimization
- Phase 17 Lesson 07: CI/CD for ML
- Phase 17 Lesson 10: Security
- Phase 17 Lesson 11: Build a Production AI Platform
- Phase 18 Lesson 01: AI Ethics
- Phase 18 Lesson 02: Alignment
- Phase 18 Lesson 04: Responsible AI Frameworks

### Why These Lessons

- Week 7 is the hardening week
- these lessons map to auth, tenancy, deployment, sandboxing, and safer production operation

### Apply To Team AI

- auth and tenancy boundaries
- deployment path
- secure execution controls
- go/no-go launch thinking

## Week 8

### Take These Lessons

- Phase 17 Lesson 08: A/B Testing & Feature Flags for AI
- Phase 17 Lesson 11: Build a Production AI Platform
- Phase 19 Project 01: Build a Mini GPT & Chat Interface
- Phase 19 Project 02: Build a Multimodal RAG System
- Phase 19 Project 03: Build an Autonomous Research Agent
- Phase 19 Project 04: Build a Multi-Agent Development Team
- Phase 19 Project 05: Build a Production AI Platform

### Why These Lessons

- Week 8 is about packaging, portfolio framing, and explaining the final system
- the capstone section is useful for storytelling and case-study quality

### Apply To Team AI

- portfolio narrative
- demo framing
- architecture walkthrough
- production roadmap beyond the 8-week sprint
