import type {
  Analysis,
  Competition,
  HighlightVideo,
  Match,
  Player,
  Team
} from "./types";

// ---------------------------------------------------------------------------
// Mock data layer for Phase 1.
//
// Every export here is `async` and returns data shaped exactly like the
// Prisma models in prisma/schema.prisma. When a real database is wired up,
// replace each function body with the matching `prisma.<model>...` call —
// the page components that call these functions do not need to change.
// ---------------------------------------------------------------------------

const competitions: Competition[] = [
  { id: "c1", name: "Premier League", slug: "premier-league", country: "England" },
  { id: "c2", name: "Champions League", slug: "champions-league" },
  { id: "c3", name: "La Liga", slug: "la-liga", country: "Spain" }
];

const teams: Team[] = [
  { id: "t1", name: "Arsenal", slug: "arsenal", shortName: "ARS", country: "England", crestInitial: "A" },
  { id: "t2", name: "Chelsea", slug: "chelsea", shortName: "CHE", country: "England", crestInitial: "C" },
  { id: "t3", name: "Liverpool", slug: "liverpool", shortName: "LIV", country: "England", crestInitial: "L" },
  { id: "t4", name: "Manchester City", slug: "manchester-city", shortName: "MCI", country: "England", crestInitial: "M" },
  { id: "t5", name: "Real Madrid", slug: "real-madrid", shortName: "RMA", country: "Spain", crestInitial: "R" },
  { id: "t6", name: "Barcelona", slug: "barcelona", shortName: "BAR", country: "Spain", crestInitial: "B" }
];

const players: Player[] = [
  { id: "p1", name: "Declan Rice", slug: "declan-rice", position: "Midfielder", teamSlug: "arsenal" },
  { id: "p2", name: "Cole Palmer", slug: "cole-palmer", position: "Forward", teamSlug: "chelsea" },
  { id: "p3", name: "Mohamed Salah", slug: "mohamed-salah", position: "Forward", teamSlug: "liverpool" },
  { id: "p4", name: "Erling Haaland", slug: "erling-haaland", position: "Forward", teamSlug: "manchester-city" },
  { id: "p5", name: "Jude Bellingham", slug: "jude-bellingham", position: "Midfielder", teamSlug: "real-madrid" }
];

function team(slug: string): Team {
  const found = teams.find((t) => t.slug === slug);
  if (!found) throw new Error(`Unknown team slug in mock data: ${slug}`);
  return found;
}

function competition(slug: string): Competition {
  const found = competitions.find((c) => c.slug === slug);
  if (!found) throw new Error(`Unknown competition slug in mock data: ${slug}`);
  return found;
}

const matches: Match[] = [
  {
    id: "m1",
    slug: "arsenal-vs-chelsea-2026-09-25",
    competition: competition("premier-league"),
    homeTeam: team("arsenal"),
    awayTeam: team("chelsea"),
    homeScore: 3,
    awayScore: 1,
    status: "FULL_TIME",
    kickoffAt: "2026-09-25T15:00:00.000Z",
    venue: "Emirates Stadium",
    dataSource: "football-data"
  },
  {
    id: "m2",
    slug: "liverpool-vs-manchester-city-2026-09-24",
    competition: competition("premier-league"),
    homeTeam: team("liverpool"),
    awayTeam: team("manchester-city"),
    homeScore: 2,
    awayScore: 2,
    status: "FULL_TIME",
    kickoffAt: "2026-09-24T19:30:00.000Z",
    venue: "Anfield",
    dataSource: "football-data"
  },
  {
    id: "m3",
    slug: "real-madrid-vs-barcelona-2026-09-28",
    competition: competition("la-liga"),
    homeTeam: team("real-madrid"),
    awayTeam: team("barcelona"),
    homeScore: null,
    awayScore: null,
    status: "SCHEDULED",
    kickoffAt: "2026-09-28T20:00:00.000Z",
    venue: "Santiago Bernabéu",
    dataSource: "football-data"
  }
];

