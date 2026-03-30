# Week 6 Execution Doc

This is the single working document for Week 6.

## 1. Start Here

Use this exact order on Day 1:

1. read this file fully
2. read the Week 6 section in [WEEKLY-HUB.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEKLY-HUB.md)
3. read the Week 6 section in [WEEKLY-RESOURCE-PACKS.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/WEEKLY-RESOURCE-PACKS.md)
4. read the Week 6 sections in the AI, system design, staff, and interview weekly maps
5. treat observability and evals as product requirements, not polish

## 2. Week Goal

Make the system measurable: trace it, evaluate it, and add guardrails around risky behavior.

## 3. This Week Across Threads

### Main Thread

- add tracing
- add evals
- add guardrails
- expose quality and cost signals

### AI Engineering Thread

- learn:
  - offline vs online evals
  - trace grading
  - prompt versioning
  - safety and tool guardrails

### System Design Thread

- practice:
  - observability platform or rate limiter
  - evaluation and tracing platform

### Staff Engineering Thread

- produce:
  - risk register
  - operational review

### Global Job Hunt Thread

- still inactive

### AI Interview Bank Thread

- activate lightly:
  - 2 architecture questions this week

## 4. Resource Curriculum

### Resource 1: Langfuse

- read:
  - tracing, scores, sessions, evaluation basics
- extract:
  - what a useful trace should capture in an AI app
- apply to code:
  - add request, retrieval, tool, and output tracing

### Resource 2: OpenAI Evals And Trace Grading

- read:
  - evals
  - trace grading
  - evaluation best practices
- extract:
  - what to evaluate offline
  - what to monitor online
  - how to use graders without fooling yourself
- apply to code:
  - build a minimal eval loop and failure review path

### Resource 3: Anthropic Tool Guidance

- read:
  - tool prompting guidance from the agent article
- extract:
  - how to keep tool behavior explicit and safe
- apply to code:
  - strengthen tool instructions and guardrails

### Resource 4: AI Engineering From Scratch

- read or skim:
  - Phase 11 evaluation and testing
  - Phase 14 eval-driven agent development
  - Phase 17 observability
  - Phase 18 red teaming
- extract:
  - how to close the loop between build, measure, and improve

## 5. Existing Baseline

Expected starting point:

- assistant has meaningful behavior
- retrieval or memory may exist
- workflows may exist
- failure modes are still too invisible

## 6. Learn Before Build

- `Tracing -> observability layer -> understand why outputs happened`
- `Offline evals -> eval dataset -> catch regressions`
- `Online quality signals -> runtime metrics -> see field failures`
- `Guardrails -> API and tool boundaries -> prevent unsafe actions`

## 7. Code Slice

Build one vertical increment:

- trace request, retrieval, tool, and answer stages
- create an offline eval set and scoring pass
- add prompt-injection and risky-action guardrails
- expose a minimal quality and cost view

User-visible outcome:

- the system is inspectable
- failures are easier to understand
- dangerous behavior is more controlled

## 8. Staff Artifact

This week’s artifacts:

- risk register
- operational review

Questions to answer:

- where does the system fail?
- what must be monitored before trust increases?
- which risks are acceptable vs blocking?

## 9. System Design Drills

### General Drill

Design an observability platform or rate limiter.

Focus:

- dashboards
- sampling
- alerting
- cardinality and scale

### AI Drill

Design an evaluation and tracing platform for an AI assistant.

Focus:

- offline vs online signals
- trace schema
- regression gates
- failure taxonomy

## 10. Metrics Or Eval Slice

Measure:

- offline eval score
- trace coverage
- cost per request
- top failure categories

## 11. Day-By-Day Plan

### Day 1

- read the eval and observability pack
- define what the trace and eval schema must capture

### Day 2

- instrument traces
- record key spans and metadata

### Day 3

- add the offline eval set and scoring loop
- add guardrails for risky actions

### Day 4

- review failures and cost
- tighten prompts or policies based on evidence

### Day 5

- write the risk register and operational review
- answer 2 interview-bank questions
- update tracker and weekly review

## 12. Week-End Updates

At minimum update:

- [threads/00-main-thread/TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- `/Users/pawan/Vizmo/team-ai/journal/week-6-review.md`

## 13. Acceptance Criteria

Week 6 is done only if:

- traces exist for the important stages
- offline evals can be run manually
- core guardrails exist
- the risk register explains the operational state honestly
