import Link from "next/link";
import type { Player } from "@/lib/types";

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <Link
      href={`/players/${player.slug}`}
      className="flex items-center gap-4 rounded-lg border border-pitch-700 bg-pitch-900 p-4 transition-colors hover:border-pitch-600"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pitch-700 text-sm font-semibold text-mist-100">
        {player.name.split(" ").map((n) => n[0]).join("")}
      </span>
      <div>
        <p className="text-sm font-medium text-mist-100">{player.name}</p>
        <p className="text-xs text-mist-500">{player.position}</p>
      </div>
    </Link>
  );
}
