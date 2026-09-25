import type { Metadata } from "next";
import { getHomeFeed } from "@/lib/data";
import AnalysisCard from "@/components/cards/AnalysisCard";

export const metadata: Metadata = {
  title: "Analysis",
  description: "Full match analysis: what happened, why it happened, and what to watch again."
};

export default async function AnalysisIndexPage() {
  const { latestAnalysis } = await getHomeFeed();

  return (
    <div className="container-edit py-12">
      <h1 className="text-3xl font-bold text-mist-100">Analysis</h1>
      <p className="mt-2 max-w-prose text-mist-500">
        Not just the score — the tactics, moments and decisions behind it.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latestAnalysis.map((a) => (
          <AnalysisCard key={a.id} analysis={a} />
        ))}
      </div>
    </div>
  );
}
