# AGENTS.md

Guidance for AI coding agents (and humans) working in this repo.

## Project
Next.js 15 (App Router) + React 19 + Tailwind 4 portfolio. Source lives in `src/app`.

## Commands
```bash
npm run dev         # local dev server
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
npm run build       # production build
```
Run lint, typecheck and build before every push. CI runs the same three, plus gitleaks and `npm audit`.

## Git workflow
- Work on `dev`. Never commit directly to `main`.
- Ship by merging `dev` into `main` (`--no-ff`), then push both. Work through `docs/PRESHIP_CHECKLIST.md` first.
- Install hooks once: `pip install pre-commit && pre-commit install`. Don't bypass them with `--no-verify`.
- Never commit secrets. Put real values in `.env.local` (ignored) and document the keys in `.env.example`.

## Keep demo code separate from the real app
Demo/showcase code must be shippable and deployable on its own, and must never leak into the production bundle. The same split makes the demo reusable as a template for future SaaS projects.

Layout to follow when the project is (or becomes) a mobile app / SaaS:

```
apps/
  mobile/        # the real app: only production code, real API clients
  demo/          # showcase app: mock data, fake auth, marketing walkthroughs
packages/
  ui/            # shared components, tokens, hooks (no demo or prod specifics)
  config/        # shared eslint, tsconfig, tailwind presets
templates/
  saas-starter/  # cleaned copy of the above, ready to clone for a new SaaS
```

Rules:
1. `apps/mobile` must not import from `apps/demo`. The dependency direction is `demo -> packages <- mobile`.
2. Mocks, seed data and fake users live only in `apps/demo` (or a `*.demo.ts` file next to the code it replaces, behind an adapter interface).
3. If a single-app repo is unavoidable, gate demo code behind `APP_VARIANT=demo`, keep it under `src/demo/`, and load it with dynamic imports so production builds tree-shake it out. CI must verify the production build contains no `src/demo` strings.
4. Each app has its own build, env file, CI job and deploy target, so the demo can be shipped and showcased independently.
5. When a pattern in the demo proves useful, promote it into `packages/` or `templates/saas-starter/` instead of copying it.

This repo is currently a single web app, so none of this exists yet. Create the structure when the mobile app starts, not before.

## Conventions
- Match surrounding code style; keep comments sparse and explain why, not what.
- Don't add dependencies without a reason; prefer what is already installed.
- Update `.env.example` whenever you add an env var.
