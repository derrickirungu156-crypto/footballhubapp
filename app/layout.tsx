import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo"
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex"
});

export const metadata: Metadata = {
  title: {
    default: "FootballHub — See the game differently",
    template: "%s | FootballHub"
  },
  description:
    "Match analysis, tactical breakdowns and the story behind the score — for every match that matters."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${ibmPlex.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <aside className="border-b border-warn/40 bg-warn/10 px-5 py-2 text-center text-xs text-mist-300" role="status">
          <strong className="font-semibold text-floodlight-400">Sample content:</strong> match results and analysis are unverified examples, not live football data.
        </aside>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
