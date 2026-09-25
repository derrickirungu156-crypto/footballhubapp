# Architecture

## Where this fits in the full ecosystem

```
YOUTUBE ──▶ ANALYST STUDIO (Phase 3+) ──▶ FOOTBALLHUB (this repo) ──▶ FANS
              discovery, AI analysis,       matches, teams, players,
              content generation,           analysis pages, search
              publishing
```

This repo is the **public read surface** of the ecosystem. It never talks
to YouTube, Instagram, or an AI provider directly — that all happens in
Analyst Studio. FootballHub's job is to render match/team/player/analysis
data fast, and (from Phase 4 onward) accept signed publish requests from
Studio.

## Layers in this repo

- `src/app` — routes (App Router). Each route is a server component that
  calls into `src/lib/data.ts` and renders — no data-fetching logic lives
  in components.
- `src/lib/data.ts` — the only place that knows where match/team/player/
  analysis data comes from. Currently mock data; becomes Prisma queries
  without touching any page.
- `src/lib/types.ts` — shapes shared across the whole app, mirroring
  `prisma/schema.prisma` one-to-one so the swap is mechanical.
- `src/components` — presentational only; no fetching.

## Data model

See `prisma/schema.prisma`. Phase 1 covers `Competition`, `Team`,
`Player`, `Match`, `Analysis` — enough for every route in this repo.
Later phases add `YoutubeChannel`, `YoutubeVideo`, `MediaAsset`,
`ContentItem`, `SocialAccount`, `SocialPublication`, `OAuthCredential`,
`AnalyticsEvent`, `PublishingJob`, `AuditLog` (see the full spec) — those
live in Analyst Studio's schema and are synced into this database via the
Phase 4 publishing API, not queried directly from here.

## Fact / Observation / Inference

Analysis content distinguishes three kinds of claim (`src/lib/types.ts`
→ `EvidenceKind`): `FACT` (confirmed by structured data), `OBSERVATION`
(visible in footage), `INFERENCE` (reasoned interpretation). The
`/analysis/[slug]` page renders each with a distinct label — this is a
product requirement, not just styling, so keep it when wiring in
AI-generated content from Studio: never let inference render as fact.

## What Phase 4 adds here

- A signed `POST /api/publish` route that accepts an analysis payload
  from Analyst Studio, verified against `FOOTBALLHUB_STUDIO_WEBHOOK_SECRET`.
- Real Prisma writes instead of the mock data module.
- Revalidation of the affected static routes (`revalidatePath`).
