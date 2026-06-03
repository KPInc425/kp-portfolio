# Phase 9 — Full Review: feat/neo-dark-glow-up

**Reviewed**: 2026-06-02  
**Branch**: `feat/neo-dark-glow-up`  
**Base**: `main@e371b4f` (clean, unchanged)

## Build
- `npm run build` — **PASS**. Vite 8, 132 modules, 456.54 kB JS, 125.15 kB CSS.
- `npm run lint` — **PASS** (0 errors, 9 warnings below warning threshold).

## Lint Warnings (9, all pre-existing from stash)
| # | File | Warning |
|---|---|---|
| 1 | `VRLogo.tsx:19` | `useEffect` missing dependency `adjustSize` |
| 2 | `ThemeContext.tsx:177` | `react-refresh/only-export-components` — exports Provider + hook |
| 3-9 | `useEffectsEngine.ts:296-338` (7) | `ref` value may have changed in cleanup function |

None are new to this branch. They were in the stash. Fix deferred to a lint cleanup pass.

## Architecture Audit

### Theme Registry ✓
- `src/themes/themeRegistry.ts` — single source of truth. N-theme generic.
- Adding a theme = one entry here + one `@plugin 'daisyui/theme'` block in App.css.
- Per-theme `defaultTransition` correctly wired to engine.

### Context ✓
- `ThemeContext.tsx` consumes registry, provides per-theme overrides via localStorage.
- `theme` is NOT persisted, so the legacy→neo-dark transition replays every visit.

### Routing ✓
- `react-router-dom` v6 with 5 routes (`/`, `/about`, `/portfolio`, `/resume`, `/contact`).
- Both `legacy` (lon storage initial state) and `neo-dark` (Router-driven tab state) work.

### Conditionally rendered sections ✓
- **neo-dark**: `TopAppBar` + `Hero` + `BentoIntro` + `FeaturedProjects` + `NeoDarkFooter`.
- **legacy**: `MainHeader` + `VRLogoCard` + `PortfolioInfo` + `PortfolioProjects` + `LegacyFooter`.

### Effects ✗ (7 of 9 are stubs)
- `confetti` — works (uses canvas-confetti).
- `fireworks` — works (uses canvas-confetti with spread).
- `bubbles`, `matrix`, `particles`, `snow`, `cursorTrail`, `godMode`, `chaosOverlay` — stubs that need canvas/DOM renderer implementation.

### Stash files pending ✓
14 modified files (`package.json`, `yarn.lock`, `vite.config.ts`, `mainTheme.ts`, `index.css`, `main.tsx`, `VRLogo.tsx`, `VRLogo.css`, `MainHeader.tsx`, `PortfolioInfo.tsx`, `PortfolioInfoDetails.tsx`, `PortfolioInfoMenu.tsx`, `PortfolioProject.tsx`, `PortfolioProjects.tsx`) remain uncommitted. These are the stash's updates to the legacy components (Theme-UI → DaisyUI var bridge, etc.) and need review.

## MUST FIX
- None. Build passes, lint passes, legacy parity confirmed.

## SHOULD FIX
- 7 effect stubs need rendering implementations
- Stash's `useEffectsEngine.ts` ref warnings need fixing
- `_dev_tmp/` should be gitignored and removed

## NICE TO HAVE
- Add `test` script placeholder to package.json
- Add mouse-tracking glow to glass cards (CSS only, no JS needed for MVP)
- Mobile bottom nav (deferred: current TopAppBar responds via `display: flex` at all breakpoints — mobile works but no dedicated bottom nav yet)
