import Link from "next/link";
import MobileNav from "./MobileNav";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/matches", label: "Matches" },
  { href: "/highlights", label: "Highlights" },
  { href: "/analysis", label: "Analysis" },
  { href: "/teams", label: "Teams" },
  { href: "/players", label: "Players" },
  { href: "/news", label: "News" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-pitch-700 bg-pitch-950/90 backdrop-blur">
      <div className="container-edit flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-mist-100">
          FootballHub
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-mist-300 transition-colors hover:text-mist-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/search"
            className="hidden text-sm text-mist-300 transition-colors hover:text-mist-100 md:block"
          >
            Search
          </Link>
          <MobileNav links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
