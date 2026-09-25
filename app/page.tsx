import { getHomeFeed } from "@/lib/data";
import Hero from "@/components/home/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import MatchCard from "@/components/cards/MatchCard";
import AnalysisCard from "@/components/cards/AnalysisCard";
import VideoCard from "@/components/cards/VideoCard";
import TeamCard from "@/components/cards/TeamCard";
import PlayerCard from "@/components/cards/PlayerCard";

export default async function HomePage() {
  const feed = await getHomeFeed();

  return (
    <>
      <Hero featured={feed.featured} />

      <section className="container-edit py-14">
        <SectionHeading title="Latest matches" href="/matches" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {feed.latestMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="rule border-t bg-pitch-900/40 py-14">
        <div className="container-edit">
          <SectionHeading title="Latest analysis" href="/analysis" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {feed.latestAnalysis.map((analysis) => (
              <AnalysisCard key={analysis.id} analysis={analysis} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-edit py-14">
        <SectionHeading title="Latest highlights" href="/highlights" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {feed.latestHighlights.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      <section className="rule border-t bg-pitch-900/40 py-14">
        <div className="container-edit">
          <SectionHeading title="Explore teams" href="/teams" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {feed.featuredTeams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-edit py-14">
        <SectionHeading title="Players to watch" href="/players" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {feed.featuredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>
    </>
  );
}
