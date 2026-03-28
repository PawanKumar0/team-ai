# Team AI

This repository is the operating system for a 60-day transformation:

- become a strong AI engineer by building real systems
- become better at system design by tying every concept to the product
- grow toward senior/staff engineering by writing, deciding, and shipping like one

The old repo was mostly a loose sprint list. The new repo is organized around one main execution thread and a small set of support threads.

## North Star

By day 60, you should be able to:

- ship a production-minded AI product with clear scope and ROI
- explain trade-offs in AI systems, backend systems, and distributed systems
- show staff-level artifacts: product brief, design doc, ADRs, evals, launch plan, postmortem
- prove learning with code, demos, docs, metrics, and weekly reviews

## Product Thesis

The main project is now:

**Team AI: an engineering intelligence copilot for internal teams**

It is not a fantasy "fully autonomous AI company" on day 1.
It starts as a focused product that can create real value:

- answer engineering questions over docs, repos, runbooks, and tickets
- return cited answers and implementation plans
- triage tickets and incidents
- later grow into workflow agents and selective multi-agent collaboration

This scope is better for learning and better for ROI.

## Start Here

1. Read [PLAN.md](/Users/pawan/Vizmo/team-ai/PLAN.md)
2. Open [threads/00-main-thread/TRACKER.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/TRACKER.md)
3. Use [threads/04-resource-map/README.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/README.md) to prune your resource dump
4. Log work using [journal/README.md](/Users/pawan/Vizmo/team-ai/journal/README.md)
5. When you need the full week-by-week guide, use [threads/00-main-thread/WEEK-BY-WEEK.md](/Users/pawan/Vizmo/team-ai/threads/00-main-thread/WEEK-BY-WEEK.md)

## Repo Structure

```text
.
├── PLAN.md
├── threads/
│   ├── 00-main-thread/        # Main product thread and weekly tracker
│   ├── 01-ai-engineering/     # AI engineering competency roadmap
│   ├── 02-system-design/      # General + AI system design practice
│   ├── 03-staff-engineering/  # Staff-level writing, scope, and leadership
│   ├── 04-resource-map/       # Curated resources from your dump + additions
│   ├── 05-global-job-hunt/    # Activated toward the end of the roadmap
│   └── 06-ai-interview-bank/  # AI engineer interview prep, architecture-heavy
├── journal/
│   └── templates/             # Daily log, weekly review, design review, experiment card
├── src/                       # Product code
├── sprint-*/                  # Legacy plan folders kept as reference
└── learning/                  # Legacy learning folders, now secondary
```

## Rules

- Build one product deeply instead of ten disconnected demos.
- Prefer simple workflows before multi-agent systems.
- Add evals and observability before fancy orchestration.
- Use system design as a tool for product decisions, not as a separate hobby.
- Write down decisions, trade-offs, metrics, and failures.
- Activate job hunt and interview prep after the build creates proof.

## Legacy Note

The existing `sprint-*` folders are preserved as legacy reference material. They are no longer the source of truth for execution order.
