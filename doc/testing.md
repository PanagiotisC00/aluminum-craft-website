# Local Testing Runbook

## Scope

This project is tested locally only. Do not point tests at Vercel preview, staging, production, production databases, or production credentials.

## Project Classification

- Main type: `NEXT_FRONTEND_ONLY`
- Secondary tags: `API_ROUTES`, `NO_TESTS` before this run, `TAILWIND`, `VERCEL`
- Evidence: the app uses the Next.js Pages Router, static public pages, local sitemap and robots API routes, Formspree as an external form endpoint, and no Supabase, auth, database, uploads, payments, middleware, server actions, or migration files.

## Commands

Install exactly from the lockfile:

```bash
corepack pnpm install --frozen-lockfile
```

Run local quality gates:

```bash
corepack pnpm run lint
corepack pnpm run typecheck
corepack pnpm run build
```

Run unit and component tests:

```bash
corepack pnpm run test:unit
```

Run E2E tests against localhost only:

```bash
corepack pnpm run test:e2e
```

Run coverage:

```bash
corepack pnpm run test:coverage
```

## E2E Behavior

Playwright starts the local Next.js dev server on `http://127.0.0.1:3001`. It sets:

```env
NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3001
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

The placeholder Formspree ID prevents accidental live form submissions during local tests.

## Browser Install

If Playwright reports that browsers are missing, install Chromium locally for this workspace before running E2E:

```bash
$env:PLAYWRIGHT_BROWSERS_PATH='0'
corepack pnpm exec playwright install chromium
```

## Security Notes

- Do not add production Formspree IDs to committed files.
- Keep `.env.local` local and ignored.
- Use `NEXT_PUBLIC_SITE_URL=http://localhost:3000` or another localhost URL for local development.
- Run `corepack pnpm audit --audit-level=moderate` and `corepack pnpm audit --prod` before committing.
