---
phase: sprint-1
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - src/packages/types/src/index.ts
  - src/packages/types/package.json
  - src/packages/types/src/index.test.ts
  - src/api/src/index.ts
  - src/api/package.json
  - src/web/next.config.ts
  - src/web/package.json
  - src/web/src/app/page.tsx
autonomous: false
requirements:
  - TECH-05: Maintain strict TypeScript typing across the monorepo using shared Zod schemas.
  - PH1-SHARED-SCHEMAS: Define shared Zod schemas for core entities.
  - PH1-PROXY-CONNECT: Connect frontend to backend via internal API.
user_setup: []

must_haves:
  truths:
    - "Shared types package correctly exports schemas and inferred types"
    - "Backend API responds correctly with Zod-validated JSON on /health"
    - "Next.js successfully proxies /api/health to the backend"
    - "Front-end displays live API status from the backend"
  artifacts:
    - path: "src/packages/types/src/index.ts"
      provides: "Zod schemas for User, HealthStatus, and Session"
    - path: "src/api/src/index.ts"
      provides: "Express API gateway with Morgan, CORS, and health endpoint"
    - path: "src/web/next.config.ts"
      provides: "Proxy configuration for /api rewrites"
    - path: "src/web/src/app/page.tsx"
      provides: "Health check UI component"
  key_links:
    - from: "src/api/src/index.ts"
      to: "@team-ai/types"
      via: "pnpm workspace:* dependency"
    - from: "src/web/next.config.ts"
      to: "http://api:3001"
      via: "Next.js rewrite proxy"
---

<objective>
Phase 1 Foundation: Setup the core monorepo foundation by establishing shared types, configuring the API Gateway with proper middleware, and enabling end-to-end connectivity between the Next.js frontend and Express backend via a proxied health check.
</objective>

<execution_context>
@/Users/pawan/.gemini/get-shit-done/workflows/execute-plan.md
@/Users/pawan/.gemini/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/STATE.md
@.planning/sprints/sprint-1/RESEARCH.md

# Key Interfaces & Contracts (Extracted from existing code)
From src/packages/types/src/index.ts:
```typescript
export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  subscriptionTier: z.enum(['free', 'pro', 'enterprise']),
});
export type User = z.infer<typeof UserSchema>;
```

From src/api/src/index.ts:
```typescript
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api-gateway' });
});
```
</context>

<tasks>

<task type="auto" tdd="true">
  <name>Task 1: Initialize shared Zod schemas and tests</name>
  <files>src/packages/types/src/index.ts, src/packages/types/src/index.test.ts, src/packages/types/package.json</files>
  <behavior>
    - HealthStatusSchema: { status: string, service: string, timestamp: string }
    - SessionSchema: { id: string, userId: string, expiresAt: string }
    - UserSchema: Ensure id, email, and subscriptionTier are defined.
  </behavior>
  <action>
    - Update `src/packages/types/src/index.ts` to include `SessionSchema` and ensure `HealthStatusSchema` has a `timestamp` field.
    - Export inferred types for all schemas.
    - Install `vitest` as a devDependency in `src/packages/types`.
    - Create `src/packages/types/src/index.test.ts` with simple validation tests for each schema.
    - Add `"test": "vitest run"` to `src/packages/types/package.json`.
    - Ensure `main` in `package.json` points to `./src/index.ts`.
  </action>
  <verify>
    <automated>pnpm --filter "@team-ai/types" test</automated>
  </verify>
  <done>Zod schemas are defined, exported, and pass validation tests.</done>
</task>

<task type="auto">
  <name>Task 2: Configure API Gateway middleware and Health endpoint</name>
  <files>src/api/src/index.ts, src/api/package.json</files>
  <action>
    - In `src/api`: `pnpm add morgan` and `pnpm add -D @types/morgan`.
    - Add `@team-ai/types` as a dependency in `src/api/package.json` using `workspace:*`.
    - Update `src/api/src/index.ts`:
      - Import `morgan` and `HealthStatusSchema` from `@team-ai/types`.
      - Use `app.use(morgan('dev'))`.
      - Update `/health` endpoint to return an object matching `HealthStatusSchema` (status: 'ok', service: 'api-gateway', timestamp: new Date().toISOString()).
      - Ensure `cors()` and `express.json()` are already present.
  </action>
  <verify>
    <automated>pnpm --filter "@team-ai/api" dev & sleep 3 && curl -s http://localhost:3001/health | grep -q "api-gateway" && pkill -f tsx</automated>
  </verify>
  <done>Express backend has morgan logging and a schema-validated health endpoint.</done>
</task>

<task type="auto">
  <name>Task 3: Configure Next.js Proxy and Health Component</name>
  <files>src/web/next.config.ts, src/web/src/app/page.tsx, src/web/package.json</files>
  <action>
    - Add `@team-ai/types` as a dependency in `src/web/package.json` using `workspace:*`.
    - Update `src/web/next.config.ts` to add rewrites from `/api/:path*` to `http://api:3001/:path*` (assuming internal Docker network) or `http://localhost:3001/:path*` for local dev. Use `http://localhost:3001/:path*` for this task.
    - Replace contents of `src/web/src/app/page.tsx` with a simple React component that uses `useEffect` to fetch `/api/health` and displays the `status`, `service`, and `timestamp` from the response.
    - Add basic Tailwind styling to show a green badge if status is 'ok'.
  </action>
  <verify>
    <automated># Manual verification in next task, but we can check for file existence and types
ls src/web/next.config.ts && grep -q "rewrites" src/web/next.config.ts</automated>
  </verify>
  <done>Next.js is configured to proxy API requests and has a UI to display backend health.</done>
</task>

<task type="checkpoint:human-verify">
  <what-built>End-to-end Foundation & API Gateway connectivity</what-built>
  <how-to-verify>
    1. From the project root, run `docker-compose up --build` (ensure API and Web services start).
    2. Open your browser to `http://localhost:3000`.
    3. Verify the page displays "API Status: OK" and shows the service name "api-gateway" and a timestamp.
    4. Alternatively, run `curl http://localhost:3000/api/health` and verify it returns JSON from the Express backend.
  </how-to-verify>
  <resume-signal>approved</resume-signal>
</task>

</tasks>

<verification>
1. `pnpm --filter "@team-ai/types" test` passes.
2. `curl http://localhost:3001/health` returns valid schema-compliant JSON.
3. `curl http://localhost:3000/api/health` (via proxy) returns same JSON.
4. Next.js UI displays the status correctly.
</verification>

<success_criteria>
- All shared Zod schemas correctly defined and exported.
- Express API Gateway running with Morgan logging and schematized health check.
- Next.js Proxy correctly routing /api requests to the Express backend.
- UI successfully fetching and displaying backend state.
</success_criteria>

<output>
After completion, create `.planning/sprints/sprint-1/01-foundation-SUMMARY.md`
</output>
