import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAnalysis } from "@/lib/data";
import { formatKickoff, scoreLabel } from "@/lib/utils";
import type { AnalysisPoint, EvidenceKind } from "@/lib/types";

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const analysis = await getAnalysis(params.slug);
  if (!analysis) return { title: "Analysis not found" };
  return {
    title: analysis.headline,
    description: analysis.dek,
    openGraph: { title: analysis.headline, description: analysis.dek, type: "article" }
  };
}

const EVIDENCE_LABEL: Record<EvidenceKind, string> = {
  FACT: "Fact",
  OBSERVATION: "Observation",
  INFERENCE: "Inference"
};

const EVIDENCE_STYLE: Record<EvidenceKind, string> = {
  FACT: "border-l-floodlight-500",
  OBSERVATION: "border-l-mist-500",
  INFERENCE: "border-l-pitch-600"
};

function PointList({ points }: { points: AnalysisPoint[] }) {
  return (
    <ul className="space-y-3">
      {points.map((point, i) => (
        <li key={i} className={`border-l-2 pl-4 ${EVIDENCE_STYLE[point.kind]}`}>
          <span className="text-[11px] font-medium uppercase tracking-wide text-mist-700">
            {EVIDENCE_LABEL[point.kind]}
          </span>
          <p className="mt-1 text-mist-100">{point.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default async function AnalysisDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const analysis = await getAnalysis(params.slug);
  if (!analysis) notFound();

  const { match } = analysis;

  return (
    <article className="container-edit max-w-prose py-12">
      <p className="text-sm text-floodlight-400">
        {match.competition.name} ·{" "}
        <Link href={`/matches/${match.slug}`} className="hover:text-floodlight-500">
          {match.homeTeam.name} {scoreLabel(match.homeScore, match.awayScore)} {match.awayTeam.name}
        </Link>
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight text-mist-100 sm:text-4xl">
        {analysis.headline}
      </h1>
      <p className="mt-4 text-lg text-mist-300">{analysis.dek}</p>
      <p className="mt-4 text-xs text-mist-700">{formatKickoff(match.kickoffAt)}</p>

      <div className="my-10 flex aspect-video items-center justify-center rounded-lg border border-pitch-700 bg-gradient-to-br from-pitch-800 to-pitch-900 px-6 text-center text-sm text-mist-500">
        {analysis.heroImageQuery}
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-mist-100">Key moments</h2>
        <div className="mt-5">
          <PointList points={analysis.keyMoments} />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-mist-100">Tactical breakdown</h2>
        <div className="mt-5">
          <PointList points={analysis.tacticalBreakdown} />
        </div>
      </section>

      <div className="mt-12 rounded-lg border border-pitch-700 bg-pitch-900 p-5 text-xs text-mist-500">
        Fact = confirmed by structured match data. Observation = visible in footage. Inference =
        our reasoned interpretation. We label every claim so you know how confident to be in it.
      </div>

      <div className="mt-12">
        <Link href="/analysis" className="text-sm text-floodlight-400 hover:text-floodlight-500">
          ← Back to all analysis
        </Link>
      </div>
    </article>
  );
}
