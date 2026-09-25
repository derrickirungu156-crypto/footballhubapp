# Deployment

## Local

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

## Vercel

1. Create a new Vercel project from this repo (replacing the existing
   `naustric-crypto/footballhub` project, or as a new project you then
   repoint your domain to).
2. Provision a managed Postgres database (Vercel Postgres, Neon, or
   Supabase all work) and copy its connection string.
3. In the Vercel project's Environment Variables, set every key from
   `.env.example` for **Production** and **Preview** separately:
   - `DATABASE_URL`
   - `FOOTBALLHUB_BASE_URL` — your real production URL
   - `ANALYST_STUDIO_URL`, `FOOTBALLHUB_STUDIO_WEBHOOK_SECRET` — once
     Phase 4 exists
   - `FOOTBALL_API_KEY`, `FOOTBALL_API_BASE_URL` — optional, only needed
     once a structured data provider is added
4. Deploy. Run `npx prisma migrate deploy` against the production
   database as part of your build or as a one-off release step.
5. Point your real domain at the new Vercel project, then decommission
   the old `footballhub-nine.vercel.app` deployment once you've verified
   the new site.

## What's intentionally not here yet

No background job runner, no OAuth callback routes, no media storage
config — those belong to Analyst Studio and later phases. Don't add
`YOUTUBE_CLIENT_SECRET`-style values to this project; this app never
holds platform credentials.
