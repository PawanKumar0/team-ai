# Coding Conventions

**Analysis Date:** 2025-02-24

## Naming Patterns

**Files:**
- Kebab-case for directories: `src/api`, `src/packages/types`.
- Lowercase for Next.js app router files: `page.tsx`, `layout.tsx`, `globals.css`.
- Standard entry points: `index.ts`.

**Functions:**
- CamelCase for utility functions and hooks.
- PascalCase for React components (e.g., `Home` in `src/web/src/app/page.tsx`).

**Variables:**
- CamelCase for local variables and constants (e.g., `const port = process.env.PORT || 3001` in `src/api/src/index.ts`).

**Types:**
- PascalCase for TypeScript interfaces and types.
- PascalCase with "Schema" suffix for Zod schemas (e.g., `UserSchema` in `src/packages/types/src/index.ts`).

## Code Style

**Formatting:**
- Prettier is used for formatting (configured in root `package.json`).
- Semicolons are used.
- Single quotes are used in backend (`src/api/src/index.ts`).
- Double quotes are used in frontend (`src/web/src/app/page.tsx`).

**Linting:**
- ESLint is used in the `web` package (Next.js defaults).
- Configuration: `src/web/eslint.config.mjs` using `eslint-config-next`.

## Import Organization

**Order:**
1. Built-in modules (e.g., `import express from 'express'`).
2. External libraries (e.g., `import { z } from 'zod'`).
3. Internal modules/types.

**Path Aliases:**
- Not explicitly detected in `tsconfig.json`, but standard Next.js `@/` might be available.

## Error Handling

**Patterns:**
- Basic Express error handling is used in `src/api/src/index.ts`.
- Schema validation with Zod in `src/packages/types/src/index.ts`.

## Logging

**Framework:**
- `console.log` is used for basic server-side logging in `src/api/src/index.ts`.

## Comments

**When to Comment:**
- Minimal use of comments in existing source files.

**JSDoc/TSDoc:**
- Not observed in the current codebase.

## Function Design

**Size:**
- Small, focused functions are preferred.

**Parameters:**
- Destructuring used for React component props (e.g., `RootLayout({ children })` in `src/web/src/app/layout.tsx`).

**Return Values:**
- Implicit and explicit return types used in TypeScript.

## Module Design

**Exports:**
- Named exports preferred for types and schemas (`src/packages/types/src/index.ts`).
- Default exports used for Next.js pages and layouts.

**Barrel Files:**
- `src/packages/types/src/index.ts` acts as a barrel file for types.

---

*Convention analysis: 2025-02-24*
