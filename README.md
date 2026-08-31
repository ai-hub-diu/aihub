# Daffodil AI Production Hub — Demo

A frontend demo of the Daffodil AI Production Hub landing page: Courses + Jobs, with mock data,
built to introduce the platform's larger LEARN → VERIFY → WORK → BUILD → GROW vision.

## What's implemented

- `apps/web` — the full Next.js landing page (fully implemented, this demo's focus)
- `apps/portal`, `apps/admin` — placeholders for future demo apps
- `packages/`, `services/`, `docs/` — placeholders for the future modular-monolith architecture

## Running the demo

```bash
cd apps/web
npm install
npm run dev
```

Then open http://localhost:3000.

Note: the original spec calls for pnpm + Turborepo. This environment didn't have pnpm available
(no permission to install it globally), so this workspace uses npm workspaces instead — same
monorepo shape, different package manager. Swap in pnpm/Turborepo later with no code changes needed.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Radix UI primitives (shadcn/ui-style
components) · Lucide icons. All content in `apps/web/data/*.ts` is mock/demo data.

## Routes

- `/` — landing page
- `/courses`, `/courses/[id]`
- `/jobs`, `/jobs/[id]`
- `/certificates/verify`
- `/industry`
