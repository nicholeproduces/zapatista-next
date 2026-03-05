import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-3 text-sm text-neutral-700">{children}</div>
    </div>
  );
}

function OutLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="underline decoration-neutral-300 hover:decoration-neutral-900"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="border-b border-neutral-200">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="no-underline">
              <div className="text-sm font-semibold tracking-[0.2em]">ZAPATISTA</div>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/gallery"
                className="hidden rounded-full border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-900 no-underline hover:bg-neutral-50 sm:inline-flex"
              >
                Gallery
              </Link>
              <Link
                href="/#contact"
                className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-900 no-underline hover:bg-neutral-50"
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-12 sm:py-14">
          {/* Header */}
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-[0.18em] text-neutral-500">RESOURCES</div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight">Links & references</h1>
            <p className="mt-3 max-w-3xl text-neutral-700">
              Supporting proof, location context, and industry references — clean, scannable, easy to verify.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-4 lg:grid-cols-2">
            <Card title="San Miguel — UNESCO">
              <div className="space-y-2">
                <OutLink href="https://whc.unesco.org/en/list/1274">
                  UNESCO World Heritage listing (San Miguel de Allende)
                </OutLink>
                <div className="text-xs text-neutral-500">
                  Heritage credibility for preservation, architecture, and protected visual character.
                </div>
              </div>
            </Card>

            <Card title="San Miguel — “World’s Best City” (2025)">
              <div className="space-y-2">
                <OutLink href="https://fallinginlovewithsanmiguel.com/san-miguel-de-allende-wins-worlds-best-city-2025-again-what-actually-changes-for-locals-and-travelers/">
                  Condé Nast / “World’s Best City 2025” explainer + local impact
                </OutLink>
                <div className="text-xs text-neutral-500">
                  Useful as third-party validation for global visibility and ongoing travel/press momentum.
                </div>
              </div>
            </Card>

            <Card title="Film commissions">
              <div className="space-y-2">
                <OutLink href="https://cfilma.cultura.cdmx.gob.mx/comision/acerca-de/about-us">
                  Mexico City Film Commission (CFILMA) — About
                </OutLink>
                <div className="text-xs text-neutral-500">
                  Reference point for permits, local guidance, and production support ecosystem.
                </div>
              </div>
            </Card>

            <Card title="Industry validation — Mexico production momentum">
              <div className="space-y-3">
                <div className="space-y-1">
                  <OutLink href="https://www.msn.com/en-us/news/technology/netflix-s-mexico-push-gets-real-with-a-new-mexico-city-headquarters">
                    Netflix’s Mexico push / Mexico City headquarters (MSN)
                  </OutLink>
                  <div className="text-xs text-neutral-500">Streaming + studio infrastructure signal.</div>
                </div>

                <div className="space-y-1">
                  <OutLink href="https://www.wired.com/story/netflix-1-billion-dollars-mexico-production/">
                    Netflix $1B Mexico production (WIRED)
                  </OutLink>
                  <div className="text-xs text-neutral-500">Investment-scale proof for shooting in Mexico.</div>
                </div>
              </div>
            </Card>

            <Card title="Festival / cultural anchors">
              <div className="space-y-2">
                <OutLink href="https://sanmigueltimes.com/2025/07/giff-2025-kicks-off-in-san-miguel-de-allende/">
                  GIFF 2025 in San Miguel de Allende (coverage)
                </OutLink>
                <div className="text-xs text-neutral-500">
                  Reference for film culture, festival presence, and local arts momentum.
                </div>
              </div>
            </Card>

            <Card title="Notable locations (visual reference)">
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-neutral-900">Parroquia de San Miguel Arcángel</div>
                  <div className="text-sm text-neutral-700">
                    Iconic pink sandstone silhouette and central plaza energy — instantly legible, never generic.
                  </div>
                </div>

                <div>
                  <div className="font-medium text-neutral-900">Parque Juárez + Plaza Cívica</div>
                  <div className="text-sm text-neutral-700">
                    Green space, promenades, and community rhythm — great for daytime contrast and public-world texture.
                  </div>
                </div>

                <div>
                  <div className="font-medium text-neutral-900">Calle Insurgentes + colonial streets</div>
                  <div className="text-sm text-neutral-700">
                    Tight alleys, stone, color, and shadow — natural production value with minimal modern interference.
                  </div>
                </div>

                <div className="text-xs text-neutral-500">
                  (If you want, we can add a “what’s been shot here” list later once you drop a source link you trust.)
                </div>
              </div>
            </Card>
          </div>

          {/* Contact box */}
          <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="text-sm font-semibold">Contact</div>
            <p className="mt-2 text-sm text-neutral-700">
              For deck access, script requests, locations, and production conversations:
              <a
                className="ml-2 underline decoration-neutral-300 hover:decoration-neutral-900"
                href="mailto:savagepropsllc@gmail.com?subject=Zapatista%20—%20Request%20Materials"
              >
                savagepropsllc@gmail.com
              </a>
            </p>
          </div>

          {/* Footer credit line */}
          <div className="mt-10 text-xs text-neutral-500">
            Pitch Deck created by Frank Gaydos • Site produced by Savage Props LLC • Photo credits: Nichole Wleklinski
          </div>
        </div>
      </Container>
    </div>
  );
}