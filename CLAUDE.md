# Football Stats Dashboard

## What this is & why
A learning pet-project for studying React and building a portfolio piece for the **Frontend Engineer (TypeScript/React) role at Softnetix** (HTP resident). The stack mirrors the job requirements 1:1: an "information aggregation and analysis system" built with React + Redux + **Redux Observable (RxJS)**.

Topic — football (the owner's personal interest). Goal: practice a modern enterprise React stack on real data.

## Features (target)
- **League table** — standings for a selected league (position, points, form).
- **Player statistics** — top scorers, assists, cards.
- **Matches** — schedule, results, match details.
- **Live score via WebSocket** — real-time score updates (key feature: showcases Observable/RxJS work, which the job values).

## Data sources
- **REST API: football-data.org** (free tier).
  - Requires an API key (`X-Auth-Token` header), stored in `.env` as `VITE_FOOTBALL_DATA_TOKEN`, never committed.
  - Free plan: limited leagues + rate limit (~10 requests/min) — handle in epics (throttle/debounce, cache in store).
- **WebSocket** for live score — source TBD (football-data.org has no WS on free tier; likely a third-party WS provider or a mock server for learning).

## Stack (current as of 2026)
- **React 19.2** + react-dom 19.2
- **TypeScript ~6.0**
- **Vite 8** + `@vitejs/plugin-react` (Oxc)
- **Redux Toolkit 2.12** + react-redux 9 — store and feature slices
- **redux-observable 3 + RxJS 7.8** — epics for all side effects (HTTP, WebSocket)
- **react-router-dom 7.17** — routing
- **Tailwind CSS v4** (`@tailwindcss/vite`) — styling, focus on Flexbox/Grid and pixel-perfect
- **ESLint 10** + typescript-eslint 8

## Architecture principles (aligned with the job)
- All async logic goes through **redux-observable epics**, not thunks. Demonstrate RxJS operators: `switchMap`, `debounceTime`, `catchError`, `retry`, `combineLatest`, `webSocket`.
- Strict TypeScript: typed `useAppSelector` / `useAppDispatch`, types for API responses.
- Feature-slice store organization.
- Clean Flexbox/Grid layout (the job requires pixel-perfect).
- Infra goal: `git init` + **GitLab CI** (`.gitlab-ci.yml`: lint + build) — the job uses GitLab CI/CD.

## Project structure (FSD-lite)
Feature-Sliced Design, started in a lightweight form — add `widgets`/`processes` layers later only when needed, don't create layers preemptively.

```
src/
  app/        # store, Provider, router, global styles
  pages/      # LeagueTablePage, MatchesPage, PlayersPage — compose screens from features/entities
  entities/   # business entities: team, player, match (types + model/slice + basic UI cards)
  features/   # user actions: select-league, live-score-subscription
  shared/     # api/ (football-data.org client), ui/ (buttons, spinners), lib/ (helpers), config/
```

Key rule: **imports only flow "down" the layers** (`pages → features → entities → shared`); lower layers never import from upper ones. This discipline is the main payoff of FSD.

Rationale: matches the job's "feature-slice" wording and is the de-facto standard in CIS enterprise React; "lite" keeps focus on learning React/Redux/RxJS instead of over-engineering the file layout.

## Conventions
- **All project files and code in English** (comments, identifiers, docs, commit messages).
- The user writes all code; Claude only reviews and mentors (does not scaffold/write code unless asked).

## Current state
At the time this file was created — a clean Vite template: `App.tsx` just renders `App`, dependencies are installed but not wired up (no store, epics, or routing). Built from scratch.

## Commands
- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build`
- `npm run lint` — ESLint
- `npm run preview` — preview production build

## Job context (Softnetix)
Requirements: 1+ year commercial React+Redux experience; ES6+/TS; deep understanding of async (Callback, Event Loop, Promise, Observable); CSS Flexbox/Grid + pixel-perfect; Chrome DevTools (debug, performance, a11y).
Nice to have: **Redux-Epic (RxJS)**, functional programming, Game Dev experience.
Job's project: two apps (Admin + Client), data aggregation/analysis, GitLab CI/CD, no legacy.
