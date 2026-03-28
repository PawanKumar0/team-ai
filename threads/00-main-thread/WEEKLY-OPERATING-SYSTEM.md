# Weekly Operating System

This is the repeatable pattern for every week in the roadmap.

Use it with:

- [WEEK-BY-WEEK.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEK-BY-WEEK.md)
- [TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- [WEEK-SPECIFIC-TEMPLATE.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEK-SPECIFIC-TEMPLATE.md)

## Every Week Has 8 Parts

### 1. Week Plan

Read the current week and decide the one milestone that matters most.

### 2. Code Slice

Build one small end-to-end product increment.

A code slice is not random coding.
It is one vertical piece of product behavior.

### 3. Staff Artifact

Write one artifact that proves architectural thinking:

- product brief
- architecture note
- ADR
- RFC
- risk register
- postmortem

### 4. AI Learning Slice

Choose one AI engineering topic and learn it through implementation.

### 5. System Design Drills

Do two design drills:

- one general backend or distributed-systems question
- one AI system design question

### 6. Metrics or Eval Slice

Measure something important every week:

- latency
- cost
- retrieval quality
- success rate
- failure modes

### 7. Tracking Updates

Update:

- [TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- daily logs in [journal](/Users/pawan/Vizmo/team-ai/journal/README.md)
- design or experiment notes when needed

### 8. End-Of-Week Review

At the end of the week:

- demo what changed
- write the weekly review
- record blockers
- decide whether the week is actually done

## Weekly Formula

Every week should produce:

- 1 code slice
- 1 staff artifact
- 1 AI learning slice
- 2 system design drills
- 1 metrics or eval update
- daily logs
- 1 weekly review

## How To Move Between Weeks

Do not move to the next week because time passed.
Move only when the current week's exit criteria are satisfied.

## Good Weekly Cadence

### Day 1

- clarify the milestone
- write or update the artifact
- start the code slice

### Day 2

- keep building the code slice

### Day 3

- complete the core path
- add tests or eval seeds

### Day 4

- do the system design drills
- review architecture trade-offs

### Day 5

- clean up
- document
- measure
- review

## Where Each Part Lives

- week plan: `threads/00-main-thread/`
- code slice: `src/`
- staff artifact: `threads/00-main-thread/` or `journal/`
- AI learning slice: `threads/01-ai-engineering/`
- system design drills: `threads/02-system-design/` and `threads/06-ai-interview-bank/`
- metrics and evals: `journal/` plus future product metrics pages
- tracking: `TRACKER.md` and daily logs
- review: weekly review template in `journal/templates/weekly-review.md`

## Creating A New Weekly Doc

Whenever a new `week-N/README.md` is created, start from:

- [WEEK-SPECIFIC-TEMPLATE.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEK-SPECIFIC-TEMPLATE.md)

That keeps every week aligned to the same 8-part operating model.
