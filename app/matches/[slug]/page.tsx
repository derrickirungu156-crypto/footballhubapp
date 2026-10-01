import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getMatch, getAnalysesForMatch } from "@/lib/data";
import { formatKickoff, scoreLabel } from "@/lib/utils";
import AnalysisCard from "@/components/cards/AnalysisCard";

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const match = await getMatch(slug);
  if (!match) return { title: "Match not found" };
  return {
    title: `${match.homeTeam.name} vs ${match.awayTeam.name}`,
    description: `${match.competition.name}: ${match.homeTeam.name} vs ${match.awayTeam.name} — score, analysis and video.`
  };
}

export default async function MatchDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const match = await getMatch(slug);
  if (!match) notFound();

  const analyses = await getAnalysesForMatch(match.slug);

  return (
    <div className="container-edit py-12">
      <p className="text-sm text-mist-500">
        {match.competition.name} · {formatKickoff(match.kickoffAt)}
        {match.venue ? ` · ${match.venue}` : ""}
      </p>

      <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-6 rounded-lg border border-pitch-700 bg-pitch-900 p-8">
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pitch-700 text-lg font-semibold">
            {match.homeTeam.crestInitial}
          </span>
          <p className="mt-3 font-medium text-mist-100">{match.homeTeam.name}</p>
        </div>
        <p className="text-3xl font-bold text-mist-100">
          {scoreLabel(match.homeScore, match.awayScore)}
        </p>
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pitch-700 text-lg font-semibold">
            {match.awayTeam.crestInitial}
          </span>
          <p className="mt-3 font-medium text-mist-100">{match.awayTeam.name}</p>
        </div>
      </div>

      <p className="mt-3 text-xs text-mist-700">
        {match.status === "SCHEDULED" ? "Kickoff not yet played" : "Full time"} · source: {match.dataSource}
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-mist-100">Analysis</h2>
        {analyses.length === 0 ? (
          <p className="mt-4 rounded-lg border border-pitch-700 bg-pitch-900 p-6 text-mist-500">
            No analysis published for this match yet.
          </p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {analyses.map((a) => (
              <AnalysisCard key={a.id} analysis={a} />
            ))}
          </div>
        )}
      </section>

      <div className="mt-12">
        <Link href="/matches" className="text-sm text-floodlight-400 hover:text-floodlight-500">
          ← Back to all matches
        </Link>
      </div>
    </div>
  );
}
