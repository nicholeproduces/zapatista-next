import fs from "fs";
import path from "path";
import Link from "next/link";

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
      const files = fs
        .readdirSync(catDir)
        .filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f));
      return { cat, count: files.length };
    })
    .sort((a, b) => a.cat.localeCompare(b.cat));
}

export default function GalleryIndex() {
  const cats = getCategoriesWithCounts();

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="no-underline">
              <div className="text-sm font-semibold tracking-[0.2em]">ZAPATISTA</div>
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-900 no-underline hover:bg-neutral-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="mb-8">
          <div className="text-xs font-semibold tracking-[0.18em] text-neutral-500">GALLERY</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Image reference</h1>
          <p className="mt-3 max-w-3xl text-neutral-700">
            Categories below auto-update based on what’s inside <span className="font-mono">public/photos</span>.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map(({ cat, count }) => (
            <Link
              key={cat}
              href={`/gallery/${cat}`}
              className="rounded-2xl border border-neutral-200 p-6 no-underline hover:bg-neutral-50"
            >
              <div className="text-sm font-semibold capitalize">{cat}</div>
              <div className="mt-2 text-sm text-neutral-600">{count} images</div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-xs text-neutral-500">
          Photo Credits: Nichole Wleklinski
        </div>
      </div>
    </div>
  );
}