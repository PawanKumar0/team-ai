# Week 7 Execution Doc

This is the single working document for Week 7.

## 1. Start Here

Use this exact order on Day 1:

1. read this file fully
2. read the Week 7 section in [WEEKLY-HUB.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEKLY-HUB.md)
3. read the Week 7 section in [WEEKLY-RESOURCE-PACKS.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/WEEKLY-RESOURCE-PACKS.md)
4. read the Week 7 sections in the AI, system design, staff, job-hunt, and interview weekly maps
5. treat this as product-hardening week, not feature-sprawl week

## 2. Week Goal

Make the system look like a product: auth, tenant boundaries, safer execution, and a deployment path.

## 3. This Week Across Threads

### Main Thread

- add authentication and tenant-aware boundaries
- add deployment and environment discipline
- add sandboxing if risky execution exists

### AI Engineering Thread

- learn:
  - authn and authz for AI systems
  - secure tool use
  - tenant-aware retrieval
  - sandboxing and deployment concerns

### System Design Thread

- practice:
  - billing flow or webhook consistency
  - secure agent execution platform

### Staff Engineering Thread

- produce:
  - launch checklist
  - go or no-go review

### Global Job Hunt Thread

- activate lightly:
  - shortlist companies and role buckets
  - draft narrative based on the project

### AI Interview Bank Thread

- active:
  - tenancy
  - sandboxing
  - secure execution

## 4. Resource Curriculum

### Resource 1: Azure Secure Multitenant RAG

- read:
  - tenant isolation and data access sections
- extract:
  - secure retrieval and data-boundary patterns
- apply to code:
  - enforce tenant-aware access rules

### Resource 2: Docker Security

- read:
  - engine security overview and isolation concepts
- extract:
  - what containerization solves and what it does not
- apply to code:
  - shape the deployment and sandboxing plan

### Resource 3: OpenAI Agent Safety

- read:
  - agent-builder safety guidance
- extract:
  - risky action boundaries
  - approval and safety checks
- apply to code:
  - keep dangerous capabilities gated

### Resource 4: AI Engineering From Scratch

- read or skim:
  - Phase 17 infrastructure and production
  - Phase 18 ethics, safety, alignment
- extract:
  - what turns a demo into a safer product

## 5. Existing Baseline

Expected starting point:

- system has functionality, measurement, and basic guardrails
- security and tenancy are still underdeveloped

## 6. Learn Before Build

- `Authentication -> app boundaries -> know who is calling the system`
- `Authorization -> tenant checks -> know what they are allowed to access`
- `Sandboxing -> risky tool execution -> contain dangerous actions`
- `Deployment discipline -> infra plan -> move beyond local-only assumptions`

## 7. Code Slice

Build one vertical increment:

- add authentication
- add tenant-aware access boundaries
- add sandboxing or safer execution patterns if needed
- prepare a deployment path and environment strategy

User-visible outcome:

- the system looks less like a prototype
- risky actions are more controlled
- data boundaries are clearer

## 8. Staff Artifact

This week’s artifacts:

- launch checklist
- go or no-go review

Questions to answer:

- what would block launch today?
- what is still too risky?
- what can be deferred safely?

## 9. System Design Drills

### General Drill

Design a billing flow or webhook consistency system.

Focus:

- retries
- correctness
- duplicate handling
- operational failure recovery

### AI Drill

Design a secure agent execution platform.

Focus:

- authn and authz
- tenant isolation
- risky tool control
- deployment boundary choices

## 10. Metrics Or Eval Slice

Measure:

- auth coverage across core flows
- tenant-isolation checks
- number of risky actions requiring approval
- deployment readiness checklist completion

## 11. Day-By-Day Plan

### Day 1

- read the security and deployment resource pack
- define auth and tenancy boundaries

### Day 2

- implement auth and request identity
- add tenant-aware checks

### Day 3

- add safer execution or sandboxing boundaries
- document secrets and environment strategy

### Day 4

- review security gaps and deployment blockers
- update the launch checklist

### Day 5

- write the go or no-go review
- do light job-hunt prep
- answer 2 interview-bank questions
- update tracker and weekly review

## 12. Week-End Updates

At minimum update:

- [threads/00-main-thread/TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
- `/Users/pawan/Vizmo/team-ai/journal/week-7-review.md`

## 13. Acceptance Criteria

Week 7 is done only if:

- auth exists
- tenant boundaries are explicit
- risky execution is gated
- the launch checklist and go/no-go review are honest and usable
