import type { Metadata } from "next";
import { getPlayers } from "@/lib/data";
import PlayerCard from "@/components/cards/PlayerCard";

export const metadata: Metadata = {
  title: "Players",
  description: "Player profiles and performance analysis."
};

export default async function PlayersPage() {
  const players = await getPlayers();

  return (
    <div className="container-edit py-12">
      <h1 className="text-3xl font-bold text-mist-100">Players</h1>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}
