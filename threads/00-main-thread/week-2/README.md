# Week 2 Execution Doc

This is the single working document for Week 2.

## 1. Start Here

Use this exact order on Day 1:

1. read this file fully
2. read the Week 2 section in [WEEKLY-HUB.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEKLY-HUB.md)
3. read the Week 2 section in [WEEKLY-RESOURCE-PACKS.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/WEEKLY-RESOURCE-PACKS.md)
4. read the Week 2 sections in:
   - [threads/01-ai-engineering/WEEKS.md](/Users/pawan/Vizmo/team-ai/threads/01-ai-engineering/WEEKS.md)
   - [threads/02-system-design/WEEKS.md](/Users/pawan/Vizmo/team-ai/threads/02-system-design/WEEKS.md)
   - [threads/03-staff-engineering/WEEKS.md](/Users/pawan/Vizmo/team-ai/threads/03-staff-engineering/WEEKS.md)
5. study only the resource pack for this week
6. start the code slice only after the Week 1 contract path is stable

## 2. Week Goal

Turn the thin stubbed assistant path into the first useful assistant workflow with a provider boundary and eval baseline.

## 3. This Week Across Threads

### Main Thread

- build the first useful assistant behavior
- add a provider abstraction boundary
- establish the first evaluation seed set

### AI Engineering Thread

- learn:
  - provider abstraction
  - tool calling basics
  - output validation
  - eval design v0

### System Design Thread

- practice:
  - reliable webhook dispatcher or routing layer
  - model routing layer for an AI application

### Staff Engineering Thread

- produce:
  - ADR for provider abstraction and request flow

### Global Job Hunt Thread

- inactive

### AI Interview Bank Thread

- inactive unless you finish early

## 4. Resource Curriculum

### Resource 1: LiteLLM Routing

- read:
  - routing overview
  - fallbacks
  - model selection concepts
- extract:
  - why the app should depend on an internal provider interface, not a hard-coded vendor call
- apply to code:
  - create a provider or gateway boundary in `src/api`

### Resource 2: OpenAI Evals

- read:
  - evals guide
  - evaluation best practices
- extract:
  - how to design a tiny seed set before optimizing prompts or models
- apply to code:
  - add a small manual evaluation dataset and record pass or fail

### Resource 3: OpenAI Agents SDK Resources

- read:
  - the resources hub
  - the Agents SDK guide for structure, not for immediate full adoption
- extract:
  - what an execution loop standardizes
  - what is still overkill for Week 2
- apply to code:
  - keep the flow simple, but make the interface future-safe

### Resource 4: AI Engineering From Scratch

- read or skim:
  - Phase 11 sections on prompt engineering, structured outputs, function calling, evaluation
- extract:
  - how to tighten prompt contracts and evaluate behavior without overbuilding
- apply to code:
  - upgrade the assistant from static stub to useful constrained behavior

## 5. Existing Baseline

Expected starting point:

- Week 1 assistant contract exists
- UI can send one typed request
- API can return one typed response
- product brief and architecture v1 already exist

## 6. Learn Before Build

- `Provider abstraction -> src/api -> internal interface for model calls`
- `Prompt contract discipline -> src/api -> one explicit system/task contract`
- `Output validation -> src/packages/types + src/api -> schema-validated responses`
- `Eval basics -> journal or docs -> 5 to 10 seed prompts with expected behavior`

## 7. Code Slice

Build one vertical increment:

- replace the stub-only behavior with a useful assistant workflow
- add a provider abstraction boundary in `src/api`
- support one safe tool or capability, such as planning or scoped Q&A
- record a tiny manual evaluation set

User-visible outcome:

- the assistant does something reliably useful
- model behavior is not completely opaque
- prompt or model changes can be compared against a small baseline

## 8. Staff Artifact

This week’s artifact:

- ADR for provider abstraction and request flow

Questions to answer:

- what boundary is worth standardizing now?
- what should stay swappable later?
- what is intentionally still hard-coded?

## 9. System Design Drills

### General Drill

Design a reliable webhook dispatcher.

Focus:

- retries
- backoff
- idempotency
- dead-letter strategy

### AI Drill

Design a model routing layer for an AI product.

Focus:

- model selection
- cost vs latency trade-offs
- fallbacks
- rate limiting

## 10. Metrics Or Eval Slice

Measure:

- success rate on 5 to 10 seed prompts
- invalid response count
- rough latency and cost notes

## 11. Day-By-Day Plan

### Day 1

- read the Week 2 resource pack
- define the provider boundary and the single assistant workflow

### Day 2

- implement provider abstraction in `src/api`
- wire the useful assistant path

### Day 3

- add one safe tool or constrained workflow behavior
- validate outputs against shared schemas

### Day 4

- create the eval seed set
- record pass or fail for each prompt

### Day 5

- write the ADR
- update tracker and weekly review

## 12. Week-End Updates

At minimum update:

- [threads/00-main-thread/TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- `/Users/pawan/Vizmo/team-ai/journal/week-2-review.md`

## 13. Acceptance Criteria

Week 2 is done only if:

- one useful assistant workflow exists
- provider abstraction exists in a real boundary
- a tiny eval seed set exists
- the ADR explains the request flow clearly
