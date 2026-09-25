import Link from "next/link";

export default function Footer() {
  return (
    <footer className="rule mt-20">
      <div className="container-edit flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-mist-100">FootballHub</p>
          <p className="mt-1 max-w-xs text-sm text-mist-500">See the game differently.</p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-16">
          <div>
            <p className="text-sm font-medium text-mist-100">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-mist-500">
              <li><Link href="/matches" className="hover:text-mist-100">Matches</Link></li>
              <li><Link href="/teams" className="hover:text-mist-100">Teams</Link></li>
              <li><Link href="/players" className="hover:text-mist-100">Players</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-mist-100">Follow</p>
            <ul className="mt-3 space-y-2 text-sm text-mist-500">
              <li><a href="#" className="hover:text-mist-100">Instagram</a></li>
              <li><a href="#" className="hover:text-mist-100">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rule">
        <div className="container-edit py-5 text-xs text-mist-700">
          © {new Date().getFullYear()} FootballHub. Analysis and commentary; not an official league or club product.
        </div>
      </div>
    </footer>
  );
}
