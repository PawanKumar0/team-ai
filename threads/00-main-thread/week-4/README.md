# Week 4 Execution Doc

This is the single working document for Week 4.

## 1. Start Here

Use this exact order on Day 1:

1. read this file fully
2. read the Week 4 section in [WEEKLY-HUB.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEKLY-HUB.md)
3. read the Week 4 section in [WEEKLY-RESOURCE-PACKS.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/WEEKLY-RESOURCE-PACKS.md)
4. read the Week 4 sections in the AI, system design, and staff weekly maps
5. do not add vague memory magic; keep every memory write path explicit

## 2. Week Goal

Add session state and bounded memory without turning the system into an opaque black box.

## 3. This Week Across Threads

### Main Thread

- add session state
- define memory boundaries
- keep context bounded and auditable

### AI Engineering Thread

- learn:
  - short-term vs long-term memory
  - summarization
  - context compression
  - memory write rules

### System Design Thread

- practice:
  - auth service or cache service
  - memory and session architecture

### Staff Engineering Thread

- produce:
  - memory architecture note

### Global Job Hunt Thread

- inactive

### AI Interview Bank Thread

- inactive

## 4. Resource Curriculum

### Resource 1: Azure Secure Multitenant RAG

- read:
  - sections on tenant isolation, secure data access, and retrieval boundaries
- extract:
  - memory is not a free-form dump
  - access boundaries matter even before full multitenancy
- apply to code:
  - keep memory scoped and explicit

### Resource 2: OpenAI Evaluation Best Practices

- read:
  - sections on failure definition and measurement
- extract:
  - what good memory behavior should be measured against
- apply to code:
  - create checks for memory correctness, not just persistence

### Resource 3: LangGraph Docs

- read:
  - persistence and workflow-state concepts
- extract:
  - how to think about workflow state without coupling everything together
- apply to code:
  - design session and state persistence sanely

### Resource 4: AI Engineering From Scratch

- read or skim:
  - Phase 14 topics on memory and context management
- extract:
  - short-term vs long-term memory patterns
- apply to code:
  - add only the memory that the product actually needs

## 5. Existing Baseline

Expected starting point:

- assistant workflow exists
- RAG or grounded response path may exist
- response contract is stable enough to evolve

## 6. Learn Before Build

- `Session state -> application storage -> preserve current conversation context`
- `Summary memory -> bounded context handling -> keep long threads usable`
- `Knowledge memory -> retrieval system -> keep long-term knowledge separate from chat state`
- `Memory write rules -> API layer -> make persistence intentional`

## 7. Code Slice

Build one vertical increment:

- add session storage
- define short-term and long-term memory boundaries
- add conversation summary or compression if needed
- ensure retrieval and memory do not collapse into the same bucket

User-visible outcome:

- repeated sessions behave more coherently
- the system does not lose context immediately
- memory remains explainable

## 8. Staff Artifact

This week’s artifact:

- memory architecture note

Questions to answer:

- what gets remembered?
- what never gets remembered?
- what is stored as state vs retrieved as knowledge?

## 9. System Design Drills

### General Drill

Design an auth service or cache service.

Focus:

- state
- expiration
- correctness
- concurrency

### AI Drill

Design memory architecture for an AI assistant.

Focus:

- session state
- long-term knowledge
- retention
- recovery

## 10. Metrics Or Eval Slice

Measure:

- repeat-session coherence on a small seed set
- summary correctness on long conversations
- memory-related failure cases

## 11. Day-By-Day Plan

### Day 1

- read the memory resource pack
- define memory categories and storage boundaries

### Day 2

- implement session state
- design storage tables or structures

### Day 3

- add summary or compaction behavior
- keep write rules explicit

### Day 4

- test repeat-session behavior manually
- record failure modes

### Day 5

- write the memory architecture note
- update tracker and weekly review

## 12. Week-End Updates

At minimum update:

- [threads/00-main-thread/TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- `/Users/pawan/Vizmo/team-ai/journal/week-4-review.md`

## 13. Acceptance Criteria

Week 4 is done only if:

- session state exists
- memory boundaries are explicit
- repeat-session behavior is demonstrably better
- the memory note explains what is stored and why
