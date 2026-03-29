# Product Brief

## Title

Team AI v1: Engineering Intelligence Copilot

## Problem

Engineering teams lose time on repeated knowledge work:

- finding the right docs or runbooks
- understanding scattered system context
- turning ambiguous requests into implementation plans
- triaging incidents or tickets with incomplete information

The result is slow onboarding, repeated interruptions, and weak architecture memory inside the team.

## Primary User

The first user is a strong engineer, tech lead, or staff-level builder who needs faster access to engineering context and clearer implementation plans.

## User Jobs

### Job 1

Ask a technical question over engineering docs, repo context, and runbooks, and get a cited answer.

### Job 2

Turn a question, bug, or ticket into a concrete implementation plan.

### Job 3

Gather the right context before starting work, instead of searching manually across multiple sources.

## Why This Product First

- it has direct internal productivity ROI
- it is realistic for a 60-day build
- it teaches the right AI engineering layers in the right order
- it creates strong portfolio and interview proof

## v1 Scope

The first serious version should include:

- a simple operator UI in `src/web`
- an API gateway in `src/api`
- one assistant workflow for Q&A and planning
- retrieval over a small engineering corpus
- cited responses
- basic evals and traces

## Non-Goals

For this 60-day plan, do not treat these as core scope:

- fully autonomous coding agents
- generalized multi-agent swarms
- billing before value is proven
- broad enterprise integrations
- glossy dashboards without real metrics behind them

## North-Star Metric

Primary metric:

- percentage of labeled engineering questions answered with useful citations

Secondary metrics:

- median and p95 response latency
- cost per successful answer
- retrieval precision on the gold set
- number of tasks that produce a usable implementation plan

## Week 1 Objective

By the end of Week 1:

- the product wedge is explicit
- the architecture is written down
- the repo has a thin real request path beyond `/health`
- the first response contract is defined

## Milestones

### Milestone 1

Thin assistant path:

- input question
- call API
- return structured assistant response

### Milestone 2

Grounded retrieval:

- index docs
- retrieve citations
- answer with sources

### Milestone 3

Workflow intelligence:

- planning
- triage
- bounded specialist workflows

### Milestone 4

Production readiness:

- auth
- tenancy
- evals
- observability
- deployment

## Risks

- over-scoping into agent theater
- weak retrieval quality
- mixing memory, state, and knowledge into one blob
- spending too much time on framework setup

## Current Repo Advantage

The repo already has:

- `src/web` with a health-check UI
- `src/api` with a health endpoint
- a shared types package

That means Week 1 should extend the current thin slice, not restart the project.
