# Week Specific Template

Use this whenever you create a new `week-N/README.md`.

The main-thread weekly doc must be the single working document for that week.
The reader should not have to guess:

- what to learn
- what to build
- which resources to use
- which other threads matter this week
- where to record progress

Every week-specific doc should still contain the 8 planning parts, but it must also turn them into an execution guide.

## The 8 Required Parts

## 1. Week Goal

State the single most important outcome for the week.

## 2. Code Slice

Define the one end-to-end product increment for the week.

Include:

- what gets built
- where it lives in `src/`
- what the user-visible outcome is

## 3. Staff Artifact

State the one written artifact for the week.

Examples:

- product brief
- architecture note
- ADR
- RFC
- risk register
- postmortem

## 4. AI Learning Slice

State the one AI engineering topic to learn through implementation.

Include:

- what concept is being learned
- where it appears in the build
- what proof will show the learning happened

## 5. System Design Drills

Include:

- one general system design question
- one AI system design question

For each, note:

- scope
- key trade-offs
- where the written answer will live

## 6. Metrics Or Eval Slice

Define what gets measured this week.

Examples:

- latency
- success rate
- retrieval quality
- cost
- trace failures

## 7. Tracking Updates

State what must be updated during the week:

- tracker checkboxes
- daily or weekly log
- experiment cards if needed
- design notes if a major decision changes

## 8. End-Of-Week Review

Define what must exist before the week is considered done:

- demo or visible output
- weekly review
- blockers
- go or no-go for next week

## Required Structure

Each `week-N/README.md` should use this shape:

1. Start Here
2. Week Goal
3. This Week Across Threads
4. Resource Curriculum
5. Existing Baseline
6. Learn Before Build
7. Code Slice
8. Staff Artifact
9. System Design Drills
10. Metrics Or Eval Slice
11. Day-By-Day Plan
12. Week-End Updates
13. Acceptance Criteria

## What "Start Here" Must Contain

The `Start Here` section should tell the user exactly what to do on the first day:

- which file is the main source of truth
- which support thread files matter this week
- which 2 to 4 resources to read first
- what notes or artifacts to create before coding

## What "This Week Across Threads" Must Contain

Summarize all relevant threads for the week:

- main build thread
- AI engineering thread
- system design thread
- staff engineering thread
- job-hunt thread status
- interview bank thread status

## What "Resource Curriculum" Must Contain

For each resource, specify:

- exact sections or lessons
- why it matters this week
- what to extract
- how it connects to the code slice

## What "Learn Before Build" Must Contain

Map learning directly to implementation:

- concept
- code location
- expected output

Example:

- `Structured outputs -> src/packages/types -> shared request/response schemas`
- `Single-agent workflow -> src/api -> one typed endpoint with a simple execution path`

## Rule

If a future weekly doc is missing the 8 parts or is not self-contained enough to start the week from that file alone, it is incomplete.
