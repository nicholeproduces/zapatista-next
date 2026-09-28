import fs from "fs";
import path from "path";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";

const PHOTOS_DIR = path.join(process.cwd(), "public", "photos");

function getCategoriesWithCounts() {
  if (!fs.existsSync(PHOTOS_DIR)) return [];
  const categories = fs
    .readdirSync(PHOTOS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  return categories
    .map((cat) => {
      const catDir = path.join(PHOTOS_DIR, cat);
      const files = fs.readdirSync(catDir).filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f));
      return { cat, count: files.length };
    })
    .sort((a, b) => a.cat.localeCompare(b.cat));
}

export default function GalleryIndex() {
  const cats = getCategoriesWithCounts();

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-[#1c1916]">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="mb-8">
          <div className="text-[11px] font-semibold tracking-[0.22em] text-[#8a5a32]">GALLERY</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Location stills</h1>
          <p className="mt-3 max-w-3xl text-[#3f3a34]">
            Streets, landscape, nights, food, signs, interiors, and tiendas. These are the reference photographs
            collected for San Miguel, separate from the look book.
          </p>
          <div className="mt-4">
            <Link href="/#san-miguel" className="text-sm font-medium text-[#1c1916]">
              Back to the city
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map(({ cat, count }) => (
            <Link
              key={cat}
              href={`/gallery/${cat}`}
              className="rounded-2xl border border-[#1c1916]/10 bg-white p-6 no-underline hover:bg-white/70"
            >
              <div className="text-sm font-semibold capitalize text-[#1c1916]">{cat}</div>
              <div className="mt-2 text-sm text-[#3f3a34]">{count} images</div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-xs text-[#3f3a34]">Photo credits: Nichole Wleklinski</div>
      </div>
    </div>
  );
}
