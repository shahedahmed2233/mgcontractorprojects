import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryItem } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items =
    filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="section-pad bg-background">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Project Gallery</p>
            <h2 className="display-lg mt-5">A closer look at completed work.</h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter gallery by category"
            className="flex flex-wrap gap-2"
          >
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                onClick={() => setFilter(category)}
                className={cn(
                  "border px-4 py-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                  filter === category
                    ? "border-ink bg-ink text-ink-foreground"
                    : "border-border-strong text-muted-foreground hover:border-ink hover:text-foreground",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 80} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group relative block w-full overflow-hidden text-left"
                aria-label={`View larger image: ${item.caption}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/45"
                />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.category}
                  </span>
                  <span className="mt-1 block font-display text-lg font-bold text-ink-foreground">
                    {item.caption}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-ink-foreground/30 text-ink-foreground"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full w-full max-w-4xl">
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[78vh] w-full object-contain"
            />
            <figcaption className="pt-4 text-center font-display text-sm uppercase tracking-[0.18em] text-ink-foreground">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
