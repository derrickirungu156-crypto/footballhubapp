import Link from "next/link";
import type { Analysis } from "@/lib/types";
import { relativeTime } from "@/lib/utils";

export default function AnalysisCard({ analysis }: { analysis: Analysis }) {
  return (
    <Link
      href={`/analysis/${analysis.slug}`}
      className="group block overflow-hidden rounded-lg border border-pitch-700 bg-pitch-900 transition-colors hover:border-pitch-600"
    >
      <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-pitch-800 to-pitch-700 px-4 text-center text-xs text-mist-500">
        {analysis.heroImageQuery}
      </div>
      <div className="p-5">
        <p className="text-xs text-mist-500">
          {analysis.match.homeTeam.shortName} {analysis.match.homeScore}–{analysis.match.awayScore} {analysis.match.awayTeam.shortName}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-mist-100 group-hover:text-floodlight-400">
          {analysis.headline}
        </h3>
        <p className="mt-2 text-sm text-mist-500">{analysis.dek}</p>
        <p className="mt-4 text-xs text-mist-700">{relativeTime(analysis.publishedAt)}</p>
      </div>
    </Link>
  );
}
