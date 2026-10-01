import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search"
};

export default async function SearchPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q ?? "";

  return (
    <div className="container-edit py-12">
      <h1 className="text-3xl font-bold text-mist-100">Search</h1>
      <form action="/search" className="mt-6 flex max-w-md gap-2">
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search matches, teams, players, analysis…"
          className="w-full rounded-md border border-pitch-700 bg-pitch-900 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-700 focus:border-floodlight-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-md bg-floodlight-500 px-5 py-3 text-sm font-semibold text-pitch-950 hover:bg-floodlight-400"
        >
          Search
        </button>
      </form>

      <p className="mt-10 max-w-prose text-mist-500">
        {query
          ? `No results for "${query}" yet — search runs against mock data until the database and search index are connected.`
          : "Search matches, teams, players and analysis once you start typing."}
      </p>
    </div>
  );
}
