import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/site-header";

const PHOTOS_DIR = path.join(process.cwd(), "public", "photos");

function listImages(category: string) {
  const catDir = path.join(PHOTOS_DIR, category);
  if (!fs.existsSync(catDir) || !fs.statSync(catDir).isDirectory()) return null;

  return fs
    .readdirSync(catDir)
    .filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category;
  const files = listImages(category);
  if (!files) return notFound();

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-[#1c1916]">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="mb-6">
          <div className="text-[11px] font-semibold tracking-[0.22em] text-[#8a5a32]">GALLERY</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight capitalize">{category}</h1>
          <p className="mt-2 text-sm text-[#3f3a34]">{files.length} images</p>
          <Link href="/gallery" className="mt-3 inline-block text-sm font-medium text-[#1c1916]">
            All categories
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {files.map((file) => {
            const src = `/photos/${category}/${encodeURIComponent(file)}`;
            return (
              <a key={file} href={src} target="_blank" rel="noreferrer" className="no-underline" title="Open full image">
                <div className="overflow-hidden rounded-2xl border border-[#1c1916]/10 bg-white">
                  <div className="aspect-[4/3]">
                    <img src={src} alt={`${category} photograph`} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-3 text-xs text-[#3f3a34]">{file}</div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 text-xs text-[#3f3a34]">Photo credits: Nichole Wleklinski</div>
      </div>
    </div>
  );
}
