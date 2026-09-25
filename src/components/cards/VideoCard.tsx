import Link from "next/link";
import type { HighlightVideo } from "@/lib/types";
import { relativeTime } from "@/lib/utils";

export default function VideoCard({ video }: { video: HighlightVideo }) {
  const href = video.matchSlug ? `/matches/${video.matchSlug}` : "/highlights";

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-pitch-700 bg-pitch-900 transition-colors hover:border-pitch-600"
    >
      <div className="relative flex aspect-video items-center justify-center bg-pitch-800 text-mist-700">
        <span className="text-xs">{video.durationLabel}</span>
        <span className="absolute bottom-2 right-2 rounded bg-pitch-950/80 px-1.5 py-0.5 text-[10px] text-mist-300">
          {video.durationLabel}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-mist-100 group-hover:text-floodlight-400">{video.title}</h3>
        <p className="mt-1 text-xs text-mist-500">
          {video.channel} · {relativeTime(video.publishedAt)}
        </p>
      </div>
    </Link>
  );
}
