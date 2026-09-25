export type MatchStatus = "SCHEDULED" | "LIVE" | "FULL_TIME" | "POSTPONED" | "CANCELLED";

export interface Team {
  id: string;
  name: string;
  slug: string;
  shortName?: string;
  country?: string;
  crestInitial: string; // used for the placeholder crest mark until real logos exist
}

export interface Player {
  id: string;
  name: string;
  slug: string;
  position: string;
  teamSlug: string;
}

export interface Competition {
  id: string;
  name: string;
  slug: string;
  country?: string;
}

export interface Match {
  id: string;
  slug: string;
  competition: Competition;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number | null;
  awayScore: number | null;
  status: MatchStatus;
  kickoffAt: string; // ISO
  venue?: string;
  dataSource: "football-data" | "manual" | "youtube-inferred";
}

export type EvidenceKind = "FACT" | "OBSERVATION" | "INFERENCE";

export interface AnalysisPoint {
  kind: EvidenceKind;
  text: string;
}

export interface Analysis {
  id: string;
  slug: string;
  match: Match;
  headline: string;
  dek: string; // one-line summary shown on cards
  heroImageQuery: string; // subject description used for editorial imagery
  videoEmbedUrl?: string;
  keyMoments: AnalysisPoint[];
  tacticalBreakdown: AnalysisPoint[];
  publishedAt: string; // ISO
}

export interface HighlightVideo {
  id: string;
  title: string;
  channel: string;
  publishedAt: string; // ISO
  durationLabel: string;
  matchSlug?: string;
  competition?: string;
}
