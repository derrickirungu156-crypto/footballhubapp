import Link from "next/link";
import type { Match } from "@/lib/types";
import { formatKickoff, scoreLabel } from "@/lib/utils";

function TeamRow({ name, crestInitial, score }: { name: string; crestInitial: string; score: number | null }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pitch-700 text-xs font-semibold text-mist-100">
          {crestInitial}
        </span>
        <span className="text-sm text-mist-100">{name}</span>
      </div>
      {score !== null && <span className="text-sm font-semibold text-mist-100">{score}</span>}
    </div>
  );
}

export default function MatchCard({ match }: { match: Match }) {
  return (
    <Link
      href={`/matches/${match.slug}`}
      className="block rounded-lg border border-pitch-700 bg-pitch-900 p-5 transition-colors hover:border-pitch-600"
    >
      <div className="mb-4 flex items-center justify-between text-xs text-mist-500">
        <span>{match.competition.name}</span>
        <span>{match.status === "SCHEDULED" ? formatKickoff(match.kickoffAt) : match.status.replace("_", " ")}</span>
      </div>
      <div className="space-y-2">
        <TeamRow name={match.homeTeam.name} crestInitial={match.homeTeam.crestInitial} score={match.homeScore} />
        <TeamRow name={match.awayTeam.name} crestInitial={match.awayTeam.crestInitial} score={match.awayScore} />
      </div>
      {match.status !== "SCHEDULED" && (
        <p className="mt-4 text-xs text-mist-700">Final score {scoreLabel(match.homeScore, match.awayScore)}</p>
      )}
    </Link>
  );
}
