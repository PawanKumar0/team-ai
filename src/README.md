# Source Code Plan

This directory is the production code area for Team AI.

Do not treat `src/` as a playground.
Treat it as the system that should eventually power the product described in the roadmap.

## Current Starting Point

The repo already has a useful scaffold:

- `src/web`
  - Next.js UI
- `src/api`
  - Express API gateway
- `src/packages/types`
  - shared types and schemas

That is enough to start building.
Do not delete it and rebuild for the sake of "freshness."

## Fresh-Start Rule

Start fresh in behavior, not by throwing away useful scaffolding.

That means:

- keep the existing monorepo layout
- tighten the package boundaries
- implement the roadmap in small vertical slices
- remove dead code only when it actually becomes dead

## Implementation Order

### Phase 1

Extend the current thin slice:

- add assistant request and response contracts
- add `/assist` API path
- add a basic assistant UI

### Phase 2

Add grounded retrieval:

- ingestion
- indexing
- citations

### Phase 3

Add workflow intelligence:

- planning
- triage
- specialist workflows if justified

### Phase 4

Add production concerns:

- auth
- tenancy
- evals
- observability
- deployment

## Package Strategy

Keep apps thin and move shared logic into packages only when it deserves a boundary.

Current packages:

- `src/web`
- `src/api`
- `src/packages/types`

Likely future packages:

- `src/packages/ai-core`
- `src/packages/retrieval`
- `src/packages/evals`
- `src/packages/config`

Do not create all of these on day 1.
Create them only when the code actually needs them.

## Rules

- no app-to-app imports
- shared contracts live in `src/packages/types`
- shared business logic moves into packages
- app-specific UI stays in `src/web`
- app-specific HTTP concerns stay in `src/api`
- install dependencies from the repo root
- keep one lockfile at the root

## Monorepo Guide

Use [MONOREPO.md](/Users/pawan/Vizmo/team-ai/src/MONOREPO.md) for pnpm and Turborepo usage, commands, and boundaries.
