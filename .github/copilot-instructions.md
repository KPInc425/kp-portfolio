# Copilot Testing Rules (Playwright MCP Required)

Copilot must **always test while building**. Every change must be validated through **Playwright MCP** with screenshots, logs, and traces saved.

## Core Requirements

- **Run Playwright MCP tests for every feature, fix, and refactor.**
- **Capture screenshots** for all major steps and every failure.
- **Save logs, traces, and screenshots** to `tests/artifacts/`.
- **Interactively “play” the app** via MCP to verify real user flows.
- **Summarize each test session** in a short Markdown note.

## Copilot Behavior

- Always propose or update **matching Playwright tests** when generating code.
- Validate fixes by **reproducing issues via MCP** and attaching artifacts.
- Use **clear selectors**, step-by-step actions, and before/after screenshots.
- Re-run failures with **tracing enabled** and store the trace.

## Artifacts

- `tests/artifacts/screenshots/<timestamp>/<test>/`
- `tests/artifacts/traces/<timestamp>/<test>.zip`
- `tests/artifacts/logs/<timestamp>/<test>.log`
- `tests/artifacts/summaries/<timestamp>.md`

## Definition of Done

A change is complete only when:

- A Playwright MCP test exists and passes.
- Screenshots, logs, and traces are stored.
- A summary is written.
