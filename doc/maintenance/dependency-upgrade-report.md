# Dependency Upgrade Report

Date: 2026-05-31
Repository: aluminum-fabricator-cyprus
Branch: main
Agent: Codex

## Scope

Migrated dependency management from npm to pnpm, locked package versions, upgraded the app to the current secure Next/React stack, migrated Tailwind CSS 4, remediated npm audit findings, reviewed the local-only/security requirements in `doc/master-dependency-security-playbook.md` and `doc/universal-ai-agent-upgrade-prompt.md`, and moved repository documentation under `doc/` except root `README.md` and ignored `AGENTS.md`.

## Constraints followed

- No push, merge, remote branch creation, or deployment was performed.
- All verification commands were local and run through Corepack pnpm.
- Production URLs, production databases, and production credentials were not used.
- User work and pre-existing untracked files were preserved.
- Context7 was attempted for current docs, but the service returned a monthly quota error; official project docs, npm metadata, and local verification were used instead.

## Package manager changes

- Added `packageManager: pnpm@10.33.4`.
- Added `pnpm-lock.yaml`.
- Added `pnpm-workspace.yaml` with `minimumReleaseAge: 10080`, `minimumReleaseAgeExclude`, and strict dependency settings.
- Removed the npm lockfile after pnpm validation.
- Kept all direct dependency versions exact, with no caret or tilde ranges.
- Added scoped `pnpm.overrides` for transitive advisory floors.

## Dependency upgrade table

| Package | From | Selected | Reason | Advisory / risk | Breaking changes | Action |
|---|---:|---:|---|---|---|---|
| next | 14.2.30 | 16.2.6 | Security/framework upgrade | Old Next 14 audit advisories | Next 15/16 config, TS, ESLint changes | Upgraded |
| react | 18.3.1 | 19.2.6 | Next 16 compatible React set | None from audit | React 19 type changes | Upgraded |
| react-dom | 18.3.1 | 19.2.6 | Next 16 compatible React set | None from audit | React 19 type changes | Upgraded |
| eslint-config-next | 14.2.30 | 16.2.6 | Match Next version | Old ESLint stack transitive findings | Flat config required | Upgraded |
| eslint | 8.57.1 | 9.39.4 | Latest compatible line for `eslint-config-next@16.2.6` plugins | None from audit | Flat config | Upgraded |
| eslint | 10.4.0 candidate | Not selected | Failed with `eslint-plugin-react@7.37.5` under Next's config stack | Runtime lint break | Plugin peer support not ready | Rejected |
| next-i18next | 15.4.2 | 16.0.7 | Next 16 compatible i18n | Removed old `i18next-fs-backend` advisory path | Pages Router export paths changed | Upgraded |
| i18next | transitive | 26.2.0 | Stable peer older than 7 days | None from audit | None observed | Added direct |
| react-i18next | transitive | 17.0.8 | Stable peer older than 7 days | None from audit | None observed | Added direct |
| framer-motion | 10.18.0 | 12.40.0 | React 19 compatibility | None from audit | Stricter variant easing types | Upgraded |
| @vercel/analytics | 1.5.0 | 2.0.1 | Current Vercel analytics package | None from audit | None observed | Upgraded |
| react-hook-form | 7.60.0 | 7.76.1 | Stable package older than 7 days | None from audit | None observed | Upgraded |
| @types/node | 20.19.9 | 24.12.4 | Align local and Vercel runtime target to Node 24 | None from audit | Runtime target must match | Upgraded |
| @types/react | 18.3.23 | 19.2.15 | React 19 types | None from audit | React 19 type changes | Upgraded |
| @types/react-dom | 18.3.7 | 19.2.3 | React 19 types | None from audit | None observed | Upgraded |
| postcss | 8.5.6 | 8.5.15 | Patch PostCSS advisory | GHSA-qx2v-qp2m-jg93 | None observed | Upgraded and overridden |
| tailwindcss | 3.4.17 | 4.3.0 | Current stable major with official PostCSS split | None from audit | New import/plugin model and opacity syntax | Upgraded |
| @tailwindcss/postcss | none | 4.3.0 | Required Tailwind 4 PostCSS plugin | None from audit | PostCSS config changed | Added |
| autoprefixer | 10.4.21 | Removed | Tailwind 4 handles vendor prefixing through its pipeline | None from audit | PostCSS config changed | Removed |
| typescript | 5.8.3 | 6.0.3 | Current stable TypeScript | None from audit | Deprecated ES5 target/baseUrl behavior | Upgraded |
| next-sitemap | 4.2.3 | Removed | Unused package; repo serves sitemap from `pages/api/sitemap.xml.js` | Reduces dependency surface | Docs updated to custom route | Removed |
| zod | none | 4.4.3 | Runtime form validation | None from audit | Form validation schema added | Added |
| @hookform/resolvers | none | 5.4.0 | Connect Zod to React Hook Form | None from audit | Resolver-based form validation | Added |
| vitest | none | 4.1.7 | Unit/component test runner | None from audit | Test scripts/config added | Added |
| @testing-library/react | none | 16.3.2 | React component testing | None from audit | Test utilities added | Added |
| @testing-library/dom | none | 10.4.1 | Testing Library peer | None from audit | Test utilities added | Added |
| @testing-library/jest-dom | none | 6.9.1 | DOM assertions | None from audit | Vitest setup added | Added |
| @testing-library/user-event | none | 14.6.1 | User-focused component interactions | None from audit | Component tests added | Added |
| jsdom | none | 29.1.1 | Browser-like unit test environment | None from audit | Vitest config added | Added |
| @vitest/coverage-v8 | none | 4.1.7 | Coverage support | None from audit | Coverage script added | Added |
| @playwright/test | none | 1.60.0 | Local E2E testing | None from audit | Playwright config/tests added | Added |

