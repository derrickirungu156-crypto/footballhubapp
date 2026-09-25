import Link from "next/link";
import type { Team } from "@/lib/types";

export default function TeamCard({ team }: { team: Team }) {
  return (
    <Link
      href={`/teams/${team.slug}`}
      className="flex flex-col items-center gap-3 rounded-lg border border-pitch-700 bg-pitch-900 p-6 text-center transition-colors hover:border-pitch-600"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pitch-700 text-lg font-semibold text-mist-100">
        {team.crestInitial}
      </span>
      <span className="text-sm font-medium text-mist-100">{team.name}</span>
      {team.country && <span className="text-xs text-mist-500">{team.country}</span>}
    </Link>
  );
}
