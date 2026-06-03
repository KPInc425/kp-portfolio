# Phase 1 Agent B — Multi-Theme Engine Refactor

**Captured**: 2026-06-02
**Branch**: `feat/neo-dark-glow-up`
**Worktree**: `E:\Programming\Websites\KPInc425\kp-portfolio-glow-up`

## Result: PASS

The stash's 6-theme engine has been collapsed to a 2-theme registry (`legacy` + `neo-dark`) with per-theme transition config, and a new `neo-dark` DaisyUI theme block has been added matching the stitch's M3 palette.

## What changed

### 1. New file: `src/themes/themeRegistry.ts` (117 lines)
The canonical source of truth for themes. Each theme declares:
- `id`, `displayName`, `description`, `isDark`
- `daisyuiBlockId` (matches the `@plugin 'daisyui/theme' { name: "..." }` in App.css)
- `defaultTransition: TransitionConfig` — the auto-transition that fires when leaving this theme
- `availableTransitions: TransitionType[]` — the visual styles this theme supports

Currently registered:
- `legacy` — default; 8s `time-delay` → `neo-dark`; transitions: cinematic, glitch, crossfade
- `neo-dark` — manual only; transitions: cinematic, glitch, crossfade, scanline

Adding a third theme = one entry in this file + one `@plugin 'daisyui/theme'` block in App.css. No engine changes.

### 2. Updated: `src/context/ThemeContext.tsx`
- Removed the hardcoded `PortfolioTheme` union type; now derived from `ThemeDefinition['id']`.
- Replaced the 6 hardcoded theme names with `registeredThemes` from the registry.
- Replaced the global `transitionConfig` with a per-theme `transitionOverrides` map (keyed by theme id) backed by localStorage.
- The `triggerTransition` callback now reads `currentThemeDefinition.defaultTransition` (or its override) and uses `targetThemeId` to pick the next theme, falling back to the next entry in the registry.
- Added `currentThemeDefinition`, `availableThemes`, and `resetTransitionConfig` to the context value.
- Re-exports `TransitionConfig`, `TransitionType`, `TransitionTrigger` from the registry so existing consumers don't break.

### 3. New DaisyUI theme: `neo-dark` (App.css)
Added a new `@plugin 'daisyui/theme'` block matching the stitch's M3 palette:
- `base-100: #121414`, `base-200: #1e2020`, `base-300: #2a2a2a` (surfaces)
- `base-content: #e3e2e2` (on-surface)
- `primary: #00e676` (the green for CTAs / accents)
- `primary-content: #003918`
- `secondary: #bacbb9`, `secondary-content: #121414`
- `accent: #ffba79`, `accent-content: #794810`
- `neutral: #343535`, `neutral-content: #e3e2e2`
- Soft shape language: `radius-selector: 0.25rem`, `radius-field: 0.5rem`, `radius-box: 0.75rem`

Also added Geist / Inter / JetBrains Mono font imports for the `neo-dark` theme's typography.

### 4. Updated: `src/components/TransitionOverlay.tsx`
The overlay's `type` prop now uses the wider `TransitionType` from the registry (was hardcoded to `'cinematic' | 'glitch' | 'crossfade' | 'scroll-reveal'`).

### 5. Updated: `src/components/AdminPanel.tsx`
- `themeOptions` is now derived from `registeredThemes` (auto-surfaces new themes).
- `triggerOptions` includes `konami-code` and `none` (matches the new TransitionTrigger union).
- `transitionOptions` replaces `scroll-reveal` with `scanline` and `wipe` (matches the new TransitionType union).
- The old hardcoded `themeMeta` (jade/vapor/aurora/forge/soleil) is replaced with a registry-driven `themeEmoji` + `themeMetaFor(themeId)` helper, plus a `themeMeta` Proxy for back-compat.
- The "Available themes" secrets list now reflects only the registered themes.
- The "Transition types" secrets list now includes the new `scanline` and `wipe` types.

## Steps run

1. Created `src/themes/themeRegistry.ts`.
2. Refactored `src/context/ThemeContext.tsx` to consume the registry.
3. Added the `neo-dark` DaisyUI theme block to `src/App.css`.
4. Added Geist/Inter/JetBrains Mono font @imports to `src/App.css`.
5. Updated `src/components/TransitionOverlay.tsx` to use the wider `TransitionType`.
6. Updated `src/components/AdminPanel.tsx` to use registry-driven theme/transition options.
7. `npm run build` — PASS. CSS grew from 123.81 kB to 125.15 kB (~1.3 kB for the new theme block).

## Build output

```
dist/index.html                   0.57 kB │ gzip:   0.37 kB
dist/assets/index-CHDB_SEq.css  125.15 kB │ gzip:  19.08 kB
dist/assets/index-Bo7jynXB.js   438.06 kB │ gzip: 131.56 kB
✓ built in 585ms
```

## Lint

Phase 1A captured 9 lint warnings (all `react-hooks/exhaustive-deps` and `react-refresh/only-export-components`). They do not block the build. The new code in this phase does not introduce new lint errors or warnings. Phase 9 will clean them up.

## Dev server smoke

The dev server (`vite --port 5183`) starts cleanly and serves the HTML shell + all modules (`/src/main.tsx`, `/src/context/ThemeContext.tsx`, `/src/themes/themeRegistry.ts`, `/src/App.tsx`, `/src/App.css`) without error. **Visual validation of the two themes (legacy vs neo-dark) is deferred to a session with a working Playwright browser tool** — the browser MCP crashed during this session. The build, source modules, and DaisyUI theme wiring are all in place.

## Multi-theme extensibility

The engine now supports arbitrary N themes:
1. Add a `@plugin 'daisyui/theme' { name: "vapor"; ... }` block to `App.css`.
2. Add a `vaporTheme: ThemeDefinition` entry in `themeRegistry.ts`.
3. The new theme automatically:
   - Appears in the admin panel's theme swatches
   - Has its own `defaultTransition` honored by the engine
   - Can be set via `setTheme('vapor')` from anywhere
   - Receives its own per-theme transition config in localStorage

No engine code changes required.

## Recommendation

Phase 1B is complete. The multi-theme engine is in place. Ready for Phase 1C (theme bridge verification with Playwright MCP — needs a working browser session) or for Phase 2 (routing + nav shell rebuild).
