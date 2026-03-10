# Codebase Concerns

**Analysis Date: 2026-03-10**

## Tech Debt

**Testing Infrastructure:**
- Issue: Complete absence of testing framework and test files across the monorepo.
- Files: `src/api/package.json`, `src/web/package.json`
- Impact: No automated validation of code changes; high risk of regressions as the project grows.
- Fix approach: Initialize a testing framework (e.g., Vitest for unit/integration, Playwright for E2E).

**Next.js Versioning:**
- Issue: `package.json` specifies `next: 16.1.6`, which is not a standard stable version (Next.js 15 is current).
- Files: `src/web/package.json`
- Impact: Potential dependency resolution issues or reliance on experimental/non-existent features.
- Fix approach: Align with a stable Next.js release (e.g., `^15.0.0`).

## Security Considerations

**Docker Context and Secrets:**
- Risk: Dockerfiles use `COPY . .` without a `.dockerignore` file.
- Files: `src/api/Dockerfile`, `src/web/Dockerfile`
- Current mitigation: None detected.
- Recommendations: Create a `.dockerignore` to prevent copying `.env`, `node_modules`, and `.git` into images.

## Performance Bottlenecks

**Docker Build Layers:**
- Problem: Large context copies and lack of specific file targeting for dependency installation.
- Files: `src/api/Dockerfile`, `src/web/Dockerfile`
- Cause: `COPY . .` invalidates cache for any file change.
- Improvement path: Use multi-stage builds and specific `COPY` commands for `package.json`/`pnpm-lock.yaml` before copying source code.

## Fragile Areas

**Shared Schema Integrity:**
- Files: `src/packages/types/src/index.ts`
- Why fragile: This package is a single point of failure for both `api` and `web`. Incorrect schema changes will break both services.
- Safe modification: Implement unit tests for Zod schemas to ensure validation logic remains consistent.
- Test coverage: 0%

## Test Coverage Gaps

**Core Logic and Endpoints:**
- What's not tested: API health check, basic routing, and shared type validation.
- Files: `src/api/src/index.ts`, `src/web/src/app/page.tsx`, `src/packages/types/src/index.ts`
- Risk: Regressions in basic connectivity or data structures.
- Priority: High

---

*Concerns audit: 2026-03-10*
