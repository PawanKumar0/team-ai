# Week 3 Execution Doc

This is the single working document for Week 3.

## 1. Start Here

Use this exact order on Day 1:

1. read this file fully
2. read the Week 3 section in [WEEKLY-HUB.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEKLY-HUB.md)
3. read the Week 3 section in [WEEKLY-RESOURCE-PACKS.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/WEEKLY-RESOURCE-PACKS.md)
4. read the Week 3 sections in the AI, system design, and staff weekly maps
5. do not start memory or orchestration work this week

## 2. Week Goal

Move from generic assistant behavior to grounded answers over your own knowledge with citations.

## 3. This Week Across Threads

### Main Thread

- build RAG v1
- add citations
- separate ingestion from query serving

### AI Engineering Thread

- learn:
  - embeddings
  - vector retrieval
  - hybrid search
  - reranking
  - retrieval evaluation

### System Design Thread

- practice:
  - job scheduler or notification system
  - RAG ingestion and retrieval platform

### Staff Engineering Thread

- produce:
  - retrieval design review
  - ADR for retrieval and indexing strategy

### Global Job Hunt Thread

- inactive

### AI Interview Bank Thread

- inactive

## 4. Resource Curriculum

### Resource 1: Qdrant Documentation

- read:
  - core docs
  - hybrid search and reranking tutorial
- extract:
  - vector index vs source of truth
  - why hybrid search often beats naive semantic-only retrieval
- apply to code:
  - choose retrieval components deliberately

### Resource 2: Azure RAG Guidance

- read:
  - RAG overview
  - advanced RAG
- extract:
  - chunking, freshness, metadata filters, ingestion architecture
- apply to code:
  - define chunking and indexing decisions explicitly

### Resource 3: Nir Diamant RAG Techniques

- read:
  - relevant notebooks or docs for production-style retrieval patterns
- extract:
  - practical retrieval tactics worth borrowing
- apply to code:
  - compare naive vector search against more structured retrieval

### Resource 4: AI Engineering From Scratch

- read or skim:
  - Phase 11 topics on embeddings, vector DBs, RAG, advanced RAG
- extract:
  - learn-build-ship framing for retrieval systems
- apply to code:
  - implement only the minimal production-worthy RAG slice

## 5. Existing Baseline

Expected starting point:

- useful assistant workflow exists
- request and response contracts are stable
- provider boundary exists

## 6. Learn Before Build

- `Embeddings -> ingestion pipeline -> convert source docs into searchable vectors`
- `Metadata filters -> retrieval layer -> bound search by source, type, freshness`
- `Hybrid search -> retrieval service -> improve recall over naive vector-only search`
- `Citations -> response schema + UI -> return grounded references`

## 7. Code Slice

Build one vertical increment:

- ingest selected docs or markdown into a retrieval index
- implement retrieval for assistant queries
- return citations in the response
- keep ingestion and online serving as separate concerns

User-visible outcome:

- the assistant answers with references to your own material
- responses are less generic

## 8. Staff Artifact

This week’s artifacts:

- retrieval design review
- ADR for retrieval and indexing strategy

Questions to answer:

- what is the source of truth?
- what belongs in the vector store?
- what metadata is required for safe retrieval?

## 9. System Design Drills

### General Drill

Design a job scheduler or notification service.

Focus:

- background workers
- retries
- delayed execution
- scalability

### AI Drill

Design a production RAG platform.

Focus:

- ingestion vs serving
- indexing strategy
- freshness
- tenant or source filters

## 10. Metrics Or Eval Slice

Measure:

- citation presence rate
- retrieval quality on a small labeled set
- obvious hallucination drop on grounded questions

## 11. Day-By-Day Plan

### Day 1

- read the RAG resource pack
- define corpus, chunking, and metadata plan

### Day 2

- implement ingestion path
- add indexing

### Day 3

- implement retrieval and citation return
- render citations in the UI

### Day 4

- create a small labeled retrieval set
- compare naive retrieval vs improved retrieval

### Day 5

- write the design review and ADR
- update tracker and weekly review

## 12. Week-End Updates

At minimum update:

- [threads/00-main-thread/TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- `/Users/pawan/Vizmo/team-ai/journal/week-3-review.md`

## 13. Acceptance Criteria

Week 3 is done only if:

- answers can include citations
- ingestion and query serving are clearly separated
- retrieval quality has at least a basic measurement
- the ADR explains why the chosen retrieval architecture exists