const analyses: Analysis[] = [
  {
    id: "an1",
    slug: matches[0].slug,
    match: matches[0],
    headline: "Why the game changed in the second half",
    dek: "Arsenal's low block turned into a front-foot press after the hour mark — and Chelsea never adjusted.",
    heroImageQuery: "Arsenal players celebrating a goal at Emirates Stadium",
    videoEmbedUrl: undefined,
    keyMoments: [
      { kind: "FACT", text: "Arsenal led 1-0 at half-time through a 34th-minute header." },
      { kind: "OBSERVATION", text: "From the 58th minute, Arsenal's front three began pressing Chelsea's centre-backs in pairs rather than individually." },
      { kind: "INFERENCE", text: "That coordinated press appears to have forced the turnovers that led to Arsenal's second and third goals." }
    ],
    tacticalBreakdown: [
      { kind: "FACT", text: "Chelsea made two substitutions at the 63rd minute, bringing on a more defensive midfield pairing." },
      { kind: "OBSERVATION", text: "Chelsea's fullbacks sat noticeably deeper after the substitutions, reducing their width in possession." },
      { kind: "INFERENCE", text: "The reduced width may have made it easier for Arsenal to compress the pitch and win the ball back higher up." }
    ],
    publishedAt: "2026-09-25T18:10:00.000Z"
  },
  {
    id: "an2",
    slug: matches[1].slug,
    match: matches[1],
    headline: "Two title contenders, one point each — and no clear answer",
    dek: "A draw that settled nothing tactically: both sides created chances from the exact same pattern.",
    heroImageQuery: "Liverpool and Manchester City players contesting the ball at Anfield",
    keyMoments: [
      { kind: "FACT", text: "The match finished 2-2, with the equaliser coming in the 89th minute." },
      { kind: "OBSERVATION", text: "Both sides' goals came from quick transitions after a turnover in the opposition's midfield third." }
    ],
    tacticalBreakdown: [
      { kind: "FACT", text: "Both managers made like-for-like substitutions with roughly 20 minutes remaining." },
      { kind: "INFERENCE", text: "Neither side appeared willing to take the tactical risk needed to break the pattern, which likely produced the draw." }
    ],
    publishedAt: "2026-09-24T22:05:00.000Z"
  }
];

const highlights: HighlightVideo[] = [
  {
    id: "h1",
    title: "Arsenal 3-1 Chelsea | Highlights",
    channel: "Premier League",
    publishedAt: "2026-09-25T17:40:00.000Z",
    durationLabel: "9:12",
    matchSlug: matches[0].slug,
    competition: "Premier League"
  },
  {
    id: "h2",
    title: "Liverpool 2-2 Man City | Every Goal",
    channel: "Premier League",
    publishedAt: "2026-09-24T21:50:00.000Z",
    durationLabel: "6:03",
    matchSlug: matches[1].slug,
    competition: "Premier League"
  },
  {
    id: "h3",
    title: "Bellingham's best moments this season",
    channel: "Real Madrid Official",
    publishedAt: "2026-09-23T10:00:00.000Z",
    durationLabel: "4:47",
    competition: "La Liga"
  }
];

export async function getHomeFeed() {
  return {
    featured: analyses[0],
    latestMatches: matches,
    latestAnalysis: analyses,
    latestHighlights: highlights,
    trending: analyses,
    featuredTeams: teams.slice(0, 4),
    featuredPlayers: players
  };
}

export async function getMatches() {
  return matches;
}

export async function getMatch(slug: string) {
  return matches.find((m) => m.slug === slug) ?? null;
}

export async function getAnalysis(slug: string) {
  return analyses.find((a) => a.slug === slug) ?? null;
}

export async function getAnalysesForMatch(matchSlug: string) {
  return analyses.filter((a) => a.match.slug === matchSlug);
}

export async function getTeams() {
  return teams;
}

export async function getTeam(slug: string) {
  return teams.find((t) => t.slug === slug) ?? null;
}

export async function getMatchesForTeam(teamSlug: string) {
  return matches.filter(
    (m) => m.homeTeam.slug === teamSlug || m.awayTeam.slug === teamSlug
  );
}

export async function getPlayers() {
  return players;
}

export async function getPlayer(slug: string) {
  return players.find((p) => p.slug === slug) ?? null;
}

export async function getPlayersForTeam(teamSlug: string) {
  return players.filter((p) => p.teamSlug === teamSlug);
}

export async function getHighlights() {
  return highlights;
}