## Security advisories remediated

- Next.js high advisories from the old Next 14 tree were remediated by upgrading to `next@16.2.6`.
- `i18next-fs-backend` path traversal from the old i18n tree was removed by upgrading `next-i18next` and adding current peer packages.
- `postcss`, `glob`, `minimatch`, `flatted`, `picomatch`, `brace-expansion`, and `yaml` audit findings were remediated with direct upgrades and scoped `pnpm.overrides`.
- `corepack pnpm audit --audit-level=moderate` and `corepack pnpm audit --prod` currently report no known vulnerabilities.

## Code security findings

- Added broad HTTP security headers in `next.config.js`, including content type sniffing protection, referrer policy, permissions policy, and Content Security Policy.
- Reviewed searched sinks for XSS, unsafe storage, secrets, external links, redirects, and environment exposure.
- The only `dangerouslySetInnerHTML` usage is JSON-LD generated from translation strings and static structured-data fields, not arbitrary user HTML.
- External links using `target="_blank"` include `rel="noopener noreferrer"`.
- Replaced the hardcoded Formspree endpoint with `NEXT_PUBLIC_FORMSPREE_ID`; the local placeholder prevents accidental live form submissions.
- Added Zod runtime validation for the contact form through React Hook Form's resolver.
- Switched canonical, Open Graph, Twitter image, JSON-LD, sitemap, and robots URLs to `NEXT_PUBLIC_SITE_URL`, defaulting to localhost locally.
- No auth, cookies, database queries, uploads, webhooks, payment flows, server actions, or middleware were found in this frontend-only Pages Router app.
- No committed secrets were found in `.env.example` or searched source files.

## Code quality findings

- Replaced removed `next lint` usage with `eslint .`.
- Added `typecheck` script.
- Added flat `eslint.config.mjs` for Next 16.
- Updated `next-i18next` Pages Router imports.
- Fixed React 19 and Framer Motion type issues.
- Removed stale `swcMinify` Next config.
- Added security headers in `next.config.js`.
- Migrated Tailwind CSS from v3 imports to v4 `@import 'tailwindcss'` with `@config`.
- Switched PostCSS from `tailwindcss` plus `autoprefixer` to `@tailwindcss/postcss`.
- Replaced deprecated Tailwind opacity utilities with slash opacity syntax.
- Updated TypeScript target to `ES2017` and removed deprecated `baseUrl`.
- Removed unused `next-sitemap`.
- Replaced static `public/robots.txt` with `pages/api/robots.txt.js` so the sitemap origin follows `NEXT_PUBLIC_SITE_URL`.
- Added Vitest unit/component tests for contact form validation and submission behavior.
- Added Playwright E2E smoke tests for the homepage, contact form, sitemap, and robots routes against localhost only.
- Fixed contact form label associations exposed by component tests.
- Added `doc/testing.md` and `doc/maintenance/code-quality-security-testing-report.md`.
- Ignored generated Playwright output directories.
- Ignored generated `*.tsbuildinfo`.
- Created ignored `AGENTS.md` with repository-only, Windows, Context7, security-first, pnpm/Corepack, frozen install, locked-version, CVE remediation, and response-format instructions.

