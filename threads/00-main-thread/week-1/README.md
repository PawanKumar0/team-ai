# Week 1 Execution Doc

This file is populated using the reusable kickoff prompt and the 8-part weekly template.

## 1. Week Goal

Turn the existing health-check scaffold into the first real assistant slice while locking the product wedge and architecture for the rest of the roadmap.

## 2. Existing Baseline

Already working in the repo:

- [src/web/src/app/page.tsx](/Users/pawan/Vizmo/team-ai/src/web/src/app/page.tsx)
  - calls `/api/health`
- [src/api/src/index.ts](/Users/pawan/Vizmo/team-ai/src/api/src/index.ts)
  - serves `/health`
- [src/packages/types/src/index.ts](/Users/pawan/Vizmo/team-ai/src/packages/types/src/index.ts)
  - holds shared schemas

That means Week 1 should extend a live thin slice, not restart scaffolding.

## 3. Code Slice

Build one vertical product increment:

- add `AssistantRequest`, `AssistantResponse`, and `Citation` schemas in `src/packages/types`
- add a typed `/assist` endpoint in `src/api`
- replace or extend the current health-check page in `src/web` with a basic assistant form

User-visible outcome:

- a user can ask a question in the UI
- the API returns a structured assistant response
- the UI renders answer, plan-step placeholders, and citation placeholders

## 4. Staff Artifact

The staff artifacts for this week are:

- [PRODUCT-BRIEF.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/PRODUCT-BRIEF.md)
- [ARCHITECTURE-V1.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/ARCHITECTURE-V1.md)

Both should be treated as working documents and refined if the code slice changes the system shape.

## 5. AI Learning Slice

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

## 6. System Design Drills

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

## 7. Metrics Or Eval Slice

This week, measure the minimum useful signals:

- request path works end to end
- request/response contract validates successfully
- number of manual seed prompts handled without schema errors

Initial eval seed:

- create 5 to 10 representative engineering questions by Day 4

## 8. Day-By-Day Plan

### Day 1

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

## 9. Acceptance Criteria

Week 1 is done only if:

- the product wedge is explicit
- the architecture note matches the actual repo state
- the app supports a basic assistant request path beyond `/health`
- shared schemas define the assistant contract
- at least one review artifact exists for the week

## 10. Tracking Instructions

During the week, update:

- [threads/00-main-thread/TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- [journal/2026-03-28-daily.md](/Users/pawan/Vizmo/team-ai/journal/2026-03-28-daily.md) or a fresh dated daily file if needed

At week end, create:

- `/Users/pawan/Vizmo/team-ai/journal/2026-03-29-week-1-review.md`

Use these resources only for Week 1:

- OpenAI practical guide to building agents
- Anthropic building effective agents
- [src/MONOREPO.md](/Users/pawan/Vizmo/team-ai/src/MONOREPO.md)

Optional only if time remains:

- DeepLearning.AI Agentic AI intro
