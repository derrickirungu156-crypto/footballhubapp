import type { Metadata } from "next";
import { getMatches } from "@/lib/data";
import MatchCard from "@/components/cards/MatchCard";

export const metadata: Metadata = {
  title: "Matches",
  description: "Recent and upcoming matches across every competition FootballHub covers."
};

export default async function MatchesPage() {
  const matches = await getMatches();

  return (
    <div className="container-edit py-12">
      <h1 className="text-3xl font-bold text-mist-100">Matches</h1>
      <p className="mt-2 max-w-prose text-mist-500">
        Every match FootballHub is tracking, most recent first.
      </p>

      {matches.length === 0 ? (
        <p className="mt-10 rounded-lg border border-pitch-700 bg-pitch-900 p-8 text-center text-mist-500">
          No matches found for this filter yet.
        </p>
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}
    </div>
  );
}
