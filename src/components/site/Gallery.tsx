import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { asset } from "@/lib/asset";

export type GalleryImage = { src: string; alt: string };

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => ((i ?? 0) + 1) % images.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => ((i ?? 0) - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-4/3 overflow-hidden rounded-md border border-border bg-card"
          >
            <img
              src={asset(img.src)}
              alt={img.alt}
              loading="lazy"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-background/30 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 p-4"
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            aria-label="Zavřít"
            className="absolute top-4 right-4 rounded border border-border p-2 text-foreground"
            onClick={() => setIndex(null)}
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Předchozí"
            className="absolute left-2 rounded border border-border p-2 text-foreground md:left-6"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => ((i ?? 0) - 1 + images.length) % images.length);
            }}
          >
            <ChevronLeft className="size-5" />
          </button>
          <img
            src={asset(images[index]?.src ?? "")}
            alt={images[index]?.alt ?? ""}
            className="max-h-[85vh] max-w-full rounded-md object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Další"
            className="absolute right-2 rounded border border-border p-2 text-foreground md:right-6"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => ((i ?? 0) + 1) % images.length);
            }}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </>
  );
}
