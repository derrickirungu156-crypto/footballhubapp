import type { Metadata } from "next";
import { getHighlights } from "@/lib/data";
import VideoCard from "@/components/cards/VideoCard";

export const metadata: Metadata = {
  title: "Highlights",
  description: "Recently discovered football highlights, matched to full analysis where available."
};

export default async function HighlightsPage() {
  const highlights = await getHighlights();

  return (
    <div className="container-edit py-12">
      <h1 className="text-3xl font-bold text-mist-100">Highlights</h1>
      <p className="mt-2 max-w-prose text-mist-500">
        Surfaced from YouTube in Analyst Studio (Phase 2) and matched to FootballHub analysis
        where one exists. For now this list is seeded with sample entries.
      </p>

      {highlights.length === 0 ? (
        <p className="mt-10 rounded-lg border border-pitch-700 bg-pitch-900 p-8 text-center text-mist-500">
          No recent football videos found.
        </p>
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}
