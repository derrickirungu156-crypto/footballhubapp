import type { Metadata } from "next";
import { getTeams } from "@/lib/data";
import TeamCard from "@/components/cards/TeamCard";

export const metadata: Metadata = {
  title: "Teams",
  description: "Every team FootballHub covers, with results, analysis and squads."
};

export default async function TeamsPage() {
  const teams = await getTeams();

  return (
    <div className="container-edit py-12">
      <h1 className="text-3xl font-bold text-mist-100">Teams</h1>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}
