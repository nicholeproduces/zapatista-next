import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import {
  CACHINCHES_URL,
  MURALS,
  PROJECT_CONTACT_NAME,
  PROJECT_EMAIL,
} from "../lookbook";

export const metadata: Metadata = {
  title: "Filming in San Miguel de Allende",
  description:
    "San Miguel de Allende as a shoot for the feature Zapatista: a preserved colonial center, desert light, the Arroyo Las Cachinches, and airports at León, Querétaro, and Mexico City.",
  alternates: { canonical: "/san-miguel" },
  openGraph: {
    title: "Filming in San Miguel de Allende — Zapatista",
    description:
      "Why the feature Zapatista is written for San Miguel de Allende, and what the city already gives a camera.",
    url: "/san-miguel",
    images: [{ url: "/san-miguel/mural-01.jpeg", alt: "Mural along the Arroyo Las Cachinches walkway" }],
  },
};

const UNESCO_URL = "https://whc.unesco.org/en/list/1274";

const PLACES = [
  {
    title: "The colonial center",
    body: "A preserved center of stone streets, courtyards, and the Parroquia de San Miguel Arcángel. The screenplay uses that skyline. The climax is written for the church and the square beneath it.",
  },
  {
    title: "The arroyo",
    body: "Arroyo Las Cachinches is a public walk with a mural corridor of the stream’s wildlife, plants, and history. Sociedad Audubon de México and seventeen local artists made it. The photographs on this page are from that walkway.",
  },
  {
    title: "Country in the same day",
    body: "El campo, haciendas, and historical sites sit close enough to the center that a company does not have to move basecamp to change the picture.",
  },
  {
    title: "Light",
    body: "Rain-season stone, wet streets, and hard desert glare that falls into shadow in a few steps. The city is already built for contrast.",
  },
];

const STILLS = [
  { href: "/gallery/streets", src: "/photos/streets/streets%20(1).JPEG", label: "Streets" },
  { href: "/gallery/landscape", src: "/photos/landscape/landscape%20(9).JPEG", label: "Landscape" },
  { href: "/gallery/nights", src: "/photos/nights/nights%20(7).JPEG", label: "Nights" },
  { href: "/gallery/food", src: "/photos/food/food%20(1).JPEG", label: "Food" },
  { href: "/gallery/signs", src: "/photos/signs/signs%20(1).JPEG", label: "Signs" },
  { href: "/gallery/tiendas", src: "/photos/tiendas/tienda%20(1).JPEG", label: "Tiendas" },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

export default function SanMiguelPage() {
  return (
    <div className="min-h-screen bg-[#f6f3ee] text-[#1c1916]">
      <SiteHeader />
      <Container>
        <article className="py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-[#8a5a32]">
                FILMING IN SAN MIGUEL DE ALLENDE
              </div>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                The feature is written for this city
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-[#3f3a34]">
                Zapatista is a prestige crime thriller in development, adapted by Frank Gaydos from the novel by
                P.W. Ross. San Miguel de Allende is not a stand-in. The streets, the parroquia, and the ground under
                the city are part of the story.
              </p>
              <p className="mt-4 max-w-3xl text-[#3f3a34]">
                Gaydos has lived here since 2010. The production radius already includes a working community of
                artists, drivers, housing, and a supply chain, with airports at León, Querétaro, and Mexico City.
              </p>
            </div>

            <figure className="lg:col-span-5">
              <a
                href="/san-miguel/tunnels-map.jpg"
                className="block overflow-hidden rounded-2xl border border-[#1c1916]/10 bg-[#0c0b0a] no-underline"
              >
                <img
                  src="/san-miguel/tunnels-map.jpg"
                  alt="Fictional map of the tunnels under San Miguel de Allende, running from the Parroquia to the crypt, the dungeon, and the flooded cistern"
                  className="aspect-video w-full object-cover"
                />
              </a>
              <figcaption className="mt-2 text-xs text-[#3f3a34]">
                The tunnels in the script. A fictional map, not to scale. Tap to enlarge.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {PLACES.map((place) => (
              <section key={place.title} className="rounded-2xl border border-[#1c1916]/10 bg-white p-6">
                <h2 className="text-lg font-semibold">{place.title}</h2>
                <p className="mt-2 text-sm text-[#3f3a34]">{place.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-14">
            <h2 className="text-2xl font-semibold tracking-tight">What a company walks into</h2>
            <p className="mt-4 max-w-3xl text-[#3f3a34]">
              The historic center and the Sanctuary of Jesús Nazareno de Atotonilco are a UNESCO World Heritage
              site. The frame stays specific because the streets are painted and built by local hands. Below the
              center, the script follows tunnels that connect a safehouse to the church crypts. Above ground, the
              investigation moves through the same public city a visitor already recognizes.
            </p>
            <a
              href={UNESCO_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center rounded-full bg-[#1c1916] px-4 py-2 text-sm font-semibold text-[#f6f3ee] no-underline hover:bg-black"
            >
              UNESCO listing
            </a>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-semibold tracking-tight">Arroyo Las Cachinches</h2>
            <p className="mt-4 max-w-3xl text-[#3f3a34]">
              Atención published Colleen Sorenson’s account of the fourteen-year path from an unsanctioned idea to
              a permitted outdoor gallery. April Gaydos, president of Audubon de México, describes the walk as a
              place to see public art and the creek’s natural heritage together.
            </p>
            <a
              href={CACHINCHES_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-sm font-semibold text-[#1c1916] underline decoration-[#1c1916]/30"
            >
              Read the Atención story
            </a>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {MURALS.map((mural, index) => (
                <a
                  key={mural.src}
                  href={mural.src}
                  className={`block overflow-hidden rounded-2xl border border-[#1c1916]/10 no-underline ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <img src={mural.src} alt={mural.alt} className="aspect-[4/3] h-full w-full object-cover" />
                </a>
              ))}
            </div>
            <p className="mt-3 text-sm text-[#3f3a34]">
              Recent murals on the arroyo walkway. Photographs: Frank Gaydos.
            </p>
          </section>

          <section className="mt-14">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Location stills</h2>
                <p className="mt-3 max-w-2xl text-sm text-[#3f3a34]">
                  Streets, landscape, nights, food, signs, and tiendas, photographed in San Miguel de Allende.
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
                  <div className="mt-2 text-sm font-medium">{still.label}</div>
                </Link>
              ))}
            </div>
            <p className="mt-3 text-sm text-[#3f3a34]">Location stills: Nichole Wleklinski.</p>
          </section>

          <section className="mt-14 rounded-2xl border border-[#1c1916]/10 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Ask for the materials</h2>
            <p className="mt-3 max-w-2xl text-sm text-[#3f3a34]">
              The pitch deck, the script, and production conversations go to {PROJECT_CONTACT_NAME}.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${PROJECT_EMAIL}?subject=Zapatista%20%E2%80%94%20San%20Miguel`}
                className="inline-flex items-center justify-center rounded-xl bg-[#1c1916] px-5 py-3 text-sm font-semibold text-[#f6f3ee] no-underline hover:bg-black"
              >
                {PROJECT_EMAIL}
              </a>
              <Link
                href="/deck"
                className="inline-flex items-center justify-center rounded-xl border border-[#1c1916]/20 px-5 py-3 text-sm font-semibold text-[#1c1916] no-underline hover:bg-[#f6f3ee]"
              >
                Open the pitch deck
              </Link>
            </div>
          </section>
        </article>
      </Container>
    </div>
  );
}
