import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";

const PHOTOS_DIR = path.join(process.cwd(), "public", "photos");

function listImages(category: string) {
  const catDir = path.join(PHOTOS_DIR, category);
  if (!fs.existsSync(catDir)) return null;

  const files = fs
    .readdirSync(catDir)
    .filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  return files;
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category;
  const files = listImages(category);

  if (!files) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex h-14 items-center justify-between">
            <Link href="/gallery" className="no-underline">
              <div className="text-sm font-semibold tracking-[0.2em]">GALLERY</div>
            </Link>
            <Link
              href="/"
              className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-900 no-underline hover:bg-neutral-50"
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="mb-6">
          <div className="text-xs font-semibold tracking-[0.18em] text-neutral-500">CATEGORY</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight capitalize">{category}</h1>
          <p className="mt-2 text-sm text-neutral-700">{files.length} images</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {files.map((file) => {
            // This makes filenames like "streets (1).jpg" work (spaces/parentheses)
            const src = `/photos/${category}/${encodeURIComponent(file)}`;

            return (
              <a
                key={file}
                href={src}
                target="_blank"
                rel="noreferrer"
                className="no-underline"
                title="Open full image"
              >
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                  <div className="aspect-[4/3]">
                    <img src={src} alt={`${category} photo`} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-3 text-xs text-neutral-600">{file}</div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 text-xs text-neutral-500">
          Photo Credits: Nichole Wleklinski
        </div>
      </div>
    </div>
  );
}