## Documentation layout

- Kept root `README.md`.
- Kept root `AGENTS.md` ignored by git as requested.
- Moved all other repository markdown files under `doc/`.
- Moved this report to `doc/maintenance/dependency-upgrade-report.md`.

## Tests run locally

- `corepack pnpm install --frozen-lockfile`: passed.
- `corepack pnpm audit --audit-level=moderate`: passed, no known vulnerabilities.
- `corepack pnpm audit --prod`: passed, no known vulnerabilities.
- `corepack pnpm run lint`: passed.
- `corepack pnpm run typecheck`: passed.
- `corepack pnpm run test:unit`: passed, 5 tests.
- `corepack pnpm run test:e2e`: passed, 3 tests against `http://127.0.0.1:3001`.
- `corepack pnpm run build`: passed.
- Local dev server on `http://127.0.0.1:3001`: homepage, `/sitemap.xml`, and `/robots.txt` returned HTTP 200 and used the localhost origin.
- OSV scan: not run because `osv-scanner` is not installed locally.
- Integration tests: not applicable; there is no database, auth, Supabase, payment, upload, or server-side integration surface.

## Known residual risks

- `pnpm.overrides` should be reviewed periodically and removed once parent packages no longer pull vulnerable transitive versions.
- `eslint@10.x` is not selected yet because the current Next ESLint plugin stack fails under ESLint 10. Recheck once `eslint-config-next` and its plugins publish compatible releases.
- Vercel dashboard settings were not inspected or changed.
- Visual browser QA was not run; the production build verifies Tailwind 4 compilation but not pixel-level rendering.

## Manual actions required

### Vercel

- Install command: Remove old `npm install` overrides; prefer auto-detection from `pnpm-lock.yaml`, or use `corepack pnpm install --frozen-lockfile`.
- Build command: Use `pnpm run build` if a custom build command is configured.
- Development command: Use `pnpm run dev` if a custom development command is configured.
- Package manager detection: Keep `pnpm-lock.yaml` and `packageManager: pnpm@10.33.4`.
- Node.js version: Set Node 24 to match local verification and `@types/node@24.12.4`.
- Corepack setting: Required only if using the explicit Corepack install command override.
- Environment variables: Set `NEXT_PUBLIC_SITE_URL` to the final public origin and `NEXT_PUBLIC_FORMSPREE_ID` to the production Formspree form ID.

### GitHub or CI

- Workflow command changes: None; no `.github/workflows` directory exists.
- Dependabot or dependency scanning: None created or initiated, per user instruction. Consider enabling separately if desired.
- Branch protection or deployment setting notes: None changed.

### Local developer setup

- pnpm version: `10.33.4` through Corepack.
- Install command: `corepack pnpm install --frozen-lockfile`.
- Test command: `corepack pnpm run lint`, `corepack pnpm run typecheck`, `corepack pnpm run test:unit`, `corepack pnpm run test:e2e`, and `corepack pnpm run build`.
- Removed old lockfiles: `package-lock.json` removed; `pnpm-lock.yaml` is the only repo lockfile.

### Security follow-up

- Residual advisories: None from pnpm audit.
- Accepted risks: `osv-scanner` is not installed locally, so OSV evidence is documented as unavailable.
- Future package replacements: Recheck `eslint@10.x` after Next's ESLint plugin stack supports it.

## Rollback plan

- Revert this change set with git to restore the previous npm-based dependency state.
- If manually rolling back package management, restore `package-lock.json`, remove `pnpm-lock.yaml`, remove `pnpm-workspace.yaml`, remove `packageManager`, and run `npm install`.
- Revert the package versions in `package.json` and reinstall with the chosen package manager.
- No database migrations, production deployments, or remote settings were changed.
