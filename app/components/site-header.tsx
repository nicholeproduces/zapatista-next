import Link from "next/link";
import { PROJECT_EMAIL } from "../lookbook";

const LINKS: Array<{ href: string; label: string }> = [
  { href: "/#lookbook", label: "Lookbook" },
  { href: "/#writer", label: "Writer" },
  { href: "/#san-miguel", label: "San Miguel" },
  { href: "/gallery", label: "Gallery" },
  { href: "/deck", label: "Pitch Deck" },
  { href: "/resources", label: "Resources" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c0b0a]/92 text-[#f4efe6] backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="shrink-0 no-underline">
          <span className="text-sm font-semibold tracking-[0.22em] text-[#f4efe6]">ZAPATISTA</span>
        </Link>

        <nav className="flex items-center gap-4 overflow-x-auto text-sm">
          {LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-[#f4efe6]/75 no-underline hover:text-[#f4efe6]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`mailto:${PROJECT_EMAIL}?subject=Zapatista%20%E2%80%94%20Request%20Materials`}
          className="hidden shrink-0 rounded-full border border-white/20 px-3 py-1.5 text-sm text-[#f4efe6] no-underline hover:bg-white/10 sm:inline-flex"
        >
          Email
        </a>
      </div>
    </header>
  );
}
