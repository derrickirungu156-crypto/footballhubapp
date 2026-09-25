import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTeam, getMatchesForTeam, getPlayersForTeam } from "@/lib/data";
import MatchCard from "@/components/cards/MatchCard";
import PlayerCard from "@/components/cards/PlayerCard";

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const team = await getTeam(params.slug);
  if (!team) return { title: "Team not found" };
  return { title: team.name, description: `Results, squad and analysis for ${team.name}.` };
}

export default async function TeamDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const teamData = await getTeam(params.slug);
  if (!teamData) notFound();

  const [matches, squad] = await Promise.all([
    getMatchesForTeam(teamData.slug),
    getPlayersForTeam(teamData.slug)
  ]);

  return (
    <div className="container-edit py-12">
      <div className="flex items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-pitch-700 text-2xl font-semibold text-mist-100">
          {teamData.crestInitial}
        </span>
        <div>
          <h1 className="text-3xl font-bold text-mist-100">{teamData.name}</h1>
          {teamData.country && <p className="text-mist-500">{teamData.country}</p>}
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-mist-100">Matches</h2>
        {matches.length === 0 ? (
          <p className="mt-4 rounded-lg border border-pitch-700 bg-pitch-900 p-6 text-mist-500">
            No matches on file yet.
          </p>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {matches.map((m) => (
              <MatchCard key={m.id} match={m} />
            ))}
          </div>
        )}
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-mist-100">Squad</h2>
        {squad.length === 0 ? (
          <p className="mt-4 rounded-lg border border-pitch-700 bg-pitch-900 p-6 text-mist-500">
            No squad data on file yet.
          </p>
        ) : (
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {squad.map((p) => (
              <PlayerCard key={p.id} player={p} />
            ))}
          </div>
        )}
      </section>

      <div className="mt-12">
        <Link href="/teams" className="text-sm text-floodlight-400 hover:text-floodlight-500">
          ← Back to all teams
        </Link>
      </div>
    </div>
  );
}
