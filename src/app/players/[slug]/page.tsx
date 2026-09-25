import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPlayer, getTeam } from "@/lib/data";

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const player = await getPlayer(params.slug);
  if (!player) return { title: "Player not found" };
  return { title: player.name, description: `Profile and analysis for ${player.name}.` };
}

export default async function PlayerDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const player = await getPlayer(params.slug);
  if (!player) notFound();

  const team = await getTeam(player.teamSlug);

  return (
    <div className="container-edit py-12">
      <div className="flex items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-pitch-700 text-xl font-semibold text-mist-100">
          {player.name.split(" ").map((n) => n[0]).join("")}
        </span>
        <div>
          <h1 className="text-3xl font-bold text-mist-100">{player.name}</h1>
          <p className="text-mist-500">
            {player.position}
            {team && (
              <>
                {" · "}
                <Link href={`/teams/${team.slug}`} className="text-floodlight-400 hover:text-floodlight-500">
                  {team.name}
                </Link>
              </>
            )}
          </p>
        </div>
      </div>

      <section className="mt-12 rounded-lg border border-pitch-700 bg-pitch-900 p-6">
        <h2 className="text-lg font-semibold text-mist-100">Recent performances</h2>
        <p className="mt-3 text-mist-500">
          No verified performance data on file for this player yet. FootballHub only shows
          statistics confirmed by a structured data source — nothing here is estimated.
        </p>
      </section>

      <div className="mt-12">
        <Link href="/players" className="text-sm text-floodlight-400 hover:text-floodlight-500">
          ← Back to all players
        </Link>
      </div>
    </div>
  );
}
