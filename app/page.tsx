import Link from "next/link";
import { LookbookPlayer } from "./components/lookbook-player";
import { SiteHeader } from "./components/site-header";
import {
  ARTICLE_URL,
  CACHINCHES_URL,
  IMDB_URL,
  LINKEDIN_URL,
  MURALS,
  PROJECT_EMAIL,
} from "./lookbook";

const MAILTO = `mailto:${PROJECT_EMAIL}?subject=Zapatista%20%E2%80%94%20Request%20Materials`;

const STILLS: Array<{ href: string; src: string; label: string }> = [
  { href: "/gallery/streets", src: "/photos/streets/streets%20(1).JPEG", label: "Streets" },
  { href: "/gallery/landscape", src: "/photos/landscape/landscape%20(9).JPEG", label: "Landscape" },
  { href: "/gallery/nights", src: "/photos/nights/nights%20(2).JPEG", label: "Nights" },
  { href: "/gallery/food", src: "/photos/food/food%20(1).JPEG", label: "Food" },
  { href: "/gallery/signs", src: "/photos/signs/signs%20(1).JPEG", label: "Signs" },
  { href: "/gallery/interiors", src: "/photos/interiors/interior%20(1).JPEG", label: "Interiors" },
];

const CREDITS = [
  "Zapatista — feature adaptation of the novel by P.W. Ross, in development",
  "Into the Beautiful North",
  "In the Shadow of the Angel",
  "Hotel Mañana",
  "Worst Friends Forever",
  "Road to México",
  "Black Dispatches — limited series",
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

export default function Page() {
  return (
    <div>
      <SiteHeader />

      <section id="lookbook" className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-14">
            <div className="mb-8 max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#f4efe6]/80">
                  Feature in development
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#f4efe6]/80">
                  Prestige crime thriller
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#f4efe6]/80">
                  San Miguel de Allende
                </span>
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">ZAPATISTA</h1>
              <p className="mt-4 text-lg text-[#f4efe6]/80">
                History never stays buried. A calling card for the feature: the graphic look book, the writer, and
                the city it is written to be shot in.
              </p>
              <p className="mt-3 text-sm text-[#f4efe6]/60">
                Adapted by <span className="text-[#f4efe6]">Frank Gaydos</span> from the novel by{" "}
                <span className="text-[#f4efe6]">P.W. Ross</span>.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/deck"
                  className="inline-flex items-center justify-center rounded-xl bg-[#f4efe6] px-5 py-3 text-sm font-semibold text-[#0c0b0a] no-underline hover:bg-white"
                >
                  Open pitch deck
                </Link>
                <a
                  href={MAILTO}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-[#f4efe6] no-underline hover:bg-white/10"
                >
                  Request the script
                </a>
              </div>
            </div>

            <LookbookPlayer />
          </div>
        </Container>
      </section>

      <section id="writer" className="border-b border-white/10">
        <Container>
          <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/writer/article-share.jpg"
                  alt="Frank Gaydos on a street in San Miguel de Allende"
                  className="aspect-[4/3] w-full object-cover object-[center_20%]"
                />
              </div>
              <p className="mt-3 text-xs text-[#f4efe6]/45">Photograph from the Atención San Miguel profile.</p>
            </div>

            <div className="lg:col-span-8">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-[#c4a27a]">THE WRITER</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Frank Gaydos</h2>
              <p className="mt-4 max-w-2xl text-[#f4efe6]/80">
                Frank Gaydos wrote the screenplay. He has lived in San Miguel de Allende since 2010 and has been
                writing for the screen since 2014, after a career in organizational development. Scott Simmons’s
                profile in Atención follows that reinvention, the scripts on his desk, and why this film belongs
                here.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={ARTICLE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-[#f4efe6] px-4 py-2 text-sm font-semibold text-[#0c0b0a] no-underline hover:bg-white"
                >
                  Read the Atención profile
                </a>
                <a
                  href={IMDB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-[#f4efe6] no-underline hover:bg-white/10"
                >
                  IMDb
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-[#f4efe6] no-underline hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>

              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                {CREDITS.map((credit) => (
                  <li key={credit} className="rounded-xl border border-white/10 px-4 py-3 text-sm text-[#f4efe6]/80">
                    {credit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="san-miguel" className="bg-[#f6f3ee] text-[#1c1916]">
        <Container>
          <div className="py-14 sm:py-16">
            <div className="text-[11px] font-semibold tracking-[0.22em] text-[#8a5a32]">SAN MIGUEL</div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight">
              A city that already looks like the picture
            </h2>
            <p className="mt-4 max-w-3xl text-[#3f3a34]">
              San Miguel de Allende gives a production a preserved colonial center, open country a few minutes out,
              and a working community of artists. The streets are painted and built by local hands, so the frame
              stays specific. Rain-season stone, hard desert light, and haciendas sit in the same radius as the
              airports at León, Querétaro, and Mexico City.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Range",
                  body: "Colonial core, courtyards, el campo, and historical sites without moving basecamp.",
                },
                {
                  title: "Access",
                  body: "León, Querétaro, and Mexico City, plus drivers, housing, and a real supply chain.",
                },
                {
                  title: "Light",
                  body: "Wet-down streets in the rains. Glare into shadow in a few steps. Built for contrast.",
                },
                {
                  title: "Craft",
                  body: "An arts city with artisans who already make things in public, for the public.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#1c1916]/10 bg-white p-5">
                  <div className="text-sm font-semibold">{item.title}</div>
                  <p className="mt-2 text-sm text-[#3f3a34]">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <div className="text-[11px] font-semibold tracking-[0.22em] text-[#8a5a32]">
                  LA VIDA DE LAS CACHINCHES
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  The arroyo is becoming a public gallery
                </h3>
                <p className="mt-4 text-[#3f3a34]">
                  Along Arroyo Las Cachinches, Sociedad Audubon de México and seventeen local artists opened a mural
                  corridor of the stream’s wildlife, plants, and history. Atención published Colleen Sorenson’s
                  account of the fourteen-year path from an unsanctioned idea to a permitted outdoor gallery. April
                  Gaydos, president of Audubon de México, describes it as a place to see public art and the creek’s
                  natural heritage in the same walk.
                </p>
                <a
                  href={CACHINCHES_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center rounded-full bg-[#1c1916] px-4 py-2 text-sm font-semibold text-[#f6f3ee] no-underline hover:bg-black"
                >
                  Read the Atención story
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {MURALS.map((mural, index) => (
                <a
                  key={mural.src}
                  href={mural.src}
                  target="_blank"
                  rel="noreferrer"
                  className={`block overflow-hidden rounded-2xl border border-[#1c1916]/10 no-underline ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <img src={mural.src} alt={mural.alt} className="aspect-[4/3] h-full w-full object-cover" />
                </a>
              ))}
            </div>
            <p className="mt-3 text-sm text-[#3f3a34]">
              Recent murals on the arroyo walkway. Photographs: Nichole Wleklinski.
            </p>
          </div>
        </Container>
      </section>

      <section id="gallery" className="border-b border-[#1c1916]/10 bg-[#f6f3ee] text-[#1c1916]">
        <Container>
          <div className="pb-14 sm:pb-16">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.22em] text-[#8a5a32]">LOCATION STILLS</div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">Streets, landscape, food, night</h2>
                <p className="mt-3 max-w-2xl text-sm text-[#3f3a34]">
                  The earlier location photographs are in the gallery, sorted the way they were collected: streets,
                  landscape, nights, food, signs, interiors, and tiendas.
                </p>
              </div>
              <Link
                href="/gallery"
                className="inline-flex shrink-0 items-center rounded-full border border-[#1c1916]/20 px-4 py-2 text-sm font-semibold text-[#1c1916] no-underline hover:bg-white"
              >
                Open the gallery
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {STILLS.map((still) => (
                <Link key={still.href} href={still.href} className="group no-underline">
                  <div className="overflow-hidden rounded-2xl border border-[#1c1916]/10 bg-white">
                    <img
                      src={still.src}
                      alt=""
                      className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-2 text-sm font-medium text-[#1c1916]">{still.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="contact">
        <Container>
          <div className="py-14 sm:py-16">
            <div className="text-[11px] font-semibold tracking-[0.22em] text-[#c4a27a]">CONTACT</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Ask for the materials</h2>
            <p className="mt-3 max-w-2xl text-[#f4efe6]/75">
              Script, business plan, and production conversations. The pitch deck is on its own page.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={MAILTO}
                className="inline-flex items-center justify-center rounded-xl bg-[#f4efe6] px-5 py-3 text-sm font-semibold text-[#0c0b0a] no-underline hover:bg-white"
              >
                {PROJECT_EMAIL}
              </a>
              <Link
                href="/deck"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-[#f4efe6] no-underline hover:bg-white/10"
              >
                Pitch deck
              </Link>
              <a
                href={IMDB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-[#f4efe6] no-underline hover:bg-white/10"
              >
                IMDb
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-[#f4efe6] no-underline hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-white/10">
        <Container>
          <div className="flex flex-col gap-2 py-8 text-xs text-[#f4efe6]/45 sm:flex-row sm:items-center sm:justify-between">
            <div>Look book for the feature. Site produced by Savage Props LLC.</div>
            <div>Location photographs: Nichole Wleklinski</div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
