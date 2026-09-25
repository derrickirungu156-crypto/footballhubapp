import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-edit flex flex-col items-center py-24 text-center">
      <h1 className="text-3xl font-bold text-mist-100">Page not found</h1>
      <p className="mt-3 max-w-sm text-mist-500">
        That page doesn't exist, or it hasn't been published yet.
      </p>
      <Link href="/" className="mt-6 text-sm text-floodlight-400 hover:text-floodlight-500">
        ← Back to FootballHub
      </Link>
    </div>
  );
}
