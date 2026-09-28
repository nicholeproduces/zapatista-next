import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { DECK_FILE, PROJECT_EMAIL } from "../lookbook";

export default function DeckPage() {
  return (
    <div className="min-h-screen bg-[#0c0b0a]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.22em] text-[#c4a27a]">PITCH DECK</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Zapatista</h1>
            <p className="mt-2 max-w-2xl text-sm text-[#f4efe6]/70">
              Feature adaptation by Frank Gaydos, from the novel by P.W. Ross. The deck opens here, separate from
              the look book.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={DECK_FILE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[#f4efe6] px-4 py-2 text-sm font-semibold text-[#0c0b0a] no-underline hover:bg-white"
            >
              Open PDF
            </a>
            <a
              href={`mailto:${PROJECT_EMAIL}?subject=Zapatista%20%E2%80%94%20Pitch%20Deck`}
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-[#f4efe6] no-underline hover:bg-white/10"
            >
              Request a copy
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
          <iframe
            title="Zapatista pitch deck"
            src={DECK_FILE}
            className="h-[78vh] w-full bg-neutral-100"
          />
        </div>

        <p className="mt-4 text-xs text-[#f4efe6]/45">
          If the viewer stays blank, use Open PDF.{" "}
          <Link href="/#lookbook" className="text-[#f4efe6]/70">
            Back to the look book
          </Link>
        </p>
      </main>
    </div>
  );
}
