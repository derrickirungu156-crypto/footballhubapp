import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "Football news, sourced and attributed."
};

export default function NewsPage() {
  return (
    <div className="container-edit py-12">
      <h1 className="text-3xl font-bold text-mist-100">News</h1>
      <p className="mt-4 max-w-prose rounded-lg border border-pitch-700 bg-pitch-900 p-6 text-mist-500">
        No articles published yet. News sourcing goes live once YouTube discovery and the
        Analyst Studio editorial workflow (Phase 2–3) are connected — every story here will
        carry a visible source.
      </p>
    </div>
  );
}
