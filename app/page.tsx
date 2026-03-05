import Link from "next/link";
import type { ReactNode } from "react";

// Paths to images in public/photos/landscape (exact filenames so they work on Vercel/Linux)
const LANDSCAPE = {
  cactus: "/photos/landscape/cactus.JPEG",
  landscape8: "/photos/landscape/landscape%20(8).JPEG",
  landscape9: "/photos/landscape/landscape%20(9).JPEG",
  landscape10: "/photos/landscape/landscape%20(10).JPEG",
};

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <div className="mb-3 text-xs font-semibold tracking-[0.18em] text-neutral-500">
          {eyebrow.toUpperCase()}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-neutral-700">{subtitle}</p> : null}
    </div>
  );
}

function Nav() {
  const items: Array<{ href: string; label: string }> = [
    { href: "#deck", label: "Deck" },
    { href: "#story", label: "Story" },
    { href: "#city", label: "Light & Shadow" },
    { href: "#production", label: "Production" },
    { href: "#gallery", label: "Gallery" },
    { href: "/resources", label: "Resources" },
    { href: "/gallery", label: "Image Reference" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between gap-4">
          <Link href="/" className="no-underline">
            <div className="flex items-baseline gap-2">
              <div className="text-sm font-semibold tracking-[0.2em]">ZAPATISTA</div>
              <div className="hidden text-xs text-neutral-500 sm:block">Feature Adaptation</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 md:flex">
            {items.map((it) =>
              it.href.startsWith("/") ? (
                <Link
                  key={it.href}
                  href={it.href}
                  className="text-sm text-neutral-700 no-underline hover:text-neutral-950"
                >
                  {it.label}
                </Link>
              ) : (
                <a
                  key={it.href}
                  href={it.href}
                  className="text-sm text-neutral-700 no-underline hover:text-neutral-950"
                >
                  {it.label}
                </a>
              )
            )}
          </nav>

          <a
            href="mailto:savagepropsllc@gmail.com?subject=Zapatista%20—%20Request%20Materials"
            className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-900 no-underline hover:bg-neutral-50"
          >
            Email
          </a>
        </div>
      </Container>
    </div>
  );
}

function ButtonRow() {
  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href="#deck"
        className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-neutral-800"
      >
        View Pitch Deck
      </a>
      <a
        href="mailto:savagepropsllc@gmail.com?subject=Zapatista%20—%20Request%20Materials"
        className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 no-underline hover:bg-neutral-50"
      >
        Request Materials
      </a>
      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 no-underline hover:bg-neutral-50"
      >
        Contact
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <Nav />

      {/* HERO */}
      <header className="border-b border-neutral-200">
        <Container>
          <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                <Pill>Feature Adaptation</Pill>
                <Pill>San Miguel de Allende</Pill>
                <Pill>Political Thriller</Pill>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">ZAPATISTA</h1>

              <p className="mt-4 max-w-2xl text-lg text-neutral-700">
                A brutal, politically charged thriller set in the birthplace of the Mexican Revolution—where
                radiant colonial beauty collides with ritual violence, buried history, and modern unrest.
              </p>

              <div className="mt-5 max-w-2xl text-sm text-neutral-600">
                Feature adaptation by <span className="font-medium text-neutral-900">Frank Gaydos</span>. Based
                on the novel by <span className="font-medium text-neutral-900">P.W. Ross</span>.
              </div>

              <ButtonRow />
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                <div className="aspect-[16/10] w-full">
                  <img src={LANDSCAPE.cactus} alt="San Miguel de Allende" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-sm font-semibold">Tone</div>
                  <p className="mt-1 text-sm text-neutral-700">
                    Gruesome. Edgy. Darkly thrilling—framed by the brilliant, disco-bright heritage surfaces of
                    San Miguel.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-neutral-600">
                    <div className="rounded-xl border border-neutral-200 bg-white p-3">
                      <div className="font-semibold text-neutral-900">Setting</div>
                      <div>Colonial streets → el campo → ancient sites</div>
                    </div>
                    <div className="rounded-xl border border-neutral-200 bg-white p-3">
                      <div className="font-semibold text-neutral-900">Hook</div>
                      <div>Ritual murders with revolutionary symbolism</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-neutral-500">Photo Credits: Nichole Wleklinski</p>
            </div>
          </div>
        </Container>
      </header>

      {/* DECK */}
      <section id="deck" className="bg-black text-white">
        <Container>
          <div className="py-14 sm:py-16">
            <SectionTitle
              eyebrow="Pitch Deck"
              title="Front and center"
              subtitle="Pitch deck available on request. Embed will be added once the deck is published as Google Slides."
            />

            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-8">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="aspect-[16/9] w-full">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
                      <div className="text-sm font-semibold tracking-wide text-white/90">
                        Pitch Deck (Embed Coming Soon)
                      </div>
                      <p className="max-w-md text-sm text-white/70">
                        For now, request deck access by email or view the PDF.
                      </p>

                      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <a
                          className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-white/90"
                          href="mailto:savagepropsllc@gmail.com?subject=Zapatista%20—%20Pitch%20Deck%20Request"
                        >
                          Request Pitch Deck
                        </a>

                        <a
                          className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-black/20 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-black/30"
                          href="https://drive.google.com/file/d/1LBppgqn27N-e9Re8A65owTmm3mG1MkE_/view?usp=sharing"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Pitch Deck (PDF)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-white/50">
                  Keep this section black; everything else stays white for a crisp “investor pitch” feel.
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-sm font-semibold">Project snapshot</div>

                  <div className="mt-4 space-y-3 text-sm">
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs font-semibold tracking-wide text-white/70">Format</div>
                      <div className="mt-1 font-semibold text-white/90">Feature adaptation</div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs font-semibold tracking-wide text-white/70">Setting</div>
                      <div className="mt-1 text-white/80">San Miguel de Allende, Mexico</div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs font-semibold tracking-wide text-white/70">Materials</div>
                      <div className="mt-1 text-white/80">Deck • Script • References (by request)</div>
                    </div>

                    <a
                      className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black no-underline hover:bg-white/90"
                      href="mailto:savagepropsllc@gmail.com?subject=Zapatista%20—%20Request%20Materials"
                    >
                      Request Materials
                    </a>

                    <a
                      className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm font-semibold text-white no-underline hover:bg-black/30"
                      href="/gallery"
                    >
                      Image Reference Gallery
                    </a>

                    <a
                      className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm font-semibold text-white no-underline hover:bg-black/30"
                      href="/resources"
                    >
                      Resources & Links
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* STORY */}
      <section id="story" className="border-b border-neutral-200">
        <Container>
          <div className="py-14 sm:py-16">
            <SectionTitle
              eyebrow="Story"
              title="A thriller driven by history"
              subtitle="A methodical investigation through colonial interiors, pre-Columbian echoes, and the friction of modern life—paced for tension, built for escalation."
            />

            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="space-y-5 text-neutral-800">
                  <p>
                    San Miguel de Allende—birthplace of the Mexican Revolution—glows with color, craft, and
                    high-desert light. Beneath that radiance, a ritualistic killer begins staging murders
                    designed to reopen old wounds.
                  </p>
                  <p>
                    A crucified matador. A Jesuit burned and marked. Revolutionary symbols used as signatures.
                    Retired tech millionaire Jack Alexander is pulled into the case because he knows the
                    terrain—expat and Mexican, public and hidden—and the city needs someone who can move between
                    worlds.
                  </p>
                  <p>
                    The investigation threads through cathedrals, courtyards, alleyways, and historical sites—where
                    the colonial walls that once protected the city now conceal what people don’t want seen.
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-neutral-200 p-4">
                    <div className="text-xs font-semibold tracking-wide text-neutral-500">Tone</div>
                    <div className="mt-2 text-sm font-medium">Dark, edgy, visceral</div>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 p-4">
                    <div className="text-xs font-semibold tracking-wide text-neutral-500">Contrast</div>
                    <div className="mt-2 text-sm font-medium">Brutality vs brilliance</div>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 p-4">
                    <div className="text-xs font-semibold tracking-wide text-neutral-500">World</div>
                    <div className="mt-2 text-sm font-medium">Expat + Mexican nuance</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                  <div className="aspect-[4/3] w-full">
                    <img src={LANDSCAPE.landscape8} alt="Story visual" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="mt-4 text-xs text-neutral-500">Photo Credits: Nichole Wleklinski</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CITY */}
      <section id="city" className="border-b border-neutral-200">
        <Container>
          <div className="py-14 sm:py-16">
            <SectionTitle
              eyebrow="The City"
              title="Light and shadow"
              subtitle="San Miguel’s preserved surfaces amplify the horror: hand-painted signage, artisan craft, and heritage architecture—then the cut to darkness."
            />

            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-6">
                <div className="space-y-5 text-neutral-800">
                  <p>
                    There’s virtually no modern visual noise to fight: no towering billboards, no corporate
                    saturation, no “theme-park” branding. The frame stays clean because the city stays
                    real—painted, crafted, and built by local hands.
                  </p>
                  <p>
                    Within minutes, you’re in <span className="italic">el campo</span>: open landscape, big skies,
                    volcanic ridgelines, agave fields. Not much farther—ancient sites and pre-Columbian history.
                    Range without relocating basecamp.
                  </p>
                  <p>
                    Rain season brings natural wet-down streets for noir texture. Dramatic sun shifts create hard
                    contrast—glare to shadow in a few steps. A director’s playground.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                  <div className="aspect-[4/3] w-full">
                    <img src={LANDSCAPE.landscape9} alt="City visual" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="mt-4 text-xs text-neutral-500">Photo Credits: Nichole Wleklinski</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PRODUCTION */}
      <section id="production" className="border-b border-neutral-200">
        <Container>
          <div className="py-14 sm:py-16">
            <SectionTitle
              eyebrow="Production"
              title="Practical, scalable, cinematic"
              subtitle="Preserved colonial authenticity with modern infrastructure and regional access."
            />

            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Access",
                      body: "Multiple major airports within reach (León, Querétaro, Mexico City and more), plus reliable ground transport and private drivers.",
                    },
                    {
                      title: "Infrastructure",
                      body: "Cast/crew housing options, rentals, hotels, and supply chains—Costco, Home Depot, major chains, and Amazon delivery.",
                    },
                    {
                      title: "Locations",
                      body: "Colonial core, haciendas, open campo, and historical sites—range without leaving the region.",
                    },
                    {
                      title: "Community",
                      body: "A craft-centered arts community with local artisans and a culture of collaboration for film-friendly builds and finishes.",
                    },
                  ].map((c) => (
                    <div key={c.title} className="rounded-2xl border border-neutral-200 p-5">
                      <div className="text-sm font-semibold">{c.title}</div>
                      <p className="mt-2 text-sm text-neutral-700">{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                  <div className="aspect-[4/3] w-full">
                    <img src={LANDSCAPE.landscape10} alt="Production visual" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="mt-4 text-xs text-neutral-500">Photo Credits: Nichole Wleklinski</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="border-b border-neutral-200">
        <Container>
          <div className="py-14 sm:py-16">
            <SectionTitle
              eyebrow="Gallery"
              title="Curated selects"
              subtitle="Quick scan selections. Swap image filenames later—structure stays stable."
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {["Streets", "Landscape", "Food"].map((label) => (
                <div key={label} className="overflow-hidden rounded-2xl border border-neutral-200">
                  <div className="aspect-[4/3] w-full bg-neutral-50">
                    <img src={LANDSCAPE.cactus} alt={label} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-semibold">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/gallery"
              className="mt-6 inline-block text-sm font-semibold text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900"
            >
              View full image reference gallery
            </a>

            <div className="mt-6 text-xs text-neutral-500">Photo Credits: Nichole Wleklinski</div>
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Container>
          <div className="py-14 sm:py-16">
            <SectionTitle
              eyebrow="Contact"
              title="Request materials"
              subtitle="Pitch deck access, script requests, production/location conversations."
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-neutral-800"
                href="mailto:savagepropsllc@gmail.com?subject=Zapatista%20—%20Request%20Materials"
              >
                savagepropsllc@gmail.com
              </a>

              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 no-underline hover:bg-neutral-50"
              >
                View Resources
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200">
        <Container>
          <div className="py-10 text-xs text-neutral-500">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                Pitch Deck created by Frank Gaydos • Site produced by Savage Props LLC • Photo credits: Nichole
                Wleklinski
              </div>
              <div>Contact: savagepropsllc@gmail.com</div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}