import Link from "next/link";
import type { Analysis } from "@/lib/types";

export default function Hero({ featured }: { featured: Analysis }) {
  const { match } = featured;

  return (
    <section className="rule border-b">
      <div className="container-edit grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm text-floodlight-400">
            {match.competition.name} · {match.homeTeam.name} {match.homeScore}–{match.awayScore} {match.awayTeam.name}
          </p>
          <h1 className="mt-3 max-w-xl text-4xl font-bold leading-[1.1] text-mist-100 sm:text-5xl">
            {featured.headline}
          </h1>
          <p className="mt-5 max-w-lg text-base text-mist-300">{featured.dek}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/analysis/${featured.slug}`}
              className="rounded-md bg-floodlight-500 px-5 py-3 text-sm font-semibold text-pitch-950 transition-colors hover:bg-floodlight-400"
            >
              Read the analysis
            </Link>
            <Link
              href={`/matches/${match.slug}`}
              className="rounded-md border border-pitch-600 px-5 py-3 text-sm font-medium text-mist-100 transition-colors hover:border-mist-500"
            >
              Match centre
            </Link>
          </div>
        </div>

        <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-pitch-700 bg-gradient-to-br from-pitch-800 via-pitch-900 to-pitch-950 px-6 text-center text-sm text-mist-500">
          {featured.heroImageQuery}
        </div>
      </div>
    </section>
  );
}
