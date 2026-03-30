# Week 5 Execution Doc

This is the single working document for Week 5.

## 1. Start Here

Use this exact order on Day 1:

1. read this file fully
2. read the Week 5 section in [WEEKLY-HUB.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEKLY-HUB.md)
3. read the Week 5 section in [WEEKLY-RESOURCE-PACKS.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/WEEKLY-RESOURCE-PACKS.md)
4. read the Week 5 sections in the AI, system design, and staff weekly maps
5. only add orchestration that creates measurable value

## 2. Week Goal

Add bounded orchestration and tool boundaries without defaulting into unnecessary multi-agent complexity.

## 3. This Week Across Threads

### Main Thread

- implement one multi-step workflow
- decide whether specialist roles are justified
- introduce MCP or tool-boundary thinking

### AI Engineering Thread

- learn:
  - planner or executor patterns
  - MCP
  - A2A basics
  - selective multi-agent design

### System Design Thread

- practice:
  - pub-sub or config manager
  - orchestration layer and agent or tool contracts

### Staff Engineering Thread

- produce:
  - RFC on multi-agent justification

### Global Job Hunt Thread

- inactive

### AI Interview Bank Thread

- still optional only

## 4. Resource Curriculum

### Resource 1: MCP Specification

- read:
  - concepts, tool contract, server or client boundaries
- extract:
  - when a tool boundary should be explicit and standardized
- apply to code:
  - expose one internal tool or tool-like boundary cleanly

### Resource 2: A2A Protocol

- read:
  - protocol overview and interaction model
- extract:
  - when remote agent communication is worth the complexity
- apply to code:
  - most likely not immediately; use as a design reference

### Resource 3: Google ADK A2A Intro

- read:
  - introduction and mental model
- extract:
  - how A2A differs from local workflow composition
- apply to code:
  - strengthen the RFC, not necessarily the implementation

### Resource 4: Anthropic Building Effective Agents

- reread:
  - orchestrator-workers
  - agents
  - simplicity guidance
- extract:
  - what must be proven before agent splits are justified

### Resource 5: AI Engineering From Scratch

- read or skim:
  - Phases 13, 14, and 16
- extract:
  - tools and protocols
  - agent engineering
  - why multi-agent exists and when not to use it

## 5. Existing Baseline

Expected starting point:

- useful assistant exists
- retrieval and memory foundations may exist
- the repo has enough behavior to justify controlled orchestration

## 6. Learn Before Build

- `Tool boundary -> MCP concepts -> explicit inputs and outputs for tools`
- `Workflow orchestration -> API workflow layer -> multi-step execution with checkpoints`
- `Remote agent boundary -> RFC, not code by default -> justify A2A before building it`

## 7. Code Slice

Build one vertical increment:

- add one bounded multi-step workflow
- optionally add one specialist role only if it measurably improves output
- expose one clean tool boundary
- keep approval or human review in mind for risky actions

User-visible outcome:

- the assistant can perform a small multi-step task more reliably
- the system architecture becomes more deliberate, not more chaotic

## 8. Staff Artifact

This week’s artifact:

- RFC on when multi-agent is warranted for Team AI

Questions to answer:

- why is one workflow not enough here?
- what extra complexity is being bought?
- what is the rollback plan if orchestration is not worth it?

## 9. System Design Drills

### General Drill

Design a pub-sub system or config manager.

Focus:

- queues
- delivery semantics
- ownership
- change propagation

### AI Drill

Design orchestration for an AI system.

Focus:

- workflow durability
- handoffs
- tool interfaces
- approval boundaries

## 10. Metrics Or Eval Slice

Measure:

- multi-step workflow success rate
- extra latency introduced by orchestration
- whether the specialist or workflow actually improves outcomes

## 11. Day-By-Day Plan

### Day 1

- read the orchestration resource pack
- decide the one workflow to introduce

### Day 2

- implement the workflow skeleton
- define tool boundaries

### Day 3

- add the specialist role only if justified
- keep the path observable

### Day 4

- compare single-step vs orchestrated behavior
- write down trade-offs

### Day 5

- write the RFC
- update tracker and weekly review

## 12. Week-End Updates

At minimum update:

- [threads/00-main-thread/TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- `/Users/pawan/Vizmo/team-ai/journal/week-5-review.md`

## 13. Acceptance Criteria

Week 5 is done only if:

- one bounded orchestration flow exists
- tool boundaries are explicit
- multi-agent complexity is justified or explicitly rejected
- the RFC explains the decision clearly
