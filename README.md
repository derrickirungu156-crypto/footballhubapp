# FootballHub

> See the game differently.

The public FootballHub website: matches, teams, players and full-length
analysis. This is Phase 1 of the FootballHub ecosystem — the standalone
site with real routes and a real (but currently mock-backed) data layer,
ready to wire up to Postgres and, later, to the Analyst Studio publishing
API.

This replaces the earlier `naustric-crypto/footballhub` prototype.

## What's in Phase 1

- Next.js 15 (App Router) + TypeScript + Tailwind, no component kit
  dependency yet — hand-built components in `src/components`.
- Pages: home, `/matches`, `/matches/[slug]`, `/teams`, `/teams/[slug]`,
  `/players`, `/players/[slug]`, `/analysis/[slug]`, `/highlights`,
  `/news`, `/search`.
- A Prisma schema (`prisma/schema.prisma`) covering competitions, teams,
  players, matches and analyses — the core tables the rest of the spec
  builds on.
- `src/lib/data.ts` currently returns typed sample data shaped like the
  Prisma models. A site-wide notice identifies these records as unverified
  examples; they must not be treated as current results or reporting.

## Not in Phase 1 yet

YouTube discovery, the Analyst Studio app, AI analysis, content
generation, OAuth/publishing, video processing, analytics, and the
Studio↔FootballHub sync API are later phases — see `ARCHITECTURE.md` and
the phase breakdown at the end of this file. Building all of that at once
isn't realistic to hand you as a finished, tested product in one pass;
each phase is its own scoped piece of work.

## Getting started

```bash
npm install
cp .env.example .env
# point DATABASE_URL at a real Postgres instance, then:
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

The current pages render clearly labeled sample data and do not query the
database yet. Configuring Postgres alone will not replace those samples;
the data layer still needs to be wired to Prisma before verified content
can be published.

## Swapping mock data for Prisma

Every function in `src/lib/data.ts` (`getHomeFeed`, `getMatch`,
`getTeam`, etc.) is written as `async` already and returns the same
shape as the Prisma models. Replace each function body with the
matching `prisma.<model>.findMany/findUnique(...)` call — the page
components don't need to change.

## Phases (full roadmap)

1. **This repo** — FootballHub public site on mock data
2. YouTube discovery + video/match database
3. Analyst Studio app + AI analysis + content generator
4. FootballHub↔Studio publishing API (this repo gains real DB writes)
5. YouTube OAuth + publishing
6. Instagram OAuth + publishing
7. Media storage + video processing for authorized footage
8. Analytics + UTM tracking
9. Security hardening, SEO, mobile QA, production deploy

## Deploying

Same as before: a Vercel project pointed at this repo, with the env vars
in `.env.example` set for Preview and Production. See `DEPLOYMENT.md`.
