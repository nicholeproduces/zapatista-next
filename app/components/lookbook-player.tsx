"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LOOKBOOK } from "../lookbook";

export function LookbookPlayer() {
  const [index, setIndex] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const slide = LOOKBOOK[index];
  const total = LOOKBOOK.length;

  const go = useCallback((next: number) => {
    setIndex((next + total) % total);
  }, [total]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      if (event.key === "ArrowRight") go(index + 1);
      if (event.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  useEffect(() => {
    const current = stripRef.current?.querySelector<HTMLButtonElement>(`[data-plate="${index}"]`);
    current?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index]);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/40"
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          startX.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (startX.current == null) return;
          const delta = event.clientX - startX.current;
          if (delta > 48) go(index - 1);
          if (delta < -48) go(index + 1);
          startX.current = null;
        }}
      >
        <div className="aspect-video w-full bg-black">
          <img
            key={slide.src}
            src={slide.src}
            alt={`${slide.kicker}: ${slide.title}`}
            className="h-full w-full object-contain"
          />
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous plate"
          className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-lg text-white backdrop-blur hover:bg-black/75 sm:flex"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next plate"
          className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-lg text-white backdrop-blur hover:bg-black/75 sm:flex"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.22em] text-[#c4a27a]">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {slide.kicker.toUpperCase()}
          </div>
          <h2 className="mt-1 text-lg font-medium tracking-tight text-[#f6f1e8] sm:text-xl">{slide.title}</h2>
        </div>
        <div className="flex shrink-0 gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-white"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-white"
          >
            Next
          </button>
        </div>
      </div>

      <div
        ref={stripRef}
        className="mt-4 flex gap-2 overflow-x-auto pb-2"
        aria-label="Look book plates"
      >
        {LOOKBOOK.map((plate, plateIndex) => {
          const active = plateIndex === index;
          return (
            <button
              key={plate.src}
              type="button"
              data-plate={plateIndex}
              onClick={() => go(plateIndex)}
              aria-label={`Plate ${plateIndex + 1}: ${plate.title}`}
              aria-current={active ? "true" : undefined}
              className={`shrink-0 overflow-hidden rounded-md border ${
                active ? "border-[#c4a27a]" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={plate.src} alt="" className="h-12 w-[5.4rem] object-cover sm:h-14 sm:w-24" />
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-white/40">Arrow keys or swipe to move through the book.</p>
    </div>
  );
}
