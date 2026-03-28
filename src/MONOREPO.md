# Monorepo Guide

## Short Answer

Yes, `pnpm` plus `turbo` is the right default for this repository.

As of March 28, 2026, that combination is still a strong setup for a TypeScript monorepo:

- `pnpm` gives you workspace support, the `workspace:` protocol, and powerful package filtering
- `turbo` gives you task orchestration, caching, and parallel execution across the workspace

## What Each Tool Owns

### pnpm

Use `pnpm` for:

- dependency installation
- workspace linking
- package-scoped commands
- one root lockfile

### turbo

Use `turbo` for:

- running task graphs
- scheduling tasks across packages
- caching outputs
- parallel execution
- later, remote caching in CI

## Why This Pair Helps

### Why pnpm helps

- built-in workspace support
- `workspace:` dependencies for internal packages
- `--filter` for targeted commands
- efficient installs and disk usage

### Why turbo helps

- it runs package tasks in dependency order
- it parallelizes work where possible
- it caches outputs to avoid repeated work
- it scales better than manually chaining workspace scripts

## How This Repo Should Use Them

The root workspace config already defines:

- `src/web`
- `src/api`
- `src/packages/*`

That is correct.

The intended model is:

- apps in `src/web` and `src/api`
- shared code in `src/packages/*`
- one root `pnpm-workspace.yaml`
- one root lockfile

## Working Rules

- install from the repository root
- keep shared contracts in workspace packages
- do not import directly from one app into another app
- use `workspace:*` or `workspace:^` for internal dependencies
- use `pnpm --filter` when you want to work on one package
- use `turbo` when you want to run cross-package tasks

## Recommended Commands

### Run the whole workspace

```bash
pnpm dev
pnpm build
pnpm lint
```

### Run one app

```bash
pnpm dev:web
pnpm dev:api
pnpm build:web
pnpm build:api
```

### Run a package-specific command

```bash
pnpm --filter @team-ai/types test
pnpm --filter web dev
pnpm --filter @team-ai/api dev
```

### Useful pnpm filtering patterns

```bash
pnpm --filter @team-ai/api build
pnpm --filter web build
pnpm --filter @team-ai/types test
```

## When To Add A New Package

Add a new package only if one of these is true:

- the code is shared by multiple apps
- the code deserves independent tests and versioning inside the repo
- the boundary clarifies the architecture

Do not create packages just because the architecture diagram looks nicer.

## Suggested Boundaries For Team AI

### Keep In Apps

- Next.js pages and UI-only components
- Express routes and API-only middleware

### Move To Packages When Ready

- shared Zod schemas
- provider adapters
- retrieval logic
- evaluation helpers
- common config

## Cleanup Guidance

If you want to "start fresh," do it like this:

1. keep the current monorepo layout
2. keep the working health path as proof the scaffold is alive
3. implement the first assistant slice on top of it
4. delete or refactor obsolete code only after the new slice replaces it

This avoids fake progress from deleting and re-scaffolding.

## Notes

- the root `pnpm-workspace.yaml` is the source of truth for the workspace
- package-local files should not redefine the workspace layout
- keep the monorepo small until the code forces more boundaries

## References

- pnpm workspaces: <https://pnpm.io/workspaces>
- pnpm filtering: <https://pnpm.io/filtering>
- Turborepo docs: <https://turborepo.dev/docs>
- Turborepo configuring tasks: <https://turborepo.dev/docs/crafting-your-repository/configuring-tasks>
