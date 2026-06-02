# Plan: KP Portfolio Glow-Up — Legacy → Neo-Dark

*Authored: 2026-06-01. Branch: `feat/neo-dark-glow-up`. Authoritative plan file — every phase below is executed via explicit `spawn_agent` calls.*

---

## TL;DR

Branch off `main` (commit `e371b4f`, which is what's currently live) into a new worktree at `feat/neo-dark-glow-up`. Restore the WIP stash (`stash@{0}`) into the new worktree only. Rebuild the glow-up to match the **stitch designs** at `_docs/stitch/` — but **multi-theme** (not just two), since the user wants the ability to switch themes to enable different transitions and transformations. Validate every phase with Playwright MCP per the existing `.github/copilot-instructions.md` protocol. Final review + post-analysis stages as the user specified.

`main` is not touched. The live site keeps rendering the legacy 1:1 throughout the work.

---

## Resolved Decisions

The user answered all 9 open decisions:

1. **Branch name**: `feat/neo-dark-glow-up` (recommended).
2. **Tabs**: keep all 5 legacy tabs (Home, Details, Portfolio, Resume, Contact). No folding.
3. **Hero image**: lean into the stitch — no dashboard screenshot, just the clean hero with status pill, H1, 2 CTAs.
4. **Project content**: use the real 5 projects (TMRA.ai, TMRA Landing, Word Search Kingdom, Willows Wonderland, KnG Auto Detail). Make adding more from the UI easy (admin panel "Projects" tab + Supabase-backed data layer).
5. **Project count**: all 5 cards in the grid (responsive wrap: 3-col on lg, 2-col on md, 1-col on sm).
6. **Project images**: real Cloudinary images from the legacy. Drop the icon placeholders.
7. **Multi-theme**: support multiple themes. The user wants the ability to switch the theme to enable new transitions and transformations. The Playbook's 6-theme engine is over-engineered for the immediate ask, so we start with **`legacy` + `neo-dark`** (2 themes) and **architect the theme engine to accept N themes** so future themes can be added without engine changes.
8. **Transition triggers**: configurable per-theme. Each theme declares its own trigger config (e.g. `legacy → neo-dark` = 8s `time-delay`; future themes can use `scroll-percent`, `first-click`, `konami-code`, etc.).
9. **Full feature set**: build everything — admin panel, easter eggs, typewriter ghost, all 9 effects, transitions. The user is "not in a hurry" and wants it all.
10. **Plan file**: this file at `_docs/GLOW-UP-PLAN.md`.

---

## Open Decisions (Resolved in This Section)

| # | Question | Resolution |
|---|---|---|
| 1 | Branch name | `feat/neo-dark-glow-up` |
| 2 | Tab count | 5 (Home, Details, Portfolio, Resume, Contact) |
| 3 | Hero image | None (lean into stitch) |
| 4 | Project content | Real 5 projects, UI-addable |
| 5 | Project card count | All 5 |
| 6 | Project images | Real Cloudinary images |
| 7 | Theme system | Multi-theme (start with 2: legacy + neo-dark; engine is generic over N) |
| 8 | Transition triggers | Per-theme configurable; first instance is `legacy → neo-dark` on 8s `time-delay` |
| 9 | Feature scope | Full build: admin, easter eggs, typewriter, 9 effects, transitions |
| 10 | Plan file | `_docs/GLOW-UP-PLAN.md` |

---

## Worktree Setup (Pre-Phase 0)

Before any phase, the orchestrator does:

1. `git worktree add ../kp-portfolio-glow-up -b feat/neo-dark-glow-up main`
2. `cd ../kp-portfolio-glow-up && git stash pop` (restores transition work from `stash@{0}`)
3. Add `.playwright-mcp/`, `tests/artifacts/{traces,logs}/`, `node_modules/`, `dist/` to `.gitignore` (keep `tests/artifacts/summaries/` and `tests/artifacts/screenshots/` tracked as a regression baseline)
4. Commit the `_docs/GLOW-UP-PLAN.md` and `_docs/stitch/` (already untracked on main) so the branch starts with the design references tracked
5. Add `netlify.toml` (build command, publish dir, `NODE_VERSION = "20"`)
6. `main` stays untouched at `e371b4f`

**Agent**: `spawn_agent` for "worktree setup". Output: clean worktree, branch pushed (or local-only), baseline `tests/artifacts/summaries/000-baseline-legacy.md` capturing the live site + local legacy as the "before" reference screenshots.

---

## Phase 1 — Foundation, Token System & Multi-Theme Engine

**Goal**: Lock the dependency tree (Vite 8 + Tailwind v4 + DaisyUI v5 + Theme-UI bridge + Supabase + canvas-confetti + react-router-dom) and establish a **multi-theme engine** that scales to N themes. End state:

- `data-theme="legacy"` renders the current main-branch look byte-for-byte.
- `data-theme="neo-dark"` resolves all stitch tokens (M3 color roles, Geist/Inter/JetBrains Mono, spacing/radius scale).
- `data-theme="<future>"` works the same way — adding a new theme = one DaisyUI `@plugin 'daisyui/theme'` block + one entry in `themes` array, no engine changes.
- The `legacy` and `neo-dark` themes are the first two themes in the engine; the architecture is theme-list-agnostic.

**Theme registry architecture** (key decision for this phase):

```ts
// src/themes/themeRegistry.ts
type ThemeDefinition = {
  id: string                          // e.g. 'legacy', 'neo-dark', 'vapor'
  displayName: string                 // e.g. 'Legacy', 'Neo-Dark', 'Vapor'
  daisyuiBlock: string                // raw CSS for @plugin 'daisyui/theme' block
  tailwindTokens: Record<string, string>  // token overrides (font stacks, spacing, etc.)
  defaultTransition: TransitionConfig // how to enter this theme from any other
  availableTransitions: TransitionConfig[]  // possible trigger types this theme supports
  isDark: boolean
}

export const themes: ThemeDefinition[] = [legacyTheme, neoDarkTheme]
```

**Per-theme transition config**:

```ts
type TransitionConfig = {
  trigger: 'time-delay' | 'scroll-percent' | 'first-click' | 'manual' | 'konami-code' | 'none'
  delayMs?: number                    // for time-delay
  scrollPercent?: number              // for scroll-percent
  type: 'fade' | 'glitch' | 'scanline' | 'wipe'  // overlay animation type
  durationMs: number
  fromTheme?: string                  // optional: only transition from this specific theme
}
```

**Why per-theme**: The user said "different themes would have different triggers." So the `neo-dark` theme (entered on first visit via 8s delay) is one configuration; a future `vapor` theme might be entered via Konami code, etc. The engine reads `theme.defaultTransition` for the next auto-transition.

**Agent A (parallel)**: `spawn_agent` for "verify stash foundation". Run `npm install --legacy-peer-deps`, `npm run build`, `npm run lint` (must all pass), `npm run dev` and use Playwright MCP to visit `http://127.0.0.1:5173/` — capture the home page as `tests/artifacts/summaries/001-foundation-legacy-match.png` and verify it matches the live site screenshot. **Pass criterion**: the only diff vs. `main` is the dependency list; the rendered legacy is byte-identical.

**Agent B (parallel)**: `spawn_agent` for "multi-theme engine refactor". Take the stash's `ThemeContext.tsx` and refactor:
- Replace the hardcoded 6-theme list with the `ThemeDefinition[]` registry pattern.
- Implement the per-theme `TransitionConfig` type and the engine that reads it.
- Collapse the 6 DaisyUI themes down to 2 for now (`legacy`, `neo-dark`); wire them as DaisyUI `@plugin 'daisyui/theme'` blocks in `App.css` so adding a new theme is one new block + one registry entry.
- Add the **stitch's M3 color roles** as CSS variables for `neo-dark` so the Tailwind classes in the mocks (`bg-background`, `text-primary`, `border-surface-stroke`) resolve.
- The `useThemeTransition` hook reads `theme.defaultTransition` to know what to do next.

**Agent C (depends on A & B)**: `spawn_agent` for "theme bridge verification". Playwright MCP session:
- Visit `/`, verify `data-theme="legacy"`, screenshot.
- Programmatically `document.documentElement.setAttribute('data-theme', 'neo-dark')`, screenshot — verify the stitch design renders.
- Toggle back, screenshot — verify the legacy view is unchanged.
- Write `tests/artifacts/summaries/002-theme-engine.md` with all three screenshots + a note that future themes will be added via registry entries, not engine changes.

**Parallelism**: A and B run in parallel. C blocks on both.

---

## Phase 2 — Routing, Layout Shell & Navigation

**Goal**: Set up `react-router-dom` (from stash) with all 5 routes (`/`, `/about`, `/portfolio`, `/resume`, `/contact`) and the navigation chrome — keeping all 5 tabs visible. Rebuild `MainHeader.tsx` and add a mobile menu using the stitch's TopAppBar pattern. The 5 legacy tabs are surfaced as 5 nav items (Home, Details, Portfolio, Resume, Contact) since the user wants to keep all 5.

**Agent A**: `spawn_agent` for "routing + nav shell". New `components/TopAppBar.tsx` with 5 nav links using `react-router-dom`'s `NavLink`. Sticky top, backdrop-blur, primary-green 2px bottom border on active link. Mobile menu (hamburger) for `< md` viewports. New `components/BottomNav.tsx` is **deferred to Phase 3 if not needed for mobile** — confirm with user that top-app-bar + hamburger is enough for mobile, since the stitch's mobile bottom nav was designed for 4 items not 5.

**Agent B (depends on A)**: `spawn_agent` for "nav validation". Playwright MCP at 3 viewports (1440, 768, 375). Click each nav link — verify route changes, active border highlights correctly, no console errors. Capture to `tests/artifacts/summaries/003-routing-nav.md`.

---

## Phase 3 — Hero Section (stitch redesign as canonical)

**Goal**: Build the Hero per the **redesigned** stitch (left-aligned, status pill with animated ping, H1 with `inner workings` in primary italic, 2 CTAs, decorative `bg-primary/5 rounded-full blur-[100px]` top-left blob). No dashboard image (per stitch). The "Available for new opportunities" status pill is the only minor copy decision — default to the stitch copy, flag for user override.

**Agent A**: `spawn_agent` for "Hero component + responsive H1". New `components/sections/Hero.tsx` with the stitch markup, Geist font stack, `headline-lg-mobile md:display-xl` responsive H1, the two CTAs (Primary: `bg-primary-container`, Secondary: border with hover-primary). Wire the "Get in Touch" CTA to the existing `PortfolioContact` social links (mailto / LinkedIn / GitHub).

**Agent B (depends on A)**: `spawn_agent` for "Hero validation". Playwright MCP desktop + mobile. Verify the `animate-ping` on the status dot, H1 responsive swap at md breakpoint, button hover states (scale-[1.02] for primary, border-color for secondary). Capture console + screenshot to `tests/artifacts/summaries/004-hero.md`.

---

## Phase 4 — Bento Intro (the 3-card bento from the redesign)

**Goal**: 12-col grid with 3 glass cards. **Card A** (`md:col-span-7 lg:col-span-8`): "Powered by Passion and Enthusiasm" with the 120px decorative `bolt` icon (top-right, opacity-10), `neon-text-glow` on the H2. **Card B** (`md:col-span-5 lg:col-span-4`): bio with `auto_awesome` icon-tile, body copy, portrait + name + "Full Stack Engineer" label. **Card C** (`md:col-span-12`): tech stack logo-wall (PostgreSQL, React/Next.js, Node.js, AWS, OAuth 2.0 — 5 items, `opacity-60 grayscale hover:grayscale-0`).

**Content decision points to flag before this phase**:
- "Powered by Passion and Enthusiasm" H2 + body copy — keep from stitch, or rewrite per `VICTOR-REYES.md`?
- Bio body copy — current `home.description` ("I love leaning into new tech…") or the empty template from `VICTOR-REYES.md`?
- Tech stack list — stitch's 5 items or the user's actual stack?

**Agent A**: `spawn_agent` for "Bento components". New `components/sections/BentoIntro.tsx` + 3 child card components. The 3 card widths use the same `glass-card` class. The 5-item tech strip uses Material Symbols icon set (add `@material-symbols/font-400` dependency or inline the 5 SVG icons). Implement the `.glass-card` base CSS in `App.css` per the stitch: `background: rgba(30,30,30,0.5); backdrop-filter: blur(12px); border: 1px solid #2A2A2A; transition: all 0.3s cubic-bezier(0.4,0,0.2,1);` and the `:hover` rule (border `#00E676`, `box-shadow: 0 0 20px rgba(0,230,118,0.1)`).

**Agent B (depends on A)**: `spawn_agent` for "mouse-tracking glow implementation". The stitch sets `--mouse-x/y` on each `.glass-card` but never consumes them. Implement the consumption: a `::before` pseudo-element on `.glass-card` with `background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0,230,118,0.15), transparent 40%); pointer-events: none; position: absolute; inset: 0; border-radius: inherit;`. JS handler from the stitch (`mousemove` → `setProperty`) goes into a `lib/glassCardGlow.ts` module. The Playwright MCP test moves the cursor over a card and captures a screenshot showing the glow following the cursor.

---

## Phase 5 — Featured Projects (5-col glass-card grid, real images, UI-addable)

**Goal**: Replace `PortfolioProjects.tsx` for the `neo-dark` theme only. 5 cards in a responsive grid (3-col on lg, 2-col on md, 1-col on sm). Each card: real Cloudinary image (no icon placeholders, no gradient), `glass-card` styling, body with title (`headline-md text-primary`), body copy, 3-4 chip tags (`label-caps` over `bg-surface-container-high`), animated "View Project" link with `hover:gap-3` arrow. **All 5 real legacy projects** (TMRA.ai, TMRA Landing, Word Search Kingdom, Willows Wonderland, KnG Auto Detail). **UI-addable**: the admin panel's "Projects" tab (Phase 9) lets you add/edit/delete projects against the Supabase backend with localStorage fallback.

**Agent A**: `spawn_agent` for "FeaturedProjects rebuild + data layer". New `components/sections/FeaturedProjects.tsx` + `components/sections/ProjectCard.tsx`. Drives off `useProjects()` (already in stash) so Supabase/local-fallback is honored. The `useProjects` hook should:
- Read from Supabase if env vars are set.
- Fall back to a local `projects.json` (or the existing `src/data/projects.ts` array) otherwise.
- Expose `addProject`, `updateProject`, `deleteProject` for the admin panel.
- Use a stable schema (id, title, tagline, description, bullets[], imageUrl, projectUrl, tags[], order, createdAt, updatedAt).

**Agent B (depends on A)**: `spawn_agent` for "project validation". Playwright MCP at 3 viewports; hover over each card; capture screenshots; verify the image loads; verify chips have correct text per project; verify the link hover animates. Add a quick test: programmatically add a 6th project via the hook, verify it renders, then delete it. Confirms the add/delete API works without UI yet (UI comes in Phase 9).

---

## Phase 6 — Footer & Layout Polish (stitch redesign)

**Goal**: New footer with `v1.2.0` label-code + "© 2024 Victor Reyes. Engineered with precision." on left, GitHub/LinkedIn/Twitter/Source links on right. Replace the existing `Footer.tsx`. Gate on `data-theme="neo-dark"`.

**Agent A**: `spawn_agent` for "Footer + layout polish". New `components/Footer.tsx` per the stitch. Update `layouts/MainLayout.tsx` to render the new shell: `TopAppBar` (sticky) + main content (with `pt` to clear the bar) + `Footer` (mt-auto push to bottom). Verify scroll behavior doesn't break.

**Agent B (depends on A)**: `spawn_agent` for "final-pass validation". Playwright MCP: full page screenshots at 1440 / 768 / 375, scroll-to-bottom to verify layout integrity, verify footer links route correctly.

---

## Phase 7 — Transition Engine (the actual "glow-up" moment)

**Goal**: Wire the `useTransitionEngine` + `TransitionOverlay` from the stash to trigger the `legacy → neo-dark` swap on first visit. Per-theme transition config from Phase 1 means: the engine reads `legacyTheme.defaultTransition` to know the trigger (8s `time-delay` for now), then `legacy → neo-dark` becomes the active transition. Future themes can have their own `defaultTransition` block.

**Behavior spec**:
- First visit: `data-theme="legacy"` on mount. After 8s, transition fires.
- During transition: overlay animates over `durationMs` (1.8s default), glitch/scanline style. `data-theme` swaps `legacy` → `neo-dark` at the midpoint of the overlay. Overlay fades out.
- Theme must NOT persist to localStorage — transition replays on every fresh visit (per playbook pitfall).
- Within a session (no full reload), the transition doesn't re-fire unless the user manually triggers it via admin panel.

**Agent A**: `spawn_agent` for "transition wiring". Wire the stash's `useTransitionEngine` + `TransitionOverlay` into `App.tsx` with the 8s delay reading from `legacyTheme.defaultTransition`. Add a `localStorage` flag `transitionCompleted: 'true'` so subsequent navigations within the same session don't re-trigger. The `.transition-overlay` CSS (scanlines, glitch) lives in `App.css` per playbook Phase 3.

**Agent B (depends on A)**: `spawn_agent` for "transition validation". Playwright MCP: visit `/`, wait 9s, screenshot — must show the neo-dark theme. Refresh — must replay the transition. Programmatically clear `localStorage` and refresh — same behavior. Capture before/during/after screenshots to `tests/artifacts/summaries/007-transition-{before,during,after}.png`. Verify zero console errors during the swap.

---

## Phase 8 — Effects Palette, Admin Panel, Typewriter Ghost, Easter Eggs (re-validate from stash)

**Goal**: Confirm the stash's `useEffectsEngine`, `AdminPanel`, `useTypewriterGhost`/`TypewriterGhost`, `useEasterEgg` all still work after the new theme. The stash has these implemented; we need to verify they don't break under the new design AND implement the per-effect renderers that were stubs (per Playbook Phase 4: "Effects toggled but nothing renders").

**Agent A (parallel)**: `spawn_agent` for "effects palette - implement per-effect renderers". The stash defines 9 effect keys (`confetti`, `bubbles`, `matrix`, `particles`, `snow`, `fireworks`, `cursorTrail`, `godMode`, `chaosOverlay`) but only `confetti` and `fireworks` have real implementations. Implement the remaining 7:
- `bubbles`: CSS-animated `<div>` bubbles, created dynamically with `color-mix(in oklab, var(--color-primary) X%, transparent)` for theme reactivity.
- `matrix`: `<canvas>` overlay with `requestAnimationFrame` green-character rain loop, character set from `JetBrains Mono`.
- `particles`: Canvas random particles with `clip-path: circle()` fallback.
- `snow`: Bubbles variant with white circles + slow drift.
- `cursorTrail`: `mousemove` listener, spawns fading `<span>` elements positioned absolutely with theme-color tints.
- `godMode`: CSS filter + `box-shadow` golden glow on `html` root via a class toggle.
- `chaosOverlay`: `hue-rotate`, `contrast`, `saturate` CSS animation on root via class toggle.

**Agent B (parallel)**: `spawn_agent` for "admin panel + typewriter ghost + easter eggs". From the stash:
- `AdminPanel`: 5 tabs (Effects, Transitions, Projects, Debug, Secrets). The **Projects** tab is the UI for the `useProjects` hook from Phase 5 — add/edit/delete projects against Supabase or local fallback.
- `useTypewriterGhost`: rolling 32-char buffer, visible for 2400ms after last keystroke, IBM Plex Mono, primary-tinted glow.
- `useEasterEgg`: sequences `kpinc425` (admin unlock), `iddqd` (godMode), `idkfa` (chaosOverlay), `↑↑↓↓←→←→ba` (konami transition trigger).

**Agent C (depends on A & B)**: `spawn_agent` for "consolidation summary". Write `tests/artifacts/summaries/008-effects-admin-easter-eggs.md` with: which effects work, before/after admin-panel screenshots, all easter eggs confirmed via Playwright MCP `page.keyboard.type` calls.

---

## Phase 9 — Full Review (Bug Hunt, Architecture, Wiring)

**Goal**: A dedicated review agent audits the entire `neo-dark` branch for bugs, architectural smells, and wiring inconsistencies. This is the "after all phases finish, run a full review stage" the user specified.

**Agent**: `spawn_agent` for "full review". Tasks:
- Run `npm run lint` and `npm run build` — must both pass clean.
- Trace every component, prop, route, theme swap, and effect toggle end-to-end. List any unused props, dead branches, console.warns, missing key warnings.
- Check for theme tokens that **don't react to `data-theme` changes** (e.g. components still using `sx={{color: 'primary'}}` from Theme-UI instead of `text-primary` Tailwind class). Use the playbook's "Hardening" audit checklist verbatim.
- Verify all routes render their content under both `legacy` and `neo-dark` themes (we don't want a route that only works in one).
- Verify the `useTransitionEngine`'s cleanup is correct (no lingering event listeners, no overlay that won't unmount).
- Check the `package.json` and `yarn.lock` for phantom dependencies, version conflicts, and `engines` field.
- Verify `netlify.toml` settings match what the live site uses (NODE_VERSION etc.).
- Verify the `ThemeDefinition` registry actually allows N themes — try registering a fake 3rd theme in a test branch and confirm everything still works.
- Produce a `REVIEW.md` with: **MUST FIX** (blocks shipping), **SHOULD FIX** (tech debt), **NICE TO HAVE** (polish).

---

## Phase 10 — Post-Analysis (Standards, Tests, Quality)

**Goal**: The "post-analysis stage where a dedicated agent evaluates the implementation against the codebase standards, updates or adds tests, and corrects anything that fails linting, typing, runtime checks, or quality expectations" — per the user's spec.

**Agent A (parallel)**: `spawn_agent` for "lint + typecheck + build clean". Run all three. Fix any errors. Re-run until clean. Add the missing `test` script to `package.json` (the placeholder echo per testing infra recommendation, not a real test runner).

**Agent B (parallel)**: `spawn_agent` for "artifacts baseline + summary writing". Each phase above wrote its own summary; this agent reads them all, writes a top-level `tests/artifacts/summaries/010-final-validation.md` that aggregates pass/fail per phase, links to all the screenshots/traces, and is the canonical "what we built" doc. Also writes a `CHANGELOG.md` entry for the branch.

**Agent C (parallel)**: `spawn_agent` for "README update". Update `README.md` to reflect: the new design, the transition behavior, the secret codes, the dev mode, the Vite 8 / Tailwind v4 / DaisyUI v5 dependency chain, and instructions for running the project locally (`npm install --legacy-peer-deps`, `npm run dev`).

**Agent D (depends on A, B, C)**: `spawn_agent` for "merge prep + final smoke test". Run `npm run preview` against the production build, Playwright MCP through the full user journey: visit `/` (legacy) → wait for transition → see neo-dark → click Projects → click a project card → see Contact → enter Konami code. Capture the full journey as `tests/artifacts/summaries/010-final-journey.png` series. Verify zero console errors throughout. **Pass criterion**: ready to merge to `main` and deploy.

---

## Cross-Cutting Concerns

- **Legacy parity is sacred.** The `legacy` data-theme must render the current live site 1:1, including the pre-existing typos (`lifelime`, `Below of some`, `peices`, `backgrond` in `VRLogo.tsx:83`). The Playwright MCP validation in Phase 1 Agent A and Phase 9 enforces this.
- **`main` is not touched.** All work happens on `feat/neo-dark-glow-up`. `main` stays at `e371b4f`. The user merges when they're ready.
- **No CI added.** Validation is Playwright MCP per the existing protocol. The plan adds a `netlify.toml` and a `test` script placeholder, but no GitHub Actions.
- **No new test runner.** Vitest/Playwright Test is overkill for a presentational site. If pure logic modules emerge (e.g. a refined `useEasterEgg` sequence matcher), flagged as follow-up.
- **Multi-theme is forward-compatible.** Phase 1's `ThemeDefinition` registry is generic over N themes. Adding a new theme later is one `@plugin 'daisyui/theme'` block in `App.css` + one `themes.push(...)` entry + a `defaultTransition` config. The engine itself does not change.

---

## Relevant Files

**Legacy (untouched, on `main`)**
- `src/App.tsx` — minimal app shell, `localStorage` initial state
- `src/main.tsx` — ThemeUIProvider + createRoot
- `src/themes/mainTheme.ts` — current green/glass theme
- `src/index.css` — `:root` CSS vars, webkit scrollbar
- `src/App.css` — Google Fonts import
- `src/components/{MainHeader,Footer,VRLogo,VRLogoCard,VRLogo.css,PortfolioInfo,PortfolioInfoMenu,PortfolioInfoDetails,PortfolioProjects,PortfolioProject,SlandtedBackground,PortfolioResume,PortfolioContact}.{tsx,css}` — current look
- `src/layouts/MainLayout.tsx` — flex column with header + children + footer
- `index.html` — title, favicon, Google verification meta
- `package.json` — current minimal dep set
- `vite.config.ts` — current `react()` only
- `tsconfig.json`, `tsconfig.node.json`, `.eslintrc.cjs` — current strict lint/build

**Glow-Up Branch (new work, in `feat/neo-dark-glow-up`)**
- Stash-recovered (apply as-is, then re-validate): `src/context/ThemeContext.tsx`, `src/hooks/{useTransitionEngine,useEasterEgg,useTypewriterGhost,useEffectsEngine,useProjects}.ts`, `src/components/{AdminPanel,TransitionOverlay,TypewriterGhost}.tsx`, `src/data/projects.ts`, `src/lib/supabase.ts`
- New: `src/components/TopAppBar.tsx`, `src/components/sections/{Hero,BentoIntro,FeaturedProjects,ProjectCard}.tsx`, `src/lib/glassCardGlow.ts`, `src/themes/themeRegistry.ts`, `netlify.toml`
- Modified: `src/App.tsx`, `src/main.tsx`, `src/App.css`, `src/index.css`, `src/themes/mainTheme.ts` (bridge to DaisyUI vars), `src/components/{Footer,PortfolioInfo,PortfolioInfoDetails,PortfolioInfoMenu,PortfolioProjects,PortfolioProject,VRLogo,MainHeader}.{tsx,css}` (theme-conditional rendering), `package.json`, `vite.config.ts`
- New tests: `tests/artifacts/summaries/{000-baseline,001..010}-*.md` + their `tests/artifacts/screenshots/<timestamp>/` siblings

**Reference (read-only)**
- `_docs/stitch/synthesized_neo_dark_portfolio/DESIGN.md` — design system spec
- `_docs/stitch/victor_reyes_portfolio_redesigned_homepage/{code.html,screen.png}` — canonical "after" mock
- `_docs/stitch/victor_reyes_portfolio_desktop_homepage/{code.html,screen.png}` — older variant, reference only
- `_docs/GLOW-UP-PLAYBOOK.md` — phases 1-7 infra recipes (apply, but adapt to multi-theme model)
- `_docs/VICTOR-REYES.md` — content rewrite template (mostly empty)
- `stash@{0}` — the WIP transition work to apply

---

## Verification (End-to-End)

After all phases finish and the post-analysis stage approves, the branch is shippable when:

1. `npm run lint` passes (0 warnings, strict mode).
2. `npm run build` passes (typecheck + vite build).
3. `npm run preview` + Playwright MCP: full user journey works, zero console errors, all 5 routes render under both themes, transition plays once on first visit and not on same-session navigation.
4. `tests/artifacts/summaries/` has a clean progression from `000-baseline.md` to `010-final-journey.md`.
5. `REVIEW.md` has no **MUST FIX** items.
6. `main` is unchanged at `e371b4f`.
7. `git log feat/neo-dark-glow-up` shows clean, focused commits per phase.

---

## Agent Orchestration Map (Quick Reference)

| Phase | Agent(s) | Parallel? | Depends on |
|---|---|---|---|
| 0 — Worktree setup | 1 | — | — |
| 1 — Foundation + multi-theme engine | 3 (A, B, C) | A ∥ B; C after A & B | 0 |
| 2 — Routing + nav shell | 2 (A, B) | B after A | 1 |
| 3 — Hero | 2 (A, B) | B after A | 2 |
| 4 — Bento + glass cards | 2 (A, B) | B after A | 3 |
| 5 — Featured projects + data layer | 2 (A, B) | B after A | 4 |
| 6 — Footer + layout polish | 2 (A, B) | B after A | 5 |
| 7 — Transition engine | 2 (A, B) | B after A | 6 |
| 8 — Effects + admin + easter eggs | 3 (A, B, C) | A ∥ B; C after A & B | 7 |
| 9 — Full review | 1 | — | 8 |
| 10 — Post-analysis | 4 (A, B, C, D) | A ∥ B ∥ C; D after A, B, C | 9 |
