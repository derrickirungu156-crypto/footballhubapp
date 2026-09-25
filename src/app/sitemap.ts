import type { MetadataRoute } from "next";
import { getMatches, getTeams, getPlayers, getHomeFeed } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.FOOTBALLHUB_BASE_URL ?? "http://localhost:3000";
  const [matches, teams, players, { latestAnalysis }] = await Promise.all([
    getMatches(),
    getTeams(),
    getPlayers(),
    getHomeFeed()
  ]);

  const staticRoutes = ["", "/matches", "/teams", "/players", "/highlights", "/analysis", "/news"].map(
    (path) => ({ url: `${base}${path}`, lastModified: new Date() })
  );

  return [
    ...staticRoutes,
    ...matches.map((m) => ({ url: `${base}/matches/${m.slug}`, lastModified: new Date() })),
    ...teams.map((t) => ({ url: `${base}/teams/${t.slug}`, lastModified: new Date() })),
    ...players.map((p) => ({ url: `${base}/players/${p.slug}`, lastModified: new Date() })),
    ...latestAnalysis.map((a) => ({ url: `${base}/analysis/${a.slug}`, lastModified: new Date(a.publishedAt) }))
  ];
}
