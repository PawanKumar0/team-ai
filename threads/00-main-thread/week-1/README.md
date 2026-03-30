# Week 1 Execution Doc

This is the single working document for Week 1.

If you are starting Week 1 today, begin here and do not search for extra material outside the links in this file unless you are blocked.

## 1. Start Here

Use this exact order on Day 1:

1. read this file fully
2. read [PRODUCT-BRIEF.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/PRODUCT-BRIEF.md)
3. read [ARCHITECTURE-V1.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/ARCHITECTURE-V1.md)
4. read the Week 1 section in [WEEKLY-RESOURCE-PACKS.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/WEEKLY-RESOURCE-PACKS.md)
5. read the Week 1 sections in:
   - [threads/01-ai-engineering/WEEKS.md](/Users/pawan/Vizmo/team-ai/threads/01-ai-engineering/WEEKS.md)
   - [threads/02-system-design/WEEKS.md](/Users/pawan/Vizmo/team-ai/threads/02-system-design/WEEKS.md)
   - [threads/03-staff-engineering/WEEKS.md](/Users/pawan/Vizmo/team-ai/threads/03-staff-engineering/WEEKS.md)
6. study only these external resources this week:
   - [OpenAI Practical Guide to Building Agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)
   - [Anthropic: Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)
   - [AI Engineering from Scratch](https://github.com/rohitg00/ai-engineering-from-scratch)
7. then start the code slice in `src/`

What you should finish before coding:

- clear understanding of the product wedge
- clear understanding of why Week 1 is a thin workflow, not RAG or multi-agent
- agreement on the shared request/response contract

## 2. Week Goal

Turn the existing health-check scaffold into the first real assistant slice while locking the product wedge and architecture for the rest of the roadmap.

## 3. This Week Across Threads

This is how Week 1 maps across the full roadmap.

### Main Thread

- build the first real assistant path from UI to API
- establish the product wedge
- prove the repo can ship thin vertical slices

### AI Engineering Thread

- learn:
  - workflows vs agents
  - shared schemas
  - structured outputs
  - thin execution paths
- source:
  - [threads/01-ai-engineering/WEEKS.md](/Users/pawan/Vizmo/team-ai/threads/01-ai-engineering/WEEKS.md)

### System Design Thread

- practice:
  - API gateway or request lifecycle
  - simple AI assistant platform design
- source:
  - [threads/02-system-design/WEEKS.md](/Users/pawan/Vizmo/team-ai/threads/02-system-design/WEEKS.md)

### Staff Engineering Thread

- produce:
  - product brief
  - architecture v1
- source:
  - [threads/03-staff-engineering/WEEKS.md](/Users/pawan/Vizmo/team-ai/threads/03-staff-engineering/WEEKS.md)

### Global Job Hunt Thread

- inactive this week
- do not spend time here yet

### AI Interview Bank Thread

- inactive this week
- optional only if you finish early

## 4. Resource Curriculum

These are the exact resources for Week 1.

### Resource 1: OpenAI Practical Guide To Building Agents

- read:
  - `What is an agent?`
  - `When should you build an agent?`
  - `Agent design foundations`
  - the opening of `Orchestration`
- why it matters:
  - it sets the boundary for this week
  - it explains why the system should start with a simple workflow
- extract:
  - when to use a workflow instead of an agent
  - why model, tools, and instructions are the core primitives
  - why orchestration is postponed until later weeks
- apply it to code:
  - keep the API path thin
  - avoid early multi-agent complexity
  - keep the contract explicit in shared types

### Resource 2: Anthropic Building Effective Agents

- read:
  - `What are agents?`
  - `When (and when not) to use agents`
  - `When and how to use frameworks`
  - `Building block: The augmented LLM`
  - `Workflow: Prompt chaining`
  - `Workflow: Routing`
  - `Single-agent systems`
- why it matters:
  - it gives a clean mental model for simple systems before complex systems
- extract:
  - workflow vs agent
  - prompt + tools + state as the base design
  - why routing and chaining come after a single valid path exists
- apply it to code:
  - design one request shape
  - design one response shape
  - keep one main execution path from UI to API

### Resource 3: AI Engineering From Scratch

- use only as a structured supplement this week
- read or skim:
  - [Phase 11: LLM Engineering](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/11-llm-engineering)
  - [Phase 13: Tools & Protocols](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/13-tools-and-protocols)
  - [Phase 14 lesson 01: The Agent Loop](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/14-agent-engineering/01-the-agent-loop)
- why it matters:
  - it gives a strong hands-on progression structure
  - it reinforces the build-first mindset
- extract:
  - how request, tool, and output boundaries are taught
  - how an agent loop differs from a simple request-response flow
- apply it to code:
  - keep this repo on the simple side in Week 1
  - delay a true agent loop until the product has a useful baseline

### Local Technical Guide

- read:
  - [src/MONOREPO.md](/Users/pawan/Vizmo/team-ai/src/MONOREPO.md)
- why it matters:
  - it tells you where the Week 1 code should live
- extract:
  - what belongs in `src/packages/types`
  - what belongs in `src/api`
  - what belongs in `src/web`

## 5. Existing Baseline

Already working in the repo:

- [src/web/src/app/page.tsx](/Users/pawan/Vizmo/team-ai/src/web/src/app/page.tsx)
  - calls `/api/health`
- [src/api/src/index.ts](/Users/pawan/Vizmo/team-ai/src/api/src/index.ts)
  - serves `/health`
- [src/packages/types/src/index.ts](/Users/pawan/Vizmo/team-ai/src/packages/types/src/index.ts)
  - holds shared schemas

That means Week 1 should extend a live thin slice, not restart scaffolding.

## 6. Learn Before Build

This is the teaching-to-code map for Week 1.

| Concept | Learn From | Apply In Code | Expected Output |
| --- | --- | --- | --- |
| Workflow vs agent | OpenAI guide, Anthropic article | `src/api/src/index.ts` | one thin endpoint, no orchestration layer yet |
| Structured outputs | Anthropic article, Phase 11 supplement | `src/packages/types/src/index.ts` | shared request/response schemas |
| Tool and contract boundaries | OpenAI guide, Phase 13 supplement | `src/api` and `src/web` | typed input and typed rendering path |
| Product wedge clarity | product brief and architecture note | `threads/00-main-thread/*.md` and UI copy | product language stays consistent |
| Monorepo boundaries | [src/MONOREPO.md](/Users/pawan/Vizmo/team-ai/src/MONOREPO.md) | `src/packages/types`, `src/api`, `src/web` | no misplaced logic across apps/packages |

If you finish the reading but cannot explain these five rows in your own words, do not move to coding yet.

## 7. Code Slice

Build one vertical product increment:

- add `AssistantRequest`, `AssistantResponse`, and `Citation` schemas in `src/packages/types`
- add a typed `/assist` endpoint in `src/api`
- replace or extend the current health-check page in `src/web` with a basic assistant form

User-visible outcome:

- a user can ask a question in the UI
- the API returns a structured assistant response
- the UI renders answer, plan-step placeholders, and citation placeholders

Implementation order:

1. update shared schemas in [src/packages/types/src/index.ts](/Users/pawan/Vizmo/team-ai/src/packages/types/src/index.ts)
2. consume those schemas in [src/api/src/index.ts](/Users/pawan/Vizmo/team-ai/src/api/src/index.ts)
3. render the typed path in [src/web/src/app/page.tsx](/Users/pawan/Vizmo/team-ai/src/web/src/app/page.tsx)
4. keep all runtime copy product-neutral, not week-specific

Teaching notes for this code slice:

- `src/packages/types` teaches contract-first design
- `src/api` teaches workflow shape and boundary control
- `src/web` teaches what the product actually exposes to a user

## 8. Staff Artifact

The staff artifacts for this week are:

- [PRODUCT-BRIEF.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/PRODUCT-BRIEF.md)
- [ARCHITECTURE-V1.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/ARCHITECTURE-V1.md)

Both should be treated as working documents and refined if the code slice changes the system shape.

What to refine while you build:

- tighten the problem statement if the UI and API feel too generic
- keep non-goals explicit
- record why you are not adding retrieval, memory, or agents yet

## 9. AI Learning Slice

This week’s learning focus:

- structured outputs
- typed request and response contracts
- one thin assistant workflow

Where it appears:

- shared Zod schemas
- typed API route
- typed UI rendering path

Proof that the learning happened:

- a schema-driven assistant contract exists
- the API and UI use the same shared types
- the team can explain why one simple workflow is enough for Week 1

## 10. System Design Drills

### General Drill

Design an API gateway for a small internal product.

Scope:

- request validation
- routing
- error handling
- future auth and rate limits

Key trade-offs:

- thin gateway vs smart gateway
- sync-only responses vs streaming later

Where to record it:

- add a short written answer to the weekly review at the end of the week

### AI Drill

Design a basic LLM assistant platform for an internal engineering copilot.

Scope:

- UI
- API
- orchestration stub
- shared response schema
- future retrieval path

Key trade-offs:

- one workflow vs early multi-agent
- direct model call vs provider abstraction

Where to record it:

- refine [ARCHITECTURE-V1.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/ARCHITECTURE-V1.md) with any new trade-off notes

## 11. Metrics Or Eval Slice

This week, measure the minimum useful signals:

- request path works end to end
- request/response contract validates successfully
- number of manual seed prompts handled without schema errors

Initial eval seed:

- create 5 to 10 representative engineering questions by Day 4

What to write down when you measure:

- which prompts validated cleanly
- which response fields were missing or awkward
- which parts of the contract felt premature

## 12. Day-By-Day Plan

### Day 1

- read the `Start Here` and `Resource Curriculum` sections in this file
- review [PRODUCT-BRIEF.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/PRODUCT-BRIEF.md)
- review [ARCHITECTURE-V1.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/ARCHITECTURE-V1.md)
- define `AssistantRequest`, `AssistantResponse`, and `Citation`
- decide the initial assistant mode: Q&A, planning, or both

### Day 2

- add `/assist` endpoint in `src/api`
- return a stubbed typed response
- add basic request validation and error shape

### Day 3

- build the assistant input in `src/web`
- call `/api/assist`
- render structured response fields in the UI

### Day 4

- add simple logging or trace IDs
- create 5 to 10 seed prompts
- run manual checks on the full path

### Day 5

- clean up docs
- update [TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- write the weekly review
- decide whether Week 2 can begin

## 13. Week-End Updates

If you do not want daily logs, at minimum update these at the end of the week:

- [threads/00-main-thread/TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- `/Users/pawan/Vizmo/team-ai/journal/2026-03-30-week-1-review.md`

The weekly review should answer:

- what did I read?
- what did I build?
- what did I understand better?
- what is still unclear?
- can I honestly start Week 2?

## 14. Acceptance Criteria

Week 1 is done only if:

- the product wedge is explicit
- the architecture note matches the actual repo state
- the app supports a basic assistant request path beyond `/health`
- shared schemas define the assistant contract
- at least one review artifact exists for the week

## 15. Tracking Instructions

During the week, update:

- [threads/00-main-thread/TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- [journal/2026-03-28-daily.md](/Users/pawan/Vizmo/team-ai/journal/2026-03-28-daily.md) or a fresh dated daily file if needed

At week end, create:

- `/Users/pawan/Vizmo/team-ai/journal/2026-03-30-week-1-review.md`
