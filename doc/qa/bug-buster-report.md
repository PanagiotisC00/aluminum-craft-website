# Bug Buster Report

Date: 2026-05-31
Project classification: Next.js frontend-only with static rendering and local API routes
Confidence: High
Package manager: pnpm
Local-only confirmation: yes
Remote mutation confirmation: none

## Sources Consulted

- Framework docs: Next.js headers and Content Security Policy docs; React input and label accessibility docs.
- Testing docs: Playwright `webServer` and `baseURL` docs; Vitest jsdom/config docs; Testing Library React and user-event docs.
- Security docs: OWASP-style CSP and XSS defense guidance through official/primary docs.
- Database docs: Not applicable; no database or Supabase was detected.
- Context7: attempted, but monthly quota was exceeded.

## Classification Evidence

- `package.json` uses Next.js, React, Tailwind, and pnpm.
- `pages/` and `pages/api/` exist.
- API routes are limited to public sitemap and robots text generation.
- No `supabase/`, database client, auth, uploads, payments, middleware, server actions, or migration files were found.
- Browser form submission goes to Formspree only when explicitly configured by environment variable.

## Baseline Commands

| Command | Result | Notes |
| --- | --- | --- |
| `corepack pnpm install --frozen-lockfile` | Passed | Lockfile matched manifest. |
| `corepack pnpm audit --audit-level=moderate` | Passed | No known vulnerabilities. |
| `corepack pnpm audit --prod` | Passed | No known production vulnerabilities. |
| `corepack pnpm run lint` | Passed | Existing lint gate passed before Bug Buster fixes. |
| `corepack pnpm run typecheck` | Passed | Existing type gate passed before Bug Buster fixes. |
| `corepack pnpm run test:unit` | Passed | Existing local tests were meaningful for form validation and security behavior. |
| `corepack pnpm run test:e2e` | Passed | Existing E2E tests covered public routes and local form behavior. |
| `corepack pnpm run build` | Passed | Production build completed locally. |

## Confirmed Bugs

| ID | Area | Severity | Evidence | Test or repro | Subagent verdict | Fix | Verification |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BB-001 | Gallery accessibility | Medium | Gallery image cards used clickable `motion.div` elements, so thumbnails were mouse-only and had no accessible button role. | Added Playwright test `gallery images are keyboard accessible and open an accessible dialog`; it failed before the fix because no matching button could be focused. | Confirmed as medium accessibility bug. | Converted gallery cards to `motion.button` with accessible labels, focus styles, and keyboard activation. | `corepack pnpm run test:e2e` passed with the new test. |
| BB-002 | Modal accessibility | Medium | Gallery lightbox and legal modal lacked `role="dialog"`, `aria-modal`, and Escape handling. | Added Playwright tests for gallery lightbox and legal modal dialog semantics; they failed before the fix because no dialog role was exposed. | Confirmed as medium accessibility bug. | Added dialog semantics, labels, close-button focus on open, and Escape-to-close behavior. | `corepack pnpm run test:e2e` passed with the new tests. |
| BB-003 | Security headers | Medium | Production CSP contained `script-src ... 'unsafe-eval'`, weakening XSS defense-in-depth. | Added Vitest test `does not allow eval in production script CSP`; it failed before the fix because the CSP contained `'unsafe-eval'`. | Confirmed as security-sensitive CSP weakness; no direct XSS source was found. | Made `unsafe-eval` development-only while keeping production CSP free of eval. | `corepack pnpm run test:unit` passed with the new test. |

## Observations Not Changed

| ID | Area | Reason Not Changed | Recommended Follow-up |
| --- | --- | --- | --- |
| OBS-001 | CSP inline scripts | Production CSP still allows `'unsafe-inline'` because the app uses Next.js inline scripts and JSON-LD. Removing it safely would require a nonce/hash-based CSP design and browser QA. | Consider nonce/hash CSP hardening as a separate security project. |
| OBS-002 | JSON-LD `dangerouslySetInnerHTML` | JSON-LD is built from local translation strings and static metadata, not arbitrary user HTML. No local XSS reproduction was confirmed. | Keep translations trusted and avoid putting user-controlled HTML into structured data. |
| OBS-003 | Supabase/database | No Supabase or database layer exists. | None. |
| OBS-004 | CI/Dependabot | User explicitly said not to create or initiate unused automation. | None. |

## Tests Added

| Test File | Purpose | Bug IDs Covered |
| --- | --- | --- |
| `tests/e2e/public-site.spec.ts` | Added keyboard gallery access, accessible lightbox dialog, legal modal dialog, and Escape-close checks. | BB-001, BB-002 |
| `tests/unit/securityHeaders.test.ts` | Verifies production CSP does not allow eval. | BB-003 |

## Final Validation

| Command | Result | Notes |
| --- | --- | --- |
| `corepack pnpm install --frozen-lockfile` | Passed | Final lockfile check. |
| `corepack pnpm audit --audit-level=moderate` | Passed | No known vulnerabilities. |
| `corepack pnpm audit --prod` | Passed | No known production vulnerabilities. |
| `corepack pnpm run lint` | Passed | No lint failures. |
| `corepack pnpm run typecheck` | Passed | No type errors. |
| `corepack pnpm test` | Passed | Vitest alias for local unit tests. |
| `corepack pnpm run test:unit` | Passed | 6 tests across 3 files. |
| `corepack pnpm run test:e2e` | Passed | 5 Playwright tests against localhost. |
| `corepack pnpm run build` | Passed | Local production build completed. |

## Manual Actions Required

- Vercel: keep pnpm auto-detection or use `corepack pnpm install --frozen-lockfile`.
- Vercel: use Node 24.
- Vercel: set `NEXT_PUBLIC_SITE_URL` to the production origin.
- Vercel: set `NEXT_PUBLIC_FORMSPREE_ID` to the production Formspree ID.
- Security follow-up: consider nonce/hash-based CSP hardening if you want to remove `'unsafe-inline'`.
- OSV: install `osv-scanner` separately if OSV evidence is required.

## No-Push Confirmation

No commit, push, branch, PR, CI, Dependabot config, GitHub workflow, Vercel deployment, or remote database change was created.
